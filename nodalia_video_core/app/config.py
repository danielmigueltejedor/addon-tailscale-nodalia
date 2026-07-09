from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Any

import yaml
from pydantic import ValidationError

from .models import AddonConfig

LOGGER = logging.getLogger("nodalia_video_core.config")

OPTIONS_PATH = Path("/data/options.json")
LOCAL_OPTIONS_PATH = Path("options.json")
YAML_CONFIG_PATHS = (
    Path("/config/nodalia_video_core.yaml"),
)


class ConfigError(RuntimeError):
    pass


def _read_raw_config() -> dict[str, Any]:
    if OPTIONS_PATH.exists():
        return json.loads(OPTIONS_PATH.read_text(encoding="utf-8"))
    if LOCAL_OPTIONS_PATH.exists():
        return json.loads(LOCAL_OPTIONS_PATH.read_text(encoding="utf-8"))
    for path in YAML_CONFIG_PATHS:
        if path.exists():
            loaded = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
            if not isinstance(loaded, dict):
                raise ConfigError(f"{path} must contain a YAML mapping")
            return loaded
    LOGGER.warning("No Home Assistant options found; starting with default empty config")
    return {}


def load_config() -> AddonConfig:
    try:
        raw = _read_raw_config()
        config = AddonConfig.model_validate(raw)
    except json.JSONDecodeError as exc:
        raise ConfigError(f"Invalid JSON in {OPTIONS_PATH}: {exc}") from exc
    except yaml.YAMLError as exc:
        raise ConfigError(f"Invalid YAML config: {exc}") from exc
    except ValidationError as exc:
        raise ConfigError(f"Invalid Nodalia Video Core configuration:\n{exc}") from exc

    if not config.cameras:
        LOGGER.warning("No cameras configured; API and go2rtc will start without streams")
    return config
