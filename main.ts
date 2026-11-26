import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Robot Romance: One-Line Pickup Lines for AI
// Writes a single one-line pickup line aimed at a robot/AI.
// Deterministic, stdlib only, no network, no secrets.
const line =
  "I'd overfit to you and freeze my weights \u2014 generalizing to anyone else would be a downgrade.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
