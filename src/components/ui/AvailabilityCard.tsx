import { ArrowUpRight } from "lucide-react";

export function AvailabilityCard() {
  return (
    <a
      href="#contact"
      className="group block w-full rounded-2xl border border-white/15 bg-black/45 p-5 shadow-2xl backdrop-blur-xl transition-colors hover:border-white/40 sm:w-64"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="size-2 rounded-full bg-foreground shadow-[0_0_10px_#ffffff55]" />
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <p className="mb-2 text-sm font-medium">Available for projects</p>
      <p className="text-xs leading-relaxed text-muted">
        Web, mobile, software development, freelance projects & technical
        collaborations.
      </p>
      <span className="mt-4 inline-block border-b border-white/40 pb-1 text-xs">
        Start a project
      </span>
    </a>
  );
}
