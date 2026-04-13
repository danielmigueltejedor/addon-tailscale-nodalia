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

## Highlights in Stable 0.1.2

- Robotic vacuum room cleaning through Matter `ServiceArea` (Apple Home compatible).
- Improved Roborock operational state mapping for washing/emptying/drying-related flows.
- Vacuum identify command integration (`vacuum.locate`) for "play location sound".
- Enhanced bridged identity handling (manufacturer/model/serial/firmware) with optional manual overrides.
- Spanish UI improvements and cleaner bridge configuration editor UX.

---

## 💰 Donations

If you like this project and want to support its development, consider making a donation:

[![PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/DanielMiguelTejedor)
