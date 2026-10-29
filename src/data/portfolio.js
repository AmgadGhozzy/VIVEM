// ============================================================
// Portfolio items — PLACEHOLDER CONTENT until real client work
// is provided. To add a real project: set `image` to an imported
// file from src/assets/images/portfolio/, then update title and
// description. Items without an image render a designed gradient
// cover with a category glyph (see portfolio.js).
// ============================================================

export const portfolioCategories = {
  design: { en: 'Design', ar: 'تصميم' },
  development: { en: 'Development', ar: 'تطوير' },
  marketing: { en: 'Marketing', ar: 'تسويق' },
};

export const portfolioItems = [
  {
    category: 'design',
    icon: 'palette',
    image: null, // ← ضع صورة العمل الحقيقي هنا عند توفرها
    title: { en: 'Brand Identity & Graphic Design', ar: 'الهوية البصرية والتصميم الجرافيكي' },
    description: {
      en: 'Complete visual identity systems: logos, color palettes, typography and marketing collateral that give brands a distinctive, memorable look across every touchpoint.',
      ar: 'أنظمة هوية بصرية متكاملة: شعارات وألوان وخطوط ومواد تسويقية تمنح العلامة التجارية مظهرًا مميزًا ولافتًا في كل نقطة تواصل مع الجمهور.',
    },
  },
  {
    category: 'development',
    icon: 'monitor',
    image: null,
    title: { en: 'Websites & Landing Pages', ar: 'المواقع وصفحات الهبوط' },
    description: {
      en: 'Responsive, fast-loading websites and landing pages built with clean code and modern UX practices, tested across devices and browsers.',
      ar: 'مواقع وصفحات هبوط متجاوبة وسريعة، مبنية بكود نظيف وأحدث ممارسات تجربة المستخدم، ومختبرة عبر مختلف الأجهزة والمتصفحات.',
    },
  },
  {
    category: 'development',
    icon: 'mobile',
    image: null,
    title: { en: 'Mobile Applications', ar: 'تطبيقات الجوال' },
    description: {
      en: 'Intuitive, high-performance iOS and Android apps designed around the user, from concept and UI design to development and release.',
      ar: 'تطبيقات iOS وأندرويد بديهية وعالية الأداء مصممة حول المستخدم، من الفكرة وتصميم الواجهة حتى التطوير والنشر.',
    },
  },
  {
    category: 'marketing',
    icon: 'share',
    image: null,
    title: { en: 'Social Media Management', ar: 'إدارة السوشيال ميديا' },
    description: {
      en: 'Content calendars, community management and platform-specific creatives that grow engagement and build a loyal audience.',
      ar: 'خطط محتوى وإدارة مجتمعات وتصاميم مخصصة لكل منصة ترفع التفاعل وتبني جمهورًا وفيًا حول العلامة التجارية.',
    },
  },
  {
    category: 'marketing',
    icon: 'bullhorn',
    image: null,
    title: { en: 'Paid Advertising Campaigns', ar: 'الحملات الإعلانية المدفوعة' },
    description: {
      en: 'Targeted campaigns on Google, Facebook and Instagram: audience research, creative testing and continuous optimization for the best return on spend.',
      ar: 'حملات مستهدفة على جوجل وفيسبوك وإنستغرام: بحث الجمهور واختبار الإبداعات وتحسين مستمر لتحقيق أفضل عائد على الإنفاق.',
    },
  },
  {
    category: 'marketing',
    icon: 'chart',
    image: null,
    title: { en: 'SEO & Data-Driven Marketing', ar: 'تحسين محركات البحث والتسويق بالبيانات' },
    description: {
      en: 'Search engine optimization, content strategy and analytics reporting that turn traffic into measurable business growth.',
      ar: 'تحسين محركات البحث واستراتيجية المحتوى وتقارير تحليلية تحوّل الزيارات إلى نمو أعمال قابل للقياس.',
    },
  },
];
