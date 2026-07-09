from __future__ import annotations

import asyncio
import logging
import os
import signal

import uvicorn

from .api import create_app
from .config import ConfigError, load_config
from .go2rtc import Go2RTCManager
from .logging_config import setup_logging
from .watchdog import Watchdog

LOGGER = logging.getLogger("nodalia_video_core")


async def async_main() -> None:
    config = load_config()
    setup_logging(config.log_level)

    go2rtc = Go2RTCManager(config)
    watchdog = Watchdog(config, go2rtc)
    await go2rtc.start()
    await watchdog.start()

    app = create_app(watchdog, go2rtc)
    server = uvicorn.Server(
        uvicorn.Config(
            app,
            host="0.0.0.0",
            port=config.api_port,
            log_level=config.log_level,
        )
    )

    stop_event = asyncio.Event()

    def request_stop() -> None:
        stop_event.set()

    loop = asyncio.get_running_loop()
    for sig in (signal.SIGTERM, signal.SIGINT):
        loop.add_signal_handler(sig, request_stop)

    server_task = asyncio.create_task(server.serve())
    stop_task = asyncio.create_task(stop_event.wait())
    done, pending = await asyncio.wait(
        {server_task, stop_task},
        return_when=asyncio.FIRST_COMPLETED,
    )

    for task in pending:
        task.cancel()
    for task in done:
        if task is server_task:
            task.result()

    os.environ["NVC_SHUTTING_DOWN"] = "1"
    await watchdog.stop()
    await go2rtc.stop()


def main() -> None:
    try:
        asyncio.run(async_main())
    except ConfigError as exc:
        setup_logging("error")
        LOGGER.error("%s", exc)
        raise SystemExit(1) from exc


if __name__ == "__main__":
    main()
