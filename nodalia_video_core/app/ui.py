from __future__ import annotations

from fastapi.responses import HTMLResponse


def dashboard_response() -> HTMLResponse:
    return HTMLResponse(
        """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base href="./">
  <title>Nodalia Video Core</title>
  <style>
    :root {
      color-scheme: light dark;
      --bg: #f4f6f8;
      --panel: #ffffff;
      --text: #17202a;
      --muted: #607080;
      --line: #d8dee6;
      --ok: #12805c;
      --warn: #a15c00;
      --bad: #b42318;
      --info: #1d5f99;
      --button: #17324d;
      --button-text: #ffffff;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #101820;
        --panel: #17212b;
        --text: #eef4f8;
        --muted: #a8b5c2;
        --line: #2b3a48;
        --button: #d9e9f7;
        --button-text: #102030;
      }
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.45;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 20px 24px;
      border-bottom: 1px solid var(--line);
      background: var(--panel);
    }

    h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 0;
    }

    main {
      width: min(1180px, 100%);
      margin: 0 auto;
      padding: 20px;
    }

    .summary {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 18px;
    }

    .metric, .camera, .empty, .error {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
    }

    .metric {
      padding: 14px 16px;
      min-height: 76px;
    }

    .label {
      color: var(--muted);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .04em;
    }

    .value {
      margin-top: 6px;
      font-size: 24px;
      font-weight: 700;
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    .timestamp {
      color: var(--muted);
      font-size: 13px;
    }

    button, a.button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 36px;
      padding: 0 12px;
      border: 1px solid var(--button);
      border-radius: 6px;
      background: var(--button);
      color: var(--button-text);
      font: inherit;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
    }

    button.secondary, a.button.secondary {
      background: transparent;
      color: var(--text);
      border-color: var(--line);
    }

    button:disabled {
      opacity: .6;
      cursor: wait;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 14px;
    }

    .camera {
      padding: 16px;
      min-width: 0;
    }

    .live {
      width: 100%;
      aspect-ratio: 16 / 9;
      margin-bottom: 14px;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #000;
    }

    .live iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      background: #000;
    }

    .live video {
      display: block;
      width: 100%;
      height: 100%;
      background: #000;
      object-fit: contain;
    }

    .live-fallback {
      display: none;
    }

    .snapshot-live {
      display: none;
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #000;
    }

    .live-audio {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .live-modes {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: -4px 0 14px;
    }

    .live-modes button {
      min-height: 30px;
      padding: 0 10px;
      font-size: 13px;
    }

    .camera-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }

    h2 {
      margin: 0;
      font-size: 18px;
      line-height: 1.2;
    }

    .id {
      margin-top: 4px;
      color: var(--muted);
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 12px;
      overflow-wrap: anywhere;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      min-height: 26px;
      padding: 0 9px;
      border-radius: 999px;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .03em;
    }

    .healthy { background: var(--ok); }
    .degraded, .reconnecting, .starting, .unknown { background: var(--warn); }
    .offline, .error { background: var(--bad); }

    dl {
      display: grid;
      grid-template-columns: minmax(110px, 36%) 1fr;
      gap: 8px 12px;
      margin: 0 0 14px;
    }

    dt {
      color: var(--muted);
      font-size: 13px;
    }

    dd {
      margin: 0;
      min-width: 0;
      overflow-wrap: anywhere;
      font-size: 13px;
    }

    .links, .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
    }

    .empty, .error {
      padding: 20px;
    }

    .error {
      border-color: color-mix(in srgb, var(--bad), var(--line) 45%);
      color: var(--bad);
    }

    @media (max-width: 760px) {
      header { align-items: flex-start; flex-direction: column; }
      main { padding: 14px; }
      .summary { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .toolbar { align-items: flex-start; flex-direction: column; }
    }
  </style>
</head>
<body>
  <header>
    <div>
      <h1>Nodalia Video Core</h1>
      <div class="timestamp" id="subtitle">Loading camera health...</div>
    </div>
    <button id="refresh" type="button">Refresh</button>
  </header>

  <main>
    <section class="summary" aria-label="Summary">
      <div class="metric">
        <div class="label">go2rtc</div>
        <div class="value" id="go2rtc">-</div>
      </div>
      <div class="metric">
        <div class="label">Cameras</div>
        <div class="value" id="camera-count">-</div>
      </div>
      <div class="metric">
        <div class="label">Unhealthy</div>
        <div class="value" id="unhealthy-count">-</div>
      </div>
      <div class="metric">
        <div class="label">API</div>
        <div class="value" id="api-state">-</div>
      </div>
    </section>

    <div class="toolbar">
      <div class="timestamp" id="updated">Not updated yet</div>
      <div class="actions">
        <a class="button secondary" href="./health" target="_blank" rel="noreferrer">Health JSON</a>
        <a class="button secondary" href="./streams" target="_blank" rel="noreferrer">go2rtc Streams</a>
      </div>
    </div>

    <section id="message"></section>
    <section class="grid" id="cameras" aria-label="Cameras"></section>
  </main>

  <script>
    const refreshButton = document.getElementById('refresh');
    const cameraGrid = document.getElementById('cameras');
    const message = document.getElementById('message');

    function apiUrl(path) {
      return new URL(`./${path.replace(/^\\//, '')}`, document.baseURI).toString();
    }

    function text(value, fallback = '-') {
      if (value === null || value === undefined || value === '') return fallback;
      return String(value);
    }

    function escapeHtml(value) {
      return text(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    }

    function seconds(value) {
      if (value === null || value === undefined) return '-';
      return `${Number(value).toFixed(1)}s`;
    }

    function setMetric(id, value) {
      document.getElementById(id).textContent = value;
    }

    function streamLinks(camera) {
      const urls = camera.urls || {};
      return Object.entries(urls).map(([kind, url]) => {
        const safeUrl = escapeHtml(url.replace('http://127.0.0.1:1984/', './go2rtc/'));
        return `<a class="button secondary" href="${safeUrl}" target="_blank" rel="noreferrer">${escapeHtml(kind.toUpperCase())}</a>`;
      }).join('');
    }

    function cameraCard(camera) {
      const state = text(camera.state, 'unknown');
      const cameraId = escapeHtml(camera.id);
      const streamId = encodeURIComponent(camera.id);
      const hlsVideoSrc = `./go2rtc/api/stream.m3u8?src=${streamId}`;
      const hlsAvSrc = `./go2rtc/api/stream.m3u8?src=${streamId}&mp4`;
      const playerSrc = `./go2rtc/stream.html?src=${streamId}&mode=hls,mjpeg,webrtc,mse`;
      const snapshotSrc = `./go2rtc/api/frame.jpeg?src=${streamId}`;
      return `<article class="camera">
        <div class="live">
          <video class="native-live" data-camera="${cameraId}" data-hls-video="${hlsVideoSrc}" data-hls-av="${hlsAvSrc}" data-player="${playerSrc}" data-snapshot="${snapshotSrc}" controls autoplay muted playsinline preload="auto" src="${hlsVideoSrc}"></video>
          <video class="live-audio" data-camera="${cameraId}" playsinline preload="none"></video>
          <iframe class="live-fallback" title="${escapeHtml(camera.name)} live" allow="autoplay; fullscreen; microphone"></iframe>
          <img class="snapshot-live" alt="${escapeHtml(camera.name)} snapshot">
        </div>
        <div class="live-modes" data-camera="${cameraId}">
          <button class="secondary" type="button" data-live-mode="hls-video" data-camera="${cameraId}">HLS video</button>
          <button class="secondary" type="button" data-live-audio="toggle" data-camera="${cameraId}">Audio ON</button>
          <button class="secondary" type="button" data-live-mode="hls-av" data-camera="${cameraId}">HLS audio</button>
          <button class="secondary" type="button" data-live-mode="player" data-camera="${cameraId}">go2rtc</button>
          <button class="secondary" type="button" data-live-mode="snapshot" data-camera="${cameraId}">Snapshot</button>
        </div>
        <div class="camera-head">
          <div>
            <h2>${escapeHtml(camera.name)}</h2>
            <div class="id">${cameraId}</div>
          </div>
          <span class="badge ${escapeHtml(state)}">${escapeHtml(state)}</span>
        </div>
        <dl>
          <dt>Video</dt>
          <dd>${camera.video_detected ? 'yes' : 'no'} ${escapeHtml(camera.video_codec || '')} ${camera.fps ? `${camera.fps} fps` : ''}</dd>
          <dt>Audio</dt>
          <dd>${escapeHtml(camera.audio_status)} ${camera.audio_detected ? `(${escapeHtml(camera.audio_codec)})` : ''}</dd>
          <dt>Last frame age</dt>
          <dd>${seconds(camera.last_frame_age)}</dd>
          <dt>Consumers</dt>
          <dd>${escapeHtml(camera.consumers)}</dd>
          <dt>Reconnects</dt>
          <dd>${escapeHtml(text(camera.reconnect_count, '0'))}</dd>
          <dt>Last error</dt>
          <dd>${escapeHtml(text(camera.last_error, 'none'))}</dd>
        </dl>
        <div class="links">${streamLinks(camera)}</div>
        <div class="actions">
          <button type="button" data-action="soft" data-camera="${cameraId}">Reconnect</button>
          <button class="secondary" type="button" data-action="hard" data-camera="${cameraId}">Restart go2rtc</button>
        </div>
      </article>`;
    }

    async function reconnect(cameraId, hard) {
      refreshButton.disabled = true;
      await fetch(apiUrl(`cameras/${encodeURIComponent(cameraId)}/reconnect?hard=${hard ? 'true' : 'false'}`), {
        method: 'POST',
      });
      await load();
    }

    function armLiveFallbacks() {
      document.querySelectorAll('video.native-live').forEach(video => {
        if (video.dataset.fallbackArmed === 'true') return;
        video.dataset.fallbackArmed = 'true';
        const showFallback = () => {
          if (video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0) return;
          switchLiveMode(video.dataset.camera, 'snapshot');
        };
        video.addEventListener('error', showFallback, { once: true });
        setTimeout(showFallback, 8000);
        video.addEventListener('loadedmetadata', () => {
          setTimeout(showFallback, 2500);
        }, { once: true });
        video.play().catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      });
    }

    function refreshSnapshot(img) {
      if (img.dataset.timer) {
        clearInterval(Number(img.dataset.timer));
      }
      const base = img.dataset.base;
      const update = () => {
        img.src = `${base}${base.includes('?') ? '&' : '?'}t=${Date.now()}`;
      };
      update();
      img.dataset.timer = String(setInterval(update, 1200));
    }

    function stopSnapshot(img) {
      if (img.dataset.timer) {
        clearInterval(Number(img.dataset.timer));
        delete img.dataset.timer;
      }
    }

    function switchLiveMode(cameraId, mode) {
      const video = document.querySelector(`video.native-live[data-camera="${CSS.escape(cameraId)}"]`);
      if (!video) return;
      const live = video.parentElement;
      const fallback = live.querySelector('iframe.live-fallback');
      const snapshot = live.querySelector('img.snapshot-live');
      stopSnapshot(snapshot);
      video.pause();
      video.style.display = 'none';
      fallback.style.display = 'none';
      snapshot.style.display = 'none';

      if (mode === 'player') {
        fallback.src = video.dataset.player;
        fallback.style.display = 'block';
        return;
      }
      if (mode === 'snapshot') {
        snapshot.dataset.base = video.dataset.snapshot;
        snapshot.style.display = 'block';
        refreshSnapshot(snapshot);
        return;
      }

      fallback.removeAttribute('src');
      const nextSrc = mode === 'hls-av' ? video.dataset.hlsAv : video.dataset.hlsVideo;
      if (video.getAttribute('src') !== nextSrc) {
        video.setAttribute('src', nextSrc);
        video.load();
      }
      video.style.display = 'block';
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }

    function toggleLiveAudio(cameraId, button) {
      const video = document.querySelector(`video.native-live[data-camera="${CSS.escape(cameraId)}"]`);
      if (!video) return;
      const audio = video.parentElement.querySelector(`video.live-audio[data-camera="${CSS.escape(cameraId)}"]`);
      if (!audio) return;

      if (audio.dataset.enabled === 'true') {
        audio.pause();
        audio.removeAttribute('src');
        audio.load();
        audio.dataset.enabled = 'false';
        button.textContent = 'Audio ON';
        return;
      }

      audio.src = video.dataset.hlsAv;
      audio.muted = false;
      audio.volume = 1;
      audio.dataset.enabled = 'true';
      audio.play().then(() => {
        button.textContent = 'Audio OFF';
      }).catch(() => {
        audio.dataset.enabled = 'false';
        button.textContent = 'Audio ON';
      });
    }

    async function load() {
      refreshButton.disabled = true;
      message.innerHTML = '';
      try {
        const [healthResponse, camerasResponse] = await Promise.all([
          fetch(apiUrl('health')),
          fetch(apiUrl('cameras')),
        ]);
        if (!healthResponse.ok || !camerasResponse.ok) {
          throw new Error('API request failed');
        }
        const health = await healthResponse.json();
        const cameraPayload = await camerasResponse.json();
        const cameras = cameraPayload.cameras || [];

        setMetric('go2rtc', health.go2rtc ? 'OK' : 'Down');
        setMetric('camera-count', health.camera_count ?? cameras.length);
        setMetric('unhealthy-count', health.unhealthy_count ?? '-');
        setMetric('api-state', health.ok ? 'OK' : 'Check');

        document.getElementById('updated').textContent = `Updated ${new Date().toLocaleTimeString()}`;
        document.getElementById('subtitle').textContent = cameras.length
          ? `${cameras.length} configured camera${cameras.length === 1 ? '' : 's'}`
          : 'No cameras configured';

        if (!cameras.length) {
          cameraGrid.innerHTML = '';
          message.innerHTML = '<div class="empty">No cameras configured.</div>';
          cameraGrid.dataset.signature = '';
        } else if (cameraGrid.dataset.signature !== cameras.map(camera => camera.id).join('|')) {
          cameraGrid.innerHTML = cameras.map(cameraCard).join('');
          cameraGrid.dataset.signature = cameras.map(camera => camera.id).join('|');
          armLiveFallbacks();
        }
      } catch (error) {
        message.innerHTML = `<div class="error">Unable to load status: ${escapeHtml(error.message)}</div>`;
      } finally {
        refreshButton.disabled = false;
      }
    }

    document.addEventListener('click', event => {
      const audioButton = event.target.closest('button[data-live-audio]');
      if (audioButton) {
        toggleLiveAudio(audioButton.dataset.camera, audioButton);
        return;
      }
      const modeButton = event.target.closest('button[data-live-mode]');
      if (modeButton) {
        switchLiveMode(modeButton.dataset.camera, modeButton.dataset.liveMode);
        return;
      }
      const button = event.target.closest('button[data-camera]');
      if (!button) return;
      reconnect(button.dataset.camera, button.dataset.action === 'hard');
    });

    refreshButton.addEventListener('click', load);
    load();
    setInterval(load, 10000);
  </script>
</body>
</html>"""
    )
