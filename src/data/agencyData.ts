/**
 * Whislly Agency Configuration & Content Data
 * 
 * NOTE FOR ASSET REPLACEMENT:
 * You can easily swap any of the asset placeholders below with your actual brand files:
 * 1. Place your files into the /public/assets/ folder (e.g. /public/assets/logo.png, /public/assets/portfolio-1.jpg).
 * 2. Update the paths in the ASSET_PLACEHOLDERS object below if names differ.
 * The application includes graceful styled fallbacks so it renders beautifully even before files are uploaded.
 */

export const AGENCY_INFO = {
  name: "Whislly",
  legalName: "Whislly Media & Marketing Production Ltd.",
  tagline: "Marketing & Media Production Agency",
  heroPunchline: "Creative Velocity for Brands That Refuse to Be Ignored",
  heroDescription:
    "We engineer distinctive brand identities, immersive digital experiences, and cinematic media productions that translate into tangible market share and commercial momentum.",
  
  // Direct Contact Points (Configured as requested)
  contact: {
    phone: "+962 7 9912 4684",
    phoneDisplay: "+962 7 9912 4684",
    phoneCallUrl: "tel:+962799124684",
    whatsappUrl: "https://wa.me/962799124684?text=Hello%20Whislly%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20marketing%20and%20production%20project.",
    email: "info@whislly.com",
    emailMailto: "mailto:info@whislly.com",
    address: "Amman, Jordan — Operating Globally Across MENA, Europe & North America",
    workingHours: "Sun – Thu: 9:00 AM – 6:00 PM (GMT+3)",
    responseGuarantee: "Guaranteed initial review within 2 business hours",
  },

  socials: [
    { name: "Instagram", url: "https://instagram.com/whislly", handle: "@whislly" },
    { name: "LinkedIn", url: "https://linkedin.com/company/whislly", handle: "whislly" },
    { name: "Behance", url: "https://behance.net/whislly", handle: "whislly" },
    { name: "Vimeo", url: "https://vimeo.com/whislly", handle: "whislly" },
    { name: "X (Twitter)", url: "https://x.com/whislly", handle: "@whislly" },
  ],
};

