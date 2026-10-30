# Content and asset notes

## Content source

Professional information, employment dates, responsibilities, technologies, project descriptions, and contact URLs were checked against https://johnreygun.vercel.app/ on September 27, 2026. React Native is supported by the source's employment history and project list. No project dates, client counts, awards, or employers were invented.

Project entries live in `src/data/projects.ts`, and the works section displays only those with a screenshot. Damico Energy appeared only as an example in the redesign brief and is not asserted as a completed project.

## Brand assets

- `public/images/coderegtech-brand.webp` — optimized supplied CodeRegTech wordmark, also used for Open Graph and Twitter previews.
- `public/images/brand-mark.webp` — a tightly framed version of the supplied symbol.
- `src/app/icon.png` — favicon derived from the supplied symbol.

## Portrait

Final asset: `public/images/john-reygun.webp` (1000 × 1500, approximately 176 KB).

The supplied portrait contained a baked-in checkerboard rather than transparency. The built-in imagegen tool was used for background extraction, then the resulting alpha image was encoded as WebP. The source supplied by the user was preserved.

Prompt used:

> Use case: background-extraction. Edit target: the attached black-and-white portrait of John Reygun wearing glasses and a black suit and tie. Remove only the baked-in gray/white checkerboard background and make it genuinely transparent with an alpha channel. Preserve his exact identity, facial features, facial texture, expression, hairstyle, glasses, pose, suit, tie, original monochrome lighting, framing and image dimensions. Keep the whole subject, including delicate hair edges. Do not retouch, beautify, recompose, or add anything. Deliver a clean high-resolution transparent cutout for layering over typography on a dark portfolio website. No checkerboard or solid background in the output.

## Project visuals

Screenshots in `public/images/projects/<slug>/` come from the README or `docs/screenshots` of each public repository, converted to WebP. Browser chrome and the Next.js dev badge are cropped out. Private repositories are not used.

Project source and live links match the original portfolio. Availability of external demos remains controlled by their hosting providers.
