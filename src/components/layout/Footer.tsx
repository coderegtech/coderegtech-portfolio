import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer data-parallax-anchor className="border-t border-line">
      <div data-reveal className="page-shell flex flex-col justify-between gap-8 py-9 sm:flex-row sm:items-center">
        <div
          data-parallax="section"
          data-parallax-y="20"
          className="flex items-center gap-4"
        >
          <Image
            src="/images/brand-mark.webp"
            alt="CodeRegTech"
            width={42}
            height={33}
            className="h-8 w-10 object-contain"
          />
          <div>
            <p className="text-sm font-medium">John Reygun</p>
            <p className="mt-1 text-xs text-muted">
              Full-Stack Software Developer
            </p>
          </div>
        </div>
        <p
          data-parallax="section"
          data-parallax-y="-12"
          className="font-mono text-[11px] text-muted"
        >
          © {new Date().getFullYear()} John Reygun
        </p>
        <a
          href="#home"
          className="eyebrow group inline-flex min-h-11 items-center gap-5 self-start sm:self-auto"
        >
          Back to top
          <span
            data-parallax="section"
            data-parallax-y="-14"
            className="grid size-10 place-items-center rounded-full border border-line"
          >
            <ArrowUp
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-1"
            />
          </span>
        </a>
      </div>
    </footer>
  );
}
