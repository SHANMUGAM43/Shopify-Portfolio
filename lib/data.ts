export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const skills = {
  "Commerce Stack": [
    "Shopify",
    "Liquid",
    "GraphQL",
    "REST API",
    "Custom Apps",
    "Store Migrations",
    "Accessibility",
    "SEO",
  ],
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"],
  "Backend & Tools": ["PHP", "Laravel", "APIs", "MySQL", "MongoDB", "Git"],
};

export const experiences = [
  {
    role: "Software Engineer II",
    company: "Photon",
    period: "Aug 2025 — Present",
    location: "Chennai, Tamil Nadu · On-site",
    description:
      "Delivering Shopify Plus enhancements focused on accessibility, search experience and storefront performance.",
    achievements: [
      "Shopify Plus development for scalable storefront enhancements",
      "Accessibility implementation aligned with WCAG guidelines",
      "Algolia integration for faster and more relevant product discovery",
      "Performance optimization across key customer journeys",
      "Custom section and metafield development for flexible content",
    ],
    tech: ["Shopify", "Liquid", "Storefront API", "GraphQL", "REST API", "JavaScript"],
  },
  {
    role: "Senior Software Engineer",
    company: "Novac Technology Solutions",
    period: "Feb 2024 — Aug 2025",
    location: "Chennai, Tamil Nadu · On-site",
    description:
      "Led Fintech platform development focused on support automation and scalable backend architecture.",
    achievements: [
      "Built a production-grade ticketing workflow for customer issue management",
      "Implemented real-time call management to improve support operations",
      "Developed an integrated knowledge base for FAQs and product references",
      "Introduced analytics dashboards for customer interaction insights",
      "Scaled Laravel and MySQL architecture for growing support traffic",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST API"],
  },
  {
    role: "Software Programmer",
    company: "Innoppl Inc.",
    period: "Aug 2022 — Feb 2024",
    location: "Chennai, Tamil Nadu · On-site",
    description:
      "Delivered Shopify and Shopify Plus projects across migration, customization and app integration workstreams.",
    achievements: [
      "Delivered 20+ Shopify and Shopify Plus implementations",
      "Executed store migrations with minimal downtime and data risk",
      "Developed custom Laravel apps integrated with Shopify workflows",
      "Implemented REST, GraphQL and AJAX integrations for storefront features",
      "Led debugging and code review cycles using JIRA and GitHub",
    ],
    tech: ["Shopify Plus", "Liquid", "Laravel", "MySQL", "GraphQL", "REST API", "GitHub"],
  },
  {
    role: "Junior Software Developer",
    company: "YESINFOVEE TECH",
    period: "Jan 2021 — Mar 2022",
    location: "Namakkal, Tamil Nadu · Hybrid",
    description:
      "Built web products end-to-end with responsive UI delivery and backend feature implementation.",
    achievements: [
      "Delivered 5+ web projects from development to release",
      "Built responsive websites and dynamic application interfaces",
      "Implemented custom backend modules using PHP and MySQL",
      "Integrated frontend experiences with server-side logic",
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
      "Shopify Plus experience for a global beauty brand with accessibility-first architecture, custom merchandising blocks and performance-led UX.",
    tags: ["Shopify Plus", "Liquid", "Accessibility", "Performance", "Metafields", "Custom Sections"],
    contribution: [
      "Built reusable custom sections and metafield-driven content blocks",
      "Implemented Liquid architecture updates for campaign flexibility",
      "Improved accessibility patterns across navigation and product interactions",
    ],
    challenges: [
      "Balancing rich visual storytelling with fast page performance",
      "Keeping dynamic merchandising components maintainable for content teams",
    ],
    results: [
      "Improved section reusability and reduced release effort for campaigns",
      "Enhanced storefront speed and accessibility compliance across key templates",
    ],
    link: "https://kyliecosmetics.com/",
    screenshot: "/projects/kyliecosmetics.png",
    featured: true,
  },
  {
    title: "Philosophy",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Responsive redesign delivery for a premium skincare storefront with refined PDP and collection page experiences.",
    tags: ["Shopify Plus", "Liquid", "Responsive Redesign", "PDP", "Collection Pages", "Performance"],
    contribution: [
      "Delivered responsive redesign updates across core templates",
      "Enhanced PDP UX and conversion-focused merchandising structure",
      "Refactored collection page rendering for better mobile flow",
    ],
    challenges: [
      "Maintaining premium visual quality while improving template speed",
      "Coordinating design parity across multiple breakpoints",
    ],
    results: [
      "Improved mobile usability and engagement on PDP and collection pages",
      "Reduced layout inconsistency issues across devices",
    ],
    link: "https://philosophy.com/",
    screenshot: "/projects/philosophy.png",
    featured: true,
  },
  {
    title: "Orveda",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Luxury UI implementation on Shopify Plus with SEO-conscious page structure and accessibility-focused interactions.",
    tags: ["Shopify Plus", "Luxury UI", "Shopify Sections", "SEO", "Accessibility"],
    contribution: [
      "Implemented luxury-themed UI components using modular Shopify sections",
      "Applied semantic content structure to improve SEO indexing",
      "Upgraded interactive modules for keyboard and screen-reader accessibility",
    ],
    challenges: [
      "Preserving high-end motion and visuals without sacrificing performance",
      "Maintaining accessibility consistency in animation-rich layouts",
    ],
    results: [
      "Improved visual consistency across editorial and commerce templates",
      "Strengthened SEO and accessibility baseline for long-term growth",
    ],
    link: "https://orveda.com/",
    screenshot: "/projects/orveda.png",
    featured: true,
  },
  {
    title: "Infiniment Coty",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Flagship fragrance storefront with advanced PLP/PDP experiences, Algolia-powered discovery and premium interaction design.",
    tags: ["Shopify Plus", "Algolia", "Accessibility", "Fireworks", "Theme Customization", "PLP/PDP"],
    contribution: [
      "Implemented PLP and PDP component customizations for campaign-led merchandising",
      "Integrated Algolia for faster search and category discovery experiences",
      "Delivered theme customization and animation treatments including Fireworks sections",
    ],
    challenges: [
      "Coordinating fast product discovery with rich visual storytelling",
      "Ensuring accessibility behavior across custom search and filter states",
    ],
    results: [
      "Improved on-site discovery flow and product findability",
      "Enabled flexible campaign updates through modular theme architecture",
    ],
    link: "https://eu.infinimentcoty.com/",
    screenshot: "/projects/infinimentcoty.png",
    featured: false,
  },
  {
    title: "Proclamation Jewelry",
    category: "Shopify",
    region: "US & UK",
    description:
      "Custom jewelry storefront featuring bespoke product personalization and high-trust testimonial storytelling.",
    tags: ["Shopify", "Liquid", "JavaScript", "Store Migration", "Custom Jewelry Form", "Testimonials"],
    contribution: [
      "Built custom jewelry design request form tied to product and variant context",
      "Implemented custom testimonials section for social proof on key templates",
      "Supported Store Migration with data and content structure alignment",
    ],
    challenges: [
      "Capturing complex personalization details in a user-friendly form flow",
      "Migrating legacy content while retaining SEO-relevant structure",
    ],
    results: [
      "Improved lead quality for custom jewelry inquiries",
      "Increased trust signals with rich testimonial placements",
    ],
    link: "https://www.proclamationjewelry.com/",
    screenshot: "/projects/proclamationjewelry.png",
    featured: false,
  },
  {
    title: "Chocolat Moderne",
    category: "Shopify",
    region: "US & UK",
    description:
      "Artisan gifting storefront with advanced gift-box configuration and campaign-ready merchandising sections.",
    tags: ["Shopify", "Liquid", "CSS", "Store Migration", "Advanced Giftbox Section"],
    contribution: [
      "Built advanced giftbox customized section for curated gifting combinations",
      "Implemented storefront refinements for seasonal gifting campaigns",
      "Supported Store Migration and structure validation across collections",
    ],
    challenges: [
      "Managing combinational gift options without confusing user flow",
      "Retaining product metadata consistency during migration",
    ],
    results: [
      "Improved gift product discoverability and customization clarity",
      "Reduced merchandising update effort for campaign launches",
    ],
    link: "https://chocolatmoderne.com/",
    screenshot: "/projects/chocolatmoderne.png",
    featured: false,
  },
  {
    title: "Elite Shield",
    category: "Shopify",
    region: "US & UK",
    description:
      "Protective equipment storefront with advanced YMM discovery and performance-optimized catalog journeys.",
    tags: ["Shopify", "Liquid", "JavaScript", "Store Migration", "Advanced YMM"],
    contribution: [
      "Implemented advanced YMM (Year Make Model) search for product compatibility",
      "Optimized collection filters and variant handling for faster path-to-purchase",
      "Executed Store Migration support and navigation mapping",
    ],
    challenges: [
      "Mapping fitment logic accurately across large catalog data",
      "Balancing complex filtering with fast page response",
    ],
    results: [
      "Improved product compatibility discovery for high-intent users",
      "Reduced friction in fitment-based product selection",
    ],
    link: "https://www.eliteshield.com/",
    screenshot: "/projects/eliteshield.png",
    featured: false,
  },
  {
    title: "WaterChef",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Water filtration storefront with subscription support, technical comparison UX and migration-led platform improvements.",
    tags: ["Shopify Plus", "Liquid", "REST API", "Store Migration"],
    contribution: [
      "Built technical comparison modules for product decision support",
      "Enhanced subscription and recurring-purchase user flow",
      "Contributed to Store Migration and legacy content adaptation",
    ],
    challenges: [
      "Presenting technical data clearly for non-technical shoppers",
      "Migrating structured product data without compatibility regressions",
    ],
    results: [
      "Improved clarity in product selection journeys",
      "Strengthened post-migration reliability across product pages",
    ],
    link: "https://www.waterchef.com/",
    screenshot: "/projects/waterchef.png",
    featured: false,
  },
  {
    title: "Bemoxe",
    category: "Shopify",
    region: "US & UK",
    description:
      "Fashion storefront built with custom theme architecture, lookbook storytelling and migration-backed rollout.",
    tags: ["Shopify", "Liquid", "CSS", "Store Migration"],
    contribution: [
      "Built custom theme sections for lookbook and campaign storytelling",
      "Refined responsive behavior for mobile-first shopping journeys",
      "Supported Store Migration and template parity checks",
    ],
    challenges: [
      "Maintaining design precision across diverse image-led layouts",
      "Ensuring migrated content rendered consistently on new templates",
    ],
    results: [
      "Improved visual merchandising consistency across collections",
      "Reduced post-launch template issues after migration",
    ],
    link: "https://bemoxe.com/",
    screenshot: "/projects/bemoxe.png",
    featured: false,
  },
  {
    title: "Hold The Magic",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Lifestyle storefront with narrative product storytelling and migration-assisted template modernization.",
    tags: ["Shopify Plus", "Liquid", "JavaScript", "Store Migration"],
    contribution: [
      "Implemented conversion-focused storytelling blocks and product modules",
      "Enhanced interactive storefront behavior with custom scripts",
      "Assisted Store Migration and collection data mapping",
    ],
    challenges: [
      "Balancing storytelling depth with conversion-focused page flow",
      "Preserving SEO-friendly URLs and structure during migration",
    ],
    results: [
      "Improved campaign presentation quality across landing templates",
      "Delivered smoother post-migration navigation and indexing continuity",
    ],
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
    contribution: [
      "Built custom collection layouts for gift-centric browsing",
      "Improved variant display logic for product clarity",
    ],
    challenges: [
      "Coordinating gift catalog presentation across broad assortments",
    ],
    results: [
      "Enhanced browsing flow and category-level merchandising consistency",
    ],
    link: "https://silverngifts.com/",
    screenshot: "/projects/silverngifts.png",
    featured: false,
  },
  {
    title: "Pure Nootropics",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Health and nootropics supplement Shopify store with detailed product pages, subscription support and a clean, trust-focused design.",
    tags: ["Shopify Plus", "Liquid", "JavaScript"],
    contribution: [
      "Implemented trust-oriented PDP content modules and comparison content",
      "Enhanced subscription UX and recurring order flow",
    ],
    challenges: [
      "Presenting compliance-conscious product information clearly",
    ],
    results: [
      "Improved readability and trust signals on high-intent product pages",
    ],
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
    contribution: [
      "Built editorial-style collection templates for luxury browsing",
      "Implemented visual hierarchy refinements for premium storytelling",
    ],
    challenges: [
      "Maintaining performance with media-rich luxury layouts",
    ],
    results: [
      "Improved premium brand presentation while preserving storefront usability",
    ],
    link: "https://avivastanoff.com",
    screenshot: "/projects/avivastanoff.png",
    featured: false,
  },
  {
    title: "Gesner",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Custom Shopify storefront with tailored product pages, brand-aligned design and seamless user experience.",
    tags: ["Shopify Plus", "Liquid", "JavaScript"],
    contribution: [
      "Developed tailored product templates aligned to brand content needs",
      "Implemented custom interaction behavior for key commerce blocks",
    ],
    challenges: [
      "Translating brand-specific requirements into reusable theme components",
    ],
    results: [
      "Improved maintainability of custom storefront modules",
    ],
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
    contribution: [
      "Handled high-volume catalog template optimization and variant UX",
      "Integrated tutorials and educational content with commerce templates",
    ],
    challenges: [
      "Supporting complex variant combinations at scale",
    ],
    results: [
      "Improved catalog navigation and template consistency for large assortments",
    ],
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
    contribution: [
      "Implemented localization-aware storefront behavior and content handling",
      "Supported eyewear-specific product flow enhancements",
    ],
    challenges: [
      "Balancing regional UX needs with consistent product template structure",
    ],
    results: [
      "Improved product discovery and localized browsing experience",
    ],
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
    contribution: [
      "Built B2B-focused ordering flows for bulk and tiered pricing use cases",
      "Optimized category architecture for large industrial catalogs",
    ],
    challenges: [
      "Simplifying complex industrial catalog navigation for wholesale buyers",
    ],
    results: [
      "Improved B2B order flow usability and catalog findability",
    ],
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
    contribution: [
      "Implemented wholesale-friendly layout patterns and category logic",
      "Refined checkout journey for repeat B2B customers",
    ],
    challenges: [
      "Balancing speed and clarity across dense category hierarchies",
    ],
    results: [
      "Improved wholesale navigation efficiency and conversion flow",
    ],
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
    contribution: [
      "Designed mobile-first collection and merchandising templates",
      "Built custom content sections for regional campaign storytelling",
    ],
    challenges: [
      "Maintaining visual consistency across mobile-first, image-heavy pages",
    ],
    results: [
      "Improved mobile storefront readability and merchandising quality",
    ],
    link: "https://nikshitha.com/",
    screenshot: "/projects/nikshitha.png",
    featured: false,
  },
  {
    title: "Metal Detector",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Specialty commerce storefront for detector equipment with product-rich navigation and performance-focused buying flows.",
    tags: ["Shopify Plus", "Liquid", "JavaScript"],
    contribution: [
      "Implemented product template and collection refinements for accessory-heavy catalogs",
      "Enhanced storefront interactions for faster product comparison and selection",
    ],
    challenges: [
      "Managing deep catalog discoverability without overwhelming first-time users",
    ],
    results: [
      "Improved product navigation clarity and shopping flow consistency",
    ],
    link: "https://www.metaldetector.com/",
    screenshot: "/projects/metaldetector.png",
    featured: false,
  },
  {
    title: "Built",
    category: "Shopify Plus",
    region: "US & UK",
    description:
      "Premium brand storefront delivered on Shopify Plus with modern UX, conversion-focused merchandising and scalable content control.",
    tags: ["Shopify Plus", "Liquid", "Theme Customization"],
    contribution: [
      "Delivered Shopify Plus theme customizations for campaign and product storytelling",
      "Built reusable blocks to speed up merchandising updates across templates",
    ],
    challenges: [
      "Balancing premium visual design with fast, responsive storefront behavior",
    ],
    results: [
      "Improved launch agility for campaigns with modular section architecture",
    ],
    link: "https://built.com/",
    screenshot: "/projects/built.png",
    featured: false,
  },
  {
    title: "Lovers Tempo",
    category: "Shopify",
    region: "US & UK",
    description:
      "Jewelry storefront with elegant merchandising layouts and conversion-oriented product presentation patterns.",
    tags: ["Shopify", "Liquid", "CSS"],
    contribution: [
      "Refined collection and PDP layouts for stronger product storytelling",
      "Implemented UI adjustments to improve mobile browsing continuity",
    ],
    challenges: [
      "Keeping visual elegance while preserving fast browsing and load speed",
    ],
    results: [
      "Improved readability and merchandising consistency across devices",
    ],
    link: "https://loverstempo.com/",
    screenshot: "/projects/loverstempo.png",
    featured: false,
  },
  {
    title: "My Celavi",
    category: "Shopify",
    region: "US & UK",
    description:
      "Lifestyle and wellness storefront with focused landing experiences and conversion-friendly content structure.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    contribution: [
      "Implemented custom sections for campaign-focused landing pages",
      "Improved content hierarchy for clearer product positioning",
    ],
    challenges: [
      "Aligning brand storytelling with direct response commerce layouts",
    ],
    results: [
      "Improved campaign page usability and product message clarity",
    ],
    link: "https://mycelavi.com/",
    screenshot: "/projects/mycelavi.png",
    featured: false,
  },
  {
    title: "RapidLash",
    category: "Shopify",
    region: "US & UK",
    description:
      "Beauty ecommerce storefront optimized for product education, trust signals and repeat purchase UX.",
    tags: ["Shopify", "Liquid", "SEO"],
    contribution: [
      "Enhanced PDP information hierarchy for benefit-led product communication",
      "Applied template-level SEO and content structure improvements",
    ],
    challenges: [
      "Presenting compliance-sensitive beauty claims clearly across templates",
    ],
    results: [
      "Improved product page clarity and trust-focused content presentation",
    ],
    link: "https://rapidlash.com/",
    screenshot: "/projects/rapidlash.png",
    featured: false,
  },
  {
    title: "Real Purity",
    category: "Shopify",
    region: "US & UK",
    description:
      "Skincare storefront with clean UI patterns, content-led merchandising and conversion-ready product templates.",
    tags: ["Shopify", "Liquid", "Theme Customization"],
    contribution: [
      "Implemented template customizations for category and PDP consistency",
      "Improved reusable section structure for faster content updates",
    ],
    challenges: [
      "Maintaining a minimal aesthetic while supporting rich commerce content",
    ],
    results: [
      "Improved maintainability and visual consistency across key storefront pages",
    ],
    link: "https://www.realpurity.com/",
    screenshot: "/projects/realpurity.png",
    featured: false,
  },
];

export const stats = [
  { value: "5+", label: "Years" },
  { value: "30+", label: "Shopify Features" },
  { value: "20+", label: "Production Stores" },
  { value: "95+", label: "Accessibility Score" },
];

export const projectCompanyReferenceByTitle: Record<string, "Photon" | "Own" | "Innoppl"> = {
  "Kylie Cosmetics": "Photon",
  "Philosophy": "Photon",
  Orveda: "Photon",
  "Infiniment Coty": "Photon",
  Nikshitha: "Own",
  "Cable Ties Unlimited": "Own",
  "Cable Ties Supply": "Own",
};

export function getProjectCompanyReference(projectTitle: string): "Photon" | "Own" | "Innoppl" {
  return projectCompanyReferenceByTitle[projectTitle] ?? "Innoppl";
}

export function sortProjectsByPriority<T extends { title: string; category: string }>(projectList: T[]): T[] {
  const companyRank: Record<"Photon" | "Innoppl" | "Own", number> = {
    Photon: 0,
    Innoppl: 1,
    Own: 2,
  };

  return [...projectList].sort((a, b) => {
    const aCompanyRank = companyRank[getProjectCompanyReference(a.title)];
    const bCompanyRank = companyRank[getProjectCompanyReference(b.title)];

    if (aCompanyRank !== bCompanyRank) {
      return aCompanyRank - bCompanyRank;
    }

    const aCategoryRank = a.category === "Shopify Plus" ? 0 : 1;
    const bCategoryRank = b.category === "Shopify Plus" ? 0 : 1;

    if (aCategoryRank !== bCategoryRank) {
      return aCategoryRank - bCategoryRank;
    }

    return a.title.localeCompare(b.title);
  });
}
