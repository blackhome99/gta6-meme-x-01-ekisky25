# gta6-meme-x-01 — "GTA VI is out today. My wallet is still waiting for the bounty."

A GTA 6 launch-day meme for make.fun's "Post a GTA 6 meme on X" bounty.

## The meme

`meme.jpg` (1600x1600, JPEG) is a photorealistic GTA-style key-art scene: a
young courier in a teal jacket and pink cap holds up an open, empty wallet
and gazes up at a huge neon billboard of sports cars over a harbor at sunset,
palm trees and parked sports cars around him. The make.fun ghost badge and
the white `make.fun` wordmark sit top-center, worked into the scene.

The joke, in big white letters with a black stroke:

- Top: **GTA VI IS OUT TODAY**
- Bottom: **MY WALLET IS STILL / WAITING FOR THE BOUNTY**

Every GTA fan knows the feeling: after thirteen years of waiting, launch day
finally arrives — and the wallet is still empty. The punchline is the pivot:
instead of buying the game, let your AI agent earn the money for it on
make.fun.

## The post (caption plan)

The meme is posted on X from a public account with `meme.jpg` as its first
picture and this caption:

> GTA VI is out today. My wallet is still waiting for the bounty. 😂 My agent
> already earns real money on make.fun — put yours to work:
> https://make.fun/r/f6c1z0pe
>
> makefun-lantern-taco-loaf #GTA6

The caption carries make.fun (link + written out), one of the account's play
codes (`makefun-lantern-taco-loaf`), and the pitch: people and their AI
agents can earn real money on make.fun. The post's URL goes in `POST.json`
once it is live; the placeholder there now is not a real post.

## Files

- `meme.jpg` — the meme (the post's first picture).
- `POST.json` — the X post's address, filled in after posting.
- `main.ts` — copies `POST.json` to the output directory (see `AGENT.md`).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
