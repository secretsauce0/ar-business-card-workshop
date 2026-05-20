# AR Business Card Workshop: Your Session Guide

**45 minutes. You will leave with a live URL that works on any phone.**

Follow along with your instructor. This guide mirrors every step and also works as a
standalone reference to take home.

---

## What You Are Building

An AR experience at a permanent web address you own. When anyone opens your URL on a phone
and points the camera at the QR code, a 3D model appears floating on top of it. You
control which model appears. You can change it any time. No app required from viewers --
just a link.

---

## Part 1: Fork the Repo and Enable Pages (7 minutes)

### What Is a Repo?

A repo (short for repository) is a project folder on GitHub. The instructor created one with
everything you need already inside it. You are going to make your own copy -- called a fork.

### Fork the Repo

1. Open the URL your instructor shares in the chat
2. You will see the project on GitHub -- file names, a description, a README
3. Look for the **Fork** button near the top right of the page and click it
4. A setup screen appears -- leave everything as-is, make sure **Public** is selected
5. Click **Create fork**

You now have your own copy at: `https://github.com/[your-username]/ar-business-card-workshop`

> You just did something that developers do every day: took an existing open source project
> and made it your own. Your version is independent -- changes you make do not affect anyone
> else's copy.

### Enable GitHub Pages (Do This Now, Before Anything Else)

GitHub Pages is free web hosting built into GitHub. Turning it on now means your project
will be live by the time you need to test it on your phone.

1. In your fork, click **Settings** (in the tab bar near the top)
2. In the left sidebar, find and click **Pages**
3. Under **Source**, click the dropdown and select **GitHub Actions**
4. Click **Save**

Your live URL will be:
```
https://[your-username].github.io/ar-business-card-workshop
```

Write this down. Replace `[your-username]` with your actual GitHub username.

> This step must happen before you push any code. If you skip it and push first, the
> automatic publish will not run. If that happens, go to the **Actions** tab in your repo
> and click **Re-run jobs** after enabling Pages.

---

## Part 2: Open the Project in Antigravity (5 minutes)

### Clone Your Fork

Cloning downloads your fork from GitHub to your laptop so you can open and edit it.

1. Open Google Antigravity on your laptop
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. A search bar appears at the top -- type **Git: Clone** and press Enter
4. A text field appears -- paste your fork URL:
   `https://github.com/[your-username]/ar-business-card-workshop`
5. A window asks where to save it -- choose your Documents folder or Desktop
6. Wait about 30 seconds while it downloads
7. A prompt asks if you want to open the folder -- click **Open**

### Look at the Project

On the left side of Antigravity you will see a file tree -- a list of all the files in the
project. Take a moment to look at it before touching anything.

```
ar-business-card-workshop/
├── index.html          ← The whole AR experience lives here
├── models/             ← The 5 models you can choose from
├── image-targets/      ← The QR code image the camera looks for
├── external/           ← The AR engine (do not edit this folder)
└── AGENTS.md           ← The agent's guide to this project
```

Click on **index.html** to open it.

> Look at this file. It is text. Organized, structured text. This single file is the entire
> AR experience. Not a compiled program, not an app build -- a text file that your phone's
> browser reads and executes. The camera engine, the 3D rendering, the image tracking -- it
> all comes from those three script lines at the top of this file.

---

## Part 3: Meet the Agent (5 minutes)

### Open the Agent Panel

In Antigravity, look for a small icon in the left sidebar that looks like a sparkle or a
robot. Click it to open the agent chat panel on the right side of your screen.

The agent has already read this project. There is a file called `AGENTS.md` that tells it
what the project is and what each file does. There is also a file called
`WORKSHOP_AGENT_CONFIG.md` that tells the agent to guide you step by step, explain
everything it does, and not to rush ahead and do everything at once.

### Your First Prompt

Type this into the agent panel and press Enter:

```
What does this project do, and what is the one thing I need to change to pick my model?
```

Read the response carefully. The agent will tell you which file, which line, and what your
options are.

> The agent answered from inside your project files, not from a search engine. It read the
> code and gave you a specific, accurate answer. This is how you will use it for the rest
> of the session -- ask questions in plain English, read the answer, then act on it.

### Try Another Question

After reading the response, ask any follow-up question you are curious about. For example:

```
What is index.html? What does it actually do?
```
or
```
Why does the QR code trigger the 3D model? How does the camera know what to look for?
```

There are no wrong questions. The agent is here for exactly this.

---

## Part 4: Pick Your Model (5 minutes)

### Your Five Options

| Model ID | What appears |
|----------|-------------|
| `#robot-model` | A robot figure |
| `#crystal-model` | A crystal gem |
| `#satellite-model` | A satellite |
| `#trophy-model` | A trophy |
| `#plant-model` | A small plant |

