"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { FadeIn, BlurIn, StaggerContainer } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects, sortProjectsByPriority } from "@/lib/data";

const regions = ["All", "US & UK", "Asia"] as const;
type Region = (typeof regions)[number];
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function FilterDropdown({
  label,
  value,
  options,
  counts,
  onSelect,
  accentColor = "purple",
}: {
  label: string;
  value: string;
  options: readonly string[];
  counts: Record<string, number>;
  onSelect: (v: string) => void;
  accentColor?: "purple" | "zinc";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const accent = accentColor === "purple" ? "bg-purple-600" : "bg-zinc-600";
  const badgeActive = accentColor === "purple" ? "bg-purple-500/20 text-purple-200" : "bg-zinc-500/20 text-zinc-200";
  const border = accentColor === "purple" ? "border-purple-500/40 hover:border-purple-400" : "border-white/15 hover:border-white/30";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border ${border} bg-white/5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-zinc-500 text-xs uppercase tracking-widest">{label}</span>
        <span className="text-white font-semibold">{value}</span>
        <span
          className={`text-xs px-1.5 py-0.5 rounded-full font-bold tabular-nums ${badgeActive}`}
        >
          {counts[value] ?? 0}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className="h-3.5 w-3.5 text-zinc-500 ml-1"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 mt-2 min-w-[200px] z-50 rounded-2xl border border-white/10 bg-[#111116] shadow-xl shadow-black/40 backdrop-blur-xl overflow-hidden"
            role="listbox"
          >
            {options.map((opt) => {
              const isActive = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => { onSelect(opt); setOpen(false); }}
                  className={`w-full flex items-center justify-between gap-4 px-4 py-3 text-sm transition-colors duration-150 focus-visible:outline-none ${
                    isActive
                      ? "text-white bg-white/6"
                      : "text-zinc-400 hover:text-white hover:bg-white/4"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {isActive && (
                      <span className={`inline-block h-2 w-2 rounded-full ${accent}`} aria-hidden="true" />
                    )}
                    {!isActive && <span className="inline-block h-2 w-2" aria-hidden="true" />}
                    {opt}
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-zinc-600">
                    {counts[opt] ?? 0}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState<Region>("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const orderedProjects = sortProjectsByPriority(projects);

  const filtered = orderedProjects.filter((project) => {
    const matchesRegion = active === "All" || project.region === active;
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    return matchesRegion && matchesCategory;
  });

  // Region options: filter by active type so only relevant regions show counts
  const projectsForRegion = activeCategory === "All"
    ? orderedProjects
    : orderedProjects.filter((p) => p.category === activeCategory);

  const regionCounts: Record<string, number> = Object.fromEntries(
    regions.map((r) => [
      r,
      r === "All"
        ? projectsForRegion.length
        : projectsForRegion.filter((p) => p.region === r).length,
    ])
  );

  // Only show regions that have at least one match (or "All")
  const availableRegions = regions.filter(
    (r) => r === "All" || regionCounts[r] > 0
  );

  // Type options: filter by active region so only relevant types show counts
  const projectsForCategory = active === "All"
    ? orderedProjects
    : orderedProjects.filter((p) => p.region === active);

  const categoryCounts: Record<string, number> = Object.fromEntries(
    categories.map((c) => [
      c,
      c === "All"
        ? projectsForCategory.length
        : projectsForCategory.filter((p) => p.category === c).length,
    ])
  );

  // Only show types that have at least one match (or "All")
  const availableCategories = categories.filter(
    (c) => c === "All" || categoryCounts[c] > 0
  );

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
              {projects.length} Shopify storefronts delivered across US, UK and Asia, including Shopify Plus builds, storefront customizations and theme-based stores with advanced updates.
            </p>
          </FadeIn>
        </div>

        {/* Dropdown filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <FilterDropdown
              label="Region"
              value={active}
              options={availableRegions}
              counts={regionCounts}
              onSelect={(v) => {
                setActive(v as Region);
                // if the current category no longer exists in the new region, reset it
                const stillAvailable = categories.filter((c) => {
                  if (c === "All") return true;
                  const pool = v === "All" ? orderedProjects : orderedProjects.filter((p) => p.region === v);
                  return pool.some((p) => p.category === c);
                });
                if (!stillAvailable.includes(activeCategory)) setActiveCategory("All");
              }}
              accentColor="purple"
            />
            <FilterDropdown
              label="Type"
              value={activeCategory}
              options={availableCategories}
              counts={categoryCounts}
              onSelect={(v) => {
                setActiveCategory(v);
                // if the current region no longer exists in the new type, reset it
                const stillAvailable = regions.filter((r) => {
                  if (r === "All") return true;
                  const pool = v === "All" ? orderedProjects : orderedProjects.filter((p) => p.category === v);
                  return pool.some((p) => p.region === r);
                });
                if (!stillAvailable.includes(active)) setActive("All");
              }}
              accentColor="zinc"
            />
            {(active !== "All" || activeCategory !== "All") && (
              <button
                type="button"
                onClick={() => { setActive("All"); setActiveCategory("All"); }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/10 bg-white/4 text-xs font-medium text-zinc-500 hover:text-white hover:bg-white/8 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Clear filters
              </button>
            )}
            <span className="ml-auto text-zinc-600 text-sm tabular-nums">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </FadeIn>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active + activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
