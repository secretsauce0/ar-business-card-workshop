# 3D Models

Five models are available. To switch which one appears on the card:

In `index.html`, find:
    gltf-model="#robot-model"

Change to: `#crystal-model` · `#satellite-model` · `#trophy-model` · `#plant-model`

Double-tap the card while in AR to cycle through all models automatically.

## Using Your Own Model
1. Add your `.glb` file to this folder
2. In `index.html` `<a-assets>`, add:
   `<a-asset-item id="model-mine" src="./models/yourfile.glb"></a-asset-item>`
3. Add it to the `models` array in the script section
4. Change `gltf-model="#robot-model"` to `gltf-model="#model-mine"`

## Using Your Own Image Target
1. Get a high-contrast image (min 480x640px)
2. Run: `npx @8thwall/image-target-cli@latest`
3. Update `name=` in `xrextras-named-image-target`
4. Update `imageTargetData[0].name` and image paths in the script block
