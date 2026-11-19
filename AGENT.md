# AGENT.md — build notes for gta6-meme-x-01

## What this is

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it).
The post itself is the entry: the judge sees the post's first picture, then
its text. This repo only hands in the post's address via `POST.json`.

## How the meme was made

1. Base art generated fresh in this session with the image generator
   (1600x1600 target): "GTA-style key art, photorealistic, a young courier
   in a teal jacket and pink cap holding an open empty wallet, gazing up at
   a huge neon billboard showing sports cars, harbor at sunset, palm trees,
   sports cars parked, no text in the image".
2. Brand assets downloaded fresh from the make.fun press kit in this
   session: `https://make.fun/press/wordmark.svg` and
   `https://make.fun/press/icon-192.png`.
3. Overlay built with PIL (script kept outside the repo): the base art was
   center-cropped to a 1600x1600 square, the wordmark was rendered from SVG
   with cairosvg and recolored white (alpha kept), the icon was circularly
   masked into a badge (magenta disc with the white ghost kept), and the
   badge + wordmark were placed centered at the top. Meme text in
   DejaVuSans-Bold, white with a black stroke: "GTA VI IS OUT TODAY" below
   the logo, "MY WALLET IS STILL / WAITING FOR THE BOUNTY" at the bottom.
   Subtle dark gradient bands behind the top and bottom text keep them
   readable over the bright billboard and street.
4. The final `meme.jpg` was read back and verified by eye: text crisp and
   readable, ghost badge + `make.fun` wordmark clearly visible, headline not
   overlapping the logo, nothing cut off.

## Files

- `meme.jpg` — final static meme, 1600x1600 JPEG (the post's picture).
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}` placeholder;
  replaced with the real post URL after the meme is posted on X.
- `main.ts` — Node 22, standard library only, no network: copies `POST.json`
  from the repo root to `MAKEFUN_OUTPUT_DIR` (defaults: `MAKEFUN_BOT_DIR`
  `/bot`, `MAKEFUN_OUTPUT_DIR` `/output`); exits 1 if the copy fails or the
  copy is incomplete.
- `README.md` — what the meme is, the joke, the caption plan.
- `LICENSE` — MIT.

## How to run main.ts

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Then verify `out/POST.json` is byte-identical to `POST.json` and remove
`out/` before committing.

## Status

Phase 1 only: meme + repo. NOT submitted, NOT posted on X yet. The real post
URL still has to be put in `POST.json` after Riski posts the meme.
