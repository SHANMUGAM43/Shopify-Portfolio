"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { FadeIn, BlurIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/ui/FadeIn";
import { skills } from "@/lib/data";

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <span className="text-xs font-bold tabular-nums text-purple-400">{level}%</span>
      </div>

      {/* Track */}
      <div
        className="relative h-2 w-full rounded-full overflow-hidden bg-white/[0.06]"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        {/* Animated fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 1.4,
            delay,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          className="h-full rounded-full relative"
          style={{
            background:
              "linear-gradient(90deg, #7c3aed 0%, #a855f7 55%, #c084fc 100%)",
          }}
        >
          {/* Shimmer */}
          <motion.span
            initial={{ x: "-100%" }}
            whileInView={{ x: "200%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: delay + 0.3, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 rounded-full bg-white/25 skew-x-12"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </div>
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
              A comprehensive overview of the languages, frameworks and tools I work
              with every day to build world-class Shopify experiences.
            </p>
          </FadeIn>
        </div>

        {/* Three-column skill grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20" staggerDelay={0.12}>
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              variants={staggerItem}
              whileHover={{ scale: 1.01, borderColor: "rgba(168,85,247,0.3)" }}
              transition={{ duration: 0.25 }}
              className="glass rounded-3xl p-8 border border-white/5 transition-colors duration-300 h-full relative overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
              {/* Category heading */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="flex items-center gap-3 mb-8 pb-5 border-b border-white/5"
              >
                <motion.span
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: catIdx * 0.1 + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-2 h-6 rounded-full flex-shrink-0 origin-top"
                  style={{ background: "linear-gradient(180deg, #a855f7 0%, #7c3aed 100%)" }}
                  aria-hidden="true"
                />
                <h2 className="text-white font-bold text-base">{category}</h2>
              </motion.div>
              {/* Bars */}
              <div className="space-y-6">
                {items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.1 + i * 0.07}
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
