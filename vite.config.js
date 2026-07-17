import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'

// Vite answers unknown paths with index.html, so /something rendered the home page
// locally while GitHub Pages serves 404.html. appType 'mpa' drops that fallback; this
// plugin then serves the real 404 page, matching production.
const pages404 = () => {
  const reply = (res, html) => {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    res.end(html)
  }
  const wantsPage = (req) =>
    req.method === 'GET' && (req.headers.accept || '').includes('text/html')

  // vite's own 404 ends the response, so this has to run first and let real files pass
  const isFile = (root, url) => {
    const path = url.split(/[?#]/)[0]
    return [join(root, path), join(root, path, 'index.html')].some((c) => {
      try {
        return statSync(c).isFile()
      } catch {
        return false
      }
    })
  }

  return {
    name: 'pages-404-fallback',
    // braces matter: middlewares.use() returns the connect app, which is itself a
    // function, and vite would mistake a returned function for a post hook
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!wantsPage(req) || isFile('.', req.url)) return next()
        reply(res, await server.transformIndexHtml(req.url, readFileSync('404.html', 'utf8')))
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!wantsPage(req) || isFile('dist', req.url)) return next()
        reply(res, readFileSync('dist/404.html', 'utf8'))
      })
    },
  }
}

// User GitHub Pages site (vamsikalagaturu.github.io) is served from the domain
// root, so the base path stays '/'.
export default defineConfig({
  base: '/',
  appType: 'mpa',
  plugins: [pages404()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // every .html in blog/ is a page, so a new post needs no config edit;
      // _underscored files are templates and never ship
      input: [
        'index.html',
        '404.html', // GitHub Pages serves this for any unknown path
        ...readdirSync('blog')
          .filter((f) => f.endsWith('.html') && !f.startsWith('_'))
          .map((f) => `blog/${f}`),
      ],
    },
  },
})
