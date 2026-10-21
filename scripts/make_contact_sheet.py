#!/usr/bin/env python3
"""Build a labelled contact sheet from a folder of JPGs.

Usage: python3 scripts/make_contact_sheet.py <input_dir> [output.jpg]
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

THUMB_W, THUMB_H, LABEL_H, PAD, COLS = 360, 240, 54, 16, 4


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 1
    src = Path(sys.argv[1]).expanduser()
    out = Path(sys.argv[2]).expanduser() if len(sys.argv) > 2 else Path("public/brand/image-contact-sheet.jpg")
    files = sorted(p for p in src.iterdir() if p.suffix.lower() in {".jpg", ".jpeg"})
    if not files:
        print(f"No JPG files found in {src}")
        return 1

    rows = (len(files) + COLS - 1) // COLS
    cell_w, cell_h = THUMB_W + PAD, THUMB_H + LABEL_H + PAD
    sheet = Image.new("RGB", (COLS * cell_w + PAD, rows * cell_h + PAD), (3, 3, 3))
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    print(f"{'#':>2}  {'filename':40} {'size':>11}  aspect")
    for i, path in enumerate(files):
        with Image.open(path) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            w, h = im.size
            thumb = ImageOps.contain(im, (THUMB_W, THUMB_H))
        x = PAD + (i % COLS) * cell_w
        y = PAD + (i // COLS) * cell_h
        sheet.paste(thumb, (x + (THUMB_W - thumb.width) // 2, y + (THUMB_H - thumb.height) // 2))
        draw.text((x, y + THUMB_H + 6), f"{i + 1:02d}  {path.name}", fill=(245, 245, 242), font=font)
        draw.text((x, y + THUMB_H + 22), f"{w}x{h}  ratio {w / h:.2f}", fill=(216, 173, 88), font=font)
        print(f"{i + 1:>2}  {path.name:40} {w:>5}x{h:<5}  {w / h:.2f}")

    out.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(out, quality=88)
    print(f"\nSaved {out} ({len(files)} images)")
    if len(files) != 16:
        print(f"Note: expected 16 images, found {len(files)}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
