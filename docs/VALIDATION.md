# Validation

Verified against the completed application on September 28, 2026.

- `npm run lint` — passed without warnings after correcting the PostCSS export.
- `npm run build` — passed, including TypeScript validation and static prerendering.
- `npm run typecheck` — passed; the subsequent production build also passed TypeScript.
- Dependency installation audit — zero reported vulnerabilities.
- Production HTTP checks — home page, robots, sitemap, favicon, all five public images, and the image optimization endpoint returned HTTP 200.
- Hero optimization — a 640 px AVIF response was 19,475 bytes; the source WebP is 176,244 bytes.
- Browser layouts inspected at 320 px, 390 px, 768 px, 1280 px, and 1440 px widths.
- No document-level horizontal overflow at the tested widths; narrow project and contact typography was corrected after inspection.
- All internal anchor targets exist, and no links use empty or placeholder destinations.
- The mobile menu moves focus into navigation, locks background scrolling, closes with Escape, and restores focus to the toggle. Selecting a destination closes the menu and unlocks scrolling.
- The native archive expands to eight project entries and collapses with the Enter key.
- The production page contains one H1, canonical metadata, and Person JSON-LD. Production browser logs contained no errors.

The checks above do not include a field Core Web Vitals measurement. Original project screenshots that are no longer available from Fruitask are documented in [ASSETS.md](ASSETS.md).

The production preview is served at `http://localhost:3001`. The development server uses `http://localhost:3000`.

## Parallax update · September 28, 2026

Initial implementation checks are recorded here; the current behavior is described in the latest update below.

- Lint, standalone TypeScript check, and production build passed after adding scroll motion.
- At the same desktop viewport, all six section positions/heights and the complete rendered main text matched the original production page exactly.
- Native scrolling at 398 px produced distinct hero offsets: background type 33.767 px, portrait 20.260 px, card −12.606 px, and foreground −4.502 px. Decorative text lines moved in opposite directions. No horizontal overflow appeared.
- The Anote image moved inside its existing clipped frame with 1.12 overscan scaling and percentage translation. Existing hover transforms remain on separate parent layers.
- At 390 px, parallax attributes were absent, image scaling was disabled, and the About heading faded in with no translation. No horizontal overflow appeared.
- Eight lifecycle checks executed the actual transpiled controller with mocked DOM geometry and media/observer APIs. They covered reduced-motion startup and live changes, passive scrolling, one-time reveals, keyboard focus on project links, SVG/percentage movement, archive/resize invalidation, desktop/mobile changes, hidden tabs, and unmount cleanup.

The lifecycle harness validates controller behavior; it does not emulate browser rendering or measure compositor performance. Reduced-motion preference changes were tested through that harness, while desktop/mobile appearance and native scrolling were checked in the browser.

### Expanded component coverage

- Extended motion to expertise cards, experience entries, project metadata and archive titles, About copy, contact details, shared button icons, and footer elements.
- All six section positions/heights still match the original desktop baseline after adding component groups. Motion is present in every content section and the footer.
- Verified alternating expertise-card offsets, per-entry experience offsets, contact/footer motion, and archive-title motion after expanding the native disclosure. No desktop horizontal overflow.
- Lint, production build including TypeScript, and all eight controller lifecycle checks passed again.

### Stronger depth and mobile motion

- Headings now move within their own stable bounds, with 32–56 px total travel. The work heading changed from 1.117 px to 18.503 px during 354 px of native scrolling. All six desktop section positions/heights still match the original layout.
- Increased depth for expertise cards, experience entries, project visuals, section labels, and footer elements; paragraph and control movement remains smaller. Hero status and statistics also have independent motion.
- Enabled mobile parallax at reduced strength. At 390 px and scrollY 363, background typography moved 15.137 px and the portrait moved 8.764 px; horizontal typography offsets remained zero. The mobile About heading also moved and remained visible. No horizontal overflow appeared.
- Separated parallax wrappers from hover-translated Button, Contact, and Footer icons to preserve Tailwind v4 hover behavior. Archive rotation has its own transition.
- Lint and production build, including TypeScript, passed. Twelve checks of the real transpiled controller passed, covering mobile scaling, desktop restoration, reduced motion, footer endpoint travel, hidden archive anchors, observers, and cleanup. Browser geometry and media are mocked in the harness; it is not a device performance benchmark.
