"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { FadeIn, StaggerContainer, staggerItem, BlurIn, ScaleIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const values = [
  { title: "Performance First", description: "Every build targets 90+ Lighthouse scores. Fast stores convert better — always.", icon: "⚡" },
  { title: "Accessibility", description: "WCAG 2.1 AA compliance on every project. Commerce should be usable by everyone.", icon: "♿" },
  { title: "Clean Code", description: "Maintainable, documented and scalable code that teams can build on for years.", icon: "🧹" },
  { title: "Pixel Perfect", description: "Design fidelity matters. Every component is built to match design specs precisely.", icon: "🎯" },
];

const specs = [
  { label: "🗓 Experience", value: "5+ years" },
  { label: "🏢 Current Role", value: "Software Engineer II" },
  { label: "🏛 Company", value: "Photon Interactive Pvt. Ltd." },
  { label: "📍 Location", value: "Chennai, Tamil Nadu, India" },
  { label: "✉️ Email", value: "shanmugamstar2000@outlook.com" },
  { label: "🎯 Focus", value: "Shopify Plus & Headless Commerce" },
];

const specialisations = [
  { label: "PHP", icon: "🐘" },
  { label: "Laravel", icon: "🔴" },
  { label: "React", icon: "⚛️" },
  { label: "JavaScript", icon: "🟡" },
  { label: "GraphQL", icon: "🔷" },
  { label: "Shopify Polaris", icon: "🛍" },
  { label: "Hydrogen", icon: "⚗️" },
  { label: "Liquid", icon: "💧" },
  { label: "Custom Apps", icon: "🔧" },
  { label: "Theme Development", icon: "🎨" },
  { label: "Store Migration", icon: "🚀" },
  { label: "Accessibility", icon: "♿" },
  { label: "Performance Optimization", icon: "⚡" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* ── Hero ───────────────────────────────────────── */}
        <div className="max-w-4xl mb-24">
          <BlurIn delay={0}>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
              About Me
            </p>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
              Building commerce
              <br />
              <span style={{ background: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                that converts
              </span>
            </h1>
          </BlurIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              I&apos;m a Software Engineer II at Photon Interactive with 5+ years of experience
              building fast, accessible and scalable Shopify Plus storefronts, headless
              commerce experiences and custom Shopify apps.
            </p>
          </FadeIn>
        </div>

        {/* ── Bio + Quick Facts ───────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <FadeIn direction="right">
            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a Software Engineer II at{" "}
                <span className="text-white font-medium">Photon Interactive Private Limited</span>,
                where I specialise in delivering end-to-end Shopify Plus solutions — from
                custom theme development and store migrations to fully headless storefronts
                powered by Hydrogen and Next.js.
              </p>
              <p>
                With 5+ years of hands-on experience, I&apos;ve worked across the full Shopify
                stack: architecting Liquid themes, building custom apps with PHP and Laravel,
                integrating GraphQL APIs, and crafting interactive UIs with React and
                Shopify Polaris. Every build is optimised for performance and accessibility
                from day one.
              </p>
              <p>
                I believe the best storefronts are invisible — the technology fades away and
                the only thing the customer feels is a fast, joyful shopping experience.
                That&apos;s what I deliver.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8 border border-white/5 space-y-1 relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[70px] opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
              <h2 className="text-white font-bold text-lg mb-4 relative">Quick Facts</h2>
              {specs.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex justify-between items-start border-b border-white/5 py-3 last:border-0"
                >
                  <span className="text-zinc-500 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium text-right max-w-[55%]">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </FadeIn>
        </div>

        {/* ── Specialisations ─────────────────────────────── */}
        <div className="mb-24">
          <FadeIn>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">Specialisations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">What I Work With</h2>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.06}>
            {specialisations.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors duration-200 cursor-default"
              >
                <span className="text-base" aria-hidden="true">{item.icon}</span>
                <span className="text-sm font-medium text-zinc-300">{item.label}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* ── Values ──────────────────────────────────────── */}
        <FadeIn>
          <SectionHeader
            eyebrow="My Approach"
            title="Values I build by"
            description="These principles guide every project I work on, from the first commit to the final launch."
          />
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24" staggerDelay={0.1}>
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default"
            >
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                className="text-3xl mb-4 block"
                aria-hidden="true"
              >
                {v.icon}
              </motion.span>
              <h3 className="text-white font-semibold mb-2">{v.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* ── CTA ─────────────────────────────────────────── */}
        <ScaleIn>
          <div className="text-center">
            <Button href="/contact" size="lg">
              Let&apos;s Work Together
            </Button>
          </div>
        </ScaleIn>

      </div>
    </PageShell>
  );
}
