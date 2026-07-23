"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { FadeIn, BlurIn, ScaleIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/lib/data";

function TimelineDot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.1 }}
      className="hidden md:flex items-start justify-center pt-1"
    >
      <div
        className="w-4 h-4 rounded-full border-2 border-purple-500 bg-[#050505] z-10 relative"
        style={{ boxShadow: "0 0 14px rgba(168,85,247,0.6)" }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 20%"] });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-20">
          <BlurIn delay={0}>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">Experience</p>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              My Career Journey
            </h1>
          </BlurIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Over 5 years delivering high-quality Shopify experiences for brands of all sizes.
            </p>
          </FadeIn>
          <FadeIn delay={0.26}>
            <div className="inline-flex items-center gap-2 mt-5 rounded-full border border-purple-500/20 bg-purple-500/8 px-4 py-2 text-sm text-purple-300">
              <span aria-hidden="true">●</span>
              Interactive Timeline
            </div>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5 hidden md:block" aria-hidden="true" />
          <motion.div
            className="absolute left-8 top-0 w-px bg-linear-to-b from-purple-500 via-purple-400 to-transparent origin-top hidden md:block"
            style={{ scaleY: lineScaleY, height: "100%" }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company + exp.role} delay={i * 0.08} direction="up">
                <article className="relative grid md:grid-cols-[4rem_1fr] gap-6 md:gap-10">
                  <TimelineDot index={i} />

                  <motion.div
                    whileHover={{ scale: 1.005, borderColor: "rgba(168,85,247,0.35)" }}
                    transition={{ duration: 0.25 }}
                    className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden"
                  >
                    {/* Glow on hover */}
                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] opacity-0 hover:opacity-20 transition-opacity pointer-events-none" style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <motion.h2
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.08 + 0.1 }}
                          className="text-white text-xl font-bold"
                        >
                          {exp.role} - {exp.company}
                        </motion.h2>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="purple">{exp.period}</Badge>
                        <span className="text-zinc-600 text-xs">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 leading-relaxed mb-6">{exp.description}</p>

                    <ul className="space-y-2 mb-6" aria-label={`Achievements at ${exp.company}`}>
                      {exp.achievements.map((a, ai) => (
                        <motion.li
                          key={a}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: ai * 0.07 + 0.2 }}
                          className="flex gap-3 text-sm text-zinc-400"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, delay: ai * 0.07 + 0.25 }}
                            className="text-purple-500 shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            ✓
                          </motion.span>
                          {a}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, ti) => (
                        <motion.div
                          key={t}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: ti * 0.05 + 0.3 }}
                        >
                          <Badge variant="outline">{t}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScaleIn delay={0.2}>
          <div className="mt-16 text-center">
            <Button href="/contact" size="lg">Work With Me</Button>
          </div>
        </ScaleIn>

      </div>
    </PageShell>
  );
}
