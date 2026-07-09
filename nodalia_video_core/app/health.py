from __future__ import annotations

from datetime import datetime, timezone
from typing import Any

from .models import AudioStatus, CameraConfig, CameraHealth, CameraState, ProbeResult


def build_urls(camera_id: str, camera: CameraConfig) -> dict[str, str]:
    urls: dict[str, str] = {}
    if camera.expose.rtsp:
        urls["rtsp"] = f"rtsp://127.0.0.1:8554/{camera_id}"
    if camera.expose.webrtc:
        urls["webrtc"] = f"http://127.0.0.1:1984/stream.html?src={camera_id}"
    if camera.expose.hls:
        urls["hls"] = f"http://127.0.0.1:1984/api/stream.m3u8?src={camera_id}"
    return urls


def initial_health(camera_id: str, camera: CameraConfig) -> CameraHealth:
    return CameraHealth(
        id=camera_id,
        name=camera.name or camera_id,
        state=CameraState.STARTING,
        source_type=camera.source.type,
        audio_expected=camera.audio.enabled and camera.audio.expected,
        audio_status=AudioStatus.UNKNOWN if camera.audio.enabled else AudioStatus.DISABLED,
        urls=build_urls(camera_id, camera),
    )


def apply_probe(health: CameraHealth, camera: CameraConfig, probe: ProbeResult) -> None:
    now = datetime.now(timezone.utc)
    health.video_detected = probe.video_detected
    health.video_codec = probe.video_codec
    health.fps = probe.fps
    health.bitrate = probe.bitrate
    health.audio_detected = probe.audio_detected
    health.audio_codec = probe.audio_codec

    if probe.video_detected:
        health.last_frame_at = now

    if not camera.audio.enabled:
        health.audio_status = AudioStatus.DISABLED
    elif not camera.audio.expected:
        health.audio_status = AudioStatus.OK if probe.audio_detected else AudioStatus.NOT_EXPECTED
    elif probe.audio_detected:
        health.audio_status = AudioStatus.OK
    else:
        health.audio_status = AudioStatus.MISSING

    if probe.ok and probe.video_detected and health.audio_status in (
        AudioStatus.OK,
        AudioStatus.NOT_EXPECTED,
        AudioStatus.DISABLED,
    ):
        health.state = CameraState.HEALTHY
        health.last_error = None
    elif probe.video_detected:
        health.state = CameraState.DEGRADED
        health.last_error = "Audio missing but expected" if camera.audio.expected else probe.error
    else:
        health.state = CameraState.DEGRADED
        health.last_error = probe.error or "No video stream detected"


def extract_consumers(streams_payload: dict[str, Any], camera_id: str) -> int | None:
    stream = streams_payload.get(camera_id)
    if not isinstance(stream, dict):
        stream = streams_payload.get("streams", {}).get(camera_id) if isinstance(streams_payload.get("streams"), dict) else None
    if not isinstance(stream, dict):
        return None
    consumers = stream.get("consumers") or stream.get("tracks")
    if isinstance(consumers, list):
        return len(consumers)
    if isinstance(consumers, int):
        return consumers
    return None
