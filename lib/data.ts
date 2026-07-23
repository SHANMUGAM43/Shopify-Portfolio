export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const skills = {
  "Shopify & Commerce": [
    { name: "Shopify", level: 97 },
    { name: "Liquid", level: 96 },
    { name: "Accessibility", level: 90 },
    { name: "SEO", level: 88 },
  ],
  "Frontend": [
    { name: "JavaScript", level: 94 },
    { name: "React", level: 93 },
    { name: "Next.js", level: 92 },
    { name: "HTML", level: 97 },
    { name: "CSS", level: 95 },
    { name: "Tailwind", level: 94 },
  ],
  "Backend & Tools": [
    { name: "PHP", level: 88 },
    { name: "Laravel", level: 86 },
    { name: "MySQL", level: 84 },
    { name: "GraphQL", level: 87 },
    { name: "REST API", level: 90 },
    { name: "Git", level: 95 },
    { name: "GitHub", level: 95 },
  ],
};

export const experiences = [
  {
    role: "Software Engineer II",
    company: "Photon",
    period: "Aug 2025 — Present",
    location: "Chennai, Tamil Nadu · On-site",
    description:
      "Shopify projects enhancement including custom feature development and performance optimisation. Led theme redesign initiatives to improve UI/UX and responsiveness. Developed and maintained private Shopify apps for business-specific needs.",
    achievements: [
      "Led theme redesign initiatives improving UI/UX and responsiveness",
      "Developed and maintained private Shopify apps for business-specific needs",
      "Implemented Storefront APIs, REST APIs and GraphQL APIs for third-party integrations",
      "Extended store functionalities through seamless API integration",
    ],
    tech: ["Shopify", "Liquid", "Storefront API", "GraphQL", "REST API", "JavaScript"],
  },
  {
    role: "Senior Software Engineer",
    company: "Novac Technology Solutions",
    period: "Feb 2024 — Aug 2025",
    location: "Chennai, Tamil Nadu · On-site",
    description:
      "Specialised in Fintech projects, independently managing the K-One (Knowledge One) platform — a comprehensive solution that optimises customer support processes with real-time call management and advanced analytics.",
    achievements: [
      "Designed and developed a robust ticketing system for managing customer issues",
      "Implemented real-time call management features improving service experience",
      "Built an integrated knowledge bank with FAQs and product details",
      "Introduced advanced data analytics tools for monitoring customer interactions",
      "Leveraged Laravel's scalability to handle increasing support volumes securely",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST API"],
  },
  {
    role: "Software Programmer",
    company: "Innoppl Inc.",
    period: "Aug 2022 — Feb 2024",
    location: "Chennai, Tamil Nadu · On-site",
    description:
      "Contributed to and handled 20+ Shopify and Shopify Plus projects — including e-commerce store migrations, theme redesigns and custom app development integrated with Shopify stores.",
    achievements: [
      "Successfully delivered 20+ Shopify and Shopify Plus projects",
      "Handled e-commerce store migrations to Shopify and theme redesign projects",
      "Built custom apps using Laravel and MySQL integrated with Shopify stores",
      "Integrated Shopify REST APIs, GraphQL and AJAX APIs",
      "Actively worked on JIRA, GitHub with hands-on code review and debugging",
    ],
    tech: ["Shopify Plus", "Liquid", "Laravel", "MySQL", "GraphQL", "REST API", "GitHub"],
  },
  {
    role: "Junior Software Developer",
    company: "YESINFOVEE TECH",
    period: "Jan 2021 — Mar 2022",
    location: "Namakkal, Tamil Nadu · Hybrid",
    description:
      "Worked on 5+ web development projects using HTML, CSS, JavaScript, PHP and MySQL. Built responsive websites, dynamic web apps and custom backend features.",
    achievements: [
      "Delivered 5+ web development projects end-to-end",
      "Built responsive websites and dynamic web applications",
      "Created custom backend features with PHP and MySQL",
      "Integrated front-end interfaces with server-side logic",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export const projects = [
  // ── US & UK ──────────────────────────────────────────────
  {
    title: "Kylie Cosmetics",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Full Shopify Plus storefront for Kylie Jenner's beauty brand. Custom Liquid sections, interactive components, VTO integration and advanced product filtering.",
    tags: ["Shopify Plus", "Liquid", "JavaScript", "Webpack"],
    link: "https://kyliecosmetics.com/",
    screenshot: "/projects/kyliecosmetics.png",
    featured: true,
  },
  {
    title: "Philosophy",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Premium skincare brand storefront with accessibility-first design (WCAG 2.1 AA), custom mega-menu, advanced carousel components and screen-reader optimisations.",
    tags: ["Shopify Plus", "Liquid", "Accessibility"],
    link: "https://philosophy.com/",
    screenshot: "/projects/philosophy.png",
    featured: true,
  },
  {
    title: "Orveda",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Luxury skincare brand storefront with editorial layouts, bespoke animations and high-performance Shopify Plus architecture.",
    tags: ["Shopify Plus", "Liquid", "JavaScript"],
    link: "https://orveda.com/",
    screenshot: "/projects/orveda.png",
    featured: true,
  },
  {
    title: "Infiniment Coty",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Flagship Coty fragrance brand store featuring immersive product storytelling, custom PLP card components and responsive layouts.",
    tags: ["Shopify Plus", "Liquid", "Tailwind CSS"],
    link: "https://eu.infinimentcoty.com/",
    screenshot: "/projects/infinimentcoty.png",
    featured: false,
  },
  {
    title: "Proclamation Jewelry",
    category: "Shopify",
    region: "US & UK",
    description:
      "Custom Shopify storefront for a fine jewellery brand, featuring rich product pages, personalisation options and a seamless checkout experience.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://www.proclamationjewelry.com/",
    screenshot: "/projects/proclamationjewelry.png",
    featured: false,
  },
  {
    title: "Chocolat Moderne",
    category: "Shopify",
    region: "US & UK",
    description:
      "Artisan chocolate e-commerce store with custom gifting features, product bundles and an elegant brand experience built on Shopify.",
    tags: ["Shopify", "Liquid", "CSS"],
    link: "https://chocolatmoderne.com/",
    screenshot: "/projects/chocolatmoderne.png",
    featured: false,
  },
  {
    title: "Elite Shield",
    category: "Shopify",
    region: "US & UK",
    description:
      "Protective equipment Shopify store with custom filtering, product variant management and performance-optimised pages.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://www.eliteshield.com/",
    screenshot: "/projects/eliteshield.png",
    featured: false,
  },
  {
    title: "WaterChef",
    category: "Shopify",
    region: "US & UK",
    description:
      "Water filtration brand store with subscription product support, technical comparison tables and a clean, conversion-focused layout.",
    tags: ["Shopify", "Liquid", "REST API"],
    link: "https://www.waterchef.com/",
    screenshot: "/projects/waterchef.png",
    featured: false,
  },
  {
    title: "Bemoxe",
    category: "Shopify",
    region: "US & UK",
    description:
      "Fashion brand Shopify store featuring custom theme development, lookbook sections and mobile-first responsive design.",
    tags: ["Shopify", "Liquid", "CSS"],
    link: "https://bemoxe.com/",
    screenshot: "/projects/bemoxe.png",
    featured: false,
  },
  {
    title: "Hold The Magic",
    category: "Shopify",
    region: "US & UK",
    description:
      "Lifestyle and wellness Shopify store with custom theme development, engaging product storytelling and a conversion-optimised shopping experience.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://holdthemagic.com/",
    screenshot: "/projects/holdthemagic.png",
    featured: false,
  },
  {
    title: "Silver N Gifts",
    category: "Shopify",
    region: "US & UK",
    description:
      "Silver jewellery and gifts Shopify storefront with custom collection layouts, product variant management and a refined brand aesthetic.",
    tags: ["Shopify", "Liquid", "CSS"],
    link: "https://silverngifts.com/",
    screenshot: "/projects/silverngifts.png",
    featured: false,
  },
  {
    title: "Pure Nootropics",
    category: "Shopify",
    region: "US & UK",
    description:
      "Health and nootropics supplement Shopify store with detailed product pages, subscription support and a clean, trust-focused design.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://www.purenootropics.net",
    screenshot: "/projects/purenootropics.png",
    featured: false,
  },
  {
    title: "Aviva Stanoff",
    category: "Shopify",
    region: "US & UK",
    description:
      "Luxury textile and wallpaper brand storefront with editorial design, custom collection layouts and high-end visual presentation.",
    tags: ["Shopify", "Liquid", "CSS"],
    link: "https://avivastanoff.com",
    screenshot: "/projects/avivastanoff.png",
    featured: false,
  },
  {
    title: "Gesner",
    category: "Shopify",
    region: "US & UK",
    description:
      "Custom Shopify storefront with tailored product pages, brand-aligned design and seamless user experience.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://gesner.com/",
    screenshot: "/projects/gesner.png",
    featured: false,
  },
  {
    title: "Sizzix",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Shopify Plus store for a leading craft cutting machine brand, featuring complex product variations, tutorials integration and a high-volume catalogue.",
    tags: ["Shopify Plus", "Liquid", "JavaScript"],
    link: "https://www.sizzix.com/",
    screenshot: "/projects/sizzix.png",
    featured: false,
  },
  {
    title: "Optica Africa",
    category: "Shopify",
    region: "US & UK",
    description:
      "Eyewear e-commerce storefront serving the African market with virtual try-on features, prescription management and localised experience.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://optica.africa/",
    screenshot: "/projects/optica.png",
    featured: false,
  },
  // ── Asia ─────────────────────────────────────────────────
  {
    title: "Cable Ties Unlimited",
    category: "Shopify",
    region: "Asia",
    description:
      "B2B e-commerce store for industrial cable tie products with bulk ordering, custom pricing tiers and a comprehensive product catalogue.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://www.cabletiesunlimited.com/",
    screenshot: "/projects/cabletiesunlimited.png",
    featured: false,
  },
  {
    title: "Cable Ties Supply",
    category: "Shopify",
    region: "Asia",
    description:
      "Industrial supply Shopify store with wholesale features, category-based navigation and a streamlined B2B checkout.",
    tags: ["Shopify", "Liquid", "CSS"],
    link: "https://cabletiesupply.com/",
    screenshot: "/projects/cabletiesupply.png",
    featured: false,
  },
  {
    title: "Nikshitha",
    category: "Shopify",
    region: "Asia",
    description:
      "Fashion and lifestyle Shopify store catering to the South Asian market with custom collection pages and a mobile-first design approach.",
    tags: ["Shopify", "Liquid", "CSS"],
    link: "https://nikshitha.com/",
    screenshot: "/projects/nikshitha.png",
    featured: false,
  },
];

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Shopify Projects" },
  { value: "4", label: "Companies" },
  { value: "95+", label: "Avg Lighthouse Score" },
];
