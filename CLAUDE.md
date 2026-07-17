# vamsikalagaturu.github.io

Personal site of Vamsi Kalagaturu. Static, no framework: `index.html` + `src/style.css` +
`src/main.js`, built by Vite, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

```
npm run dev       # local dev
npm run build     # -> dist/
npm run preview   # serve dist/
```

## Design

Clean and quiet is the whole brief. One column, one typeface (Inter), ink on off-white,
no accent colour. Hairline rules separate rows; no cards, shadows, gradients, glows,
marquees, or scroll animations. If a change adds decoration, it is probably wrong.

## Rules

- **No arrows or symbol unicode** (`→`, `↗`, and friends). Write "to", "ROS 1 to ROS 2".
- **Never put a plain email address anywhere** (markup, JS, meta tags). The only form used
  is the obfuscated literal `ping[at]vamsi[dot]sh`. No mailto, no reveal button, no
  clipboard copy.
- **The page must fully render with JavaScript disabled.** CSS and fonts are linked from
  each page's `<head>` (never imported through `main.js`, which is what forces this).
  Content is static HTML. JS only adds progressive enhancements: the nav hairline on
  scroll, the active-section highlight, the theme toggle, dismissing the section menu,
  the brand fade, and search.
- The nav's section menu is a `<details>` element, so it opens and closes without JS; the
  JS only adds dismiss-on-outside-click and Escape. Do not rebuild it as a JS dropdown.
- The brand fades out while a page's hero `h1` repeats it verbatim (the home page) and
  fades back in past it. It keeps its layout space, so the nav never shifts.
- **Adding a post:** copy `blog/_template.html` to `blog/<slug>.html`, keep the
  `<article class="post">` shape (`h1`, `.post__date`, `.prose` paragraphs,
  `.post__heading` subheads), then replace the "No posts yet." line in `blog/index.html`
  with a `.row` linking it (year in `.row__year`, title in an `h3 a`). Vite builds any
  `blog/*.html` on its own, except `_underscored` files, which stay unpublished templates.
  Post pages carry no instructions in their markup; this rule is the instructions.
- **Search has no build-time index and must not grow one.** Other pages are fetched once
  and parsed with `DOMParser`; posts are discovered by reading `blog/index.html`. So a
  post is searchable only if the listing links it from an `h3 a` with a root-relative
  href — the same link the listing needs anyway. Records are one per `main .row` plus one
  per `.post` article; a row links to its own internal `h3 a` if it has one, else to its
  section anchor (publications link off-site, hence the fallback).
- Search results are built with `textContent`, never `innerHTML`, so a query cannot inject
  markup. Keep it that way.
- Search and the theme toggle are hidden until `<html class="js">`; both are useless
  without JS.
- The theme toggle is hidden until JS marks `<html class="js">`; without JS the theme
  follows `prefers-color-scheme` via `html:not([data-theme])`.
- Fonts: Inter for everything, JetBrains Mono Variable (`var(--font-mono)`, ligatures on via
  `calt`) for monospace. Both self-hosted through fontsource and `@import`ed in `style.css`.
- No dependencies beyond Vite and those two fonts. Tailwind and Space Grotesk were removed
  as unused; do not reintroduce a CSS framework for a page this size.
- **Bump the footer's `Last updated <D Month YYYY>` whenever page content changes**, keeping
  the `<time datetime="YYYY-MM-DD">` attribute in sync with the visible text. It is a
  hand-written literal, not a build timestamp, so it only means something if it is edited.
- Icon libraries (Font Awesome, Lucide) were considered and rejected. The page has no icons
  beyond the theme toggle's inline sun/moon.
