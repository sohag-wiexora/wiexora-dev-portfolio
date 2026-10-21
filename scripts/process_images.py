#!/usr/bin/env python3
"""Copy originals, write optimized WebP derivatives, build the OG image.

Usage: python3 -I scripts/process_images.py <uploads_dir> <project_root>
Metadata (EXIF) is not carried into any output file.
"""
import shutil
import sys
from pathlib import Path

from PIL import Image

UP = Path(sys.argv[1])
ROOT = Path(sys.argv[2])

# (upload id, number, slug, destination folder under public/images or None, max width, role)
ITEMS = [
    ("d68fde5e", 1, "diamond-on-circuit-chip", "editorial", 1920, "optional"),
    ("11e264c0", 2, "black-marble-corridor", "editorial", 1000, "thesis"),
    ("8d16d985", 3, "layered-shield-planes", "capabilities", 1024, "secure"),
    ("6d75f0de", 4, "gold-layered-planes", "editorial", 1280, "engineering"),
    ("853166eb", 5, "crystal-on-glass-plates", "editorial", 1080, "optional"),
    ("cb98c540", 6, "gold-glow-diamond", "editorial", 1000, "og-source"),
    ("ae14d80d", 7, "prismatic-octahedron", "editorial", 1600, "optional"),
    ("2553137f", 8, "pyramid-prism-light-beam", "editorial", 1024, "process"),
    ("6ed21f38", 9, "refracting-crystal-lens-flare", "editorial", 1200, "optional"),
    ("f58ec8a6", 10, "gold-line-diamond-lorem-ipsum", None, 0, "not-recommended"),
    ("811cad42", 11, "gold-grey-faceted-crystal", "hero", 1024, "hero"),
    ("d85e0eda", 12, "gold-black-tiles-beyond-virtuals", None, 0, "not-recommended"),
    ("7d1b07af", 13, "isometric-node-network", "capabilities", 1110, "innovate"),
    ("89eb76a7", 14, "gold-wire-routes-dark-slab", "editorial", 1024, "secondary"),
    ("f0f79fc3", 15, "dark-architecture-gold-edges", "capabilities", 1024, "build"),
    ("1d6e8cd4", 16, "formal-portrait-white-background", "editorial", 1000, "optional"),
]
REFS = [("579c1b34", "reference-a-laptop-phone-mockup"), ("8404539d", "reference-b-tablet-mockup")]

orig_dir = ROOT / "assets" / "originals"
ref_dir = ROOT / "assets" / "references"
orig_dir.mkdir(parents=True, exist_ok=True)
ref_dir.mkdir(parents=True, exist_ok=True)

for uid, name in REFS:
    shutil.copyfile(UP / f"{uid}-image.jpg", ref_dir / f"{name}.jpg")

print(f"{'#':>2} {'role':16} {'output':62} {'dims':>11} {'KB':>5}")
for uid, n, slug, folder, maxw, role in ITEMS:
    src = UP / f"{uid}-image.jpg"
    shutil.copyfile(src, orig_dir / f"{n:02d}-{slug}.jpg")
    if folder is None:
        print(f"{n:>2} {role:16} {'(original only, no derivative)':62}")
        continue
    with Image.open(src) as im:
        im = im.convert("RGB")
        if im.width > maxw:
            im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
        out = ROOT / "public" / "images" / folder / f"{slug}.webp"
        out.parent.mkdir(parents=True, exist_ok=True)
        im.save(out, "WEBP", quality=86, method=6)
        print(f"{n:>2} {role:16} {str(out.relative_to(ROOT)):62} {im.width:>5}x{im.height:<5} {out.stat().st_size // 1024:>5}")

# Social preview: image 06 centred on the obsidian background, 1200x630.
with Image.open(UP / "cb98c540-image.jpg") as im:
    im = im.convert("RGB").resize((630, 630), Image.LANCZOS)
    canvas = Image.new("RGB", (1200, 630), (3, 3, 3))
    canvas.paste(im, (285, 0))
    og = ROOT / "public" / "og" / "default.jpg"
    og.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(og, "JPEG", quality=88, optimize=True)
    print(f"   og-image         {str(og.relative_to(ROOT)):62} 1200x630 {og.stat().st_size // 1024:>5}")