export const ASSET_PLACEHOLDERS = {
  logo: "/assets/logo.png",
  heroBanner: "/assets/hero-banner.jpg",
  portfolio1: "/assets/portfolio-1.jpg",
  portfolio2: "/assets/portfolio-2.jpg",
  portfolio3: "/assets/portfolio-3.jpg",
  portfolio4: "/assets/portfolio-4.jpg",
  portfolio5: "/assets/portfolio-5.jpg",
  portfolio6: "/assets/portfolio-6.jpg",
};

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: "Palette" | "Layout" | "Sparkles" | "Video";
  deliverables: string[];
  impactMetric: string;
  turnaround: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "design",
    number: "01",
    name: "Food Photography & Creative Design",
    shortDesc: "Commercial culinary photography, delivery app menu styling (Talabat, Careem), print collateral, and advertising assets.",
    fullDesc:
      "Culinary imagery that stimulates craving and drives immediate checkouts. We craft mouthwatering food photography, deliverable menus for online food platforms, and high-impact physical and digital promotional collateral.",
    iconName: "Palette",
    deliverables: [
      "Food Apps Menu Photography (Talabat, Careem, Jahez)",
      "Culinary Studio Lighting & Professional Food Styling",
      "Print, Packaging, Billboards & Restaurant Menus",
      "Digital Display Ads & Social Promotional Creatives",
      "High-Res Retouching & Color Grading",
    ],
    impactMetric: "3.4x Average increase in food delivery menu conversion",
    turnaround: "1 – 2 Weeks typical sprint",
  },
  {
    id: "uiux",
    number: "02",
    name: "UI/UX & SaaS Digital Products",
    shortDesc: "Enterprise cloud platforms, intuitive SaaS dashboards, responsive interfaces, and scalable design systems.",
    fullDesc:
      "We build mission-critical SaaS digital interfaces where operational complexity disappears. From micro-interactions to robust design systems like Wiscolab.com, we create software workflows users genuinely love.",
    iconName: "Layout",
    deliverables: [
      "End-to-End SaaS Web Apps & Cloud Dashboards",
      "Design Systems & Component Tokens (Figma)",
      "Interactive Wireframing & Clickable Prototypes",
      "Conversion Rate Optimization (CRO) & Flow Audits",
      "Developer Handover & React/Next.js Tokens",
    ],
    impactMetric: "+86% Reduction in user onboarding friction",
    turnaround: "3 – 5 Weeks per core product",
  },
  {
    id: "branding",
    number: "03",
    name: "Strategic Branding & Packaging",
    shortDesc: "Brand positioning, authentic bilingual Arabic & English typography, packaging architecture, and market leadership.",
    fullDesc:
      "A great brand commands premium pricing and deep customer trust before sales conversations begin. We craft enduring brand systems and packaging architectures, tailored for industry leaders like Rawabi Marj Alhamam Butchery.",
    iconName: "Sparkles",
    deliverables: [
      "Brand Positioning & Competitive Strategy",
      "Logo System & Bespoke Arabic/English Monograms",
      "Packaging Architecture & Label Design",
      "Comprehensive 60+ Page Brand Bible & Guidelines",
      "Retail, Storefront & Environmental Signage",
    ],
    impactMetric: "45+ Category-defining brand launches",
    turnaround: "3 – 4 Weeks comprehensive sprint",
  },
  {
    id: "social-media",
    number: "04",
    name: "Social Media & Media Production",
    shortDesc: "Cinematic commercial shoots, short-form viral Reels/TikTok campaigns, and multi-shot culinary creative galleries.",
    fullDesc:
      "We blend cinema-grade camera production with algorithmic precision. Our media team handles ideation, on-location shooting, sound engineering, color grading, and comprehensive 9-photo social grids like Crust Burgers.",
    iconName: "Video",
    deliverables: [
      "Cinematic Short-Form Video (Reels, TikTok, Shorts)",
      "9-Photo Curated Social Media Grid Campaigns",
      "Commercial Campaign Shoots (RED/ARRI / 4K Cinema)",
      "Monthly Content Calendar & Strategic Scripting",
      "Paid Performance Ad Creatives (UGC & High-End)",
    ],
    impactMetric: "22M+ Verified organic impressions generated",
    turnaround: "Bi-weekly production batches or retainers",
  },
];

export interface CrustBurgerPhoto {
  id: number;
  title: string;
  tag: string;
  description: string;
  accent: string;
}

