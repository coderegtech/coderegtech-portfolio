import { ArrowDownRight, ArrowUpRight, Globe2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="page-shell py-24 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_2.5fr] md:gap-16">
        <div className="flex items-start justify-between md:block">
          <SectionLabel number="01">About</SectionLabel>
          <ArrowDownRight
            aria-hidden="true"
            data-parallax="section"
            data-parallax-y="44"
            data-reveal
            className="size-12 text-muted md:mt-16 md:size-20"
            strokeWidth={0.8}
          />
        </div>
        <div>
          <h2
            id="about-heading"
            data-parallax-anchor
            className="max-w-4xl text-[clamp(2.3rem,4.9vw,4.8rem)] font-medium leading-[1.12] tracking-[-0.055em]"
          >
            <span
              data-parallax="section"
              data-parallax-y="44"
              data-reveal
              className="block"
            >
              I turn ideas into
              <br />
              scalable <span className="text-muted">digital products.</span>
            </span>
          </h2>
          <div
            data-parallax="section"
            data-parallax-y="12"
            data-reveal
            data-reveal-delay="1"
            className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <p className="text-base leading-8 text-muted">
              I’m John, a full-stack software developer with a foundation in
              visual design and a focus on building for the web and mobile. I
              bring the same care to the systems behind a product as the
              experience people see.
            </p>
            <p className="text-base leading-8 text-muted">
              From responsive interfaces and cross-platform apps to APIs and
              databases, I turn requirements into thoughtful, maintainable
              software. Clean architecture. Practical problem solving. Attention
              to the details.
            </p>
          </div>
          <div data-reveal data-reveal-delay="2" className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-7">
            <span className="flex items-center gap-3 text-sm text-muted">
              <Globe2
                aria-hidden="true"
                data-parallax="section"
                data-parallax-y="10"
                className="size-4"
              />
              Palawan, Philippines · Open to remote work
            </span>
            <a
              href="#experience"
              className="group inline-flex min-h-11 items-center gap-3 text-sm"
            >
              My journey{" "}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
