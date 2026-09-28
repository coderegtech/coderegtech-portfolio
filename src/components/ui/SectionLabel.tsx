export function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      data-parallax-anchor
      data-reveal="fade"
      className={`eyebrow flex items-center gap-4 ${light ? "text-black/60" : "text-muted"}`}
    >
      <span data-parallax="section" data-parallax-y="24">
        {number}
      </span>
      <span className={`h-px w-7 ${light ? "bg-black/30" : "bg-white/30"}`} />
      <span data-parallax="section" data-parallax-y="-8">
        {children}
      </span>
    </p>
  );
}
