import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface Translations {
  // Navigation
  nav: {
    services: string;
    portfolio: string;
    philosophy: string;
    estimator: string;
    faq: string;
    contact: string;
    getInTouch: string;
    startProject: string;
    whatsappChat: string;
    callDirect: string;
    langToggle: string;
    langLabel: string;
  };
  // Hero
  hero: {
    badge: string;
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      designs: string;
      designsLabel: string;
      retention: string;
      retentionLabel: string;
      photographs: string;
      photographsLabel: string;
    };
    trustBadge: string;
  };
  // Services
  services: {
    kicker: string;
    heading: string;
    subtitle: string;
    startInquiry: string;
    items: {
      design: {
        name: string;
        desc: string;
        deliverablesTitle: string;
        impact: string;
      };
      uiux: {
        name: string;
        desc: string;
        deliverablesTitle: string;
        impact: string;
      };
      branding: {
        name: string;
        desc: string;
        deliverablesTitle: string;
        impact: string;
      };
      socialMedia: {
        name: string;
        desc: string;
        deliverablesTitle: string;
        impact: string;
      };
    };
  };
  // Portfolio
  portfolio: {
    kicker: string;
    heading: string;
    subtitle: string;
    filterAll: string;
    filterDesign: string;
    filterUiUx: string;
    filterBranding: string;
    filterSocial: string;
    viewDetails: string;
    visitWebsite: string;
    inquireSimilar: string;
    closePreview: string;
    galleryHeading: string;
    gallerySubtitle: string;
    validatedImpact: string;
    keyScope: string;
  };
  // About / Philosophy
  about: {
    kicker: string;
    heading: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillarBadge: string;
    pillarOf: string;
  };
  // Testimonials
  testimonials: {
    kicker: string;
    heading: string;
    subtitle: string;
  };
  // Estimator
  estimator: {
    kicker: string;
    heading: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    currencyNotice: string;
    blueprintTitle: string;
    badgeSprint: string;
    selectedDisciplines: string;
    estimatedTimeline: string;
    targetAllocation: string;
    perks: string[];
    transferBtn: string;
    whatsappBtn: string;
  };
  // FAQ
  faq: {
    kicker: string;
    heading: string;
    subtitle: string;
  };
  // Contact
  contact: {
    kicker: string;
    heading: string;
    subtitle: string;
    phoneTitle: string;
    callNow: string;
    whatsappChat: string;
    emailTitle: string;
    openMail: string;
    guaranteeTitle: string;
    guaranteeText: string;
    studioLocation: string;
    formTitle: string;
    formSubtitle: string;
    disciplinesLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    budgetLabel: string;
    budgetOptions: { value: string; label: string }[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    sendWhatsappBtn: string;
    successTitle: string;
    successText: string;
    submitAnother: string;
  };
  // Footer
  footer: {
    desc: string;
    location: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
  };
  // Modal
  modal: {
    kicker: string;
    title: string;
    close: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    serviceLabel: string;
    overviewLabel: string;
    cancelBtn: string;
    sendBtn: string;
    successTitle: string;
    successText: string;
    continueWhatsapp: string;
    dismiss: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      philosophy: 'Philosophy',
      estimator: 'Scope Estimator',
      faq: 'FAQ',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      startProject: 'Start a Project',
      whatsappChat: 'WhatsApp',
      callDirect: 'Call Us',
      langToggle: 'العربية',
      langLabel: 'عربي',
    },
    hero: {
      badge: 'Premier Marketing & Media Production Agency',
      tagline: 'Marketing & Media Production Agency',
      titleLine1: 'Creative Velocity for Brands That',
      titleLine2: 'Refuse to Be',
      titleHighlight: 'Ignored',
      subtitle:
        'We engineer distinctive brand identities, high-conversion delivery apps food photography, SaaS UI/UX platforms, and cinematic social media campaigns that drive verified commercial momentum.',
      ctaPrimary: 'Initiate Collaboration',
      ctaSecondary: 'View Selected Work',
      stats: {
        designs: '80+',
        designsLabel: 'Designs',
        retention: '99.4%',
        retentionLabel: 'Client Retention Rate',
        photographs: '200+',
        photographsLabel: 'Food Photographs',
      },
      trustBadge: 'Trusted by Regional & International Market Leaders',
    },
    services: {
      kicker: 'Core Capabilities / Disciplines',
      heading: 'Full-spectrum creative firepower.',
      subtitle: 'Four tightly integrated disciplines engineered to capture market dominance.',
      startInquiry: 'Start Inquiry with this Discipline',
      items: {
        design: {
          name: 'Food Photography & Creative Design',
          desc: 'Commercial culinary photography, delivery app menu styling (Talabat, Careem, Jahez), and high-impact advertising assets.',
          deliverablesTitle: 'Production Deliverables',
          impact: '3.4x Average increase in food delivery menu conversion',
        },
        uiux: {
          name: 'UI/UX & SaaS Digital Products',
          desc: 'Enterprise cloud platforms, intuitive SaaS dashboards, responsive interfaces, and scalable design systems.',
          deliverablesTitle: 'Production Deliverables',
          impact: '+86% Reduction in user onboarding friction',
        },
        branding: {
          name: 'Strategic Branding & Packaging',
          desc: 'Brand positioning, authentic bilingual Arabic & English typography, packaging architecture, and market leadership.',
          deliverablesTitle: 'Production Deliverables',
          impact: '45+ Category-defining brand launches',
        },
        socialMedia: {
          name: 'Social Media & Media Production',
          desc: 'Cinematic commercial shoots, short-form viral Reels/TikTok campaigns, and multi-shot culinary creative galleries.',
          deliverablesTitle: 'Production Deliverables',
          impact: '22M+ Verified organic impressions generated',
        },
      },
    },
    portfolio: {
      kicker: 'Selected Works · 2025–2026 / Case Proof',
      heading: 'Proof over promises.',
      subtitle:
        'Explore client projects spanning food photography for delivery apps, SaaS enterprise product design, butcher brand identity, and viral 9-photo burger social campaigns.',
      filterAll: 'All Works',
      filterDesign: 'Food Photography',
      filterUiUx: 'UI/UX (SaaS)',
      filterBranding: 'Branding',
      filterSocial: 'Social Media',
      viewDetails: 'View Details',
      visitWebsite: 'Visit Official Website',
      inquireSimilar: 'Inquire About Similar Project',
      closePreview: 'Close Preview',
      galleryHeading: 'Curated 9-Photo Social Media Feed',
      gallerySubtitle: 'High-res food photography grid engineered for maximum viral engagement on Instagram & TikTok.',
      validatedImpact: 'Validated Business Impact',
      keyScope: 'Key Scope Areas',
    },
    about: {
      kicker: 'The Whislly Philosophy / Agency Manifesto',
      heading: "We don't do decorative marketing. We build unfair commercial advantages.",
      subtitle:
        'In an era flooded with generic templates and disposable social clips, true brand resonance requires obsessive craftsmanship, technical precision, and fearless creative direction.',
      pillar1Title: '01. Ruthless Quality Standard',
      pillar1Desc:
        'We refuse to ship decorative mediocrity. Every typeface, layout grid, sound sting, and color gradient is scrutinized to withstand international scrutiny.',
      pillar2Title: '02. Speed Without Bloat',
      pillar2Desc:
        'Traditional agencies trap projects in endless bureaucratic approval committees. We operate as an elite strike squad: lean, rapid, and fiercely committed to delivery velocity.',
      pillar3Title: '03. Commercial Intent',
      pillar3Desc:
        'Aesthetic beauty is only half the equation. Every piece of creative output must justify its existence by advancing your commercial pipeline, valuation, or customer retention.',
      pillarBadge: 'NON-NEGOTIABLE',
      pillarOf: 'PILLAR',
    },
    testimonials: {
      kicker: 'Client Validation / Attributable Feedback',
      heading: 'Measured by real commercial results.',
      subtitle: 'What founders and marketing executives say about partnering with Whislly.',
    },
    estimator: {
      kicker: 'Interactive Scope Builder / Instant Brief',
      heading: 'Estimate your project parameters.',
      subtitle: 'Select your required disciplines and target timing to structure an initial production brief with JD currency.',
      step1Title: '1. Select Desired Service Disciplines (Multiple allowed)',
      step2Title: '2. Target Launch Timeline',
      step3Title: '3. Estimated Production Investment (JD)',
      currencyNotice: 'All pricing structured in Jordanian Dinars (JD)',
      blueprintTitle: 'Scope Blueprint',
      badgeSprint: 'WHISLLY SPRINT',
      selectedDisciplines: 'Selected Disciplines',
      estimatedTimeline: 'Estimated Timeline',
      targetAllocation: 'Target Allocation (JD)',
      perks: [
        'Dedicated Creative Director & Sprint Lead',
        'Full IP & Native Source Files (Figma / Master Renders)',
        'Weekly Milestone Syncs + Direct WhatsApp Channel',
      ],
      transferBtn: 'Transfer Brief to Inquiry Form',
      whatsappBtn: 'Send Brief via WhatsApp (+962 7 9912 4684)',
    },
    faq: {
      kicker: 'Clarifications / Frequently Asked',
      heading: 'Common questions & operational details.',
      subtitle: 'Everything you need to know about partnering with Whislly.',
    },
    contact: {
      kicker: 'Direct Channel / Initiate Collaboration',
      heading: "Let's build something unforgettable.",
      subtitle:
        'Reach out directly by phone, WhatsApp, email, or fill out the inquiry form below for a rapid response within 2 business hours.',
      phoneTitle: 'Telephone & WhatsApp',
      callNow: 'Call Now',
      whatsappChat: 'WhatsApp Chat',
      emailTitle: 'Direct Inquiries Email',
      openMail: 'Open in Mail Client',
      guaranteeTitle: 'Response Guarantee',
      guaranteeText:
        'All inquiries submitted during business hours receive a response and discovery call proposal within 2 hours.',
      studioLocation:
        'Whislly Production Studios, Amman, Jordan. Available for on-site shoots throughout Jordan & regional remote sprints.',
      formTitle: 'Send an Inquiry',
      formSubtitle: 'Tell us about your brand goals, timeline, or requested services.',
      disciplinesLabel: 'Required Disciplines',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Zaid Kareem',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'zaid@company.com',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+962 7 ...',
      companyLabel: 'Company or Brand Name',
      companyPlaceholder: 'e.g. Crust Burgers / Wisco',
      budgetLabel: 'Estimated Investment Range (JD)',
      budgetOptions: [
        { value: '100 – 200 JD', label: '100 – 200 JD' },
        { value: '250 – 500 JD', label: '250 – 500 JD' },
        { value: '500 – 1,000 JD', label: '500 – 1,000 JD' },
        { value: '1,000+ JD', label: '1,000+ JD' },
      ],
      detailsLabel: 'Project Details & Objectives *',
      detailsPlaceholder: 'Briefly describe your objectives, existing assets, launch date, or reference inspirations...',
      submitBtn: 'Submit Project Inquiry',
      sendWhatsappBtn: 'Send via WhatsApp',
      successTitle: 'Inquiry Received',
      successText:
        'Thank you! Our production leadership has received your brief and will review your requirements immediately.',
      submitAnother: 'Submit Another Brief',
    },
    footer: {
      desc: 'Marketing & Media Production Agency. We engineer high-resonance brand systems, culinary visual content, SaaS interfaces, and commercial campaigns.',
      location: 'Amman, Jordan · Global Remote Engagements',
      navTitle: 'Navigation',
      servicesTitle: 'Core Capabilities',
      contactTitle: 'Direct Contact',
      rights: 'All rights reserved.',
    },
    modal: {
      kicker: 'Whislly Production Studio',
      title: 'Initiate Project Collaboration',
      close: 'Close',
      nameLabel: 'Full Name *',
      emailLabel: 'Work Email *',
      phoneLabel: 'Phone / WhatsApp *',
      serviceLabel: 'Primary Service Needed',
      overviewLabel: 'Brief Overview',
      cancelBtn: 'Cancel',
      sendBtn: 'Send Request',
      successTitle: 'Request Registered',
      successText: "We'll reach out to you within 2 business hours. For immediate turnaround, you can ping our team directly via WhatsApp.",
      continueWhatsapp: 'Continue on WhatsApp (+962 7 9912 4684)',
      dismiss: 'Dismiss',
    },
  },
  ar: {
    nav: {
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      philosophy: 'فلسفتنا',
      estimator: 'حاسبة النطاق',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      getInTouch: 'ابدأ مشروعك',
      startProject: 'ابدأ مشروعك',
      whatsappChat: 'واتساب',
      callDirect: 'اتصال مباشر',
      langToggle: 'English',
      langLabel: 'EN',
    },
    hero: {
      badge: 'وكالة رائدة للتسويق والإنتاج الإعلامي والإبداعي',
      tagline: 'وكالة ويسلي للتسويق والإنتاج الإعلامي',
      titleLine1: 'سرعة إبداعية للعلامات التجارية التي',
      titleLine2: 'تأبى أن',
      titleHighlight: 'تُتجاهل',
      subtitle:
        'نبتكر هويات بصرية استثنائية، وتصوير طعام احترافي لتطبيقات التوصيل (طلبات وكريم)، وتصميم واجهات منصات الساس (SaaS)، وحملات سوشيال ميديا سينمائية تصنع فارقاً تجارياً حقيقياً.',
      ctaPrimary: 'ابدأ مشروعك الآن',
      ctaSecondary: 'استكشف أعمالنا',
      stats: {
        designs: '+80',
        designsLabel: 'تصميم إبداعي',
        retention: '99.4%',
        retentionLabel: 'معدل رضا واستمرار العملاء',
        photographs: '+200',
        photographsLabel: 'صورة طعام احترافية',
      },
      trustBadge: 'شريك إبداعي موثوق لأبرز العلامات التجارية والشركات',
    },
    services: {
      kicker: 'قدراتنا وخدماتنا الرئيسية',
      heading: 'قوة إبداعية متكاملة لتحقيق الريادة.',
      subtitle: 'أربعة تخصصات احترافية متناغمة مصممة لدفع علامتك التجارية نحو صدارة السوق.',
      startInquiry: 'طلب استشارة في هذه الخدمة',
      items: {
        design: {
          name: 'تصوير الأطعمة والتصميم الإبداعي',
          desc: 'تصوير احترافي للأطباق والمأكولات، تجهيز وتنسيق قوائم تطبيقات التوصيل (طلبات، كريم، جاهز)، وتصميم مطبوعات وإعلانات مبتكرة.',
          deliverablesTitle: 'مخرجات الخدمة',
          impact: 'زيادة بمعدل 3.4x في نسبة التحويل والطلب من القوائم',
        },
        uiux: {
          name: 'واجهات وتجربة المستخدم للمنتجات السحابية (SaaS)',
          desc: 'تصميم منصات السحاب الرقمية ولوحات التحكم المتقدمة، وبناء أنظمة تصميم شاملة واجهات مستخدم فائقة السلاسة.',
          deliverablesTitle: 'مخرجات الخدمة',
          impact: 'تقليص احتكاك المستخدمين بنسبة 86% وزيادة الكفاءة',
        },
        branding: {
          name: 'بناء الهوية البصرية وتصميم التغليف',
          desc: 'تحديد استراتيجية التموضع، تصميم خطوط وشعارات عربية ولاتينية راقية، هندسة عبوات التغليف وإرشادات العلامة.',
          deliverablesTitle: 'مخرجات الخدمة',
          impact: 'إطلاق أكثر من 45 علامة تجارية رائدة في فئتها',
        },
        socialMedia: {
          name: 'إدارة السوشيال ميديا والإنتاج المرئي',
          desc: 'تصوير فيديو سينمائي، فيديوهات ريلز وتيك توك سريعة الانتشار، وإعداد شبكات صور احترافية متناسقة للحسابات.',
          deliverablesTitle: 'مخرجات الخدمة',
          impact: 'أكثر من 22 مليون ظهور وتفاعل عضوي لعملائنا',
        },
      },
    },
    portfolio: {
      kicker: 'أعمال مختارة · 2025–2026 / شواهد واقعية',
      heading: 'أعمال تتحدث عن نفسها.',
      subtitle:
        'استعرض مشاريعنا المنفذة: تصوير قوائم الطعام لتطبيقات التوصيل، تصميم منصة ساس سحابية، هوية متكاملة لملحمة راقية، وحملة 9 صور لكراست برجر.',
      filterAll: 'جميع الأعمال',
      filterDesign: 'تصوير طعام',
      filterUiUx: 'واجهات الساس (UI/UX)',
      filterBranding: 'هوية بصرية',
      filterSocial: 'سوشيال ميديا',
      viewDetails: 'عرض التفاصيل',
      visitWebsite: 'زيارة الموقع الرسمي',
      inquireSimilar: 'طلب مشروع مماثل',
      closePreview: 'إغلاق المعاينة',
      galleryHeading: 'معرض السوشيال ميديا (9 صور احترافية)',
      gallerySubtitle: 'شبكة بصرية متناسقة فائقة الدقة مصممة لرفع التفاعل والطلب عبر إنستغرام وتيك توك.',
      validatedImpact: 'الأثر التجاري الملموس',
      keyScope: 'نطاق العمل المنفذ',
    },
    about: {
      kicker: 'فلسفة ويسلي / المانيفستو الإبداعي',
      heading: 'لا نقدّم تسويقاً شكلياً. بل نبني ميزة تجارية غير قابلة للمنافسة.',
      subtitle:
        'في عصر الامتلاء بالقوالب الجاهزة والفيديوهات السريعة المبتذلة، يتطلب الحضور الحقيقي دقة متناهية، وحرفية عالية، وتوجيهاً إبداعياً جسوراً.',
      pillar1Title: '01. معيار جودة صارم لا مساومة عليه',
      pillar1Desc:
        'نرفض تسليم أي عمل عادي. كل حرف، وشبكة تصميم، وتدرج لوني، ونغمة صوتية تخضع لتدقيق دقيق لترقى لأعلى المقاييس العالمية.',
      pillar2Title: '02. سرعة فائقة دون تعقيد إداري',
      pillar2Desc:
        'الوكالات التقليدية تعطل المشاريع في لجان موافقات لا تنتهي. نحن نعمل كفريق استراتيجي رشيق وسريع ومكرّس لسرعة الإنجاز.',
      pillar3Title: '03. تركيز كامل على العائد التجاري',
      pillar3Desc:
        'الجمال البصري وحده لا يكفي. كل مخرج إبداعي يجب أن يبرر وجوده بدفع مبيعاتك، ورفع قيمة علامتك، وجذب العملاء الفعليين.',
      pillarBadge: 'ثابت لا يتغير',
      pillarOf: 'الركيزة',
    },
    testimonials: {
      kicker: 'شهادات العملاء / نتائج حقيقية',
      heading: 'نجاحنا يُقاس بنتائج شركائنا التجارية.',
      subtitle: 'آراء مؤسسين ومديري تسويق اختاروا العمل مع ويسلي.',
    },
    estimator: {
      kicker: 'حاسبة نطاق المشروع التفاعلية / موجز فوري',
      heading: 'حدّد معالم وتكلفة مشروعك.',
      subtitle: 'اختر الخدمات المطلوبة والجدول الزمني لتوليد مسودة تقديرية لمشروعك بالدينار الأردني (JD).',
      step1Title: '1. اختر التخصصات والخدمات المطلوبة (يمكنك اختيار أكثر من خدمة)',
      step2Title: '2. الإطار الزمني المستهدف للإطلاق',
      step3Title: '3. الميزانية التقديرية للاستثمار (بالدينار الأردني JD)',
      currencyNotice: 'جميع الأسعار والتكاليف محسوبة بالدينار الأردني (JD)',
      blueprintTitle: 'موجز خطة المشروع',
      badgeSprint: 'سبرنت ويسلي',
      selectedDisciplines: 'التخصصات المختارة',
      estimatedTimeline: 'الجدول الزمني التقديري',
      targetAllocation: 'الميزانية التقديرية (JD)',
      perks: [
        'مدير إبداعي مخصص وقائد سبرنت مباشر',
        'ملكية فكرية كاملة وكافة الملفات المصدرية (Figma / ريندر عالي الجودة)',
        'اجتماعات متابعة أسبوعية وقناة تواصل مباشرة عبر واتساب',
      ],
      transferBtn: 'نقل الموجز إلى نموذج الطلب',
      whatsappBtn: 'إرسال الموجز عبر واتساب (+962 7 9912 4684)',
    },
    faq: {
      kicker: 'توضيحات وإجابات / الأسئلة المتكررة',
      heading: 'الأسئلة الشائعة وتفاصيل العمل.',
      subtitle: 'كل ما ترغب بمعرفته حول الشراكة والإنتاج مع وكالة ويسلي.',
    },
    contact: {
      kicker: 'القناة المباشرة / ابدأ التعاون معنا',
      heading: 'دعنا نصنع لعلامتك حضوراً لا يُنسى.',
      subtitle:
        'تواصل معنا مباشرة عبر الهاتف، الواتساب، البريد الإلكتروني، أو املأ نموذج الاستفسار أدناه لنرد عليك خلال ساعتي عمل.',
      phoneTitle: 'الهاتف المباشر والواتساب',
      callNow: 'اتصل الآن',
      whatsappChat: 'محادثة واتساب',
      emailTitle: 'البريد الإلكتروني المباشر',
      openMail: 'فتح تطبيق البريد',
      guaranteeTitle: 'ضمان سرعة الاستجابة',
      guaranteeText:
        'كافة الاستفسارات خلال ساعات العمل تتلقى رداً ومقترحاً أولياً للمكالمة الاستكشافية خلال ساعتين فقط.',
      studioLocation:
        'استوديوهات ويسلي للإنتاج، عمّان، المملكة الأردنية الهاشمية. متاحون لجلسات التصوير في مختلف المحافظات والعمل عن بعد إقليمياً.',
      formTitle: 'إرسال طلب مشروع',
      formSubtitle: 'أخبرنا عن أهداف علامتك، الجدول الزمني المستهدف، والخدمات المطلوبة.',
      disciplinesLabel: 'التخصصات المطلوبة',
      nameLabel: 'الاسم الكريم *',
      namePlaceholder: 'مثال: زيد كريم',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'zaid@company.com',
      phoneLabel: 'رقم الهاتف / واتساب *',
      phonePlaceholder: '+962 7 ...',
      companyLabel: 'اسم الشركة أو العلامة التجارية',
      companyPlaceholder: 'مثال: كراست برجر / ويسكو',
      budgetLabel: 'الميزانية التقديرية بالدينار الأردني (JD)',
      budgetOptions: [
        { value: '100 – 200 JD', label: '100 – 200 دينار' },
        { value: '250 – 500 JD', label: '250 – 500 دينار' },
        { value: '500 – 1,000 JD', label: '500 – 1,000 دينار' },
        { value: '1,000+ JD', label: '1,000+ دينار' },
      ],
      detailsLabel: 'تفاصيل وأهداف المشروع *',
      detailsPlaceholder: 'صف باختصار أهداف مشروعك، أصول علامتك الحالية، موعد الإطلاق المستهدف، أو أي مراجع ملهمة...',
      submitBtn: 'إرسال تفاصيل المشروع',
      sendWhatsappBtn: 'إرسال عبر واتساب',
      successTitle: 'تم استلام طلبك بنجاح',
      successText:
        'شكراً لك! تلقى فريق القيادة الإبداعية تفاصيل طلبك وسيقوم بمراجعة متطلباتك والتواصل معك فوراً.',
      submitAnother: 'إرسال طلب آخر',
    },
    footer: {
      desc: 'وكالة متخصصة في التسويق والإنتاج الإعلامي. نصنع هويات بصرية راسخة، تصوير طعام احترافي، واجهات رقمية للساس، وحملات فيديو سينمائية.',
      location: 'عمّان، الأردن · مشاريع محلية ودولية',
      navTitle: 'روابط الموقع',
      servicesTitle: 'خدماتنا الرئيسية',
      contactTitle: 'الاتصال المباشر',
      rights: 'جميع الحقوق محفوظة.',
    },
    modal: {
      kicker: 'استوديو ويسلي للإنتاج',
      title: 'بدء التعاون في مشروع',
      close: 'إغلاق',
      nameLabel: 'الاسم الكامل *',
      emailLabel: 'البريد الإلكتروني *',
      phoneLabel: 'رقم الهاتف / واتساب *',
      serviceLabel: 'الخدمة الأساسية المطلوبة',
      overviewLabel: 'نبذة عن المشروع',
      cancelBtn: 'إلغاء',
      sendBtn: 'إرسال الطلب',
      successTitle: 'تم تسجيل طلبك',
      successText: 'سنتواصل معك خلال ساعتي عمل. للمتابعة الفورية يمكنك مراسلة فريقنا مباشرة عبر واتساب.',
      continueWhatsapp: 'المتابعة عبر واتساب (+962 7 9912 4684)',
      dismiss: 'إغلاق',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isRtl: boolean;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('whislly_lang');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('whislly_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isRtl = language === 'ar';
  const dir: 'ltr' | 'rtl' = isRtl ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    if (isRtl) {
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.classList.remove('font-arabic');
    }
  }, [language, dir, isRtl]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    isRtl,
    dir,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
