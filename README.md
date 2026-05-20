# AR Business Card Workshop

Point a phone camera at the QR code — a 3D model appears floating on top of it. No app required. Your change goes live in ~4 minutes via GitHub Pages.

**Full step-by-step guide: [LEARNER_GUIDE.md](LEARNER_GUIDE.md)**

---

## Quick Start

### 1. Fork this repo
Click **Fork** (top right on GitHub) → leave defaults → **Create fork**

### 2. Enable GitHub Pages (do this before cloning)
Your fork → **Settings** → **Pages** → Source: **GitHub Actions** → **Save**

Your live URL will be:
```
https://[your-username].github.io/ar-business-card-workshop
```

### 3. Clone in Antigravity
`Ctrl+Shift+P` → **Git: Clone** → paste your fork URL → open folder

### 4. Pick your model
In `index.html`, find and change:
```html
gltf-model="#robot-model"
```
Options: `#robot-model` · `#crystal-model` · `#satellite-model` · `#trophy-model` · `#plant-model`

### 5. Push
Source Control panel → type a commit message → **Commit** → **Sync Changes**

### 6. Test on your phone
- **iPhone/iPad:** open your URL in **Safari**
- **Android:** open your URL in **Chrome**

Point the camera at the QR code. The 3D model appears.

---

## Touch Controls
| Gesture | Action |
|---------|--------|
| Double-tap | Cycle through all 5 models |
| Two-finger pinch | Scale up or down |
| Two-finger drag | Rotate |
| One-finger drag | Tilt |

---

## Project Files
| File | Purpose |
|------|---------|
| `index.html` | The complete AR experience |
| `models/` | 5 available 3D models |
| `image-targets/` | QR code target data |
| `external/` | AR engine — do not edit |
| `AGENTS.md` | Agent instructions for this project |
| `LEARNER_GUIDE.md` | Full workshop walkthrough |

---

## Credits
- 8th Wall Engine: © 2026 Niantic Spatial, Inc.
- Structure from [aframe-image-targets-example](https://github.com/8thwall/aframe-image-targets-example)
- Methodology from [Ryu2Wolf/BusinessCard](https://github.com/Ryu2Wolf/BusinessCard)
- A-Frame: MIT License
