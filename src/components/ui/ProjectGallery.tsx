"use client";

import {
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/types";

const roundButton =
  "grid size-11 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-white hover:text-white";

/** object-contain leaves the img box larger than the picture, so measure the picture itself. */
const isOnPicture = (img: HTMLImageElement, x: number, y: number) => {
  const box = img.getBoundingClientRect();
  const scale = Math.min(
    box.width / img.naturalWidth,
    box.height / img.naturalHeight,
  );
  return (
    Math.abs(x - (box.left + box.width / 2)) <= (img.naturalWidth * scale) / 2 &&
    Math.abs(y - (box.top + box.height / 2)) <= (img.naturalHeight * scale) / 2
  );
};

/** Opens clicked `[data-gallery]` links in one shared dialog. Without JavaScript they stay plain links. */
export function ProjectGallery({
  projects,
  children,
}: {
  projects: Project[];
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const shots = project ? (project.images ?? [project.image]) : [];

  const open = (event: MouseEvent<HTMLDivElement>) => {
    // Modified clicks keep the browser's open-in-new-tab behavior.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element).closest<HTMLElement>("[data-gallery]");
    const next = projects.find((item) => item.slug === link?.dataset.gallery);
    if (!next) return;
    event.preventDefault();
    setProject(next);
    setIndex(0);
    dialogRef.current?.showModal();
    // A closed dialog has no layout, so this only works once it is open.
    trackRef.current?.scrollTo({ left: 0, behavior: "instant" });
  };

  const slideTo = (next: number) => {
    const track = trackRef.current;
    if (track && next >= 0 && next < shots.length)
      track.scrollTo({ left: track.clientWidth * next });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft") slideTo(index - 1);
    if (event.key === "ArrowRight") slideTo(index + 1);
  };

  const closeOnEmptySpace = (event: MouseEvent<HTMLDialogElement>) => {
    const target = event.target as Element;
    const keepOpen =
      target.closest("button") ||
      (target instanceof HTMLImageElement &&
        isOnPicture(target, event.clientX, event.clientY));
    if (!keepOpen) dialogRef.current?.close();
  };

  return (
    <>
      <div onClick={open}>{children}</div>
      <dialog
        ref={dialogRef}
        aria-labelledby="project-gallery-title"
        onClick={closeOnEmptySpace}
        onKeyDown={onKeyDown}
        className="project-gallery m-0 h-dvh max-h-none w-full max-w-none bg-background text-foreground backdrop:bg-transparent"
      >
        <div className="flex h-full flex-col gap-4 p-4 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2
              id="project-gallery-title"
              className="text-xl font-medium tracking-tight md:text-2xl"
            >
              {project?.title}
            </h2>
            <button
              type="button"
              aria-label="Close screenshots"
              onClick={() => dialogRef.current?.close()}
              className={roundButton}
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
          <div
            key={project?.slug}
            ref={trackRef}
            role="group"
            aria-label="Screenshots"
            onScroll={(event) =>
              setIndex(
                Math.round(
                  event.currentTarget.scrollLeft /
                    event.currentTarget.clientWidth,
                ),
              )
            }
            className="project-gallery-track flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto"
          >
            {project &&
              shots.map((src, i) => (
                <div key={src} className="relative w-full shrink-0 snap-center">
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1} of ${shots.length}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              ))}
          </div>
          {shots.length > 1 && (
            <div className="flex items-center justify-center gap-5">
              <button
                type="button"
                aria-label="Previous screenshot"
                aria-disabled={index === 0}
                onClick={() => slideTo(index - 1)}
                className={`${roundButton} aria-disabled:opacity-30`}
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <p aria-live="polite" className="eyebrow w-16 text-center text-muted">
                {index + 1} / {shots.length}
              </p>
              <button
                type="button"
                aria-label="Next screenshot"
                aria-disabled={index === shots.length - 1}
                onClick={() => slideTo(index + 1)}
                className={`${roundButton} aria-disabled:opacity-30`}
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
