// ============================================================
// Team members — data drives the team dialog.
// To add/edit a member: change an object here (fields: en + ar).
// Images live in src/assets/images/ and are imported below.
// ============================================================
import mohamedImg from '../assets/images/Mohamed_Farag.webp';
import zeyadImg from '../assets/images/Zeyad_Emad.webp';
import seifImg from '../assets/images/Seif_Elfiky.webp';
import alhassanImg from '../assets/images/Alhassan_Nabil.webp';
import hamzaImg from '../assets/images/Hamza_Soliman.webp';
import mahmoudImg from '../assets/images/Mahmoud_Farag.webp';
import fatmaImg from '../assets/images/Fatma_Gohar.webp';
import amgadImg from '../assets/images/Amgad_Ghozzy.webp';
import ahmedImg from '../assets/images/Ahmed_Aljohari.webp';

export const teamMembers = [
  {
    id: 'mohamed',
    image: mohamedImg,
    name: { en: 'Mohamed Farag', ar: 'محمد فرج' },
    role: { en: 'CEO', ar: 'الرئيس التنفيذي' },
    description: {
      en: "Mohamed Farag, the founder of the company. From the very first moment, my idea revolved around providing creative solutions that address people's needs. Coming from an Agricultural Engineering background, I found my passion in graphic design and visual creativity, which led me to establish the company to create unique visual experiences. My goal is always to deliver work that is simple yet effective, helping clients achieve their objectives in an innovative way.",
      ar: 'محمد فرج، مؤسس الشركة. منذ اللحظة الأولى، تمحورت فكرتي حول تقديم حلول إبداعية تلامس احتياجات الناس. من خلفية في الهندسة الزراعية، اكتشفت شغفي في تصميم الجرافيك والإبداع البصري، مما دفعني لتأسيس الشركة لخلق تجارب بصرية فريدة. هدفي دائمًا هو تقديم عمل بسيط وفعّال يحقق للعميل أهدافه بأسلوب مبتكر.',
    },
  },
  {
    id: 'zeyad',
    image: zeyadImg,
    name: { en: 'Zeyad Emad', ar: 'زياد عماد' },
    role: { en: 'Operations Manager', ar: 'مدير العمليات' },
    description: {
      en: 'Zeyad Emad, the Operations Manager at the company. My mission is to ensure that everything runs smoothly and without delay. With my background in operations management, I organize every detail of the work to ensure that each project is executed efficiently and with high quality. I always embrace challenges and try to find innovative solutions to any problem that arises.',
      ar: 'زياد عماد، مدير العمليات في الشركة. مهمتي هي ضمان سير العمل بسلاسة وبدون أي تأخير. بفضل خلفيتي في إدارة العمليات، أقوم بتنظيم كل تفاصيل العمل لضمان تنفيذ كل مشروع بكفاءة وجودة عالية. أنا دائمًا أحب التحديات وأسعى لإيجاد حلول مبتكرة لأي مشكلة تظهر.',
    },
  },
  {
    id: 'seif',
    image: seifImg,
    name: { en: 'Seif Elfiky', ar: 'سيف الفقي' },
    role: { en: 'Marketing Manager', ar: 'مدير التسويق' },
    description: {
      en: "Seif Elfiky, the Marketing Manager at the company. My role is to constantly stay in touch with the market and understand its needs so we can provide distinctive and impactful marketing content. I enjoy searching for new opportunities and implementing marketing strategies that contribute to the company's growth and expanding our client base. For me, marketing is not just selling... it's communication and building relationships.",
      ar: 'سيف الفقي، مدير التسويق في الشركة. دوري أن أكون دائمًا على تواصل مع السوق وأفهم احتياجاته لنتمكن من تقديم محتوى تسويقي مميز ومؤثر. أحب البحث عن الفرص الجديدة وتنفيذ استراتيجيات تسويقية تساهم في نمو الشركة وتوسيع قاعدة عملائنا. بالنسبة لي، التسويق ليس مجرد بيع... إنه تواصل وبناء علاقات.',
    },
  },
  {
    id: 'alhassan',
    image: alhassanImg,
    name: { en: 'Alhassan Nabil', ar: 'الحسن نبيل' },
    role: { en: 'Video Editor', ar: 'مونتير' },
    description: {
      en: 'Alhassan Nabil, a Video Editor at the company. My passion for editing always drives me to give every project a unique artistic touch that highlights its details and conveys the message more effectively. I use modern techniques to ensure that every video or visual content is produced with the highest quality and professionalism. Every project is a new challenge and a new editing approach for me.',
      ar: 'الحسن نبيل، مونتير في الشركة. شغفي في المونتاج يجعلني دائمًا أسعى لإعطاء كل مشروع لمسة فنية مميزة تبرز تفاصيله وتوصل الرسالة بشكل أفضل. أستخدم تقنيات حديثة لأضمن أن كل فيديو أو محتوى بصري يظهر بأعلى جودة واحترافية. كل مشروع بالنسبة لي هو تحدي جديد وأسلوب جديد في المونتاج.',
    },
  },
  {
    id: 'hamza',
    image: hamzaImg,
    name: { en: 'Hamza Soliman', ar: 'حمزة سليمان' },
    role: { en: 'Visual Identity Designer', ar: 'مصمم هوية بصرية' },
    description: {
      en: "Hamza Soliman, a Visual Identity Designer at the company. I specialize in creating unique visual identities that reflect the essence of each brand. My designs combine creativity with strategic thinking to deliver impactful results. I'm always excited to take on new challenges and push the boundaries of design to create memorable brand experiences.",
      ar: 'حمزة سليمان، مصمم هوية بصرية في الشركة. أتخصص في إنشاء هويات بصرية فريدة تعكس جوهر كل علامة تجارية. تجمع تصميماتي بين الإبداع والتفكير الاستراتيجي لتقديم نتائج مؤثرة. أنا متحمس دائمًا لمواجهة التحديات الجديدة ودفع حدود التصميم لخلق تجارب علامات تجارية لا تُنسى.',
    },
  },
  {
    id: 'mahmoud',
    image: mahmoudImg,
    name: { en: 'Mahmoud Farag', ar: 'محمود فرج' },
    role: { en: 'Presentation Designer', ar: 'مصمم عروض تقديمية' },
    description: {
      en: "Mahmoud Farag, a Presentation Designer at the company. My mission is to transform complex ideas and information into clear and engaging presentations that deliver the message directly and effectively. Every presentation, for me, is an opportunity to create a visual impact that enhances the message's power and helps the client present themselves in a unique and professional manner.",
      ar: 'محمود فرج، مصمم عروض تقديمية في الشركة. مهمتي هي تحويل الأفكار والمعلومات المعقدة إلى عروض تقديمية واضحة وجذابة، توصل الرسالة بشكل مباشر وفعّال. كل عرض تقديمي بالنسبة لي هو فرصة لخلق تأثير بصري يعزز من قوة الرسالة ويساعد العميل على تقديم نفسه بشكل مميز واحترافي.',
    },
  },
  {
    id: 'fatma',
    image: fatmaImg,
    name: { en: 'Fatma Gohar', ar: 'فاطمة جوهر' },
    role: { en: 'Social Media Account Manager', ar: 'مدير حسابات السوشيال ميديا' },
    description: {
      en: "Fatma Gohar, the Social Media Account Manager at the company. My mission is to manage accounts effectively, ensuring that the content reflects the company's identity and achieves the desired engagement. I am responsible for planning and executing social media strategies, working to improve communication with clients and respond to their inquiries quickly and effectively.",
      ar: 'فاطمة جوهر، مدير حسابات السوشيال ميديا في الشركة. مهمتي هي إدارة الحسابات بشكل فعّال، وضمان أن المحتوى يعكس هوية الشركة ويحقق التفاعل المطلوب. أنا مسؤولة عن تخطيط وتنفيذ استراتيجيات السوشيال ميديا، والعمل على تحسين التواصل مع العملاء والرد على استفساراتهم بشكل سريع وفعّال.',
    },
  },
  {
    id: 'amgad',
    image: amgadImg,
    name: { en: 'Amgad Ghozzy', ar: 'أمجد غزي' },
    role: { en: 'Mobile App Developer', ar: 'مطور تطبيقات الجوال' },
    description: {
      en: 'Amgad Ghozzy, a Mobile App Developer at VIVEM. I specialize in building intuitive and high-performance mobile applications for iOS and Android. With a focus on clean code, user-centric design, and modern development practices, I bring innovative mobile experiences to life that are both functional and engaging.',
      ar: 'أمجد غزي، مطور تطبيقات الجوال في VIVEM. متخصص في بناء تطبيقات جوال بديهية وعالية الأداء لأنظمة iOS وأندرويد، مع التركيز على كتابة أكواد نظيفة وتصميم يركز على المستخدم وأحدث ممارسات التطوير، أقوم بتحويل الأفكار إلى تجارب جوال مبتكرة تجمع بين الأداء القوي وسهولة الاستخدام.',
    },
  },
  {
    id: 'ahmed',
    image: ahmedImg,
    name: { en: 'Ahmed Aljohari', ar: 'أحمد الجوهري' },
    role: { en: 'Web Developer', ar: 'مطور مواقع' },
    description: {
      en: 'Ahmed Aljohari, a skilled Web Developer focused on building modern, responsive, and high-performance websites. I specialize in creating robust web applications that provide seamless user experiences and meet the specific needs of clients. I enjoy staying updated with the latest web development trends to deliver innovative digital solutions.',
      ar: 'أحمد الجوهري، مطور مواقع ماهر يركز على بناء مواقع حديثة ومتجاوبة وعالية الأداء. متخصص في إنشاء تطبيقات ويب قوية توفر تجارب مستخدم سلسة وتلبي الاحتياجات المحددة للعملاء. أستمتع بمتابعة أحدث اتجاهات تطوير الويب لتقديم حلول رقمية مبتكرة وفعالة.',
    },
  },
];
