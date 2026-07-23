"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { FadeIn, BlurIn, StaggerContainer } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/lib/data";

const regions = ["All", "US & UK", "Asia"] as const;
type Region = (typeof regions)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Region>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.region === active);

  const usCnt = projects.filter((p) => p.region === "US & UK").length;
  const asiaCnt = projects.filter((p) => p.region === "Asia").length;

  const counts: Record<Region, number> = {
    All: projects.length,
    "US & UK": usCnt,
    Asia: asiaCnt,
  };

  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <BlurIn delay={0}>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">Projects</p>
          </BlurIn>
          <BlurIn delay={0.08}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              Work I&apos;m Proud Of
            </h1>
          </BlurIn>
          <FadeIn delay={0.18}>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              {projects.length} Shopify storefronts delivered across US, UK and Asia — from Shopify Plus enterprise brands to DTC boutiques.
            </p>
          </FadeIn>
        </div>

        {/* Region filter tabs */}
        <FadeIn delay={0.1}>
          <div
            className="flex flex-wrap gap-2 mb-12"
            role="tablist"
            aria-label="Filter projects by region"
          >
            {regions.map((region) => {
              const isActive = active === region;
              return (
                <button
                  key={region}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(region)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="region-pill"
                      className="absolute inset-0 rounded-full bg-purple-600"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {region}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full font-semibold tabular-nums ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-zinc-600"
                      }`}
                    >
                      {counts[region]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageShell>
  );
}
