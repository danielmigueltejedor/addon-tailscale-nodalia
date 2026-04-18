# Changelog

## 0.2.4
- Restore rich bridged-device identity extraction: firmware auto-detected from sibling `update.*` entities + any entity matching firmware/software/version; serial auto-detected from sibling serial/SN entities; manufacturer/model fall back to entity attributes (matter_vendor_name, vendor_name, manufacturer, brand, matter_product_name, product_name, model_name, model, device_model). Strips vendor prefix from product name and prefers friendly name over opaque model ids like `roborock.vacuum.a51`. UI overrides (custom vendor/product/serial) still win.

## 0.2.3
- Use `corepack prepare pnpm@10.28.1 --activate` instead of `npm install -g pnpm`. Corepack had already registered a pnpm shim, causing EEXIST.

## 0.2.2
- Fix Dockerfile ARG scope: hoist `ARG BUILD_FROM` above first `FROM` so base image resolves after multi-stage node copy.

## 0.2.1
- Fix build: inject Node 24 via multi-stage `node:24-alpine` copy. Alpine base shipped Node 22 but upstream `package.json` requires Node 24, causing `ERR_PNPM_UNSUPPORTED_ENGINE`.

## 0.2.0
- Rebased stable on upstream `riddix/home-assistant-matter-hub` main (synced from `0.3.0-beta.1`). Adds every new device type, sensor, frontend page and API in the upstream line. See the beta changelog for the full list.
- Node runtime bumped to 24; addon entrypoint gets dynamic Node heap sizing.
- Nodalia branding and package name (`nodalia-matter-hub`) preserved.

## 0.1.2
- Stable release bump to avoid downgrade from previously published `0.1.1`.
- Keeps the full upstream feature set synced from Nodalia beta line for stable channel.

## 0.1.0
- First stable release of the Nodalia Matter Hub branch based on the beta line.
- Includes vacuum `ServiceArea` selective room cleaning support for Apple Home.
- Includes improved Roborock operational-state mapping and identify support (`vacuum.locate`).
- Includes bridged identity enhancements (manufacturer/model/serial/firmware, with optional overrides).
- Includes Spanish UI improvements and refreshed branding assets.
