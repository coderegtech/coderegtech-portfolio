import Image from "next/image";
import type { Project } from "@/types";

export function ProjectVisual({ project }: { project: Project }) {
  const shots = project.images ?? [project.image];

  if (project.presentation === "mobile")
    return (
      <div
        data-reveal
        className="relative flex aspect-[16/10] items-start justify-center gap-3 overflow-hidden border border-line bg-charcoal px-5 pt-6 md:gap-5 md:pt-10"
      >
        {shots.map((src, i) => (
          <div
            key={src}
            className={`w-[30%] overflow-hidden rounded-t-[18px] border-[4px] border-b-0 border-line shadow-2xl ${i === 1 ? "" : "translate-y-4"}`}
          >
            <Image
              src={src}
              alt={`${project.title} app screen ${i + 1}`}
              width={480}
              height={1013}
              sizes="(min-width: 1024px) 15vw, 30vw"
              className="aspect-[9/19] w-full object-cover object-top"
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
        src={shots[0]}
        alt={`${project.title} screenshot`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-left-top"
      />
      {shots[1] && (
        <div className="absolute bottom-4 left-4 aspect-[16/10] w-[42%] overflow-hidden rounded-md border border-line shadow-2xl">
          <Image
            src={shots[1]}
            alt={`${project.title} second screen`}
            fill
            sizes="(min-width: 1024px) 21vw, 42vw"
            className="object-cover object-left-top"
          />
        </div>
      )}
    </div>
  );
}
