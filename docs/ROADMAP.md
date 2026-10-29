# خطة VIVEM 2.0 — Aurora Tech Redesign

> خطة إعادة التصميم المعتمدة (أكتوبر 2026). هذا الملف هو سجل التنفيذ — علّم على البند عند إتمامه.

## القرارات المعتمدة

| القرار | القيمة |
|---|---|
| الهوية | Aurora Tech: قاعدة فاتحة + جراديانت أورورا (#7c3aed→#2563eb→#06b6d4) + زجاج + Bento |
| الخطوط | Space Grotesk (عناوين EN) / Inter (نصوص EN) / IBM Plex Sans Arabic (AR) — self-hosted |
| أقسام جديدة | Testimonials carousel |
| الحركة | غنية وراقية، مع احترام prefers-reduced-motion |
| الوضع الداكن | **مرفوض نهائيًا** — الموقع فاتح فقط. لا تعيد إضافته. |
| التقنية | Vanilla JS + Vite، نشر GitHub Pages على vivemdigital.com |

## المراحل

### المرحلة 0 — الأساس
- [x] Checkpoint commit على main قبل أي تغيير
- [x] فرع `redesign/aurora-v2`
- [x] Vite: package.json + vite.config.js + هيكل src/ و public/
- [x] تحديث workflow النشر (Node 20 + vite build + dist/)
- [x] حذف الأصول الزخرفية (hero/about/footer backgrounds ≈ 1.2MB + favicon.png المكرر + Vivem.webp)

### المرحلة 1 — الهوية ونظام التصميم
- [x] tokens.css: بالِت Aurora كاملة + تباعد + radius + ظلال + سلم خطوط clamp + z-index + سرعات
- [x] خطوط self-hosted عبر @fontsource (إلغاء Google Fonts CDN)
- [x] شعار SVG جديد + favicon + OG image 1200×630
- [x] SVG sprite داخلي بدل Font Awesome CDN

### المرحلة 2 — CSS و i18n من الصفر
- [x] CSS جديد: tokens → base → layout → components → utilities
- [x] RTL بالـ logical properties (صفر قواعد html[lang="ar"] مكررة)
- [x] نظام لغات: سكربت head يضبط lang قبل الرسم (لا وميض)، إخفاء بـ :lang()، صفر !important
- [x] تصحيحات بنيوية: ترتيب nav، إزالة inline styles، توحيد دور Hamza

### المرحلة 3 — الأقسام
- [x] Header زجاجي عائم + scrollspy + درج موبايل
- [x] Hero: Aurora mesh متحركة + badge + CTA + parallax
- [x] Marquee خدمات
- [x] About Bento + أيقونات SVG
- [x] Stats زجاجي
- [x] Services Bento grid
- [x] Team كروت + modal قابل للوصول (focus trap)
- [x] Portfolio كروت + placeholder مصممة + lightbox dialog
- [x] Testimonials carousel (جديد)
- [x] Contact + Footer + WhatsApp float
- [x] Micro-interactions + stagger reveals

### المرحلة 4 — الأداء والمحتوى
- [x] ضغط صور الفريق والخدمات (الهدف < 1.5MB إجمالي)
- [x] src/data/*.js: team, portfolio, testimonials, config (FORM_ENDPOINT سطر واحد)
- [x] إزالة Font Awesome نهائيًا
- [x] Lighthouse: أداء 95+ / a11y 100 / SEO 100

### المرحلة 5 — SEO والإطلاق
- [x] Meta EN/AR + og:image مطلق + JSON-LD موسّع (Services)
- [x] GA4 عبر VITE_GA_ID (بيئة)
- [x] 404.html بالهوية الجديدة
- [x] README جديد بدليل تعديل المحتوى
- [x] QA: RTL، كروس-براوزر، كيبورد، تباين
- [x] دمج redesign/aurora-v2 → main (نشر تلقائي)

## محتوى بانتظار العميل (خارج نطاق الكود)
- صور أعمال بورتفوليو حقيقية → `src/data/portfolio.js`
- شهادات عملاء حقيقية → `src/data/testimonials.js`
- مفتاح Formspree → `src/data/config.js` (FORM_ENDPOINT)
- معرّف GA4 → متغير بيئة `VITE_GA_ID`
