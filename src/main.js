// styles + fonts are linked from index.html so the page renders without JS

/* ---------- hairline under nav once scrolled ---------- */
const nav = document.querySelector('.nav')
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

/* ---------- brand hides while the hero shows the same name ---------- */
const brand = document.querySelector('.brand')
const hero = document.querySelector('.intro h1')
if (hero && hero.textContent.trim() === brand.textContent.trim()) {
  new IntersectionObserver(
    ([entry]) => brand.classList.toggle('is-hidden', entry.isIntersecting),
    { threshold: 0 }
  ).observe(hero)
}

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
  .filter((a) => a.getAttribute('href').startsWith('#')) // cross-page links have no section here
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean)
  .forEach((s) => spy.observe(s))

/* ---------- section menu dismisses (it opens on its own, without JS) ---------- */
const menu = document.querySelector('.menu')
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) || e.target.closest('.menu__list a')) menu.open = false
  if (!e.target.closest('.search')) document.getElementById('searchPanel').hidden = true
})
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return
  menu.open = false
  document.getElementById('searchPanel').hidden = true
})

/* ---------- search ----------
   No build-time index: other pages are fetched once and parsed with DOMParser,
   so adding a post needs nothing here. Records are one per .row, plus one for a
   whole post article. */
const search = document.querySelector('.search')
const searchInput = document.getElementById('searchInput')
const searchPanel = document.getElementById('searchPanel')
const searchResults = document.getElementById('searchResults')
const currentUrl = location.pathname
let scope = 'page'
let siteCache = null
let hits = []

const norm = (s) => s.replace(/\s+/g, ' ').trim()
const labelFor = (url, doc) =>
  url === '/' ? 'Home' : url === '/blog/' ? 'Blog' : norm(doc.title.split('—')[0])

function recordsFrom(doc, url, order) {
  const page = labelFor(url, doc)
  const out = []
  doc.querySelectorAll('main .row').forEach((row) => {
    // a post links to itself; a publication links off-site, so fall back to the section
    const own = row.querySelector('h3 a[href^="/"]')
    const section = row.closest('.section')
    out.push({
      page,
      order,
      href: own
        ? own.getAttribute('href')
        : url + (section && section.id ? `#${section.id}` : ''),
      title: norm(row.querySelector('dt, h3')?.textContent || ''),
      text: norm(row.textContent),
    })
  })
  const post = doc.querySelector('.post')
  if (post)
    out.push({
      page,
      order,
      href: url,
      title: norm(post.querySelector('h1')?.textContent || page),
      text: norm(post.textContent),
    })
  return out
}

const pageRecords = recordsFrom(document, currentUrl, 0)

const docFor = async (url) =>
  url === currentUrl
    ? document
    : new DOMParser().parseFromString(await (await fetch(url)).text(), 'text/html')

async function siteRecords() {
  if (siteCache) return siteCache
  const blog = await docFor('/blog/')
  const posts = [...blog.querySelectorAll('main .row h3 a[href^="/"]')].map((a) =>
    a.getAttribute('href')
  )
  const urls = ['/', '/blog/', ...posts]
  const docs = await Promise.all(urls.map(docFor))
  siteCache = docs.flatMap((doc, i) => recordsFrom(doc, urls[i], i))
  return siteCache
}

function match(records, q) {
  const needle = q.toLowerCase()
  return records
    .map((r) => {
      const inTitle = r.title.toLowerCase().includes(needle)
      const at = r.text.toLowerCase().indexOf(needle)
      if (!inTitle && at < 0) return null
      return { ...r, at, rank: inTitle ? 0 : 1 }
    })
    .filter(Boolean)
    .sort((a, b) => a.order - b.order || a.rank - b.rank)
    .slice(0, 8)
}

// textContent throughout: the query never becomes markup
function snippetFor(hit, qlen) {
  if (hit.at < 0) return null
  const p = document.createElement('span')
  p.className = 'search__hit-snip'
  const start = Math.max(0, hit.at - 30)
  const mark = document.createElement('mark')
  mark.textContent = hit.text.slice(hit.at, hit.at + qlen)
  p.append(
    (start ? '…' : '') + hit.text.slice(start, hit.at),
    mark,
    `${hit.text.slice(hit.at + qlen, hit.at + qlen + 60)}…`
  )
  return p
}

function render(q) {
  searchResults.textContent = ''
  if (!q) return
  if (!hits.length) {
    const empty = document.createElement('p')
    empty.className = 'search__empty'
    empty.textContent = 'No matches'
    searchResults.append(empty)
    return
  }
  let lastPage = null
  hits.forEach((hit) => {
    if (scope === 'site' && hit.page !== lastPage) {
      const group = document.createElement('p')
      group.className = 'search__group'
      group.textContent = hit.page
      searchResults.append(group)
      lastPage = hit.page
    }
    const a = document.createElement('a')
    a.className = 'search__hit'
    a.href = hit.href
    const title = document.createElement('span')
    title.className = 'search__hit-title'
    title.textContent = hit.title
    a.append(title)
    const snip = snippetFor(hit, q.length)
    if (snip) a.append(snip)
    searchResults.append(a)
  })
}

async function runSearch() {
  const q = searchInput.value.trim()
  const records = scope === 'site' ? await siteRecords() : pageRecords
  hits = q ? match(records, q) : []
  render(q)
}

const openSearch = () => (searchPanel.hidden = false)
searchInput.addEventListener('focus', openSearch)
searchInput.addEventListener('input', () => {
  openSearch()
  runSearch()
})
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && hits.length) location.href = hits[0].href
})
search.querySelectorAll('.search__scope').forEach((btn) => {
  btn.addEventListener('click', () => {
    scope = btn.dataset.scope
    search
      .querySelectorAll('.search__scope')
      .forEach((b) => b.classList.toggle('is-active', b === btn))
    searchInput.focus()
    runSearch()
  })
})

/* ---------- theme toggle ---------- */
document.getElementById('themeToggle').addEventListener('click', () => {
  const next =
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch {}
})

