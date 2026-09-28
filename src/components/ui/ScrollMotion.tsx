"use client";

import { useEffect } from "react";

type MotionElement = HTMLElement | SVGElement;
type Anchor = { element: Element; top: number; height: number };
type Layer = {
  element: MotionElement;
  anchor: Anchor;
  hero: boolean;
  unit: "px" | "%";
  x: number;
  y: number;
  currentX: number;
  currentY: number;
  active: boolean;
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const amount = (value: string | undefined) => {
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
};

/** Enhances server-rendered content without taking ownership of scrolling. */
export function ScrollMotion() {
  useEffect(() => {
    const root =
      document.getElementById("portfolio-motion") ??
      document.getElementById("main-content");
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const revealed = new WeakSet<Element>();
    const revealTargets = Array.from(
      root.querySelectorAll<MotionElement>("[data-reveal]"),
    );

    const startReveals = () => {
      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        return () => {};
      }

      const show = (element: MotionElement, instant = false) => {
        revealed.add(element);
        if (instant) element.dataset.revealInstant = "";
        element.dataset.revealState = "visible";
      };
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              show(entry.target as MotionElement);
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
      );

      // Read before writing. Content already in view (including a restored
      // anchor position) stays visible; only upcoming visuals fade in.
      const positions = revealTargets.map((element) => {
        const rect = element.getBoundingClientRect();
        return { element, top: rect.top, height: rect.height };
      });
      for (const { element, top, height } of positions) {
        if (revealed.has(element) || (height > 0 && top < window.innerHeight)) {
          show(element, true);
        } else {
          element.dataset.revealState = "pending";
          observer.observe(element);
        }
      }

      // Keyboard navigation must never land inside an invisible visual.
      const onFocus = (event: FocusEvent) => {
        if (!(event.target instanceof Element)) return;
        let visual = event.target.closest<MotionElement>("[data-reveal]");
        while (visual) {
          show(visual, true);
          observer.unobserve(visual);
          visual = visual.parentElement?.closest<MotionElement>("[data-reveal]") ?? null;
        }
        event.target
          .querySelectorAll<MotionElement>("[data-reveal]")
          .forEach((descendant) => {
            show(descendant, true);
            observer.unobserve(descendant);
          });
      };
      root.addEventListener("focusin", onFocus);

      return () => {
        observer.disconnect();
        root.removeEventListener("focusin", onFocus);
        revealTargets.forEach((element) => {
          element.removeAttribute("data-reveal-state");
          element.removeAttribute("data-reveal-instant");
        });
      };
    };

    const startParallax = () => {
      if (reducedMotion.matches) return () => {};

      const anchors = new Map<Element, Anchor>();
      const layers: Layer[] = Array.from(
        root.querySelectorAll<MotionElement>("[data-parallax]"),
      ).map((element) => {
        // These anchors never move: cached geometry cannot feed the animated
        // element's own transform back into the next scroll calculation.
        const anchorElement =
          element.closest("[data-parallax-anchor]") ??
          element.closest("section") ??
          root;
        let anchor = anchors.get(anchorElement);
        if (!anchor) {
          anchor = { element: anchorElement, top: 0, height: 1 };
          anchors.set(anchorElement, anchor);
        }
        element.dataset.parallaxReady = "";
        return {
          element,
          anchor,
          hero: element.dataset.parallax === "hero",
          unit: element.dataset.parallaxUnit === "percent" ? "%" : "px",
          // Keep depth on touch screens, with smaller vertical travel and no
          // sideways drift near narrow viewport edges.
          x: desktop.matches ? amount(element.dataset.parallaxX) : 0,
          y:
            amount(element.dataset.parallaxY) *
            (desktop.matches
              ? 1
              : element.dataset.parallaxUnit === "percent"
                ? 0.6
                : 0.45),
          currentX: 0,
          currentY: 0,
          active: false,
        };
      });

      let frame = 0;
      let lastTime = 0;
      let measureNeeded = true;
      let disposed = false;
      let viewportHeight = window.innerHeight;
      let maxScroll = 1;

      const render = (time: number) => {
        frame = 0;
        if (disposed || document.hidden) return;
        const scrollY = window.scrollY;

        if (measureNeeded) {
          viewportHeight = window.innerHeight;
          maxScroll = Math.max(
            document.documentElement.scrollHeight - viewportHeight,
            1,
          );
          anchors.forEach((anchor) => {
            const rect = anchor.element.getBoundingClientRect();
            anchor.top = rect.top + scrollY;
            anchor.height = rect.height;
          });
          measureNeeded = false;
        }

        // Frame-rate-independent easing; it smooths layers, never the page.
        const elapsed = Math.min(time - lastTime || 16.67, 64);
        const blend = 1 - Math.exp(-elapsed / 85);
        lastTime = time;
        let unsettled = false;

        for (const layer of layers) {
          const { element, anchor } = layer;
          const inRange =
            anchor.height > 0 &&
            anchor.top < scrollY + viewportHeight + 160 &&
            anchor.top + anchor.height > scrollY - 160;

          if (!inRange) {
            if (layer.active) element.removeAttribute("data-parallax-active");
            layer.active = false;
            continue;
          }

          // Local anchors give headings/cards their own visible scroll range.
          // Clamp that range to reachable positions so the footer also moves.
          const start = Math.max(0, anchor.top - viewportHeight);
          const end = Math.min(maxScroll, anchor.top + anchor.height);
          const progress = layer.hero
            ? clamp((scrollY - anchor.top) / Math.max(anchor.height, 1))
            : end > start
              ? clamp((scrollY - start) / (end - start)) - 0.5
              : 0;
          const targetX = progress * layer.x;
          const targetY = progress * layer.y;

          if (!layer.active) {
            // Snap only while entering the offscreen buffer, preventing a
            // large catch-up movement after anchor jumps or tab restoration.
            layer.currentX = targetX;
            layer.currentY = targetY;
            layer.active = true;
            element.dataset.parallaxActive = "";
          } else {
            layer.currentX += (targetX - layer.currentX) * blend;
            layer.currentY += (targetY - layer.currentY) * blend;
          }

          const moving =
            Math.abs(targetX - layer.currentX) > 0.02 ||
            Math.abs(targetY - layer.currentY) > 0.02;
          if (!moving) {
            layer.currentX = targetX;
            layer.currentY = targetY;
          }
          element.style.setProperty(
            "--parallax-x",
            `${layer.currentX.toFixed(3)}${layer.unit}`,
          );
          element.style.setProperty(
            "--parallax-y",
            `${layer.currentY.toFixed(3)}${layer.unit}`,
          );
          unsettled ||= moving;
        }

        if (unsettled) frame = requestAnimationFrame(render);
      };

      const schedule = () => {
        if (!frame && !disposed && !document.hidden) {
          lastTime = performance.now();
          frame = requestAnimationFrame(render);
        }
      };
      const invalidate = () => {
        measureNeeded = true;
        schedule();
      };
      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(frame);
          frame = 0;
        } else invalidate();
      };

      const resizeObserver = new ResizeObserver(invalidate);
      resizeObserver.observe(root);
      anchors.forEach((anchor) => resizeObserver.observe(anchor.element));
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", invalidate, { passive: true });
      window.addEventListener("pageshow", invalidate);
      root.addEventListener("toggle", invalidate, true);
      document.addEventListener("visibilitychange", onVisibility);
      void document.fonts.ready.then(() => {
        if (!disposed) invalidate();
      });
      schedule();

      return () => {
        disposed = true;
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", invalidate);
        window.removeEventListener("pageshow", invalidate);
        root.removeEventListener("toggle", invalidate, true);
        document.removeEventListener("visibilitychange", onVisibility);
        layers.forEach(({ element }) => {
          element.style.removeProperty("--parallax-x");
          element.style.removeProperty("--parallax-y");
          element.removeAttribute("data-parallax-ready");
          element.removeAttribute("data-parallax-active");
        });
      };
    };

    let stopReveals = startReveals();
    let stopParallax = startParallax();
    const onPreferenceChange = () => {
      stopReveals();
      stopParallax();
      stopReveals = startReveals();
      stopParallax = startParallax();
    };
    const onViewportChange = () => {
      stopParallax();
      stopParallax = startParallax();
    };
    reducedMotion.addEventListener("change", onPreferenceChange);
    desktop.addEventListener("change", onViewportChange);

    return () => {
      stopReveals();
      stopParallax();
      reducedMotion.removeEventListener("change", onPreferenceChange);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, []);

  return null;
}
