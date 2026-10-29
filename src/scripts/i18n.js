// ============================================================
// i18n — the ONLY source of truth is <html lang>.
// The inline <head> script sets it from localStorage before
// first paint (no flash). This module just flips it and notifies
// dynamic-content renderers. CSS hides the inactive lang spans.
// ============================================================

const STORAGE_KEY = 'vivem-lang';
const listeners = new Set();

export function getLang() {
  return document.documentElement.lang === 'ar' ? 'ar' : 'en';
}

export function onLangChange(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function setLanguage(lang) {
  const next = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.lang = next;
  document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable — language still applies for the session */
  }
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.textContent = next === 'ar' ? 'EN' : 'AR';
    toggle.setAttribute('aria-label', next === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  }
  listeners.forEach((cb) => cb(next));
}

export function initI18n() {
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    setLanguage(getLang() === 'ar' ? 'en' : 'ar');
  });
  // sync toggle label with the language the head script applied
  setLanguage(getLang());
}

export function t(obj, lang = getLang()) {
  return obj?.[lang] ?? obj?.en ?? '';
}
