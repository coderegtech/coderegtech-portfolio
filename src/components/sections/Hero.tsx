import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AvailabilityCard } from "@/components/ui/AvailabilityCard";
import { profile } from "@/data/socials";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-svh overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        data-parallax="hero"
        data-parallax-y="30"
        className="hero-glow pointer-events-none absolute inset-0 -z-10"
      />
      <div className="page-shell relative z-10 flex items-center justify-between gap-6 pt-28 md:pt-24">
        <p
          data-parallax="hero"
          data-parallax-y="-12"
          className="eyebrow reveal flex items-center gap-3 text-muted"
        >
          <span className="size-1.5 shrink-0 rounded-full bg-foreground" />
          Available for new opportunities
        </p>
        <p
          data-parallax="hero"
          data-parallax-y="-8"
          className="eyebrow hidden text-muted md:block"
        >
          Based in the Philippines · Working worldwide
        </p>
      </div>
      <div className="page-shell relative min-h-[720px] pb-10 pt-10 sm:min-h-[830px] md:h-[max(530px,calc(100svh-214px))] md:min-h-0 md:pt-6">
        <div
          aria-hidden="true"
          data-parallax="hero"
          data-parallax-y="95"
          className="reveal pointer-events-none relative z-0 select-none font-display text-[clamp(3.6rem,17.6vw,15.75rem)] md:text-[min(16.4vw,21svh)] font-semibold uppercase leading-[0.82] tracking-[-0.035em]"
        >
          <span data-parallax="hero" data-parallax-x="16" className="block">
            Full-stack
          </span>
          <span
            data-parallax="hero"
            data-parallax-x="-16"
            className="ml-[12%] block text-foreground/75 md:ml-[24%]"
          >
            Developer<span className="text-muted">.</span>
          </span>
        </div>
        <div
          data-parallax="hero"
          data-parallax-y="55"
          className="hero-portrait reveal-delayed pointer-events-none absolute right-[-16%] top-24 z-10 h-[470px] w-[390px] sm:right-[-7%] sm:top-28 sm:h-[680px] sm:w-[510px] md:right-[9%] md:top-0 md:h-[min(80svh,790px)] md:w-[min(53svh,525px)] lg:right-[16%] xl:right-[19%]"
        >
          <Image
            src="/images/john-reygun.webp"
            alt="John Reygun wearing glasses and a black suit"
            fill
            preload
            sizes="(max-width: 639px) 390px, (max-width: 1023px) 510px, 525px"
            className="object-contain object-top"
          />
        </div>
        <div
          data-parallax="hero"
          data-parallax-y="-14"
          className="reveal-delayed relative z-20 mt-[200px] w-full sm:mt-[310px] md:absolute md:bottom-8 md:left-0 md:mt-0 md:max-w-[310px] lg:max-w-[345px]"
        >
          <p className="eyebrow mb-3 hidden text-muted sm:block">
            The mind behind the code
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl"
          >
            John Reygun
            <span className="sr-only"> — Full-Stack Software Developer</span>
          </h1>
          <p className="mt-3 text-sm text-foreground/80">
            Full-Stack Software Developer
          </p>
          <p className="mt-4 max-w-[330px] text-sm leading-6 text-muted">
            {profile.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="#work">View my work</Button>
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center gap-3 px-2 text-sm"
            >
              Let’s talk{" "}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
        <div
          data-parallax="hero"
          data-parallax-y="-36"
          className="reveal-delayed absolute bottom-10 right-0 z-20 hidden lg:block"
        >
          <AvailabilityCard />
        </div>
        <p
          data-parallax="hero"
          data-parallax-y="20"
          className="eyebrow absolute right-0 top-12 z-20 hidden [writing-mode:vertical-rl] text-muted lg:block"
        >
          Creative thinking. Precise engineering.
        </p>
      </div>
      <div data-reveal className="page-shell relative z-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 py-5">
        <a
          href="#about"
          className="eyebrow group flex min-h-11 items-center gap-4 text-muted hover:text-white"
        >
          <span
            data-parallax="hero"
            data-parallax-y="-10"
            className="grid size-9 place-items-center rounded-full border border-line"
          >
            <ArrowDown
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-y-1"
            />
          </span>
          Scroll to explore
        </a>
        <div
          data-parallax="hero"
          data-parallax-y="-8"
          className="flex items-center gap-7 sm:gap-10"
        >
          <div>
            <p className="text-2xl font-medium tracking-tight">2+</p>
            <p className="eyebrow text-[10px] text-muted">Years experience</p>
          </div>
          <div className="h-8 w-px bg-line" />
          <div>
            <p className="text-sm font-medium uppercase">Web + Mobile</p>
            <p className="eyebrow mt-1 text-[10px] text-muted">
              End-to-end development
            </p>
          </div>
        </div>
        <p className="hidden font-mono text-xs text-muted xl:block">
          &lt;CodeRegTech /&gt;
        </p>
      </div>
    </section>
  );
}
