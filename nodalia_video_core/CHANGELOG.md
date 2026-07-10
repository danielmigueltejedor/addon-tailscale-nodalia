# Changelog

## 0.3.4 - 2026-07-10

### Fixed

- Force go2rtc restart when the local re-emitted RTSP stream returns 404.
- Allow manual reconnect/restart actions to bypass an exhausted reconnect counter.

## 0.3.3 - 2026-07-09

### Fixed

- Add an explicit Audio ON/OFF control that keeps the stable video-only HLS view and starts audio through a separate hidden player after a user gesture.

## 0.3.2 - 2026-07-09

### Fixed

- Default live playback to HLS video-only so Safari does not get stuck on audio-only fMP4 playback.
- Add live mode buttons for HLS video, HLS audio/video, go2rtc player and snapshot fallback.
- Detect loaded audio with zero video dimensions and switch to snapshot fallback automatically.

## 0.3.1 - 2026-07-09

### Fixed

- Prefer native HLS playback in the dashboard so Safari/Home Assistant can load live video without relying on MSE.
- Keep the go2rtc player as an automatic fallback if native playback does not start.

## 0.3.0 - 2026-07-09

### Added

- Embed the live go2rtc camera player directly in the dashboard.
- Proxy go2rtc web assets and WebSocket streams through the add-on API so live video works inside Home Assistant ingress.

## 0.2.2 - 2026-07-09

### Fixed

- Open the dashboard through Home Assistant ingress instead of a direct host port.
- Resolve dashboard API links relative to the ingress path.

## 0.2.1 - 2026-07-09

### Fixed

- Use a direct Home Assistant web UI link instead of ingress for broader Supervisor compatibility.

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
