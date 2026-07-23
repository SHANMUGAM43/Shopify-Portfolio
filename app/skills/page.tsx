"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { FadeIn, BlurIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/lib/data";

const categoryStyles = {
  "Commerce Stack": {
    glow: "radial-gradient(circle, rgba(34,197,94,0.28) 0%, rgba(34,197,94,0) 72%)",
    iconBg: "bg-emerald-400/12",
    iconText: "text-emerald-300",
  },
  Frontend: {
    glow: "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0) 72%)",
    iconBg: "bg-sky-400/12",
    iconText: "text-sky-300",
  },
  "Backend & Tools": {
    glow: "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(168,85,247,0) 72%)",
    iconBg: "bg-purple-400/12",
    iconText: "text-purple-300",
  },
} as const;

function SkillIcon({ name }: { name: string }) {
  const common = "w-4 h-4";

  switch (name) {
    case "Shopify":
      return <span className="text-[13px] leading-none">S</span>;
    case "Liquid":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M7 6h10l-4 6 4 6H7l4-6-4-6Z" />
        </svg>
      );
    case "GraphQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="M5 7h14M5 17h14M12 3v18" />
        </svg>
      );
    case "REST API":
    case "APIs":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M8 8h8M8 12h8M8 16h5" />
          <rect x="4" y="5" width="16" height="14" rx="3" />
        </svg>
      );
    case "Custom Apps":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <rect x="4" y="4" width="7" height="7" rx="2" />
          <rect x="13" y="4" width="7" height="7" rx="2" />
          <rect x="4" y="13" width="7" height="7" rx="2" />
          <path d="M16.5 13.5v6M13.5 16.5h6" />
        </svg>
      );
    case "Store Migrations":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M4 7h8M12 17h8M9 4l3 3-3 3M15 14l-3 3 3 3" />
        </svg>
      );
    case "Accessibility":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M7 9h10M12 9v10M8 21l4-6 4 6" />
        </svg>
      );
    case "SEO":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
          <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="8" ry="3.5" />
          <ellipse cx="12" cy="12" rx="8" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "Next.js":
      return <span className="text-[13px] font-semibold leading-none">N</span>;
    case "JavaScript":
      return <span className="text-[11px] font-bold leading-none">JS</span>;
    case "TypeScript":
      return <span className="text-[11px] font-bold leading-none">TS</span>;
    case "Tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M4 9c1.6-2.7 3.3-4 5.2-4 2.8 0 3.2 2 4.8 2 1.1 0 2-.7 3-2 1.6 2.7 1.2 6-1.4 8-1.8 1.4-3.3 1.3-4.7.2-1.3-1-1.8-2.2-3.2-2.2-1.3 0-2.3.8-3.7 2.5" />
        </svg>
      );
    case "PHP":
      return <span className="text-[11px] font-bold leading-none">PHP</span>;
    case "Laravel":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="m6 7 6-3 6 3v10l-6 3-6-3V7Z" />
          <path d="m12 4 6 3-6 3-6-3 6-3Zm0 6v10" />
        </svg>
      );
    case "MySQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <ellipse cx="12" cy="6" rx="6.5" ry="2.5" />
          <path d="M5.5 6v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V6" />
          <path d="M5.5 12v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 3c2.8 3 4 6 4 9.1 0 4.3-2.1 7-4 8.9-1.9-1.9-4-4.6-4-8.9C8 9 9.2 6 12 3Z" />
          <path d="M12 7v11" />
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="m12 3 9 9-9 9-9-9 9-9Z" />
          <path d="M9 9h6M9 15h6M9 9v6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
        </svg>
      );
  }
}

function SkillBadge({ name, category }: { name: string; category: keyof typeof categoryStyles }) {
  const accent = categoryStyles[category];

  return (
    <Badge className="group px-3.5 py-2.5 text-sm font-medium rounded-2xl border-white/10 bg-white/6 text-zinc-200 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <span className="flex items-center gap-2.5">
        <span className={`flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 ${accent.iconBg} ${accent.iconText} transition-transform duration-200 group-hover:scale-105`}>
          <SkillIcon name={name} />
        </span>
        <span>{name}</span>
      </span>
    </Badge>
  );
}

export default function SkillsPage() {
  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <BlurIn delay={0}>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Skills &amp; Expertise
            </p>
          </BlurIn>
          <BlurIn delay={0.08}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              My Technical Stack
            </h1>
          </BlurIn>
          <FadeIn delay={0.18}>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Core technologies I use to build high-quality Shopify storefronts,
              custom integrations and performance-focused frontend experiences.
            </p>
          </FadeIn>
        </div>

        {/* Badge-based skill grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20" staggerDelay={0.12}>
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              variants={staggerItem}
              whileHover={{ scale: 1.01, borderColor: "rgba(168,85,247,0.3)" }}
              transition={{ duration: 0.25 }}
              className="glass group rounded-3xl p-7 border border-white/5 transition-colors duration-300 h-full relative overflow-hidden"
            >
              <div
                className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-[80px] opacity-40 pointer-events-none"
                style={{ background: categoryStyles[category as keyof typeof categoryStyles].glow }}
              />
              <div className="absolute inset-0 bg-linear-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 ${categoryStyles[category as keyof typeof categoryStyles].iconBg} ${categoryStyles[category as keyof typeof categoryStyles].iconText}`}>
                  {category === "Commerce Stack" ? "C" : category === "Frontend" ? "F" : "B"}
                </span>
                <div>
                  <h2 className="text-white font-bold text-base">{category}</h2>
                  <p className="text-xs text-zinc-500 mt-1">{items.length} core skills</p>
                </div>
              </motion.div>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    category={category as keyof typeof categoryStyles}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom callout */}
        <ScaleIn delay={0.2}>
          <div
            className="rounded-3xl p-10 text-center border border-purple-500/15 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.05) 100%)",
            }}
          >
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <h2 className="text-white text-2xl font-bold mb-3 relative">
              Always Learning
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed relative">
              The ecommerce ecosystem evolves fast. I dedicate time each week to
              exploring new Shopify APIs, frontend patterns and performance techniques
              to keep every build on the cutting edge.
            </p>
          </div>
        </ScaleIn>
      </div>
    </PageShell>
  );
}
