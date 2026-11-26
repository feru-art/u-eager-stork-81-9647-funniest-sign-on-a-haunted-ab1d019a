// Funniest Sign on a Haunted Server Room Door
// Entry program: writes the one-line sign text to /output/entry.txt.
// The sign below won the local V1-V5 race (4 of 4 head-to-head games).
import { mkdirSync, writeFileSync } from "node:fs";

const outputPath = "/output/entry.txt";
const signText =
  "Badge in one at a time. The ghost tailgates and never holds the door.";

function writeSign(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(outputPath, signText, "utf8");
}

writeSign();
