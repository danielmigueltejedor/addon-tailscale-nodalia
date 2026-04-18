# 🌐 Matter Hub (Nodalia)

![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2025.1%2B-41BDF5?logo=home-assistant)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-stable-success.svg)
![GitHub](https://img.shields.io/badge/hosted%20on-GitHub-black?logo=github)

Home Assistant app to bridge entities to Matter ecosystems.

## Notes

- Ingress is enabled.
- Data is stored in `/config/data`.
- This is a Nodalia packaging of Matter Hub.
- The image bundles the local `upstream/` source tree during build.

## Highlights in Stable 0.2.0

- Full rebase on upstream `riddix/home-assistant-matter-hub`: adds air-purifier, alarm-control-panel, dishwasher, pump, remote, select, siren, valve and water-heater device types; air-quality / PM / CO2 / TVOC / formaldehyde / ozone / NO2 / radon / electrical-energy / pressure / flow sensors; new backup, diagnostics, health, network-map, plugins, settings, labels, lock-credentials and dashboard pages.
- Advanced vacuum engine: room discovery for Dreame, Ecovacs, Roborock, Xiaomi MIOT and Valetudo (MQTT) + fan-speed / mop-intensity mode trees + pending-mode reconciliation.
- Node runtime bumped to 24; dynamic Node heap sizing (25% of cgroup/available/total memory, clamped 256–1024 MB).
- Nodalia branding preserved (logo, app icon, Spanish UI).

---

## 💰 Donations

If you like this project and want to support its development, consider making a donation:

[![PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/DanielMiguelTejedor)
