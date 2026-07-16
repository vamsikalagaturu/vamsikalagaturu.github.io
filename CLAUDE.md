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
  `index.html` (never imported through `main.js`, which is what forces this). Content is
  static HTML. JS only adds three progressive enhancements: the nav hairline on scroll,
  the active-section highlight, and the theme toggle.
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
