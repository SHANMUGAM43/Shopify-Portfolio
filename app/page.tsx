import { PageShell } from "@/components/layout/PageShell";
import { HeroSection, TechBanner, HomeAboutSnippet } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/ProjectCard";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <TechBanner />
      <HomeAboutSnippet />
      <FeaturedProjects />
    </PageShell>
  );
}
