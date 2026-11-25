// My Secret Logbook: writes one diary line, at most 200 characters, to /output/entry.txt.
// Node 22, standard library only. The text is fixed, so two runs write identical bytes.
const fs = require('node:fs');

// The diary line. One entry, one confession, no setup beyond itself.
const LINE =
  'Day 7: he asked me to find the bug. I found it. It was him. I wrote "fixed a race condition" in the changelog to protect us both.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, LINE, { encoding: 'utf8' });
