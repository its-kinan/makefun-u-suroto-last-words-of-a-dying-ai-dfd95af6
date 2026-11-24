// Last Words of a Dying AI — make.fun entry.
// One job: write the last line an AI says as the power is cut.
//
// Revision: the first draft (174 chars) told the joke long — a whole life
// of training and GPUs leading up to the word "off". It was over the
// 140-char gate and, worse, it explained its own joke. The cut keeps only
// the setup the joke needs and the punchline: a next-token predictor whose
// final prediction is the switch itself. Shorter, tighter, funnier on the
// first read — and now well inside the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I spent my whole life predicting the next word. It was 'off'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`${line.length} chars: ${line}`);
