import { defineConfig } from 'vite'

// User GitHub Pages site (vamsikalagaturu.github.io) is served from the domain
// root, so the base path stays '/'.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
