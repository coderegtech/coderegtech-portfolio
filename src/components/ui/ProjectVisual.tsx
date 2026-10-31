import Image from "next/image";
import type { Project } from "@/types";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.presentation === "mobile")
    return (
      <div
        data-reveal
        className="relative flex aspect-[16/10] items-start justify-center gap-3 overflow-hidden border border-line bg-charcoal px-5 pt-6 md:gap-5 md:pt-10"
      >
        {(project.images ?? [project.image]).slice(0, 3).map((src, i) => (
          <div
            key={src}
            className={`aspect-[9/19] w-[30%] overflow-hidden rounded-t-[18px] border-[4px] border-b-0 border-line bg-background shadow-2xl ${i === 1 ? "" : "translate-y-4"}`}
          >
            <Image
              src={src}
              alt={`${project.title} app screen ${i + 1}`}
              width={480}
              height={1013}
              sizes="(min-width: 1024px) 15vw, 30vw"
              className="w-full"
            />
          </div>
        ))}
      </div>
    );

  return (
    <div
      data-reveal
      className="relative aspect-[16/10] overflow-hidden border border-line bg-charcoal"
    >
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-left-top"
      />
    </div>
  );
}