export const CRUST_BURGERS_PHOTOS: CrustBurgerPhoto[] = [
  {
    id: 1,
    title: "Signature Double Smash Burger",
    tag: "Hero Shoot",
    description: "Crispy lacy edges, melted sharp cheddar, caramelized onions, toasted brioche.",
    accent: "from-amber-600/30 to-blue-900/30",
  },
  {
    id: 2,
    title: "Truffle Parmesan Fries",
    tag: "Sides Spotlight",
    description: "Golden hand-cut russet fries dusted with aged parmesan and truffle glaze.",
    accent: "from-blue-600/30 to-slate-900/40",
  },
  {
    id: 3,
    title: "Loaded Nashville Hot Crispy Chicken",
    tag: "Sandwich Series",
    description: "Cayenne pepper dip, dill pickle chips, creamy slaw, honey butter bun.",
    accent: "from-rose-600/30 to-blue-950/40",
  },
  {
    id: 4,
    title: "Caramelized Onion & Mushroom Melt",
    tag: "Gourmet Line",
    description: "Slow-simmered balsamic mushrooms, gruyere cheese, garlic aioli.",
    accent: "from-amber-700/30 to-blue-900/30",
  },
  {
    id: 5,
    title: "The Crust Signature Sauce Drizzle",
    tag: "Action Macro",
    description: "High-speed macro freeze frame of the smoky house special sauce cascade.",
    accent: "from-orange-600/30 to-blue-950/40",
  },
  {
    id: 6,
    title: "Smoked Bacon BBQ Stack",
    tag: "Heavyweight",
    description: "Thick-cut applewood beef bacon, smoked cheddar, crispy onion rings.",
    accent: "from-red-600/30 to-blue-900/40",
  },
  {
    id: 7,
    title: "Golden Toasted Brioche Tops",
    tag: "Artisan Craft",
    description: "Fluffy sesame brioche freshly seared on pure butter griddle.",
    accent: "from-yellow-600/30 to-blue-950/40",
  },
  {
    id: 8,
    title: "Spicy Jalapeño Smash Crunch",
    tag: "Heat Edition",
    description: "Fresh fire-roasted jalapeños, pepper jack cheese, chipotle crema.",
    accent: "from-emerald-600/30 to-blue-900/40",
  },
  {
    id: 9,
    title: "The Full Crust Feast Flatlay",
    tag: "Complete Grid Finale",
    description: "The complete 9-shot social feed finale combining burgers, dips, shakes and sides.",
    accent: "from-blue-500/30 to-indigo-950/40",
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "Design" | "UI/UX" | "Branding" | "Social Media" | "Video & Media";
  serviceTag: string;
  imagePlaceholder: string;
  assetKey: keyof typeof ASSET_PLACEHOLDERS;
  description: string;
  impactResult: string;
  year: string;
  tags: string[];
  websiteUrl?: string;
  galleryPhotos?: CrustBurgerPhoto[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "ghaith-asmar-food",
    title: "Food Apps Menu Photography",
    client: "Ghaith Restaurant & Asmar Snacks",
    category: "Design",
    serviceTag: "Food Photography & App Menu Styling",
    imagePlaceholder: "portfolio-1.jpg",
    assetKey: "portfolio1",
    description:
      "Comprehensive commercial food photography and delivery apps menu styling for Ghaith Restaurant and Asmar Snacks. Optimized visual layouts for Talabat, Careem, and Jahez with mouthwatering studio lighting that surged order conversion.",
    impactResult: "+185% Increase in menu click-through & delivery orders",
    year: "2026",
    tags: ["Food Photography", "Menu Styling", "Talabat & Careem", "App Conversion"],
  },
  {
    id: "wisco-saas",
    title: "Wisco — Cloud SaaS Operations Platform",
    client: "Wisco (Wiscolab.com)",
    category: "UI/UX",
    serviceTag: "SaaS Product Design & Design System",
    imagePlaceholder: "portfolio-2.jpg",
    assetKey: "portfolio2",
    websiteUrl: "https://wiscolab.com",
    description:
      "End-to-end SaaS product design and design system for Wisco (Wiscolab.com). Crafted enterprise telemetry dashboards, scalable component tokens, multi-tenant workflows, and dark-mode data analytics interfaces.",
    impactResult: "55% Lower user friction & 99.8% customer satisfaction",
    year: "2026",
    tags: ["SaaS Platform", "UI/UX", "Design System", "Wiscolab.com"],
  },
  {
    id: "rawabi-marj-alhamam",
    title: "Rawabi Marj Alhamam Butchery",
    client: "Rawabi Marj Alhamam Butchery",
    category: "Branding",
    serviceTag: "Strategic Brand Identity & Packaging",
    imagePlaceholder: "portfolio-3.jpg",
    assetKey: "portfolio3",
    description:
      "Complete brand overhaul for Rawabi Marj Alhamam Butchery (ملحمة روابي مرج الحمام). Created bespoke bilingual Arabic & English logomark, premium packaging boxes, butcher-wrap graphics, and cohesive retail environmental signage.",
    impactResult: "Category dominance with +95% brand prestige uplift",
    year: "2025",
    tags: ["Brand Identity", "Packaging", "Arabic Typography", "Retail Design"],
  },
  {
    id: "crust-burgers-9shots",
    title: "Crust Burgers — 9-Photo Social Campaign",
    client: "Crust Burgers",
    category: "Social Media",
    serviceTag: "Social Media Campaign & Food Production",
    imagePlaceholder: "portfolio-4.jpg",
    assetKey: "portfolio4",
    description:
      "High-energy social media production and 9-photo feed curation for Crust Burgers. Engineered an appetizing aesthetic grid featuring smash burgers, crispy fries, action sauce drizzles, and viral short-form Reels.",
    impactResult: "3.4M Organic views & +340% social engagement surge",
    year: "2026",
    tags: ["9-Photo Grid", "Food Video", "Instagram Campaign", "Viral Reels"],
    galleryPhotos: CRUST_BURGERS_PHOTOS,
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    title: "01. Ruthless Quality Standard",
    description:
      "We refuse to ship decorative mediocrity. Every typeface, layout grid, sound sting, and color gradient is scrutinized to withstand international scrutiny.",
  },
  {
    title: "02. Speed Without Bloat",
    description:
      "Traditional agencies trap projects in endless bureaucratic approval committees. We operate as an elite strike squad: lean, rapid, and fiercely committed to delivery velocity.",
  },
  {
    title: "03. Commercial Intent",
    description:
      "Aesthetic beauty is only half the equation. Every piece of creative output must justify its existence by advancing your commercial pipeline, valuation, or customer retention.",
  },
];

export const AGENCY_STATS = [
  { value: "80+", label: "Designs", detail: "Brand systems & digital collaterals" },
  { value: "99.4%", label: "Client Retention Rate", detail: "Long-term client partnerships" },
  { value: "200+", label: "Food Photographs", detail: "Commercial culinary productions" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Whislly completely transformed our food presentation across Talabat and Careem. Our click-to-order rate doubled in weeks.",
    author: "Ghaith Al-Khatib",
    role: "Founder & GM",
    company: "Ghaith Restaurant & Asmar Snacks",
    project: "Food Apps Photography & Styling",
  },
  {
    quote:
      "The UI/UX design and design system Whislly engineered for Wiscolab.com elevated our enterprise SaaS platform to Silicon Valley standards.",
    author: "Rami Haddad",
    role: "Chief Technology Officer",
    company: "Wisco (Wiscolab.com)",
    project: "SaaS Product Design & System",
  },
  {
    quote:
      "The rebranding of Rawabi Marj Alhamam Butchery gave us instant prestige and recognition. Customers constantly praise the packaging and visual identity.",
    author: "Abu Ahmad",
    role: "Managing Director",
    company: "Rawabi Marj Alhamam Butchery",
    project: "Brand Identity & Packaging",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is Whislly's typical project timeline?",
    answer:
      "For individual service sprints (e.g. food photography or product UI/UX), our turnaround is typically 1 to 3 weeks. Comprehensive brand identities or SaaS architectures take 3 to 5 weeks. We also offer monthly dedicated retainers.",
  },
  {
    question: "How do we collaborate if we are based outside Amman?",
    answer:
      "We operate globally across Jordan, the GCC (Saudi Arabia, UAE), and internationally. We use streamlined asynchronous workflows (Slack, Figma, Frame.io) alongside scheduled strategy calls to ensure crystal-clear execution.",
  },
  {
    question: "Can I swap the placeholder images with my own portfolio files?",
    answer:
      "Yes! The codebase is structured with clean placeholder references (logo.png, portfolio-1.jpg through portfolio-6.jpg). You can drop your images into the public/assets directory or update the image paths in src/data/agencyData.ts.",
  },
  {
    question: "What is required to initiate a project?",
    answer:
      "Simply submit the inquiry form below, send an email to info@whislly.com, or tap the WhatsApp / phone button (+962 7 9912 4684). We will review your brief and present a tailored proposal within 2 business hours.",
  },
];
