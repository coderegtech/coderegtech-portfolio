import { ArrowUpRight, Plus } from "lucide-react";
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
          vibe-coded with tools like Claude Code, Codex, v0, and Lovable.
        </p>
      </div>
      <div className="grid gap-x-9 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
        {projects
          .filter((project) => project.image)
          .map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
      </div>
      <details className="group/archive mt-20 border-y border-line">
        <summary
          data-parallax-anchor
          className="flex min-h-24 items-center justify-between gap-4 py-5"
        >
          <span data-reveal className="text-lg font-medium">
            More from the archive{" "}
            <span className="ml-3 font-mono text-xs text-muted">
              {String(
                projects.filter((project) => !project.image).length,
              ).padStart(2, "0")}
            </span>
          </span>
          <span className="flex items-center gap-4">
            <span className="hidden text-sm text-muted sm:inline">
              Explore more projects
            </span>
            <Plus
              aria-hidden="true"
              data-parallax="section"
              data-parallax-y="12"
              className="size-6 transition-[rotate] group-open/archive:rotate-45"
            />
          </span>
        </summary>
        <div className="border-t border-line">
          {projects
            .filter((project) => !project.image)
            .map((project) => (
              <article
                key={project.id}
                data-parallax-anchor
                className="grid gap-4 border-b border-line py-7 last:border-0 md:grid-cols-[1fr_1.6fr_auto] md:gap-8"
              >
                <div data-reveal data-parallax="section" data-parallax-y="24">
                  <p className="eyebrow mb-2 text-[10px] text-muted">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <div data-reveal data-reveal-delay="1">
                  <p className="text-sm leading-7 text-muted">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-foreground/60">
                    {project.technologies.join(" / ")}
                  </p>
                  {project.ai && (
                    <p className="mt-1 font-mono text-xs text-foreground/60">
                      AI-assisted · {project.ai.join(", ")}
                    </p>
                  )}
                </div>
                <div data-reveal data-reveal-delay="2" className="flex items-start gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-xs"
                      aria-label={`Visit ${project.title} live site (opens in a new tab)`}
                    >
                      Live{" "}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-xs text-muted hover:text-white"
                      aria-label={`View ${project.title} source code (opens in a new tab)`}
                    >
                      Code{" "}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  )}
                  {!project.url && !project.github && (
                    <span className="eyebrow py-3 text-[10px] text-muted">
                      Project overview
                    </span>
                  )}
                </div>
              </article>
            ))}
        </div>
      </details>
    </section>
  );
}
