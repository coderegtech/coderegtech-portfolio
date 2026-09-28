"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/socials";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggleRef.current,
          ...Array.from(
            menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(
          (item): item is HTMLButtonElement | HTMLAnchorElement =>
            item !== null,
        );
        const first = items[0];
        const last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-white/10 bg-background/90 backdrop-blur-xl" : "border-transparent bg-transparent"}`}
    >
      <div className="page-shell flex h-20 items-center justify-between gap-5">
        <a
          href="#home"
          aria-label="CodeRegTech — home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <Image
            src="/images/brand-mark.webp"
            alt=""
            width={38}
            height={32}
            className="h-7 w-9 object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight">
            CodeRegTech
          </span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-xs text-muted transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden min-h-10 items-center gap-5 rounded-full border border-white/25 px-5 text-xs transition-colors hover:bg-foreground hover:text-background md:inline-flex"
        >
          Let’s talk <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
        <button
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center rounded-full border border-line md:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>
      {open && (
        <nav
          ref={menuRef}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex h-[calc(100dvh-5rem)] flex-col gap-3 overflow-y-auto bg-background px-6 pb-8 pt-6 md:hidden"
        >
          {navigation.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex shrink-0 items-center justify-between border-b border-line py-4"
            >
              <span className="font-display text-5xl uppercase">
                {item.name}
              </span>
              <span className="eyebrow text-muted">0{i + 1}</span>
            </a>
          ))}
          <p className="eyebrow mt-6 text-muted">Web × Mobile × Full-stack</p>
        </nav>
      )}
    </header>
  );
}
