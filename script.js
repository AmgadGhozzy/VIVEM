document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        {
            id: 'mohamed',
            name_en: 'Mohamed Farag',
            name_ar: 'محمد فرج',
            role_en: 'CEO',
            role_ar: 'الرئيس التنفيذي',
            image: 'assets/images/Mohamed_Farag.webp',
            description_en: 'Mohamed Farag, the founder of the company. From the very first moment, my idea revolved around providing creative solutions that address people\'s needs. Coming from an Agricultural Engineering background, I found my passion in graphic design and visual creativity, which led me to establish the company to create unique visual experiences. My goal is always to deliver work that is simple yet effective, helping clients achieve their objectives in an innovative way. Every day, we strive to be better and achieve client satisfaction through our professional work.',
            description_ar: 'محمد فرج، مؤسس الشركة. منذ اللحظة الأولى، تمحورت فكرتي حول تقديم حلول إبداعية تلامس احتياجات الناس. من خلفية في الهندسة الزراعية، اكتشفت شغفي في تصميم الجرافيك والإبداع البصري، مما دفعني لتأسيس الشركة لخلق تجارب بصرية فريدة. هدفي دائمًا هو تقديم عمل بسيط وفعّال يحقق للعميل أهدافه بأسلوب مبتكر. كل يوم نسعى لنكون أفضل ونحقق رضا عملائنا من خلال عملنا الاحترافي.',
            whatsapp_url: 'https://wa.me/+201063751915',
            linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_MOHAMED'
        },
        {
            id: 'amgad',
            name_en: 'Amgad Ghozzy',
            name_ar: 'أمجد غزي',
            role_en: 'Mobile App Developer',
            role_ar: 'مطور تطبيقات الجوال',
            image: 'assets/images/Amgad_Ghozzy.webp',
            description_en: 'Amgad Ghozzy, a Mobile App Developer at VIVEM. I specialize in building intuitive and high-performance mobile applications for iOS and Android. With a focus on clean code, user-centric design, and modern development practices, I bring innovative mobile experiences to life that are both functional and engaging. I am passionate about exploring the latest mobile technologies and delivering seamless applications across various devices.',
            description_ar: 'أمجد غزي، مطور تطبيقات الجوال في VIVEM. متخصص في بناء تطبيقات جوال بديهية وعالية الأداء لأنظمة iOS وأندرويد، مع التركيز على كتابة أكواد نظيفة وتصميم يركز على المستخدم وأحدث ممارسات التطوير، أقوم بتحويل الأفكار إلى تجارب جوال مبتكرة تجمع بين الأداء القوي وسهولة الاستخدام. أنا شغوف باستكشاف أحدث تقنيات الجوال وتقديم تطبيقات سلسة عبر مختلف الأجهزة.',
            whatsapp_url: 'https://wa.me/+201063751915',
            linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_AMGAD'
        },
        {
            id: 'zeyad',
            name_en: 'Zeyad Emad',
            name_ar: 'زياد عماد',
            role_en: 'Operations Manager',
            role_ar: 'مدير العمليات',
            image: 'assets/images/Zeyad_Emad.webp',
            description_en: 'Zeyad Emad, the Operations Manager at the company. My mission is to ensure that everything runs smoothly and without delay. With my background in operations management, I organize every detail of the work to ensure that each project is executed efficiently and with high quality. I always embrace challenges and try to find innovative solutions to any problem that arises, which helps me improve workflow and coordinate the team to achieve the best outcome. I always make sure everything is delivered on time and in a manner befitting our clients.',
            description_ar: 'زياد عماد، مدير العمليات في الشركة. مهمتي هي ضمان سير العمل بسلاسة وبدون أي تأخير. بفضل خلفيتي في إدارة العمليات، أقوم بتنظيم كل تفاصيل العمل لضمان تنفيذ كل مشروع بكفاءة وجودة عالية. أنا دائمًا أحب التحديات وأسعى لإيجاد حلول مبتكرة لأي مشكلة تظهر، وهذا يساعدني على تحسين سير العمل وتنسيق الفريق للوصول إلى أفضل نتيجة. أحرص دائمًا على ضمان تنفيذ كل شيء في الوقت المحدد وبالشكل الذي يليق بعملائنا.',
             whatsapp_url: 'https://wa.me/+201063751915',
             linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_ZEYAD'
        },
        {
            id: 'seif',
            name_en: 'Seif Elfiky',
            name_ar: 'سيف الفقي',
            role_en: 'Marketing Manager',
            role_ar: 'مدير التسويق',
            image: 'assets/images/Seif_Elfiky.webp',
            description_en: 'Seif Elfiky, the Marketing Manager at the company. My role is to constantly stay in touch with the market and understand its needs so we can provide distinctive and impactful marketing content. I enjoy searching for new opportunities and implementing marketing strategies that contribute to the company\'s growth and expanding our client base. I always focus on creating marketing campaigns that resonate with clients, and I make sure to utilize all marketing channels to reach the largest possible audience. For me, marketing is not just selling... it\'s communication and building relationships.',
            description_ar: 'سيف الفقي، مدير التسويق في الشركة. دوري أن أكون دائمًا على تواصل مع السوق وأفهم احتياجاته لنتمكن من تقديم محتوى تسويقي مميز ومؤثر. أحب البحث عن الفرص الجديدة وتنفيذ استراتيجيات تسويقية تساهم في نمو الشركة وتوسيع قاعدة عملائنا. أنا دائمًا أركّز على خلق حملات تسويقية تلمس العملاء، وأحرص على استغلال كل القنوات التسويقية للوصول لأكبر جمهور ممكن. بالنسبة لي، التسويق ليس مجرد بيع... إنه تواصل وبناء علاقات.',
            whatsapp_url: 'https://wa.me/+201063751915',
            linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_SEIF'
        },
        {
            id: 'alhassan',
            name_en: 'Alhassan Nabil',
            name_ar: 'الحسن نبيل',
            role_en: 'Video Editor',
            role_ar: 'مونتير',
            image: 'assets/images/Alhassan_Nabil.webp',
            description_en: 'Alhassan Nabil, a Video Editor at the company. My passion for editing always drives me to give every project a unique artistic touch that highlights its details and conveys the message more effectively. I use modern techniques to ensure that every video or visual content is produced with the highest quality and professionalism, reaching the audience exactly as intended. Every project is a new challenge and a new editing approach for me, and I always ensure that the final result is not just polished, but impactful.',
            description_ar: 'الحسن نبيل، مونتير في الشركة. شغفي في المونتاج يجعلني دائمًا أسعى لإعطاء كل مشروع لمسة فنية مميزة تبرز تفاصيله وتوصل الرسالة بشكل أفضل. أستخدم تقنيات حديثة لأضمن أن كل فيديو أو محتوى بصري يظهر بأعلى جودة واحترافية، ويصل للجمهور بالطريقة المقصودة. كل مشروع بالنسبة لي هو تحدي جديد وأسلوب جديد في المونتاج، ودائمًا أحرص على أن تكون النتيجة النهائية ليست متقنة فحسب، بل مؤثرة.',
            whatsapp_url: 'https://wa.me/+201063751915',
            linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_ALHASSAN'
        },
        {
            id: 'hamza',
            name_en: 'Hamza Soliman',
            name_ar: 'حمزة سليمان',
            role_en: 'Graphic Designer',
            role_ar: 'مصمم جرافيك',
            image: 'assets/images/Hamza_Soliman.webp',
            description_en: 'Hamza Soliman, a Graphic Designer at the company. I specialize in creating unique visual identities that reflect the essence of each brand. My designs combine creativity with strategic thinking to deliver impactful results. I\'m always excited to take on new challenges and push the boundaries of design to create memorable brand experiences.',
            description_ar: 'حمزة سليمان، مصمم جرافيك في الشركة. أتخصص في إنشاء هويات بصرية فريدة تعكس جوهر كل علامة تجارية. تجمع تصميماتي بين الإبداع والتفكير الاستراتيجي لتقديم نتائج مؤثرة. أنا متحمس دائمًا لمواجهة التحديات الجديدة ودفع حدود التصميم لخلق تجارب علامات تجارية لا تُنسى.',
            whatsapp_url: 'https://wa.me/+201063751915',
            linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_HAMZA'
        },
        {
            id: 'mahmoud',
            name_en: 'Mahmoud Farag',
            name_ar: 'محمود فرج',
            role_en: 'Presentation Designer',
            role_ar: 'مصمم عروض تقديمية',
            image: 'assets/images/Mahmoud_Farag.webp',
            description_en: 'Mahmoud Farag, a Presentation Designer at the company. My mission is to transform complex ideas and information into clear and engaging presentations that deliver the message directly and effectively. I love combining creativity with simplicity in design to create a visual experience that helps attract attention and quickly clarify key points. Every presentation, for me, is an opportunity to create a visual impact that enhances the message\'s power and helps the client present themselves in a unique and professional manner.',
            description_ar: 'محمود فرج، مصمم عروض تقديمية في الشركة. مهمتي هي تحويل الأفكار والمعلومات المعقدة إلى عروض تقديمية واضحة وجذابة، توصل الرسالة بشكل مباشر وفعّال. أحب دمج الإبداع مع البساطة في التصميم لخلق تجربة بصرية تساعد في جذب الانتباه وتوضيح النقاط الرئيسية بسرعة. كل عرض تقديمي بالنسبة لي هو فرصة لخلق تأثير بصري يعزز من قوة الرسالة ويساعد العميل على تقديم نفسه بشكل مميز واحترافي.',
            whatsapp_url: 'https://wa.me/+201063751915',
            linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_MAHMOUD'
        },
        {
            id: 'fatma',
            name_en: 'Fatma Gohar',
            name_ar: 'فاطمة جوهر',
            role_en: 'Social Media Account Manager',
            role_ar: 'مدير حسابات السوشيال ميديا',
            image: 'assets/images/Fatma_Gohar.webp',
            description_en: 'Fatma Gohar, the Social Media Account Manager at the company. My mission is to manage accounts effectively, ensuring that the content reflects the company\'s identity and achieves the desired engagement. I am responsible for planning and executing social media strategies, working to improve communication with clients and respond to their inquiries quickly and effectively. I always strive to provide innovative and engaging content that captures the audience\'s attention and strengthens the relationship with our clients.',
            description_ar: 'فاطمة جوهر، مدير حسابات السوشيال ميديا في الشركة. مهمتي هي إدارة الحسابات بشكل فعّال، وضمان أن المحتوى يعكس هوية الشركة ويحقق التفاعل المطلوب. أنا مسؤولة عن تخطيط وتنفيذ استراتيجيات السوشيال ميديا، والعمل على تحسين التواصل مع العملاء والرد على استفساراتهم بشكل سريع وفعّال. أحرص دائمًا على تقديم محتوى مبتكر وجذاب يشد انتباه الجمهور ويعزز العلاقة مع عملائنا.',
            whatsapp_url: 'https://wa.me/+201063751915',
            linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_FATMA'
        },
         {
             id: 'ahmed',
             name_en: 'Ahmed Aljohari',
             name_ar: 'أحمد الجوهري',
             role_en: 'Web Developer',
             role_ar: 'مطور مواقع',
             image: 'assets/images/Ahmed_Aljohari.webp',
             description_en: 'Ahmed Aljohari, a skilled Web Developer focused on building modern, responsive, and high-performance websites. I specialize in creating robust web applications that provide seamless user experiences and meet the specific needs of clients. I enjoy working with various technologies and staying updated with the latest web development trends to deliver innovative and effective digital solutions.',
             description_ar: 'أحمد الجوهري، مطور مواقع ماهر يركز على بناء مواقع حديثة ومتجاوبة وعالية الأداء. متخصص في إنشاء تطبيقات ويب قوية توفر تجارب مستخدم سلسة وتلبي الاحتياجات المحددة للعملاء. أستمتع بالعمل مع مختلف التقنيات ومتابعة أحدث اتجاهات تطوير الويب لتقديم حلول رقمية مبتكرة وفعالة.',
             whatsapp_url: 'https://wa.me/+201063751915',
             linkedin_url: 'https://www.linkedin.com/in/YOUR_PROFILE_AHMED'
         }
    ];

    const htmlElement = document.documentElement;
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const langToggle = document.getElementById('lang-toggle');
    const yearSpan = document.getElementById('current-year');

    const teamGrid = document.querySelector('.team-grid');
    const modalOverlay = document.getElementById('team-modal-overlay');
    const modalContent = document.getElementById('team-modal-content');
    const modalCloseBtn = document.getElementById('team-modal-close');
    const modalImg = document.getElementById('modal-member-img');
    const modalName = document.getElementById('modal-member-name');
    const modalRole = document.getElementById('modal-member-role');
    const modalDescription = document.getElementById('modal-member-description');
    let modalTextContentContainer = modalDescription ? modalDescription.closest('.modal-text-content') : null;

    function updateModalTextDirection(lang) {
        if (modalTextContentContainer) {
            if (lang === 'ar') {
                modalTextContentContainer.style.direction = 'rtl';
                modalTextContentContainer.style.textAlign = 'right';
                modalName.style.textAlign = 'right';
                modalRole.style.textAlign = 'right';
                modalDescription.style.textAlign = 'right';
            } else {
                modalTextContentContainer.style.direction = 'ltr';
                modalTextContentContainer.style.textAlign = 'left';
                modalName.style.textAlign = 'left';
                modalRole.style.textAlign = 'left';
                modalDescription.style.textAlign = 'left';
            }
        }
    }

    function updateModalContent(member, lang) {
        modalImg.src = member.image;
        modalImg.dataset.memberId = member.id;
        modalName.textContent = member[`name_${lang}`];
        modalRole.textContent = member[`role_${lang}`];
        modalDescription.textContent = member[`description_${lang}`];
        updateModalTextDirection(lang);
    }

    function updateUILanguage(lang) {
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = lang === 'en' ? 'inherit' : 'none';
        });
        document.querySelectorAll('.lang-ar').forEach(el => {
            el.style.display = lang === 'ar' ? 'inherit' : 'none';
        });
        htmlElement.setAttribute('lang', lang);
        document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.remove('rtl', 'ltr');
        document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
    }

    function setLanguage(lang) {
        if (langToggle) {
            langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
        }
        localStorage.setItem('lang', lang);
        updateUILanguage(lang);

        if (modalOverlay && modalOverlay.classList.contains('visible')) {
             const currentMemberId = modalImg.dataset.memberId;
             const currentMember = teamMembers.find(m => m.id === currentMemberId);
             if (currentMember) {
                 updateModalContent(currentMember, lang);
             }
         }
    }

    const currentLang = localStorage.getItem('lang') || 'en';
    setLanguage(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = htmlElement.getAttribute('lang') === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    const scrollThreshold = 50;
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    if (menuToggle && navLinks) {
        const navLinkItems = navLinks.querySelectorAll('a');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && href.startsWith('#') && !this.classList.contains('service-link')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else if (href.startsWith('#') && this.classList.contains('service-link')) {
                 if (modalOverlay && modalOverlay.classList.contains('visible')) {
                     closeModal();
                 }
             } else if (href === '#') {
                 e.preventDefault();
             }
        });
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    if (teamGrid && modalOverlay && modalContent) {
        function closeModal() {
            modalOverlay.classList.remove('visible');
            document.body.style.overflow = '';
        }

        teamGrid.addEventListener('click', (e) => {
            const teamCard = e.target.closest('.team-member-card');
            const socialLink = e.target.closest('.member-social-link');

            if (socialLink && teamCard) {
                 e.preventDefault();
                 const memberId = teamCard.dataset.memberId;
                 const member = teamMembers.find(m => m.id === memberId);

                 if (member) {
                     if (socialLink.classList.contains('whatsapp-link')) {
                         window.open(member.whatsapp_url, '_blank');
                     } else if (socialLink.classList.contains('linkedin-link')) {
                         window.open(member.linkedin_url, '_blank');
                     }
                 }
                 e.stopPropagation();
                 return;

            } else if (teamCard) {
                 const memberId = teamCard.dataset.memberId;
                 const member = teamMembers.find(m => m.id === memberId);

                 if (member) {
                     const currentLang = htmlElement.getAttribute('lang');
                     updateModalContent(member, currentLang);

                     modalOverlay.classList.add('visible');
                     document.body.style.overflow = 'hidden';
                 }
             }
        });


        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeModal);
        }

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('visible')) {
                closeModal();
            }
        });
    }

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.message, 'occured at line', e.lineno, 'in', e.filename);
    });
});