"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0d0d0d] hover:border-purple-500/30 transition-colors duration-300 hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col"
    >
      {/* Shine sweep on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "200%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />
      {/* Screenshot */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-52 overflow-hidden bg-[#111] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        aria-label={`Visit ${project.title}`}
        tabIndex={0}
      >
        {imgError ? (
          /* Fallback placeholder when image file is missing */
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
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/30 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-sm flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
            Visit Site <span aria-hidden="true">↗</span>
          </span>
        </div>
        {/* Number badge */}
        <span className="absolute top-3 left-3 text-xs font-bold text-white/30 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </a>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-bold text-base leading-snug group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <Badge variant="purple" className="shrink-0 text-[11px]">
            {project.category}
          </Badge>
        </div>

        <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="projects-heading">
      <FadeIn>
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Projects
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Featured Work
          </h2>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/40 text-purple-300 text-sm font-medium hover:bg-purple-500/10 hover:border-purple-400 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            View All Projects →
          </a>
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </StaggerContainer>
    </section>
  );
}
