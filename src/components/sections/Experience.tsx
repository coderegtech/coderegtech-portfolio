import { ArrowDownRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-paper py-24 text-background md:py-32"
    >
      <div className="page-shell grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <SectionLabel number="04" light>
            Experience
          </SectionLabel>
          <h2
            id="experience-heading"
            data-parallax-anchor
            className="display-title mt-10 text-7xl md:text-8xl"
          >
            <span
              data-parallax="section"
              data-parallax-y="48"
              data-reveal
              className="block"
            >
              Always
              <br />
              building.
              <br />
              <span className="text-black/45">
                Always
                <br />
                evolving.
              </span>
            </span>
          </h2>
          <p data-reveal data-reveal-delay="1" className="mt-8 max-w-xs text-sm leading-7 text-black/60">
            From visual design to complete digital products. Every role has
            added another dimension to the way I build.
          </p>
          <div
            data-parallax="section"
            data-parallax-y="10"
            data-reveal
            data-reveal-delay="2"
            className="mt-10 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase leading-6 text-black/60"
          >
            <span>Visual design</span>
            <span>→</span>
            <span>Web</span>
            <span>→</span>
            <span>Frontend</span>
            <span>→</span>
            <span>Mobile</span>
            <span>→</span>
            <span>Full-stack</span>
          </div>
          <ArrowDownRight
            aria-hidden="true"
            data-parallax="section"
            data-parallax-y="44"
            data-reveal
            className="mt-12 hidden size-16 lg:block"
            strokeWidth={0.8}
          />
        </div>
        <ol className="border-t border-black/25">
          {experience.map((item, index) => (
            <li
              key={item.company}
              data-parallax-anchor
              className="relative grid gap-3 border-b border-black/20 py-8 md:grid-cols-[28px_1fr] md:gap-6"
            >
              <span
                data-parallax="section"
                data-parallax-y="28"
                data-reveal
                className="font-mono text-xs text-black/50"
              >
                0{index + 1}
              </span>
              <div
                data-parallax="section"
                data-parallax-y={index % 2 === 0 ? "20" : "-16"}
                data-reveal
                data-reveal-delay={index % 3}
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wide text-black/60">
                  <span>{item.date}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                  {item.role}
                </h3>
                <p className="mb-5 mt-1.5 text-sm text-black/60">
                  {item.company}
                </p>
                <ul className="space-y-2">
                  {item.responsibilities.map((text) => (
                    <li
                      key={text}
                      className="flex gap-3 text-sm leading-6 text-black/65"
                    >
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-black/40" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
