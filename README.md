# John Reygun · CodeRegTech

A cinematic, monochrome portfolio built with Next.js App Router, React, strict TypeScript, Tailwind CSS, and Lucide. Ready to deploy as a standard Next.js project on Vercel.

## Run locally

Requires Node.js 20.9 or later. Node.js 24 was used for this build.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

ESLint 9 is pinned for compatibility with the React rules bundled by the current `eslint-config-next`. ESLint 10 currently fails in those upstream rules.

## Deploy on Vercel

1. Push this project to your Git repository.
2. Import the repository in Vercel and choose the Next.js framework preset.
3. Use `npm run build` and the default Next.js output settings. No environment variables are required.
4. Attach your existing domain, `johnreygun.vercel.app`, or update `profile.url` in `src/data/socials.ts` if the deployment uses another canonical URL.

The production build prerenders the portfolio, sitemap, and robots file. Next.js serves responsive WebP/AVIF images. Google fonts are fetched at build time by `next/font` and then self-hosted; the build environment needs access to Google Fonts.

## Content and structure

- `src/app` — route, metadata, JSON-LD, sitemap, robots, theme, and favicon.
- `src/components/sections` — Hero, About, Expertise, Projects, Experience, Contact.
- `src/components/layout` — navigation and footer.
- `src/components/ui` — buttons, project presentation, section labels, availability, and cursor.
- `src/data` — project information, employment history, skills, profile, and social links.
- `src/types` — shared content types.
- `public/images` — optimized portrait, supplied branding, and recovered project assets.

The page and its sections are Server Components. Mobile navigation, the project cursor, and a shared scroll-motion controller use client JavaScript. The expandable archive uses native HTML. Contact actions use the verified email address; there is no unconnected contact form or simulated submission.

## Updating content

Edit the relevant file in `src/data`. Project records are rendered dynamically. Project years are omitted because the original portfolio does not supply them. The 2+ years statistic and all employment dates preserve the original source rather than inferring new claims.

The footer year is calculated during prerendering. A new deployment refreshes it for a new year.

## Assets and source notes

See [asset and content notes](docs/ASSETS.md). The works section shows only projects with screenshots, taken from each public repository's README or docs. Add an `image` in `src/data/projects.ts` to display another project.

## Accessibility and motion

Includes a skip link, semantic landmarks and heading levels, visible keyboard focus, an accessible mobile menu with Escape and focus handling, descriptive image text, and reduced-motion CSS. The project cursor is disabled on touch devices and for reduced-motion preferences. Critical content remains available without JavaScript.

`ScrollMotion.tsx` adds layered hero parallax, section accents, clipped image movement, and one-time opacity reveals. Motion extends across About copy, expertise cards, project labels/titles/descriptions/tags and archive entries, experience rows, contact details, button icons, and footer branding. Text groups use small offsets, while decorative layers travel farther. Fixed navigation remains stable. It preserves native scrolling, caches geometry, and runs animation frames only while layers are moving. Headings have local anchors so long sections do not dilute their motion. Scroll ranges end at reachable page positions, allowing footer elements to complete their movement. Geometry refreshes after resizing, font loading, and archive expansion. Parallax wrappers separate scroll movement from Tailwind's hover translation on child icons.

Adjust an element's `data-parallax-x` or `data-parallax-y` for its total travel. Hero ranges start at zero; section ranges are centered around zero. Keep `data-parallax-anchor` on a stable ancestor, with motion on its child. `data-parallax-unit="percent"` supports internal image movement. Touch devices and viewports below 768 px retain parallax at 45% of desktop pixel travel and 60% of image travel, with horizontal movement disabled. Reduced-motion preferences disable parallax and reveals, including when changed while the page is open. The Anote image uses 12% overscan on desktop and 8% on mobile to cover its movement inside the clipped frame.
