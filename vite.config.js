import { readdirSync } from 'node:fs'
import { defineConfig } from 'vite'

// User GitHub Pages site (vamsikalagaturu.github.io) is served from the domain
// root, so the base path stays '/'.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // every .html in blog/ is a page, so a new post needs no config edit;
      // _underscored files are templates and never ship
      input: [
        'index.html',
        ...readdirSync('blog')
          .filter((f) => f.endsWith('.html') && !f.startsWith('_'))
          .map((f) => `blog/${f}`),
      ],
    },
  },
})
