from __future__ import annotations

import asyncio

import httpx
import websockets
from fastapi import FastAPI, HTTPException, Query, Request, WebSocket, WebSocketDisconnect
from starlette.background import BackgroundTask
from starlette.responses import StreamingResponse

from .go2rtc import Go2RTCManager
from .ui import dashboard_response
from .watchdog import Watchdog


def create_app(watchdog: Watchdog, go2rtc: Go2RTCManager) -> FastAPI:
    app = FastAPI(title="Nodalia Video Core", version="0.3.2")

    @app.get("/")
    async def dashboard():
        return dashboard_response()

    @app.get("/health")
    async def health() -> dict:
        cameras = watchdog.list_cameras()
        unhealthy = [
            camera
            for camera in cameras
            if camera["state"] not in ("healthy", "starting", "unknown")
        ]
        return {
            "ok": len(unhealthy) == 0,
            "go2rtc": await go2rtc.is_responding(),
            "camera_count": len(cameras),
            "unhealthy_count": len(unhealthy),
        }

    @app.get("/cameras")
    async def cameras() -> dict:
        return {"cameras": watchdog.list_cameras()}

    @app.get("/cameras/{camera_id}")
    async def camera(camera_id: str) -> dict:
        item = watchdog.get_camera(camera_id)
        if item is None:
            raise HTTPException(status_code=404, detail=f"Unknown camera '{camera_id}'")
        return item.as_response()

    @app.post("/cameras/{camera_id}/reconnect")
    async def reconnect_camera(camera_id: str, hard: bool = Query(default=False)) -> dict:
        try:
            item = await watchdog.reconnect_camera(camera_id, hard=hard)
        except KeyError as exc:
            raise HTTPException(status_code=404, detail=f"Unknown camera '{camera_id}'") from exc
        return item.as_response()

    @app.post("/go2rtc/reload")
    async def reload_go2rtc() -> dict:
        await go2rtc.reload()
        return {"ok": True}

    @app.get("/streams")
    async def streams() -> dict:
        return await go2rtc.get_streams()

    @app.get("/go2rtc/{path:path}")
    async def proxy_go2rtc(path: str, request: Request) -> StreamingResponse:
        target = f"{go2rtc.config.go2rtc_api}/{path}"
        if request.url.query:
            target = f"{target}?{request.url.query}"

        client = httpx.AsyncClient(timeout=None)
        upstream_request = client.build_request("GET", target)
        response = await client.send(upstream_request, stream=True)

        async def close_upstream() -> None:
            await response.aclose()
            await client.aclose()

        headers = {
            key: value
            for key, value in response.headers.items()
            if key.lower() not in {"content-encoding", "content-length", "transfer-encoding"}
        }
        return StreamingResponse(
            response.aiter_raw(),
            status_code=response.status_code,
            headers=headers,
            background=BackgroundTask(close_upstream),
        )

    @app.websocket("/go2rtc/api/ws")
    async def proxy_go2rtc_ws(websocket: WebSocket) -> None:
        await websocket.accept()
        target = go2rtc.config.go2rtc_api.replace("http://", "ws://").replace("https://", "wss://")
        target = f"{target}/api/ws"
        if websocket.url.query:
            target = f"{target}?{websocket.url.query}"

        try:
            async with websockets.connect(target, max_size=None) as upstream:
                async def client_to_upstream() -> None:
                    while True:
                        message = await websocket.receive()
                        if message.get("text") is not None:
                            await upstream.send(message["text"])
                        elif message.get("bytes") is not None:
                            await upstream.send(message["bytes"])
                        elif message.get("type") == "websocket.disconnect":
                            await upstream.close()
                            return

                async def upstream_to_client() -> None:
                    async for message in upstream:
                        if isinstance(message, bytes):
                            await websocket.send_bytes(message)
                        else:
                            await websocket.send_text(message)

                tasks = {
                    asyncio.create_task(client_to_upstream()),
                    asyncio.create_task(upstream_to_client()),
                }
                done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
                for task in pending:
                    task.cancel()
                for task in done:
                    task.result()
        except WebSocketDisconnect:
            return

    return app
