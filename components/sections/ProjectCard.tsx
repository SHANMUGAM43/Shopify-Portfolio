"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, staggerItem } from "@/components/ui/FadeIn";
import { getProjectCompanyReference, projects, sortProjectsByPriority } from "@/lib/data";

type Project = (typeof projects)[number] & {
  contribution?: string[];
  challenges?: string[];
  results?: string[];
};

export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const previewTags = compact ? project.tags.slice(0, 4) : project.tags;
  const companyReference = getProjectCompanyReference(project.title);

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -2, scale: 1.002 }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0f] hover:border-purple-400/40 transition-colors duration-300 hover:shadow-[0_20px_50px_rgba(60,15,120,0.35)] flex flex-col"
    >
      {/* Shine sweep on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "150%", opacity: 0.7 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 w-1/3 skew-x-12 bg-linear-to-r from-transparent via-white/5 to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Screenshot */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-52 overflow-hidden bg-[#111] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        aria-label={`Visit ${project.title}`}
      >
        {imgError ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)",
            }}
            aria-hidden="true"
          >
            <span className="text-4xl">🌐</span>
            <span className="text-zinc-500 text-xs font-medium tracking-wide">
              {new URL(project.link).hostname.replace("www.", "")}
            </span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshot}
            alt={`${project.title} homepage`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}

        <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/20 transition-colors duration-300 flex items-center justify-center">
          <span className="project-visit-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-sm flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
            Visit Site <span aria-hidden="true">↗</span>
          </span>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/65 to-transparent"
          aria-hidden="true"
        />

        <span className="absolute top-3 left-3 text-xs font-bold text-white/30 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="absolute top-3 right-3 z-10">
          <Badge variant="subtle" className="text-[10px] uppercase tracking-wide text-zinc-900 border border-white/90 bg-white/90 shadow-sm shadow-black/15">
            {companyReference}
          </Badge>
        </span>
      </a>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${compact ? "p-4 sm:p-5" : "p-5"}`}>
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-white font-bold text-base leading-snug group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
          <Badge variant="purple" className="project-category-badge shrink-0 text-[11px] font-semibold">
            {project.category}
          </Badge>
        </div>

        <p className="text-zinc-300/90 text-sm leading-5.5 mb-4">
          {compact ? `${project.description.slice(0, 140).trim()}${project.description.length > 140 ? "..." : ""}` : project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {previewTags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[11px] border-white/20 text-zinc-300">
              {tag}
            </Badge>
          ))}
        </div>

        {!compact && (
          <div className="space-y-2.5 mt-auto border-t border-white/10 pt-3.5">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-purple-500/15 bg-purple-500/6 px-3 py-2.5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-purple-300">Case Study</p>
                <p className="text-zinc-400 text-xs mt-1">Contribution, challenges and measurable outcomes</p>
              </div>
              <Badge variant="subtle" className="text-[10px] uppercase tracking-wide">
                Detailed Breakdown
              </Badge>
            </div>
          {project.contribution && project.contribution.length > 0 && (
            <section className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] font-semibold tracking-wide uppercase text-purple-300 mb-2">
                Your Contribution
              </p>
              <ul className="space-y-2">
                {project.contribution.map((item) => (
                  <li key={item} className="text-zinc-300 text-sm flex gap-2 leading-relaxed">
                    <span className="text-purple-400 mt-0.5" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section className="rounded-xl border border-amber-200/15 bg-amber-300/5 p-3">
              <p className="text-[11px] font-semibold tracking-wide uppercase text-amber-300 mb-2">
                Challenges
              </p>
              <ul className="space-y-2">
                {project.challenges.map((item) => (
                  <li key={item} className="text-zinc-300 text-sm flex gap-2 leading-relaxed">
                    <span className="text-amber-300 mt-0.5" aria-hidden="true">
                      !
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.results && project.results.length > 0 && (
            <section className="rounded-xl border border-emerald-200/15 bg-emerald-300/5 p-3">
              <p className="text-[11px] font-semibold tracking-wide uppercase text-emerald-300 mb-2">
                Results
              </p>
              <ul className="space-y-2">
                {project.results.map((item) => (
                  <li key={item} className="text-zinc-200 text-sm flex gap-2 leading-relaxed">
                    <span className="text-emerald-300 mt-0.5" aria-hidden="true">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          </div>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-live-link inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-white transition-colors ${compact ? "mt-auto pt-2" : "mt-4"}`}
        >
          View Live Project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  const featured = sortProjectsByPriority(projects);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.clientWidth >= 1280 ? slider.clientWidth * 0.3 : slider.clientWidth >= 1024 ? slider.clientWidth * 0.36 : slider.clientWidth >= 640 ? slider.clientWidth * 0.52 : slider.clientWidth * 0.88;

    slider.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="projects-heading">
      <FadeIn>
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Projects
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <h2 id="projects-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Featured Work
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-xl">
              A compact slider of Shopify work across the full project list.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider("prev")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-200 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label="Scroll featured projects left"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("next")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-200 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label="Scroll featured projects right"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/40 text-purple-300 text-sm font-medium hover:bg-purple-500/10 hover:border-purple-400 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          aria-label="Featured projects slider"
        >
          {featured.map((project, i) => (
            <div key={project.title} className="min-w-[88%] snap-start sm:min-w-[48%] lg:min-w-[36%] xl:min-w-[30%]">
              <ProjectCard project={project} index={i} compact />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
