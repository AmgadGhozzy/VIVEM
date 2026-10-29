// ============================================================
// Navigation — scrolled header state, mobile drawer, scrollspy
// ============================================================

export function initNav() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');

  // scrolled state (single passive listener)
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // mobile drawer
  const closeDrawer = () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-locked');
  };
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-locked', open);
  });
  links.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeDrawer();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('is-open')) closeDrawer();
  });

  // scrollspy: highlight nav link of the section in view
  const sections = [...document.querySelectorAll('main section[id]')];
  const navAnchors = new Map(
    [...links.querySelectorAll('a[href^="#"]')].map((a) => [a.getAttribute('href').slice(1), a])
  );
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const anchor = navAnchors.get(entry.target.id);
        if (!anchor) return;
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => a.classList.remove('is-active'));
          anchor.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => spy.observe(s));
}
