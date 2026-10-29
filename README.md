# VIVEM — vivemdigital.com

موقع وكالة VIVEM الرسمي — ثنائي اللغة (English / العربية)، مبني بـ **Vanilla HTML/CSS/JS + Vite** بدون أي فريم وورك، بهوية **Aurora Tech** (جراديانت بنفسجي→أزرق→سماوي + زجاج + Bento).

## التشغيل

```bash
npm install        # مرة واحدة
npm run dev        # سيرفر تطوير مع hot reload
npm run build      # بناء الإنتاج إلى dist/
npm run preview    # معاينة نسخة الإنتاج محليًا
```

## النشر

تلقائي بالكامل: أي push على `main` → GitHub Actions يبني وينشر على GitHub Pages (vivemdigital.com).

## تعديل المحتوى (بدون لمس كود التصميم)

| عايز تغيّر إيه؟ | الملف |
|---|---|
| أعضاء الفريق (أسماء/أوصاف/صور) | `src/data/team.js` |
| أعمال البورتفوليو | `src/data/portfolio.js` — ضع `image` عند توفر صورة حقيقية |
| شهادات العملاء | `src/data/testimonials.js` |
| إيميل/تليفون/سوشيال/فورم | `src/data/config.js` |
| الألوان والخطوط والحركة | `src/styles/tokens.css` |
| النصوص الثابتة في الصفحة | `index.html` (كل نص مكرر بلغتين: `lang-en` + `lang-ar`) |

### استقبال رسائل الفورم بالإيميل
1. أنشئ endpoint مجاني على [formspree.io](https://formspree.io)
2. الصق الرابط في `src/data/config.js` → `FORM_ENDPOINT`
3. بدون endpoint الفورم يفتح تطبيق البريد تلقائيًا (mailto)

### Google Analytics
ضَع معرّف القياس في ملف `.env`:
```
VITE_GA_ID=G-XXXXXXXXXX
```
الكود يتحقق تلقائيًا — بدون ID لا يُحمَّل أي سكربت تتبع.

## هيكل المشروع

```
├── index.html               # الصفحة الرئيسية (كل الأقسام)
├── public/                  # ملفات تُنسخ كما هي (404, robots, sitemap, CNAME, favicon)
├── src/
│   ├── styles/              # tokens → base → layout → components/*
│   ├── scripts/             # وحدات ES modules (i18n, nav, portfolio, ...)
│   ├── data/                # كل المحتوى الديناميكي — عدّل هنا
│   └── assets/              # صور (مضغوطة webp) + الشعار
├── scripts/                 # سكربتات توليد/ضغط الأصول
└── docs/ROADMAP.md          # خطة التصميم وسجل التنفيذ
```

## قواعد مهمة للمطورين

- **اللغة**: `<html lang>` هو المصدر الوحيد — CSS يخفي اللغة غير النشطة بقاعدتين فقط في `base.css`. لا تستخدم `!important` مع `lang-en/lang-ar` أبدًا.
- **RTL**: استخدم logical properties (`margin-inline`, `inset-inline-start`, `text-align: start`) — ممنوع `html[lang="ar"]` المكرر.
- **لا dark mode** — قرار نهائي من العميل، الموقع فاتح فقط.
- **الألوان**: من التوكنز فقط (`var(--...)`) — لا hex مباشر في المكوّنات.
