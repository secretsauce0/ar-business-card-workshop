# AR Business Card Workshop

WebAR experience built on [8th Wall](https://github.com/8thwall/aframe-image-targets-example)
(open source) and A-Frame. Point a phone camera at the JPMC card — a 3D model appears.
No app required.

## Workshop Quick Start
1. Fork this repo to your GitHub account
2. Settings > Pages > Source: GitHub Actions > Save
3. Clone your fork in Google Antigravity
4. In `index.html`, change `gltf-model="#robot-model"` to your chosen model
5. Push via Antigravity's Source Control panel
6. Wait ~4 minutes, open `https://[your-username].github.io/ar-business-card-workshop`
7. Point your phone camera at the printed JPMC card

## Models
`#robot-model` · `#crystal-model` · `#satellite-model` · `#trophy-model` · `#plant-model`

## Touch Controls (on the live URL)
- Double-tap: cycle through all 5 models
- Two-finger pinch: scale up or down
- Two-finger drag: rotate
- One-finger drag: tilt

## Going Further
See `models/README-models.md` for using your own 3D models and image targets.

## Credits
- 8th Wall Engine: © 2026 Niantic Spatial, Inc.
- Structure from [aframe-image-targets-example](https://github.com/8thwall/aframe-image-targets-example)
- Methodology from [Ryu2Wolf/BusinessCard](https://github.com/Ryu2Wolf/BusinessCard)
- A-Frame: MIT License
