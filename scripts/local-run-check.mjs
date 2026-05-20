import { chromium } from 'playwright'

const url = process.env.APP_URL || 'http://127.0.0.1:8765/'
const out = new URL('../local-test-screenshot.png', import.meta.url)

const browser = await chromium.launch({
  headless: true,
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
  ],
})

const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const logs = []
page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text()}`))
page.on('pageerror', (err) => logs.push(`[pageerror] ${err.message}`))
page.on('requestfailed', (req) => {
  logs.push(`[requestfailed] ${req.url()} — ${req.failure()?.errorText}`)
})

await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(8000)

const state = await page.evaluate(() => ({
  title: document.title,
  hasXR8: Boolean(window.XR8),
  overlayHidden: document.getElementById('loading-overlay')?.classList.contains('hidden'),
  hintDisplay: document.getElementById('hint-overlay')?.style.display,
  sceneExists: Boolean(document.querySelector('a-scene')),
  canvasCount: document.querySelectorAll('canvas').length,
  videoCount: document.querySelectorAll('video').length,
}))

await page.screenshot({ path: out, fullPage: true })

console.log('URL:', url)
console.log('State:', JSON.stringify(state, null, 2))
console.log('Screenshot:', out.pathname)
console.log('--- console / errors (last 40) ---')
logs.slice(-40).forEach((line) => console.log(line))

await browser.close()
