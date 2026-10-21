# Implementation status

Written honestly: **the site code has not been built, linted, type-checked or run.** The image files have been created and checked.

## Why the code is unverified

`npm install` could not run in the build environment: `registry.npmjs.org` did not resolve (`ENOTFOUND`) for npm or curl, and the proxy log showed no request from npm. Without dependencies there is no `next build`, no `tsc`, no `next lint`. The source was written carefully but has never been compiled. Expect that the first run may surface small type or lint errors.

## Verified

| Check | Result |
|---|---|
| All 16 images present, measured, copied to `assets/originals/` | Pass |
| WebP derivatives written; dimensions and formats read back | Pass (see `IMAGE-PLACEMENT-MAP.md`) |
| Every `/images`, `/og`, `/brand` path referenced in `src/` points to an existing file | Pass (8 of 8) |
| Contact sheet generated and visually checked | Pass |
| Every `@/` import resolves to a file | Pass |
| `package.json`, `tsconfig.json`, `.eslintrc.json` parse as JSON | Pass |
| `scripts/*.py` compile | Pass |

## Written but unverified

| Item | Files |
|---|---|
| Project scaffold | `package.json`, `tsconfig.json`, `next.config.mjs`, `.eslintrc.json`, `.gitignore`, `.env.example` |
| Layout, 404, résumé page | `src/app/layout.tsx`, `not-found.tsx`, `resume/page.tsx` |
| Homepage, 15 sections in the specified order | `src/app/page.tsx` plus `src/components/*` |
| Image wiring (hero, 3 capability visuals, thesis strip, engineering banner, process image, OG metadata) | `Hero.tsx`, `Capabilities.tsx`, `EditorialImage.tsx`, `page.tsx`, `layout.tsx`, `globals.css` |
| Capability tabs (arrow keys), architecture explorer with security rail, native-`<details>` FAQ | `Capabilities.tsx`, `Architecture.tsx`, `Faq.tsx` |
| Contact form with Zod client checks and server validation | `ContactForm.tsx`, `lib/validation.ts`, `api/contact/route.ts` |
| Abuse protection | Honeypot, minimum fill time, same-origin check, per-IP in-memory rate limit (best effort) |
| Central editable data | `src/data/*.ts` |

## Not done

| Item | Reason |
|---|---|
| Lint, typecheck, build, mobile and keyboard testing, Lighthouse, accessibility audit | Dependencies could not be installed |
| Visual check of image blending (hero mask, panel crops) | Needs a running page |
| Real project screenshots | None supplied; the Work section shows the brand mark with a "No project visual supplied yet" label |
| Portrait in About | Needs your decision (see placement map) |
| `public/resume/cv.pdf` | Not supplied; UI shows "PDF not supplied yet" and no fake download |
| 3D `.glb` | Intentionally not created |
| Email delivery | Needs credentials; without them `/api/contact` returns an honest 503, never a fake success |
| Original Drive filenames | Uploads were renamed; see the placement map |

## Decisions and defaults

- Plain CSS with custom properties instead of Tailwind; fonts via `@fontsource` so builds need no Google Fonts request.
- Images are decorative (`alt=""`) except the social preview. They are never used as fake project proof.
- Hero uses image #11 with a CSS radial mask so its background blends into the page. `Crystal.tsx` (SVG) remains for the faint return in the final CTA.
- Only WIEXORA's own portfolio is listed as a project, labelled "Self-initiated build", plus one visible placeholder.
- Technology list contains only what this repo uses; other candidates sit in `src/data/stack.ts` under `toConfirm`.
- No email, social links, résumé details or personal history are published until you fill them in.
- Pricing figures are your proposed anchors, editable in `src/data/pricing.ts`.

## Required credentials

`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, optionally `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`. See `.env.example`. Resend delivery is untested.

## First run

```bash
npm install
npm run lint && npm run typecheck && npm run build
npm run dev
```
