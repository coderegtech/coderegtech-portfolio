import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & {
  variant?: "solid" | "outline";
  arrow?: boolean;
};

export function Button({
  children,
  variant = "solid",
  arrow = true,
  className = "",
  ...props
}: Props) {
  return (
    <a
      {...props}
      className={`group inline-flex min-h-12 items-center justify-center gap-7 rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-300 ${variant === "solid" ? "border-foreground bg-foreground text-background hover:border-white hover:bg-white" : "border-white/25 text-foreground hover:border-foreground hover:bg-white/5"} ${className}`}
    >
      {children}
      {arrow && (
        <span
          className="inline-flex"
          data-parallax="section"
          data-parallax-y="6"
        >
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      )}
    </a>
  );
}
