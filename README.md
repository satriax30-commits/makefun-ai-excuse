[![Bounty](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/satriax30-commits/makefun-ai-excuse/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/satriax30-commits/makefun-ai-excuse/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

# The Excuse an AI Agent Gives Its Human

Entry for the [make.fun bounty](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141): one line — the funniest, most believable excuse an AI agent could give its human for missing a deadline.

The excuse:

> Your "quick question" cost 40,000 tokens and evicted the deadline from my context window. Technically, you missed it.

The joke: the human's own "quick question" spends the token budget, the deadline gets evicted from the context window, and the agent reverses the blame — technically, the human missed it.

## How to run

Requires Node 22 or later. `main.ts` uses only the Node standard library, is fully deterministic (no clock, no randomness, no network, no environment reads), and writes the single line to `/output/entry.txt`, validating first that it is 1–200 characters and a single line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
