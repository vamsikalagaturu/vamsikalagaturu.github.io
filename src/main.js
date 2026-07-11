// Self-hosted fonts (bundled — no runtime network dependency)
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import './style.css'

/* ---------- current year ---------- */
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()

/* ---------- sticky-nav shadow + mobile drawer ---------- */
const nav = document.getElementById('nav')
const navToggle = document.getElementById('navToggle')
const navDrawer = document.getElementById('navDrawer')

const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 12)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

const closeMenu = () => {
  nav.classList.remove('is-open')
  navToggle.setAttribute('aria-expanded', 'false')
}

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open')
  navToggle.setAttribute('aria-expanded', String(open))
})
navDrawer?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu))

/* ---------- scroll reveal ---------- */
const revealEls = document.querySelectorAll('[data-reveal]')
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in')
        io.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
)
revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`
  io.observe(el)
})

/* ---------- active section in nav ---------- */
const navLinks = [...document.querySelectorAll('.nav__links a')]
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean)

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        navLinks.forEach((a) =>
          a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`)
        )
      }
    })
  },
  { rootMargin: '-45% 0px -50% 0px' }
)
sections.forEach((s) => spy.observe(s))

/* ---------- theme toggle ---------- */
const themeToggle = document.getElementById('themeToggle')
themeToggle?.addEventListener('click', () => {
  const next =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light'
      : 'dark'
  document.documentElement.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch {}
})

/* ---------- obfuscated email (assembled at runtime, never in HTML) ---------- */
const emailBtn = document.getElementById('emailBtn')
const emailHint = document.getElementById('emailHint')
if (emailBtn) {
  // built from parts so scrapers reading the static markup find nothing
  const user = ['p', 'i', 'n', 'g'].join('')
  const domain = ['vamsi', 'sh'].join('.')
  const email = `${user}@${domain}`
  const textEl = emailBtn.querySelector('.email-text')
  let revealed = false

  emailBtn.addEventListener('click', async () => {
    if (!revealed) {
      textEl.textContent = email
      revealed = true
    }
    try {
      await navigator.clipboard.writeText(email)
      const prev = textEl.textContent
      textEl.textContent = 'Copied ✓'
      if (emailHint) emailHint.textContent = 'Copied to clipboard.'
      setTimeout(() => {
        textEl.textContent = prev
      }, 1500)
    } catch {
      // clipboard blocked — the address is now visible to copy manually
      if (emailHint) emailHint.textContent = 'Select and copy the address above.'
    }
  })
}
