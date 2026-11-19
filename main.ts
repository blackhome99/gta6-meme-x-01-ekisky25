// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry is the X post itself: this program only hands the house the
// post's address. It copies POST.json from the repository root into the
// output directory, where the gate reads it and fetches the post from X.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied to ${outputDir}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate reads the copy byte for byte, so refuse a short write.
if (statSync(target).size !== statSync(source).size) {
  console.error(`POST.json copy to ${outputDir} is incomplete`);
  process.exit(1);
}
