# AGENTS.md

## What This Project Does
WebAR application. Opens on a phone, accesses the camera, detects the JPMC printed card,
and displays a 3D model anchored to it in real time. Runs in the browser — no app required.

## IMPORTANT: Read WORKSHOP_AGENT_CONFIG.md First
Before taking any action in this project, read WORKSHOP_AGENT_CONFIG.md. It defines how
the agent should behave during the workshop session — specifically, do not one-shot
solutions, explain every action, and guide rather than automate.

## Stack
- 8th Wall Engine: `external/xr/xr.js` — DO NOT MODIFY
- 8-Frame (patched A-Frame): `external/scripts/8frame-1.5.0.min.js` — DO NOT MODIFY
- xrextras: `external/xrextras/xrextras.js` — DO NOT MODIFY
- Source reference: https://github.com/8thwall/aframe-image-targets-example
- No build step: `index.html` is the complete application

## Deployment
Auto-deploys to GitHub Pages on push to main.
URL pattern: `https://[username].github.io/ar-business-card-workshop`
Deploy time: ~4 minutes.

## The Workshop Change
In `index.html`, change:
    gltf-model="#robot-model"
To reference a different model ID defined in `<a-assets>`.

## File Map
| File | Purpose |
|------|---------|
| `index.html` | Complete AR application |
| `external/xr/xr.js` | 8th Wall engine — never modify |
| `external/scripts/8frame-1.5.0.min.js` | Patched A-Frame — never modify |
| `external/xrextras/xrextras.js` | Image target + gesture components — never modify |
| `models/*.glb` | 5 available 3D models |
| `image-targets/` | Processed image target data |
| `WORKSHOP_AGENT_CONFIG.md` | Agent behavior rules for this session |
| `.nojekyll` | Prevents GitHub Pages Jekyll processing |

## Touch Interactions (Already Built)
- Double-tap: swaps to the next model in the models array
- Two-finger pinch: scales the model up and down
- Two-finger rotate: rotates the model
- One-finger drag: tilts the model's pitch

## Common Agent Tasks
- Change active model: modify `gltf-model` on `<a-entity id="active-model">`
- Change spin speed: modify `dur: 6000` in animation attribute
- Change model size: modify `scale` attribute (keep all three numbers equal)
- Add text label: `<a-text value="..." position="0 0.5 0" align="center">` inside the image target
- Change target name: update both `name=` in `xrextras-named-image-target` AND
  `targetData.name` in the script block
