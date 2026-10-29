// ============================================================
// VIVEM 2.0 — entry point
// Self-hosted fonts (no CDN) + styles + feature modules
// ============================================================
// Self-hosted fonts — only the subsets this bilingual EN/AR site needs
// (latin + arabic). No CDN, no wasted cyrillic/greek/vietnamese subsets.
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/space-grotesk/latin-700.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-400.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-500.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-700.css';
import '@fontsource/ibm-plex-sans-arabic/latin-400.css';
import '../styles/main.css';

import { initI18n } from './i18n.js';
import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initCounters } from './counters.js';
import { initPortfolio } from './portfolio.js';
import { initTeam } from './team.js';
import { initTestimonials } from './testimonials.js';
import { initContactForm } from './contact-form.js';
import { initScrollProgress, initHeroParallax, initYear, initMarquee } from './ui.js';

// Google Analytics 4 — set VITE_GA_ID (e.g. G-XXXXXXXXXX) in the environment
// or .env file; the tag injects itself only when the ID exists.
const GA_ID = import.meta.env.VITE_GA_ID;
if (GA_ID) {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.append(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

initI18n();
initNav();
initReveal();
initCounters();
initPortfolio();
initTeam();
initTestimonials();
initContactForm();
initScrollProgress();
initHeroParallax();
initYear();
initMarquee();
