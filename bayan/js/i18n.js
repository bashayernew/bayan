/* Lightweight i18n: swaps text content and placeholders; manages dir and localStorage */
(function () {
  const translations = {
    ar: {
      'seo.title': 'بيان للمصاعد والأبواب والدرابزين | Bayan Elevators & Doors',
      'seo.description': 'حلول المصاعد والأبواب ودرابزين الستانلس في الكويت. جودة واعتمادية وصيانة سريعة.',
      'seo.ogTitle': 'بيان للمصاعد والأبواب والدرابزين',
      'seo.ogDescription': 'نرتقي بمساحاتكم — مصاعد، أبواب، ودرابزين ستانلس في الكويت.',
      'seo.doors.title': 'الأبواب | بيان — حلول PVS وWBVC',
      'seo.doors.description': 'أبواب أوتوماتيكية وصناعية (PVS/WBVC) بمعايير أمان ومتانة وتشطيبات أنيقة.',
      'seo.elevators.title': 'المصاعد | بيان — ركاب وبضائع',
      'seo.elevators.description': 'مصاعد موثوقة وموفرة للطاقة مع تجهيزات فاخرة وأنظمة أمان متقدمة.',
      'seo.railings.title': 'درابزين ستانلس | بيان — جام سكريت ونظام سبايدر/ستاند',
      'seo.railings.description': 'درابزين ستانلس مع خيارات الجام ونظام سبايدر/ستاند للمنازل والأعمال.',

      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.products': 'المنتجات',
      'nav.sectors': 'القطاعات',
      'nav.contact': 'اتصل بنا',
      'nav.doors': 'الأبواب',
      'nav.railings': 'قطاع الدرابزين',

      'cta.whatsapp': 'واتساب',

      'hero.title': 'حلول متكاملة للمصاعد وأنظمة الوصول',
      'hero.subtitle': 'مصاعد وأبواب أوتوماتيكية وأنظمة ستانلس بمعايير سلامة عالية وتشطيبات فاخرة.',
      'hero.ctaQuote': 'تواصل معنا',
      'hero.ctaExplore': 'استكشف المنتجات',

      'solutions.title': 'حلول سريعة',
      'solutions.explore': 'استكشاف',
      'solutions.elevators.title': 'المصاعد',
      'solutions.elevators.body': 'مصاعد ركاب وبضائع مصممة لأداء سلس، وأنظمة أمان متقدمة، واعتمادية طويلة الأمد في المباني السكنية والتجارية.',
      'solutions.doors.title': 'الأبواب (PVS/WBVC)',
      'solutions.doors.body': 'أبواب أوتوماتيكية وصناعية عالية الأداء، مصممة للاستخدام المكثف مع الالتزام بمعايير السلامة والتكامل السلس مع المباني الحديثة.',
      'solutions.railings.title': 'قطاع الدرابزين',
      'solutions.railings.body': 'أنظمة درابزين من الستانلس ستيل مصنعة بدقة، مع خيارات الزجاج وأنظمة السبيدر، تجمع بين السلامة، الأناقة، والمتانة المعمارية.',

      'about.title': 'لمحة عن بيان',
      'about.body': 'في بيان، نقدم حلولاً متكاملة للمصاعد وأنظمة الوصول ترتكز على السلامة والدقة والجودة. يعمل فريقنا المتخصص في المصاعد، الأبواب الأوتوماتيكية، وأنظمة الستانلس ستيل على تقديم حلول مصممة خصيصاً للمشاريع السكنية والتجارية والصناعية في مختلف مناطق الكويت. نلتزم بالمعايير العالمية، ونوفر تركيباً احترافياً سريعاً، وخدمات صيانة فعّالة لضمان أداء طويل الأمد.',
      'about.badge.certified': 'معايير سلامة عالمية',
      'about.badge.support': 'دعم فني على مدار الساعة',
      'about.badge.install': 'تركيب احترافي سريع',

      'products.title': 'المنتجات',
      'products.tabs.elevators': 'المصاعد',
      'products.tabs.pvs': 'الأبواب — PVS',
      'products.tabs.wbvc': 'الأبواب — WBVC',
      'products.tabs.railings': 'قطاع الدرابزين',

      'elevators.f1': 'أنظمة أمان متعددة ومستشعرات متقدمة',
      'elevators.f2': 'كفاءة عالية مع استهلاك منخفض للطاقة',
      'elevators.f3': 'تشطيبات فاخرة وخيارات متعددة للمقاسات',
      'elevators.f4': 'جميع الأنظمة مصممة وفق المعايير العالمية ومتوافقة مع الأنظمة المحلية في دولة الكويت.',
      'elevators.machines.title': 'مكاين المصاعد',
      'elevators.machines.body': 'ماكينات مصاعد عالية الكفاءة مصممة لتشغيل سلس، ضوضاء منخفضة، أنظمة كبح موثوقة، وكفاءة طاقة طويلة الأمد.',
      'home.interior.title': 'أبواب داخلية',
      'home.interior.body': 'تصاميم داخلية فاخرة بتشطيبات عصرية.',
      'home.interior.button': 'عرض الأبواب الداخلية',
      'home.exterior.title': 'أبواب خارجية',
      'home.exterior.body': 'أبواب خارجية آمنة بمتانة وأناقة.',
      'home.exterior.button': 'عرض الأبواب الخارجية',
      'home.railings.title': 'درابزين ستانلس',
      'home.railings.body': 'أنظمة ستانلس مع خيارات زجاج للسلالم والشرفات.',
      'home.railings.button': 'عرض الدرابزين',
      'elevators.features.title': 'المميزات الرئيسية',
      'elevators.features.f1': 'أنظمة أمان متقدمة ومستشعرات ذكية',
      'elevators.features.f2': 'تشغيل سلس وهادئ',
      'elevators.features.f3': 'كفاءة عالية في استهلاك الطاقة',
      'elevators.features.f4': 'تصاميم كبائن ومقاسات حسب الطلب',
      'elevators.features.f5': 'مطابقة للمعايير العالمية',
      'elevators.types.title': 'أنواع المصاعد',
      'elevators.types.passenger': 'مصاعد ركاب',
      'elevators.types.freight': 'مصاعد بضائع',
      'elevators.types.residential': 'مصاعد فلل ومنازل',
      'elevators.types.commercial': 'مصاعد المباني التجارية',
      'elevators.why.title': 'لماذا بيان؟',
      'elevators.why.f1': 'الالتزام بمعايير السلامة المعتمدة',
      'elevators.why.f2': 'فرق تركيب ذات خبرة',
      'elevators.why.f3': 'صيانة سريعة ودعم مستمر',
      'elevators.why.f4': 'حلول مصممة لبيئة الكويت',
      'elevators.cta.question': 'هل تبحث عن حل مصاعد لمشروعك؟',
      'elevators.cta.button': 'اطلب استشارة',
      'elevators.pitch': 'مصاعد ركاب وبضائع بتشطيبات فاخرة وكفاءة طاقة عالية، مع صيانة سريعة وخدمة ما بعد البيع.',
      'doors.pitch': 'حلول أبواب متكاملة للمنازل والتجارة والصناعة — تشغيل سلس، إحكام ممتاز، ومتانة عالية مع خيارات تحكم ذكية.',
      'doors.benefits.title': 'المميزات الرئيسية',
      'doors.benefits.f1': 'تشغيل أوتوماتيكي سلس وهادئ',
      'doors.benefits.f2': 'إحكام عالي للعزل الحراري والصوتي',
      'doors.benefits.f3': 'مواد عالية المتانة للاستخدام طويل الأمد',
      'doors.benefits.f4': 'خيارات تحكم ودخول ذكية',
      'doors.interior.title': 'الأبواب الداخلية',
      'doors.interior.body': 'أبواب داخلية أنيقة ومتينة للمنازل والمساحات التجارية',
      'doors.pvs': 'PVS',
      'doors.pvs.subtitle': 'أبواب PVS — مناسبة للمنازل والاستخدام التجاري الخفيف',
      'doors.pvs.description': 'PVS Doors — ideal for residential and light commercial use',
      'doors.wbvc': 'WBVC',
      'doors.wbvc.subtitle': 'أبواب WBVC — مصممة للاستخدامات الصناعية والأحمال العالية',
      'doors.wbvc.description': 'WBVC Doors — designed for heavy-duty and industrial applications',
      'doors.outdoor': 'أبواب خارجية',
      'doors.outdoor.title': 'الأبواب الخارجية',
      'doors.outdoor.body': 'أبواب خارجية مقاومة للعوامل الجوية مع تصميمات عصرية ومتانة عالية',
      'doors.cta.question': 'تبحث عن حل الأبواب المناسب لمشروعك؟',
      'doors.cta.button': 'اطلب عرض سعر',
      'railings.pitch': 'تصاميم ستانلس عالية الجودة مع خيارات الجام السكريت ونظام سبايدر/ستاند — مثالية للسلالم الداخلية، البلكونات، والشاليهات.',

      'pvs.f1': 'أبواب أوتوماتيكية بإحكام وإغلاق ناعم',
      'pvs.f2': 'خيارات تحكم ذكية ومستشعرات حركة',
      'pvs.f3': 'مقاومة عالية للاستخدام الصناعي',

      'wbvc.f1': 'أداء موثوق لبوابات المصانع والمخازن',
      'wbvc.f2': 'تصاميم تناسب المساحات الكبيرة',
      'wbvc.f3': 'صيانة سهلة وقطع متوفرة',

      'railings.hero.title': 'الدرابزين الستانلس',
      'railings.hero.value': 'حلول درابزين من الستانلس ستيل تجمع بين الأناقة، السلامة، والمتانة.',
      'railings.features': 'ستانلس ستيل (إندونيسي/سعودي/بلجيكي) — خيارات جام سكريت — نظام سبايدر أو ستاند — مناسب للسلالم المنزلية والبلكونات والشاليهات.',
      'railings.feature.glass': 'درابزين زجاجي',
      'railings.feature.stainless': 'قضبان ستانلس',
      'railings.feature.spider': 'أنظمة سبايدر / ستاند',
      'railings.feature.use': 'استخدام داخلي وخارجي',
      'railings.gallery.title': 'معرض الدرابزين',
      'railings.gallery.body': 'تصاميم درابزين أنيقة ومتينة للاستخدام الداخلي والخارجي',
      'railings.trust': 'تصنيع وتركيب حسب معايير السلامة المعتمدة في دولة الكويت.',
      'railings.cta': 'اطلب عرض سعر',

      'sectors.title': 'القطاعات التي نخدمها',
      'sectors.residential': 'سكني (بيوت/فلل/شقق)',
      'sectors.residential.body': 'حلول مصاعد وأبواب تناسب المنازل والفلل والشقق.',
      'sectors.malls': 'مراكز تجارية ومولات',
      'sectors.malls.body': 'بوابات حركة عالية ومصاعد ركاب موثوقة.',
      'sectors.offices': 'مكاتب وأبراج',
      'sectors.offices.body': 'مصاعد سريعة وأبواب أوتوماتيكية أنيقة.',
      'sectors.hospitals': 'مستشفيات ومرافق صحية',
      'sectors.hospitals.body': 'أنظمة مصاعد وأبواب متخصصة للمستشفيات والمرافق الصحية، مصممة للتشغيل المستمر، النظافة، وسلامة المرضى.',
      'sectors.industrial': 'منشآت صناعية',
      'sectors.industrial.body': 'مصاعد وأبواب أوتوماتيكية عالية التحمل مخصصة للمصانع والمخازن ومراكز الخدمات اللوجستية.',

      'contact.title': 'تواصل معنا',
      'contact.intro': 'فريقنا جاهز لمساعدتكم في الاستشارات، تقديم العروض، والدعم الفني.',
      'contact.phone': 'الهاتف',
      'contact.email': 'البريد الإلكتروني',
      'contact.location': 'الموقع',
      'contact.location.value': 'الفروانية - الضجيج - مقابل ميداس للأثاث أو خلف لولو هايبر - مجمع الوفاء ۲ - ميزانين - معرض رقم 3',

      'form.name': 'الاسم',
      'form.namePlaceholder': 'الاسم الكامل',
      'form.phone': 'الهاتف',
      'form.phonePlaceholder': '+965 5xxxxxxx',
      'form.email': 'البريد',
      'form.emailPlaceholder': 'name@example.com',
      'form.message': 'الرسالة',
      'form.messagePlaceholder': 'اكتب رسالتك',
      'form.submit': 'إرسال',

      'footer.rights': '© 2025 بيان. جميع الحقوق محفوظة.',
      'footer.trust': 'مصاعد، أبواب، ودرابزين بمعايير فاخرة'
    },
    en: {
      'seo.title': 'Bayan Elevators & Doors | Elevators, Doors & Stainless Railings',
      'seo.description': 'Elevators, doors and stainless railings in Kuwait. Safety, reliability, and fast maintenance.',
      'seo.ogTitle': 'Bayan Elevators & Doors',
      'seo.ogDescription': 'Elevating Spaces — Elevators, Doors & Stainless Railings in Kuwait.',
      'seo.doors.title': 'Doors | Bayan — PVS & WBVC Solutions',
      'seo.doors.description': 'Automatic and industrial doors (PVS/WBVC) with safety, durability and elegant finishes.',
      'seo.elevators.title': 'Elevators | Bayan — Passenger & Freight',
      'seo.elevators.description': 'Reliable, energy-efficient elevators with premium cabins and advanced safety.',
      'seo.railings.title': 'Stainless Railings | Bayan — Glass & Spider/Stand',
      'seo.railings.description': 'Stainless steel railings with glass options and spider/stand systems for homes and businesses.',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.sectors': 'Sectors',
      'nav.contact': 'Contact',
      'nav.doors': 'Doors',
      'nav.railings': 'Railings',

      'cta.whatsapp': 'WhatsApp',

      'hero.title': 'Complete Elevator & Access Solutions',
      'hero.subtitle': 'Elevators, automatic doors, and stainless systems—built for safety and premium finishes.',
      'hero.ctaQuote': 'Contact Us',
      'hero.ctaExplore': 'Explore Products',

      'solutions.title': 'Quick Solutions',
      'solutions.explore': 'Explore',
      'solutions.elevators.title': 'Elevators',
      'solutions.elevators.body': 'Passenger and freight elevators engineered for smooth performance, advanced safety systems, and long-term reliability across residential and commercial buildings.',
      'solutions.doors.title': 'Doors (PVS/WBVC)',
      'solutions.doors.body': 'High-performance automatic and industrial doors designed for intensive use, safety compliance, and seamless integration with modern buildings.',
      'solutions.railings.title': 'Stainless Railings',
      'solutions.railings.body': 'Precision-crafted stainless steel railing systems with glass and spider fittings, combining safety, elegance, and architectural strength.',

      'about.title': 'About Bayan',
      'about.body': 'At Bayan, we deliver reliable vertical and access solutions built on safety, precision, and quality. Our expert teams specialize in elevators, automatic doors, and stainless steel systems, providing tailored solutions for residential, commercial, and industrial projects across Kuwait. We adhere to international standards, ensure fast professional installation, and provide responsive maintenance to guarantee long-term performance.',
      'about.badge.certified': 'International Safety Standards',
      'about.badge.support': '24/7 Technical Support',
      'about.badge.install': 'Professional Fast Installation',

      'products.title': 'Products',
      'products.tabs.elevators': 'Elevators',
      'products.tabs.pvs': 'Doors — PVS',
      'products.tabs.wbvc': 'Doors — WBVC',
      'products.tabs.railings': 'Stainless Railings',

      'elevators.f1': 'Multiple safety systems and advanced sensors',
      'elevators.f2': 'High efficiency with low energy consumption',
      'elevators.f3': 'Premium finishes with multiple size options',
      'elevators.f4': 'All systems are designed to comply with international safety standards and local regulations in Kuwait.',
      'elevators.machines.title': 'Elevator Machines',
      'elevators.machines.body': 'High-efficiency elevator traction machines designed for smooth operation, low noise levels, reliable braking, and long-term energy efficiency.',
      'home.interior.title': 'Interior Doors',
      'home.interior.body': 'Premium interior designs with modern finishes.',
      'home.interior.button': 'View Interior Doors',
      'home.exterior.title': 'Exterior Doors',
      'home.exterior.body': 'Secure exterior doors built for durability and style.',
      'home.exterior.button': 'View Exterior Doors',
      'home.railings.title': 'Stainless Railings',
      'home.railings.body': 'Stainless systems with glass options for stairs and balconies.',
      'home.railings.button': 'View Railings',
      'elevators.features.title': 'Key Features',
      'elevators.features.f1': 'Advanced safety systems and smart sensors',
      'elevators.features.f2': 'Smooth and silent operation',
      'elevators.features.f3': 'Energy-efficient performance',
      'elevators.features.f4': 'Custom cabin designs and sizes',
      'elevators.features.f5': 'International safety compliance',
      'elevators.types.title': 'Elevator Types',
      'elevators.types.passenger': 'Passenger Elevators',
      'elevators.types.freight': 'Freight Elevators',
      'elevators.types.residential': 'Residential / Villa Elevators',
      'elevators.types.commercial': 'Commercial Building Elevators',
      'elevators.why.title': 'Why Bayan?',
      'elevators.why.f1': 'Certified safety standards',
      'elevators.why.f2': 'Experienced installation teams',
      'elevators.why.f3': 'Fast maintenance and support',
      'elevators.why.f4': 'Solutions tailored for Kuwait',
      'elevators.cta.question': 'Looking for an elevator solution for your project?',
      'elevators.cta.button': 'Request a Consultation',
      'elevators.pitch': 'Passenger and freight elevators with premium finishes and high energy efficiency, with fast maintenance and after-sales service.',
      'doors.pitch': 'Integrated door solutions for homes, commerce and industry — smooth operation, excellent sealing, and high durability with smart control options.',
      'doors.benefits.title': 'Key Benefits',
      'doors.benefits.f1': 'Smooth and quiet automatic operation',
      'doors.benefits.f2': 'Tight sealing for thermal and sound insulation',
      'doors.benefits.f3': 'Durable materials for long-term use',
      'doors.benefits.f4': 'Smart control and access options',
      'doors.pvs': 'PVS',
      'doors.pvs.subtitle': 'PVS Doors — ideal for residential and light commercial use',
      'doors.pvs.description': 'PVS Doors — ideal for residential and light commercial use',
      'doors.wbvc': 'WBVC',
      'doors.wbvc.subtitle': 'WBVC Doors — designed for heavy-duty and industrial applications',
      'doors.wbvc.description': 'WBVC Doors — designed for heavy-duty and industrial applications',
      'doors.outdoor': 'Outdoor Doors',
      'doors.outdoor.title': 'Outdoor Doors',
      'doors.outdoor.body': 'Weather-resistant outdoor doors with modern designs and high durability',
      'doors.interior.title': 'Interior Doors',
      'doors.interior.body': 'Elegant and durable interior doors for homes and commercial spaces',
      'doors.cta.question': 'Looking for the right door solution for your project?',
      'doors.cta.button': 'Request a Quote',
      'railings.pitch': 'High-quality stainless designs with glass options and spider/stand systems — ideal for interior stairs, balconies, and chalets.',

      'pvs.f1': 'Automatic doors with tight sealing and soft close',
      'pvs.f2': 'Smart control options and motion sensors',
      'pvs.f3': 'High durability for industrial use',

      'wbvc.f1': 'Reliable performance for factories and warehouses',
      'wbvc.f2': 'Designs suitable for large spans',
      'wbvc.f3': 'Easy maintenance and available parts',

      'railings.hero.title': 'Stainless Railings',
      'railings.hero.value': 'Elegant stainless steel railing solutions designed for safety, durability, and modern architecture.',
      'railings.features': 'Stainless steel (Indonesian/Saudi/Belgian) — glass options — spider or stand systems — suitable for home stairs, balconies and chalets.',
      'railings.feature.glass': 'Glass Railings',
      'railings.feature.stainless': 'Stainless Steel Bars',
      'railings.feature.spider': 'Spider / Stand Systems',
      'railings.feature.use': 'Indoor & Outdoor Use',
      'railings.gallery.title': 'Railings Gallery',
      'railings.gallery.body': 'Elegant and durable railing designs for indoor and outdoor use',
      'railings.trust': 'Custom-fabricated and installed to meet Kuwait safety standards.',
      'railings.cta': 'Request a Quote',

      'sectors.title': 'Sectors We Serve',
      'sectors.residential': 'Residential (Houses/Villas/Apartments)',
      'sectors.residential.body': 'Elevator and door solutions for homes and villas.',
      'sectors.malls': 'Malls & Retail Centers',
      'sectors.malls.body': 'High-traffic doors and reliable passenger elevators.',
      'sectors.offices': 'Offices & Towers',
      'sectors.offices.body': 'Fast lifts and elegant automatic doors.',
      'sectors.hospitals': 'Hospitals & Healthcare',
      'sectors.hospitals.body': 'Specialized elevator and door systems designed for continuous operation, hygiene, and patient safety.',
      'sectors.industrial': 'Industrial Facilities',
      'sectors.industrial.body': 'Heavy-duty elevators and automatic doors built for factories, warehouses, and logistics facilities.',

      'contact.title': 'Contact Us',
      'contact.intro': 'Our team is ready to assist you with consultations, quotations, and technical support.',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.location.value': 'Farwaniya - Al-Dajeej - Opposite Midas Furniture Behind Lulu Hyper - Al-Wafa 2 Complex - Mezanine - Showroom3',

      'form.name': 'Name',
      'form.namePlaceholder': 'Full name',
      'form.phone': 'Phone',
      'form.phonePlaceholder': '+965 5xxxxxxx',
      'form.email': 'Email',
      'form.emailPlaceholder': 'name@example.com',
      'form.message': 'Message',
      'form.messagePlaceholder': 'Write your message',
      'form.submit': 'Send',

      'footer.rights': '© 2025 Bayan. All rights reserved.',
      'footer.trust': 'Premium Elevators, Doors & Railings'
    }
  };

  function setDir(lang) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.ar;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    // <title> and meta description (page-aware)
    const page = document.body.getAttribute('data-page');
    const titleKey = page ? `seo.${page}.title` : 'seo.title';
    const descKey = page ? `seo.${page}.description` : 'seo.description';
    const ogTitleKey = page ? `seo.${page}.ogTitle` : 'seo.ogTitle';
    const ogDescKey = page ? `seo.${page}.ogDescription` : 'seo.ogDescription';

    const t = dict[titleKey] || dict['seo.title'];
    if (t) document.title = t;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict[descKey] || dict['seo.description'] || '');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict[ogTitleKey] || dict['seo.ogTitle'] || '');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict[ogDescKey] || dict['seo.ogDescription'] || '');
  }

  function reorderNavForDir() {
    // Keep semantic order; nothing to reorder beyond CSS direction.
  }

  function setLanguage(lang, userInitiated = false) {
    // Only save to sessionStorage if user explicitly chose a language
    // This allows language to persist during navigation within the same session
    if (userInitiated) {
      sessionStorage.setItem('bayan_lang', lang);
      sessionStorage.setItem('bayan_user_chose_lang', 'true');
    }
    // Don't save to localStorage - we always want to start with Arabic on new visits
    
    setDir(lang);
    applyTranslations(lang);
    reorderNavForDir();
    // Toggle aria-pressed on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  // Expose globally
  window.BayanI18n = { setLanguage, translations };

  // Init - Check for saved language preference, otherwise default to Arabic
  document.addEventListener('DOMContentLoaded', () => {
    // Check if user has previously chosen a language in this session
    const savedLang = sessionStorage.getItem('bayan_lang');
    const userChoseLang = sessionStorage.getItem('bayan_user_chose_lang');
    
    if (savedLang && userChoseLang === 'true') {
      // Use the saved language preference
      setLanguage(savedLang, false);
    } else {
      // Default to Arabic if no preference is saved
      setLanguage('ar', false);
    }
  });
})();


