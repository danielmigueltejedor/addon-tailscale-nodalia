# Changelog

## 0.2.0 - 2026-07-09

### Added

- Add a lightweight dashboard served by the add-on API.
- Enable Home Assistant ingress for opening the dashboard from the add-on page.
- Add reconnect controls and stream links to the dashboard.

## 0.1.1 - 2026-07-09

### Fixed

- Keep the configured RTSP source URL unchanged when generating go2rtc config.
- Report failed video probes separately from missing expected audio.

## 0.1.0-alpha.1 - 2026-07-09

### Added

- Initial MVP of Nodalia Video Core.
- Automatic go2rtc configuration generation from add-on cameras.
- FastAPI local health API.
- Per-camera watchdog using ffprobe against the re-emitted RTSP stream.
- Soft and hard reconnect paths with cooldown and attempt limits.
- Audio health reporting for expected, missing, disabled and not expected audio.
