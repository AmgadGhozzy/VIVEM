// ============================================================
// Testimonials — accessible carousel
// (auto-advance, pause on hover, buttons, dots, keyboard, swipe)
// ============================================================
import { testimonials } from '../data/testimonials.js';
import { getLang, onLangChange } from './i18n.js';
import { icon } from './icons.js';

const AUTO_MS = 6500;

function starRow(rating) {
  return Array.from({ length: 5 }, (_, i) => icon('star', '')).join('');
}

function slideMarkup(item, i) {
  const lang = getLang();
  const initials = item.name[lang].trim().charAt(0);
  return `
  <div class="testimonial-slide" role="group" aria-roledescription="slide"
       aria-label="${i + 1} / ${testimonials.length}">
    <figure class="testimonial-card">
      <div class="testimonial-stars" aria-label="${item.rating}/5">${starRow(item.rating)}</div>
      <blockquote class="testimonial-quote">${item.text[lang]}</blockquote>
      <figcaption class="testimonial-person">
        ${
          item.avatar
            ? `<img class="testimonial-avatar" src="${item.avatar}" alt="" loading="lazy">`
            : `<span class="testimonial-avatar testimonial-avatar--initials" aria-hidden="true">${initials}</span>`
        }
        <span>
          <span class="testimonial-person-name">${item.name[lang]}</span>
          <span class="testimonial-person-role">${item.role[lang]}</span>
        </span>
      </figcaption>
    </figure>
  </div>`;
}

export function initTestimonials() {
  const root = document.getElementById('testimonials');
  if (!root) return;

  const track = root.querySelector('.carousel-track');
  const prevBtn = root.querySelector('.carousel-btn--prev');
  const nextBtn = root.querySelector('.carousel-btn--next');
  const dotsWrap = root.querySelector('.carousel-dots');
  const region = root.querySelector('.carousel');

  let index = 0;
  let timer = null;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render() {
    track.innerHTML = testimonials.map(slideMarkup).join('');
    dotsWrap.innerHTML = testimonials
      .map((_, i) => `<button class="carousel-dot" type="button" aria-label="Go to testimonial ${i + 1}"></button>`)
      .join('');
    dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i));
    });
    goTo(0, true);
  }

  function goTo(i, instant = false) {
    index = (i + testimonials.length) % testimonials.length;
    // In RTL, flex slides flow right→left, so the offset sign flips.
    const sign = document.documentElement.dir === 'rtl' ? 1 : -1;
    if (instant) track.style.transition = 'none';
    track.style.transform = `translateX(${sign * index * 100}%)`;
    if (instant) requestAnimationFrame(() => (track.style.transition = ''));
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, di) => {
      d.classList.toggle('is-active', di === index);
      d.setAttribute('aria-current', di === index ? 'true' : 'false');
    });
    restart();
  }

  function restart() {
    if (reduceMotion) return;
    clearInterval(timer);
    timer = setInterval(() => goTo(index + 1), AUTO_MS);
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  region.addEventListener('mouseenter', () => clearInterval(timer));
  region.addEventListener('mouseleave', restart);
  region.addEventListener('focusin', () => clearInterval(timer));
  region.addEventListener('focusout', restart);

  region.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(index - 1);
    if (e.key === 'ArrowRight') goTo(index + 1);
  });

  // touch swipe
  let startX = null;
  region.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
  region.addEventListener(
    'touchend',
    (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 48) goTo(dx < 0 ? index + 1 : index - 1);
      startX = null;
    },
    { passive: true }
  );

  render();
  onLangChange(render);
}
