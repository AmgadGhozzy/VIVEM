// ============================================================
// Contact form — validation + Formspree (or mailto fallback)
// ============================================================
import { FORM_ENDPOINT, CONTACT_EMAIL } from '../data/config.js';
import { getLang } from './i18n.js';

const MESSAGES = {
  en: {
    name: 'Please enter your name (at least 2 characters).',
    email: 'Please enter a valid email address.',
    message: 'Please write a message (at least 10 characters).',
    sending: 'Sending…',
    sent: "Message sent successfully! We'll get back to you soon.",
    mailto: 'Opening your email app… or write to us directly at',
    failed: 'Something went wrong. Please try again or email us at',
  },
  ar: {
    name: 'من فضلك أدخل اسمك (حرفان على الأقل).',
    email: 'من فضلك أدخل بريدًا إلكترونيًا صحيحًا.',
    message: 'من فضلك اكتب رسالتك (10 أحرف على الأقل).',
    sending: 'جارٍ الإرسال…',
    sent: 'تم إرسال رسالتك بنجاح! سنعاود التواصل معك قريبًا.',
    mailto: 'جارٍ فتح تطبيق البريد… أو راسلنا مباشرة على',
    failed: 'حدث خطأ ما. حاول مرة أخرى أو راسلنا على',
  },
};

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: form.querySelector('#cf-name'),
    email: form.querySelector('#cf-email'),
    message: form.querySelector('#cf-message'),
  };
  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('.form-submit');

  const setError = (key, msg) => {
    const group = fields[key].closest('.form-group');
    const errorEl = group.querySelector('.form-error');
    group.classList.toggle('has-error', Boolean(msg));
    errorEl.textContent = msg || '';
    fields[key].setAttribute('aria-invalid', msg ? 'true' : 'false');
  };

  const validate = () => {
    const m = MESSAGES[getLang()];
    let ok = true;
    if (fields.name.value.trim().length < 2) { setError('name', m.name); ok = false; } else setError('name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim())) { setError('email', m.email); ok = false; } else setError('email');
    if (fields.message.value.trim().length < 10) { setError('message', m.message); ok = false; } else setError('message');
    return ok;
  };

  // clear error while typing
  Object.entries(fields).forEach(([key, el]) => {
    el.addEventListener('input', () => setError(key));
  });

  const showStatus = (kind, key) => {
    const m = MESSAGES[getLang()];
    status.className = `form-status is-${kind}`;
    status.textContent = `${m[key]}${kind !== 'sent' ? ` ${CONTACT_EMAIL}` : ''}`;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const m = MESSAGES[getLang()];

    const data = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      subject: form.querySelector('#cf-subject')?.value.trim() || '',
      message: fields.message.value.trim(),
      _language: getLang(),
    };

    // No endpoint configured → pre-filled mailto draft
    if (!FORM_ENDPOINT) {
      const body = `${data.message}\n\n— ${data.name} (${data.email})`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(data.subject || 'Contact from website')}&body=${encodeURIComponent(body)}`;
      showStatus('is-info', 'mailto');
      return;
    }

    submitBtn.disabled = true;
    status.className = 'form-status';
    status.textContent = m.sending;

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      showStatus('is-success', 'sent');
    } catch {
      showStatus('is-error', 'failed');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
