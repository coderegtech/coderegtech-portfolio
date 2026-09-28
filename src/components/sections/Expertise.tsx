import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skills } from "@/data/skills";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="border-y border-line bg-surface py-20 md:py-28"
    >
      <div className="page-shell">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionLabel number="02">Expertise</SectionLabel>
          <h2
            id="expertise-heading"
            data-parallax-anchor
            className="text-3xl font-medium tracking-[-0.045em] md:text-4xl"
          >
            <span
              data-parallax="section"
              data-parallax-y="32"
              data-reveal
              className="block"
            >
              One developer.{" "}
              <span className="text-muted">The complete stack.</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              data-parallax-anchor
              className="group border-t border-white/20 py-8 transition-colors hover:border-foreground"
            >
              <div
                data-parallax="section"
                data-parallax-y={index % 2 === 0 ? "36" : "-28"}
                data-reveal
                data-reveal-delay={Math.min(index, 4)}
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="eyebrow text-muted">0{index + 1}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <p className="mb-6 mt-2 text-xs text-muted">
                  {skill.description}
                </p>
                <ul className="space-y-2.5 text-sm text-foreground/75">
                  {skill.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
