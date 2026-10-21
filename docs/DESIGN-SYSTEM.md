# Design system

Tokens live in `src/app/globals.css` under `:root`.

| Token | Value | Use |
|---|---|---|
| `--obsidian` | `#030303` | Page background |
| `--graphite` | `#0D0D0D` | Panels, inputs |
| `--elevated` | `#141414` | Selected or raised surfaces |
| `--ivory` | `#F5F5F2` | Primary text |
| `--muted` | `#AAA79F` | Secondary text, metadata |
| `--gold` | `#D8AD58` | Accent, primary button |
| `--gold-hi` | `#F0CF88` | Hover, focus, highlights |
| `--gold-deep` | `#9B7636` | Gradient end |
| `--ai` | `#7D35FF` | Only the "placeholder" badge; kept deliberately rare |

Type: Manrope Variable (self-hosted via `@fontsource-variable/manrope`) and JetBrains Mono for labels and metadata. Fonts are bundled from npm, so the build needs no request to Google Fonts.

Layout: content max width 1440px, gutters `clamp(1.25rem, 4vw, 4rem)`, section spacing `clamp(4rem, 9vw, 8rem)`.

Diamond motif: used in the hero, the nav mark, the capability bullets and one faint return in the final CTA. Nowhere else.

Motion: one CSS-only gold sheen on the hero crystal. All animation and smooth scrolling are disabled under `prefers-reduced-motion`.

Editing content: `src/data/*.ts` (site, capabilities, projects, services, pricing, process, stack, faq, resume, architecture).
