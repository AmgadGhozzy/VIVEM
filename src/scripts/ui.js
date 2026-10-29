// ============================================================
// UI misc — scroll progress bar, hero mouse parallax, year
// ============================================================

export function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  let raf = 0;
  const update = () => {
    raf = 0;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!raf) raf = requestAnimationFrame(update);
    },
    { passive: true }
  );
  update();
}

export function initHeroParallax() {
  const hero = document.getElementById('hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const chips = hero.querySelectorAll('.hero-chip');
  let raf = 0;
  hero.addEventListener('mousemove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      chips.forEach((chip) => {
        chip.style.setProperty('--px', px.toFixed(3));
        chip.style.setProperty('--py', py.toFixed(3));
      });
    });
  });
}

export function initYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

// Marquee strip: services rendered twice for a seamless loop
const MARQUEE_ITEMS = [
  { en: 'Graphic Design', ar: 'تصميم جرافيك' },
  { en: 'Web Development', ar: 'تطوير مواقع' },
  { en: 'Mobile Apps', ar: 'تطبيقات جوال' },
  { en: 'Social Media', ar: 'سوشيال ميديا' },
  { en: 'Advertising', ar: 'إعلانات' },
  { en: 'SEO & Data', ar: 'تحسين محركات البحث' },
];

export function initMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const half = MARQUEE_ITEMS.map(
    (item) => `<span class="marquee-item"><svg><use href="#i-spark"/></svg><span class="lang-en">${item.en}</span><span class="lang-ar">${item.ar}</span></span>`
  ).join('');
  track.innerHTML = half + half; // duplicated so -50% translate loops seamlessly
}
