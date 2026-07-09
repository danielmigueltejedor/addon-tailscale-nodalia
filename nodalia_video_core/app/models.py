from __future__ import annotations

from datetime import datetime, timezone
from enum import StrEnum
from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator


class CameraState(StrEnum):
    UNKNOWN = "unknown"
    STARTING = "starting"
    HEALTHY = "healthy"
    DEGRADED = "degraded"
    RECONNECTING = "reconnecting"
    OFFLINE = "offline"
    ERROR = "error"


class AudioStatus(StrEnum):
    UNKNOWN = "unknown"
    OK = "ok"
    MISSING = "missing"
    CODEC_UNSUPPORTED = "codec_unsupported"
    DISABLED = "disabled"
    NOT_EXPECTED = "not_expected"


class SourceConfig(BaseModel):
    type: Literal["rtsp", "homekit", "onvif"] = "rtsp"
    url: str
    transport: Literal["tcp", "udp", "auto"] = "tcp"

    @field_validator("url")
    @classmethod
    def validate_url(cls, value: str) -> str:
        if not value or "://" not in value:
            raise ValueError("source.url must be a non-empty URL")
        return value


class AudioConfig(BaseModel):
    enabled: bool = True
    expected: bool = False
    transcode_if_needed: bool = False


class HealthConfig(BaseModel):
    frame_timeout: int = Field(default=8, ge=2)
    freeze_timeout: int = Field(default=15, ge=3)
    audio_timeout: int = Field(default=10, ge=2)
    reconnect_cooldown: int = Field(default=10, ge=1)
    max_reconnect_attempts: int = Field(default=5, ge=1)
    check_interval: int = Field(default=10, ge=3)


class ExposeConfig(BaseModel):
    rtsp: bool = True
    webrtc: bool = True
    hls: bool = True


class CameraConfig(BaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str | None = None
    source: SourceConfig
    audio: AudioConfig = Field(default_factory=AudioConfig)
    health: HealthConfig = Field(default_factory=HealthConfig)
    expose: ExposeConfig = Field(default_factory=ExposeConfig)


class AddonConfig(BaseModel):
    model_config = ConfigDict(extra="forbid")

    log_level: Literal["debug", "info", "warning", "error"] = "info"
    cameras: dict[str, CameraConfig] = Field(default_factory=dict)
    api_port: int = Field(default=8099, ge=1, le=65535)
    go2rtc_api: str = "http://127.0.0.1:1984"
    rtsp_listen: str = ":8554"
    webrtc_listen: str = ":8555"

    @field_validator("cameras")
    @classmethod
    def validate_camera_ids(cls, value: dict[str, CameraConfig]) -> dict[str, CameraConfig]:
        for camera_id in value:
            if not camera_id.replace("_", "").replace("-", "").isalnum():
                raise ValueError(
                    f"camera id '{camera_id}' is invalid; use letters, numbers, '-' or '_'"
                )
        return value


class ProbeResult(BaseModel):
    ok: bool
    video_detected: bool = False
    video_codec: str | None = None
    fps: float | None = None
    bitrate: int | None = None
    audio_detected: bool = False
    audio_codec: str | None = None
    error: str | None = None


class CameraHealth(BaseModel):
    id: str
    name: str
    state: CameraState = CameraState.UNKNOWN
    source_type: str
    audio_expected: bool = False
    audio_detected: bool = False
    audio_codec: str | None = None
    audio_status: AudioStatus = AudioStatus.UNKNOWN
    video_detected: bool = False
    video_codec: str | None = None
    fps: float | None = None
    bitrate: int | None = None
    last_frame_at: datetime | None = None
    last_frame_age: float | None = None
    last_error: str | None = None
    reconnect_count: int = 0
    last_reconnect: datetime | None = None
    consumers: int | None = None
    urls: dict[str, str] = Field(default_factory=dict)

    def refresh_age(self) -> None:
        if self.last_frame_at is None:
            self.last_frame_age = None
            return
        self.last_frame_age = max(
            0.0, (datetime.now(timezone.utc) - self.last_frame_at).total_seconds()
        )

    def as_response(self) -> dict[str, Any]:
        self.refresh_age()
        return self.model_dump(mode="json")
