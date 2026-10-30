import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="page-shell py-24 md:py-36"
    >
      <SectionLabel number="03">Selected work</SectionLabel>
      <div className="mb-14 mt-8 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <h2
          id="work-heading"
          data-parallax-anchor
          className="display-title text-[clamp(4.5rem,10vw,9.5rem)]"
        >
          <span data-reveal data-parallax="section" data-parallax-y="56" className="block">
            Ideas.
            <br />
            <span className="text-muted">Made real.</span>
          </span>
        </h2>
        <p data-reveal data-reveal-delay="1" className="max-w-sm text-base leading-8 text-muted lg:pb-2">
          A selection of projects across full-stack development, modern
          interfaces, and practical digital solutions. Built with purpose, from
          the first idea to the final detail. Projects tagged AI-assisted were
          vibe-coded with tools like Claude Code, Codex, and v0.
        </p>
      </div>
      <div className="grid gap-x-9 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
        {projects
          .filter((project) => project.image)
          .map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
      </div>
    </section>
  );
}
