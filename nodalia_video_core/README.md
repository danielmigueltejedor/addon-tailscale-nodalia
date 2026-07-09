# Nodalia Video Core

Nodalia Video Core is a Home Assistant add-on that acts as a stable local video layer for RTSP, HomeKit and ONVIF camera streams. The first MVP focuses on stream stability, audio visibility, watchdog checks and automatic reconnection.

It is not trying to be another Frigate. First stability. Then recording. Then events. Then AI.

## What It Solves

Many cameras work well until a stream freezes, audio disappears or Home Assistant opens too many direct connections. Nodalia Video Core puts go2rtc between Home Assistant and the camera so consumers read from one local bridge instead of talking directly to the device.

## Add An RTSP Camera

In the add-on configuration UI:

```yaml
log_level: info
cameras: |
  entrada:
    name: Entrada
    source:
      type: rtsp
      url: rtsp://user:pass@192.168.1.50:8554/stream1
      transport: tcp
    audio:
      enabled: true
      expected: true
      transcode_if_needed: true
    health:
      frame_timeout: 8
      freeze_timeout: 15
      audio_timeout: 10
      reconnect_cooldown: 10
      max_reconnect_attempts: 5
    expose:
      rtsp: true
      webrtc: true
      hls: true
```

The add-on validates the configuration on startup. Critical errors stop startup with a clear log message. Starting with no cameras is allowed and logs a warning.

## Stream URLs

For a camera with id `entrada`, the internal URLs are:

```text
rtsp://127.0.0.1:8554/entrada
http://127.0.0.1:1984/stream.html?src=entrada
http://127.0.0.1:1984/api/stream.m3u8?src=entrada
```

Because the add-on uses host networking, replace `127.0.0.1` with the Home Assistant host address when consuming from another machine.

## API

The local API listens on port `8099`:

```bash
curl http://127.0.0.1:8099/
curl http://127.0.0.1:8099/health
curl http://127.0.0.1:8099/cameras
curl http://127.0.0.1:8099/cameras/entrada
curl -X POST http://127.0.0.1:8099/cameras/entrada/reconnect
curl -X POST "http://127.0.0.1:8099/cameras/entrada/reconnect?hard=true"
curl -X POST http://127.0.0.1:8099/go2rtc/reload
curl http://127.0.0.1:8099/streams
```

The root page is a lightweight dashboard with camera health, stream links and reconnect controls. When the add-on is opened from Home Assistant, the same dashboard is available through ingress.

## Camera States

- `starting`: the camera watchdog has been created and first checks are running.
- `healthy`: video is detected and expected audio is present, disabled or not required.
- `degraded`: the stream exists but frames, metadata or expected audio are missing.
- `reconnecting`: the add-on is attempting a soft or hard recovery.
- `offline`: maximum reconnect attempts were exceeded.
- `error`: go2rtc or the health check path is failing.

## Current Limitations

- It is not a complete NVR yet.
- It does not record video yet.
- It does not include AI detection.
- The Home Assistant custom integration will come later.
- The MVP focuses on stabilizing and exposing streams.
- HomeKit and ONVIF are accepted as source types, but the first practical probe path targets re-emitted RTSP streams.

## Roadmap

- Better go2rtc stream statistics ingestion.
- Camera-specific presets for Aqara and other common devices.
- Optional audio transcoding rules.
- Home Assistant custom integration.
- Event metadata.
- Recording and timeline.
- AI detection as a later layer.
