import { ArrowUpRight, CodeXml } from "lucide-react";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import type { Project } from "@/types";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const href = project.url ?? project.github;
  return (
    <article data-parallax-anchor className="group min-w-0">
      <div
        data-parallax="section"
        data-parallax-y="16"
        data-reveal
        className="mb-4 flex items-center justify-between gap-4"
      >
        <span className="eyebrow text-muted">
          0{index + 1} / Selected project
        </span>
        <span className="eyebrow text-right text-[10px] text-muted">
          {project.category}
        </span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-project-link
        data-parallax-anchor
        aria-label={`View ${project.title}${project.url ? " live site" : " on GitHub"} (opens in a new tab)`}
        className="relative block overflow-hidden"
      >
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025]">
          <ProjectVisual project={project} />
        </div>
        <span
          aria-hidden="true"
          data-parallax="section"
          data-parallax-y="-14"
          className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full border border-white/30 bg-background/80 text-foreground backdrop-blur"
        >
          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </a>
      <div
        data-parallax="section"
        data-parallax-y="12"
        data-reveal
        data-reveal-delay="1"
        className="mt-6 flex items-start justify-between gap-4"
      >
        <h3 className="text-2xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
          {project.title}
        </h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-white hover:text-white"
          >
            <CodeXml aria-hidden="true" className="size-4" />
          </a>
        )}
      </div>
      <p
        data-parallax="section"
        data-parallax-y="6"
        data-reveal
        data-reveal-delay="2"
        className="mt-3 max-w-xl text-sm leading-7 text-muted"
      >
        {project.description}
      </p>
      {project.bestFeature && (
        <div data-reveal className="mt-5 max-w-xl border-l border-white/40 pl-4">
          <p className="eyebrow text-[10px] text-muted">
            Best feature · {project.bestFeature.title}
          </p>
          <p className="mt-2 text-sm leading-7 text-muted">
            {project.bestFeature.detail}
          </p>
        </div>
      )}
      <ul
        data-parallax="section"
        data-parallax-y="10"
        data-reveal
        data-reveal-delay="3"
        aria-label="Technologies"
        className="mt-5 flex flex-wrap gap-2"
      >
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
          >
            {tech}
          </li>
        ))}
        {project.ai && (
          <li className="rounded-full border border-white/40 px-3 py-1.5 text-xs">
            AI-assisted · {project.ai.join(", ")}
          </li>
        )}
      </ul>
    </article>
  );
}
