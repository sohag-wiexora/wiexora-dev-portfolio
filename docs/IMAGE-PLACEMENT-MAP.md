# Image placement map

Source: the 16 images you attached to the chat (the Google Drive folder itself is blocked in this environment, so these uploads are what was audited).

## Read this first

- **Original Drive filenames are unknown.** Uploads arrive renamed, so each image is identified by its position in your message (01 to 16) plus the descriptive name I gave it. The "Actual filename" column shows that assigned name. If you want the real Drive names recorded, send me the list.
- Descriptions below come from looking at each image. Nothing is inferred about projects, clients or outcomes. None of these images is a screenshot of real work, so **no image is used as a project cover**.
- **Rights:** several images look like stock or AI-generated art, and #10 and #12 look like they come from other brands' templates. Confirm you have the right to use each one commercially before launch.
- Two extra images in your message (a laptop-and-phone mockup and a tablet mockup, both other brands' work) are treated as design references. They are kept in `assets/references/` and are not used on the site.
- Originals are preserved in `assets/originals/` (outside `public/`). Contact sheet: `public/brand/image-contact-sheet.jpg`.

## The map

| Image | Actual filename | Intended section | Exact purpose | Crop / aspect ratio | Mobile treatment | Implementation status |
|---|---|---|---|---|---|---|
| 01 | `01-diamond-on-circuit-chip.jpg` (1920x600, 3.2:1) | None yet | A diamond on a circuit board with a blue glow. Strong "intelligence" idea but the blue clashes with the gold palette | 3.2:1 as is | Would need a tighter crop | **Optional asset.** Derivative saved, not wired |
| 02 | `02-black-marble-corridor.jpg` (1000x667, 3:2) | 01 Thesis | Editorial strip under "Precision is visible": a dark corridor with a sharp lit edge, matching the "precision" idea | 21:9 cover crop | Same strip, full width | **Primary placement.** Wired in `page.tsx` |
| 03 | `03-layered-shield-planes.jpg` (1024x1024) | 02 Capabilities, SECURE | Stacked glass planes with shield icons, one purple base plane. Direct visual for layered security | 1:1 desktop | 16:10 cover crop | **Primary placement.** Wired via `capabilities.ts` |
| 04 | `04-gold-layered-planes.jpg` (1280x720, 16:9) | 04 Engineering | Gold-lit stacked planes with vertical connectors: reads as architecture layers | 16:9 | Full width, 16:9 | **Primary placement.** Wired in `page.tsx` |
| 05 | `05-crystal-on-glass-plates.jpg` (1080x764) | None yet | Rainbow crystal through three plates on a navy-blue background | n/a | n/a | **Optional asset.** Rainbow colors and a navy (not obsidian) background clash with the identity |
| 06 | `06-gold-glow-diamond.jpg` (1000x1000) | Social preview | Diamond with a gold glow and small particles. Particles conflict with the "no random particles" rule, so it is not used in-page | Centered at 630x630 on a 1200x630 obsidian canvas | n/a | **Secondary placement.** Used for `public/og/default.jpg` and wired in `layout.tsx` |
| 07 | `07-prismatic-octahedron.jpg` (1920x1920) | None yet | Prismatic octahedron with orange light. Good candidate for a restrained return in the final CTA | 1:1 | 1:1 | **Optional asset.** Derivative saved at 1600px, not wired |
| 08 | `08-pyramid-prism-light-beam.jpg` (1024x1024) | 06 Process | Small glass pyramid refracting a warm beam of light. Fits "The Diamond Protocol" | 1:1 sticky column | 16:9 cover above the stages | **Primary placement.** Wired in `page.tsx` |
| 09 | `09-refracting-crystal-lens-flare.jpg` (1500x1500) | None yet | Crystal with rainbow flare | 1:1 | n/a | **Optional asset.** Overlaps with #07 and is more colorful. Derivative at 1200px, not wired |
| 10 | `10-gold-line-diamond-lorem-ipsum.jpg` (2048x1080) | None | Gold line diamond, but the file has "LOREM IPSUM" text and small body text baked in | n/a | n/a | **Not recommended.** Baked-in placeholder text. Original kept, no derivative |
| 11 | `11-gold-grey-faceted-crystal.jpg` (1024x1024) | 02 Hero | One dominant focal point: a faceted gold and graphite crystal, near-black background, no particles. Best match to the hero rules | 1:1, edges faded with a CSS radial mask so the background blends | Scales to 80vw, shown below the text | **Primary placement.** Wired in `Hero.tsx` (priority loaded) |
| 12 | `12-gold-black-tiles-beyond-virtuals.jpg` (600x600) | None | Gold and black tiles with baked-in text ("BEYOND VIRTUALS") and numerals, low resolution | n/a | n/a | **Not recommended.** Text belongs to another brand, 600px is too small to scale. Original kept, no derivative |
| 13 | `13-isometric-node-network.jpg` (1110x1110) | 02 Capabilities, INNOVATE | Isometric platform with gold nodes and connecting lines: suggests networks and automation | 1:1 desktop | 16:10 cover crop | **Primary placement.** Wired via `capabilities.ts` |
| 14 | `14-gold-wire-routes-dark-slab.jpg` (1024x1536, 2:3) | None yet | Gold wires routing across dark slabs. Subtle and on-brand | Would crop to a 21:9 band | Same band | **Secondary placement.** Derivative saved (173 KB), not wired. Natural fit for a Pricing or Services banner |
| 15 | `15-dark-architecture-gold-edges.jpg` (1024x1024) | 02 Capabilities, BUILD | Dark architectural space with thin gold edges. Direct visual for building structure | 1:1 desktop | 16:10 cover crop | **Primary placement.** Wired via `capabilities.ts` |
| 16 | `16-formal-portrait-white-background.jpg` (1989x2576) | 09 About (optional) | Formal portrait on a plain white background | Would need a 4:5 crop | Same | **Optional asset.** Derivative saved at 1000px with metadata stripped, **not wired**. A white passport-style background clashes with the dark design, and a public photo is your call (see below) |

## Summary

- Primary placements (wired): #02, #03, #04, #08, #11, #13, #15 (7 images)
- Secondary: #06 (social preview, wired), #14 (saved, not wired)
- Optional: #01, #05, #07, #09, #16
- Not recommended: #10, #12

## Decisions for you

1. **Portrait (#16):** do you want it public on the About section? If yes, a darker or cut-out version will sit much better than the white background. The site can render it once you decide.
2. **Rights** for every image you keep (see top).
3. Real project screenshots will be needed for the Work section. Add them to `public/images/projects/` and set `image` in `src/data/projects.ts`.

## Files

| Folder | Contents |
|---|---|
| `assets/originals/` | All 16 originals, renamed `NN-description.jpg` |
| `assets/references/` | The 2 other-brand mockups (not used) |
| `public/images/hero/` | #11 |
| `public/images/capabilities/` | #03, #13, #15 |
| `public/images/editorial/` | #01, #02, #04, #05, #06, #07, #08, #09, #14, #16 |
| `public/og/default.jpg` | Social preview built from #06 |
| `public/brand/image-contact-sheet.jpg` | Labelled sheet of all 16 |

Regenerate everything with `python3 -I scripts/process_images.py <uploads_dir> .` if you change the mapping.
