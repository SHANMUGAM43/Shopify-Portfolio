"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

function ProfileAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Outer slow-rotating gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="absolute w-70 h-70 sm:w-85 sm:h-85 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #7c3aed, #a855f7, #c084fc, transparent, transparent, #7c3aed)",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Inner counter-rotating dashed ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
        className="absolute w-77.5 h-77.5 sm:w-92.5 sm:h-92.5 rounded-full border border-dashed border-purple-500/20"
      />

      {/* Outermost subtle ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
        className="absolute w-85 h-85 sm:w-102.5 sm:h-102.5 rounded-full border border-purple-500/10"
      />

      {/* Glow blob behind image */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.24, 0.36, 0.24] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-[70px]"
        style={{
          background: "radial-gradient(circle, rgba(192,132,252,0.9) 0%, rgba(168,85,247,0.2) 45%, transparent 75%)",
        }}
      />

      {/* Floating idle motion wrapper */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* Profile image */}
        <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-purple-400/40 ring-1 ring-white/15 shadow-[0_26px_80px_rgba(124,58,237,0.45)] relative">
          <Image
            src="/profile_pic.jpeg"
            alt="Shanmugam Paramasivam — Senior Shopify Developer"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 208px, 256px"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 42%)" }}
          />
        </div>

        {/* Online badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#0d0d0d]/90 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1.5 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-green-400 text-xs font-semibold">Available</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 30 });

  const orb1X = useTransform(springX, [-1, 1], ["-3%", "3%"]);
  const orb1Y = useTransform(springY, [-1, 1], ["-3%", "3%"]);
  const orb2X = useTransform(springX, [-1, 1], ["3%", "-3%"]);
  const orb2Y = useTransform(springY, [-1, 1], ["3%", "-3%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden px-6"
      aria-label="Hero"
    >
      {/* Background gradient orbs — parallax on mouse move */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full blur-[120px] opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />
      </motion.div>
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full blur-[100px] opacity-15 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
      </motion.div>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full py-32">
        {/* Two-column layout: text left, avatar right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              Available for new projects
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-white mb-4"
            >
              Shopify Plus Developer | Software Engineer II
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg sm:text-2xl lg:text-3xl font-semibold text-zinc-400 mb-6"
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #c084fc 0%, #a855f7 40%, #7c3aed 80%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Building scalable Shopify experiences with Liquid, React, Next.js, GraphQL and Accessibility-first development.
              </span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button
                href="/resume/Shanmugam_Paramasivam_resume.pdf"
                external
                size="md"
                ariaLabel="Open resume PDF in a new tab"
              >
                <span aria-hidden="true">📄</span> Resume
              </Button>
              <Button href="/projects" variant="outline" size="md" ariaLabel="View projects">
                <span aria-hidden="true">💼</span> View Projects
              </Button>
            </motion.div>
          </div>

          {/* Right — avatar */}
          <div className="flex justify-center order-1 lg:order-2">
            <ProfileAvatar />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
          role="list"
          aria-label="Key statistics"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="bg-[#050505] px-6 py-8 flex flex-col items-center transition-colors"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08, type: "spring", stiffness: 160 }}
                className="text-4xl font-bold text-white mb-1"
                style={{
                  background: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </motion.span>
              <span className="text-zinc-500 text-sm text-center">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-purple-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export function TechBanner() {
  const techs = [
    "Shopify Plus",
    "Liquid",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GraphQL",
    "Headless Commerce",
    "Storefront API",
    "Framer Motion",
    "Vue 3",
  ];
  const doubled = [...techs, ...techs];

  return (
    <section className="py-12 overflow-hidden border-y border-white/5" aria-label="Technologies">
      <div className="flex gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="text-zinc-600 font-medium text-sm flex items-center gap-8 shrink-0"
          >
            {t}
            <span className="inline-block w-1 h-1 rounded-full bg-purple-700 shrink-0" aria-hidden="true" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export function HomeAboutSnippet() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="about-snippet-heading">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <FadeIn>
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2
            id="about-snippet-heading"
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
          >
            Turning ideas into
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              commerce experiences
            </span>
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8" aria-label="About me highlights">
            {[
              "Shopify Plus Developer",
              "Accessibility Specialist",
              "Theme Customization",
              "Store Migration",
              "Custom App Integration",
              "Performance Optimization",
            ].map((highlight) => (
              <li
                key={highlight}
                className="rounded-xl border border-white/10 bg-white/2 px-4 py-2 text-zinc-300 text-sm"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="outline">
            More About Me →
          </Button>
        </FadeIn>

        {/* Card */}
        <FadeIn delay={0.2} direction="left">
          <div className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative space-y-6">
              {[
                { label: "Specialisation", value: "Shopify Plus & Headless" },
                { label: "Currently at", value: "Photon Interactive Private Limited" },
                { label: "Location", value: "Chennai" },
                { label: "Languages", value: "Liquid, JavaScript, TypeScript" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5 sm:flex-row sm:justify-between sm:items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-zinc-500 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium text-left sm:text-right break-words sm:max-w-[62%]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
