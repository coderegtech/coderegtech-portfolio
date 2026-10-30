import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Database,
  Layers,
  MessagesSquare,
  Server,
} from "lucide-react";
import type { Project } from "@/types";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "adventour")
    return (
      <div
        data-reveal
        className="relative flex min-h-[370px] flex-col justify-between overflow-hidden bg-paper p-7 text-background md:min-h-[470px] md:p-10"
      >
        <div className="flex items-start justify-between">
          <p className="eyebrow">Travel, simplified.</p>
          <span className="eyebrow">Web × Mobile</span>
        </div>
        <div
          data-parallax="section"
          data-parallax-y="40"
          className="flex flex-col items-center justify-center gap-5 py-10 sm:flex-row"
        >
          <Image
            src={project.image}
            width={108}
            height={108}
            alt="Adventour app logo from the original project"
            className="size-16 object-contain grayscale transition duration-500 group-hover:grayscale-0 sm:size-20"
          />
          <span className="font-display text-[clamp(2.75rem,6vw,6.4rem)] font-semibold uppercase leading-none tracking-tight">
            Adventour
          </span>
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between border-t border-black/25 pt-5 text-sm">
            <span>Discover</span>
            <ArrowRight aria-hidden="true" className="size-4" />
            <span>Compare</span>
            <ArrowRight aria-hidden="true" className="size-4" />
            <span>Reserve</span>
          </div>
          <p className="eyebrow text-[10px] text-black/55">
            Product overview · Resort & hotel booking
          </p>
        </div>
      </div>
    );
  if (project.slug === "inventory")
    return (
      <div
        data-reveal
        className="relative flex min-h-[370px] flex-col justify-between overflow-hidden border border-line bg-charcoal p-7 md:min-h-[470px] md:p-10"
      >
        <div className="flex justify-between">
          <p className="eyebrow text-muted">From interface to infrastructure</p>
          <Layers aria-hidden="true" className="size-5 shrink-0 text-muted" />
        </div>
        <div data-parallax="section" data-parallax-y="32" className="py-10">
          <p className="mb-8 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium uppercase tracking-tight">
            Connected.
            <br />
            <span className="text-muted">By design.</span>
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            {[
              { name: "Angular", Icon: Code2 },
              { name: "NestJS", Icon: Server },
              { name: "MySQL", Icon: Database },
            ].map(({ name, Icon }, i) => (
              <div
                key={name}
                className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
              >
                <div className="flex min-w-0 flex-1 flex-col items-center gap-3 border border-white/20 bg-white/5 px-1 py-4 sm:px-2">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.3}
                  />
                  <span className="font-mono text-xs">{name}</span>
                </div>
                {i < 2 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden size-3 shrink-0 text-muted sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="eyebrow text-[10px] text-muted">
          Technology overview · Prisma data access
        </p>
      </div>
    );
  if (project.slug === "anote")
    return (
      <div
        data-reveal
        className="relative flex min-h-[370px] items-center justify-center gap-4 overflow-hidden sm:gap-8 bg-paper px-7 pt-10 md:min-h-[470px]"
      >
        <div className="relative z-10 w-[43%] max-w-[175px] shrink-0 translate-y-8 overflow-hidden rounded-[24px] border-[5px] border-line bg-charcoal shadow-2xl transition-transform duration-500 group-hover:translate-y-5">
          <Image
            src={project.image}
            alt="Original Anote mobile welcome screen"
            data-parallax="image"
            data-parallax-y="10"
            data-parallax-unit="percent"
            width={390}
            height={740}
            sizes="175px"
            className="parallax-image w-full grayscale transition-[filter] duration-500 group-hover:grayscale-0"
          />
        </div>
        <div
          data-parallax="section"
          data-parallax-y="-24"
          className="text-background"
        >
          <p className="eyebrow mb-4 text-black/60">Say it freely.</p>
          <span
            aria-hidden="true"
            className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold italic tracking-tight"
          >
            ANOTE
          </span>
          <p className="mt-4 max-w-28 text-sm leading-relaxed text-black/60">
            A little anonymity.
            <br />
            An honest connection.
          </p>
        </div>
        <p className="eyebrow absolute left-7 top-7 text-[10px] text-black/55">
          Original app screen
        </p>
      </div>
    );
  if (project.image && project.presentation === "mobile")
    return (
      <div
        data-reveal
        className="relative flex min-h-[370px] items-end justify-center gap-3 overflow-hidden border border-line bg-charcoal px-7 pt-10 md:min-h-[470px] md:gap-5"
      >
        {(project.images ?? [project.image]).slice(0, 3).map((src, i) => (
          <div
            key={src}
            className={`w-[30%] max-w-[170px] overflow-hidden rounded-t-[22px] border-[5px] border-b-0 border-line shadow-2xl transition-transform duration-500 ${i === 1 ? "translate-y-4 group-hover:translate-y-1" : "translate-y-10 group-hover:translate-y-6"}`}
          >
            <Image
              src={src}
              alt={`${project.title} app screen ${i + 1}`}
              width={480}
              height={1040}
              sizes="170px"
              className="w-full"
            />
          </div>
        ))}
      </div>
    );
  if (project.image && project.slug !== "chatterzph")
    return (
      <div
        data-reveal
        className="relative min-h-[370px] overflow-hidden border border-line bg-charcoal md:min-h-[470px]"
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-left-top"
        />
      </div>
    );
  if (project.slug !== "chatterzph")
    return (
      <div
        data-reveal
        className="relative flex min-h-[370px] flex-col justify-between overflow-hidden border border-line bg-charcoal p-7 md:min-h-[470px] md:p-10"
      >
        <p className="eyebrow text-muted">{project.category}</p>
        <p
          data-parallax="section"
          data-parallax-y="32"
          className="py-8 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-none tracking-tight"
        >
          {project.title}
        </p>
        <div className="flex flex-wrap gap-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/20 px-4 py-2 font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  return (
    <div
      data-reveal
      className="relative flex min-h-[370px] flex-col justify-between overflow-hidden bg-charcoal p-7 md:min-h-[470px] md:p-10"
    >
      <div className="flex items-center justify-between">
        <p className="eyebrow text-muted">Real-time connections</p>
        <MessagesSquare
          aria-hidden="true"
          className="size-6"
          strokeWidth={1.2}
        />
      </div>
      <div data-parallax="section" data-parallax-y="32" className="py-8">
        <p className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium tracking-tight">
          Conversations.
          <br />
          <span className="text-muted">Without the wait.</span>
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-xs">
            Next.js
          </span>
          <span className="text-muted">↔</span>
          <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-xs">
            Firebase
          </span>
          <span className="text-muted">↔</span>
          <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-xs">
            Firestore
          </span>
        </div>
      </div>
      <p className="eyebrow text-[10px] text-muted">
        Technology overview · Authentication & messaging
      </p>
    </div>
  );
}
