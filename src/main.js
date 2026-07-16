// styles + fonts are linked from index.html so the page renders without JS

/* ---------- hairline under nav once scrolled ---------- */
const nav = document.querySelector('.nav')
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

/* ---------- active section in nav ---------- */
const navLinks = [...document.querySelectorAll('.nav__links a')]
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      navLinks.forEach((a) =>
        a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`)
      )
    })
  },
  { rootMargin: '-45% 0px -50% 0px' }
)
navLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean)
  .forEach((s) => spy.observe(s))

/* ---------- theme toggle ---------- */
document.getElementById('themeToggle').addEventListener('click', () => {
  const next =
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch {}
})