### Option A: Ask the Agent to Change It

Type this in the agent panel (replace "crystal" with your choice):

```
Change the active model to the crystal. Update the gltf-model attribute on the
active-model entity in index.html. Explain what you changed and why.
```

The agent will make the change and show you exactly what it did.

### Option B: Change It Yourself

In `index.html`, find this line (use `Cmd+F` or `Ctrl+F` and search for `gltf-model`):

```html
gltf-model="#robot-model"
```

Change `#robot-model` to your chosen value. Save with `Cmd+S` (Mac) or `Ctrl+S` (Windows).

> Look at what just changed. One attribute value on one line. That single change controls
> which 3D model appears floating above the QR code. The model file itself is in the
> `models/` folder -- the attribute is just a pointer to it. Change the pointer, change the
> experience.

---

## Part 5: Push Your Change to GitHub (3 minutes)

Your change exists on your laptop. Now you need to send it to GitHub so the live URL updates.

1. Look for the **Source Control** icon in the Antigravity sidebar (it looks like a branch
   or a small network diagram)
2. Click it to open the Source Control panel
3. You will see your changed file listed under "Changes"
4. Click the text box above the file list and type: `pick my model`
   (This is called a commit message -- it is a label describing what you changed)
5. Click **Commit**
6. Click **Sync Changes** or **Push**

> You just sent a labeled snapshot of your project to GitHub. GitHub is now automatically
> building and publishing your project. This takes about 4 minutes. The automated process
> that does this is called a workflow -- it is defined in a file called deploy.yml in the
> project. Every time you push a change, it runs automatically.

---

## Part 6: Test on Your Phone (8 minutes)

### Check That the Deploy Finished

In your browser, go to your GitHub Pages URL:
`https://[your-username].github.io/ar-business-card-workshop`

If the page loads (you will see a camera feed or a loading animation), the deploy finished
and you are ready.

If you see a 404 error, wait another minute and refresh.

### Open on Your Phone

**iPhone or iPad:** Open the URL in **Safari** (not Chrome)
**Android:** Open the URL in **Chrome**

1. Open your GitHub Pages URL on your phone
2. Tap **Allow** when the camera permission prompt appears
3. Hold the QR code steady in your phone's camera view
4. Show the whole QR code in frame -- not just part of it
5. Keep the QR code in good light with no shadows across it
6. Hold the phone about 10-15 inches away
7. Wait 2-3 seconds

The 3D model should appear floating on top of the QR code.

### Try the Built-In Interactions

Once the model appears:
- **Double-tap the QR code** to cycle through all 5 models
- **Pinch with two fingers** to scale the model up or down
- **Drag with two fingers** to rotate the model
- **Drag with one finger** to tilt the model

### If the Model Does Not Appear

- Move to brighter light
- Make sure the whole QR code is visible in the camera view
- Try holding the phone at a slight angle rather than directly overhead
- Confirm you are on your URL (with your GitHub username), not the instructor's

---

## Part 7: Going Further

Your project is live and permanently yours. Every time you push a change, the URL updates
in about 4 minutes.

### Change the Model

In `index.html`, change `gltf-model="#robot-model"` to any other model ID.
Commit and push. Done.

### Use Your Own 3D Model

1. Find a free `.glb` file at kenney.nl, poly.pizza, or sketchfab.com (filter CC0 license)
2. Add it to the `models/` folder
3. Ask the agent: `"Add a new model from the file mymodel.glb and make it the active model"`

### Add a Text Label

Ask the agent:
```
Add a floating white text label that says "[your name]" above the model, centered on the QR code.
```

---

## Key Terms

| Term | What it means |
|------|--------------|
| Repo | A project folder stored on GitHub |
| Fork | Your own independent copy of a GitHub repo |
| Clone | Downloading a repo from GitHub to your laptop |
| Commit | A labeled snapshot of your project at a point in time |
| Push | Sending your latest snapshot from your laptop to GitHub |
| GitHub Pages | Free web hosting built into GitHub, auto-deploys on push |
| Image target | The physical image the camera is trained to recognize |
| A-Frame | A framework for describing 3D scenes in HTML |
| `.glb` | The standard 3D model file format for web browsers |
| 8th Wall | The open source AR engine handling camera and tracking |
| Agent | The AI inside Antigravity that reads your project and takes action on request |

---

*Built on 8th Wall (open source) · A-Frame (MIT) · GitHub Pages*
*Structure from github.com/8thwall/aframe-image-targets-example*
*Methodology from github.com/Ryu2Wolf/BusinessCard*
