from __future__ import annotations

from fastapi import FastAPI, HTTPException, Query

from .go2rtc import Go2RTCManager
from .watchdog import Watchdog


def create_app(watchdog: Watchdog, go2rtc: Go2RTCManager) -> FastAPI:
    app = FastAPI(title="Nodalia Video Core", version="0.1.0-alpha.1")

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

    return app
