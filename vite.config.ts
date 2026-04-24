import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = fileURLToPath(new URL('.', import.meta.url))
const criticalCssPath = resolve(currentDir, 'src/css/theme.css')

function inlineCriticalCss() {
  return {
    name: 'inline-critical-css',
    transformIndexHtml(html: string) {
      const criticalCss = readFileSync(criticalCssPath, 'utf8')
      const minifiedCriticalCss = criticalCss.replace(/\s+/g, ' ').trim()
      return html.replace('__CRITICAL_CSS__', minifiedCriticalCss)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCriticalCss()],
})
