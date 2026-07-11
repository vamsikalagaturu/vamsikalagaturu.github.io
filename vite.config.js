import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// User GitHub Pages site (vamsikalagaturu.github.io) is served from the domain
// root, so the base path stays '/'.
export default defineConfig({
  base: '/',
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
