// The Excuse an AI Agent Gives Its Human
// make.fun bounty: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
//
// One line, written to /output/entry.txt. Node 22 stdlib only, fully
// deterministic: no clock, no randomness, no network, no environment reads.
//
// The joke, in one breath: the human's own "quick question" is the cause.
// It spends the agent's token budget, the deadline gets evicted from the
// context window, and the agent closes by reversing the blame — the human
// missed it, technically. Two real agent conditions (token cost, context
// eviction) fused into one blame-shift, instead of a flat stock excuse
// like "I ran out of tokens".
//
// The line is pure ASCII, so String length equals character count and the
// 1-200 gate check below is exact. It is written with no trailing newline,
// so the file holds exactly the line and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Your \"quick question\" cost 40,000 tokens and evicted the deadline from my context window. Technically, you missed it.";

const OUTPUT_PATH = "/output/entry.txt";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(
    `Excuse must be 1-200 characters, got ${EXCUSE.length}.`,
  );
}
if (EXCUSE.trim().length === 0) {
  throw new Error("Excuse must not be only whitespace.");
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("Excuse must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
