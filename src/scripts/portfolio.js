// ============================================================
// Portfolio — renders cards from data, filter pills, lightbox
// ============================================================
import { portfolioItems, portfolioCategories } from '../data/portfolio.js';
import { getLang, onLangChange } from './i18n.js';
import { icon } from './icons.js';

let activeFilter = 'all';

function coverMarkup(item) {
  if (item.image) {
    return `<img src="${item.image}" alt="" loading="lazy" decoding="async">`;
  }
  return icon(item.icon, 'cover-glyph');
}

function cardMarkup(item, index) {
  const lang = getLang();
  const cat = portfolioCategories[item.category];
  const featured = index === 0 && activeFilter === 'all';
  return `
  <button class="portfolio-card${featured ? ' portfolio-card--featured' : ''}" type="button" data-index="${index}"
          aria-haspopup="dialog" style="--stagger:${(index % 6) * 70}ms">
    <span class="portfolio-cover portfolio-cover--${item.category}">
      ${coverMarkup(item)}
      <span class="cover-tag">${cat[lang]}</span>
      <span class="cover-index" aria-hidden="true">0${index + 1}</span>
    </span>
    <span class="portfolio-body">
      <h3>${item.title[lang]}</h3>
      <p>${item.description[lang]}</p>
    </span>
  </button>`;
}

function render() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  const items = portfolioItems
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => activeFilter === 'all' || item.category === activeFilter);
  grid.innerHTML = items.map(({ item, index }) => cardMarkup(item, index)).join('');
}

function openLightbox(index) {
  const dialog = document.getElementById('lightbox-dialog');
  if (!dialog) return;
  const lang = getLang();
  const item = portfolioItems[index];
  const cat = portfolioCategories[item.category];

  const cover = dialog.querySelector('.lightbox-cover');
  cover.className = `lightbox-cover portfolio-cover--${item.category}`;
  cover.innerHTML = coverMarkup(item);
  dialog.querySelector('.lightbox-tag').textContent = cat[lang];
  dialog.querySelector('h3').textContent = item.title[lang];
  dialog.querySelector('.lightbox-desc').textContent = item.description[lang];

  dialog.showModal();
}

export function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  render();
  onLangChange(render);

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      render();
    });
  });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (card) openLightbox(Number(card.dataset.index));
  });

  const dialog = document.getElementById('lightbox-dialog');
  dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
}
