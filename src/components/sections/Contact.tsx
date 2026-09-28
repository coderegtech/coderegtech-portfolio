import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { profile, socials } from "@/data/socials";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="page-shell py-24 md:py-36"
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <SectionLabel number="05">Contact</SectionLabel>
        <span
          data-parallax="section"
          data-parallax-y="-12"
          data-reveal
          className="eyebrow flex items-center gap-3 text-muted"
        >
          <span className="size-1.5 rounded-full bg-white" />
          Open for opportunities
        </span>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-end">
        <h2
          id="contact-heading"
          data-parallax-anchor
          className="display-title text-[clamp(4rem,11vw,10.5rem)]"
        >
          <span data-reveal data-parallax="section" data-parallax-y="48" className="block">
            Let’s build
            <br />
            something
            <br />
            <span className="outline-text">great.</span>
            <ArrowUpRight
              aria-hidden="true"
              className="ml-6 inline size-[0.65em] align-baseline"
              strokeWidth={0.8}
            />
          </span>
        </h2>
        <div data-reveal data-reveal-delay="2" data-parallax="section" data-parallax-y="16" className="pb-2">
          <p className="max-w-md text-base leading-8 text-muted">
            Have a project, collaboration, or opportunity in mind? I’m always
            interested in discussing interesting products, technical challenges,
            and new ideas.
          </p>
          <Button href={`mailto:${profile.email}`} className="mt-8">
            Start a conversation
          </Button>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 block w-fit break-all text-sm text-muted transition-colors hover:text-white"
          >
            {profile.email}
          </a>
          <div className="mt-12 grid grid-cols-2 border-t border-line">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={
                  social.name === "Email" ? undefined : "noopener noreferrer"
                }
                className="group flex min-h-14 items-center justify-between border-b border-line py-4 pr-5 text-sm"
              >
                <span>{social.name}</span>
                <span
                  className="inline-flex"
                  data-parallax="section"
                  data-parallax-y="-8"
                >
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
