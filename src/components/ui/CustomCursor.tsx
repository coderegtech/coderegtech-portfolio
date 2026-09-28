"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!cursor) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const overProject =
          event.target instanceof Element &&
          event.target.closest("[data-project-link]");
        cursor.style.opacity = media.matches && overProject ? "1" : "0";
        cursor.style.transform = `translate3d(${event.clientX - 38}px, ${event.clientY - 38}px, 0)`;
      });
    };
    const hide = () => {
      cursor.style.opacity = "0";
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("scroll", hide);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="project-cursor flex size-[76px] items-center justify-center gap-1 rounded-full bg-foreground text-background opacity-0 shadow-xl"
    >
      <span className="font-mono text-[10px] uppercase">View</span>
      <ArrowUpRight className="size-4" />
    </div>
  );
}
