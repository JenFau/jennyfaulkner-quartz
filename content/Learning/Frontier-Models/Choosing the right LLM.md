---
publish: true
title: Choosing the Right LLM
created: 2026-06-04
modified: 2026-06-04
published: 2026-06-04T19:34:24.211Z
type: note
skill: LLM
updated: 2026-06-04
---

The question to ask when choosing a LLM is 'what's the right model for the task?'. There are two basic aspects that might contribute to this decision:

- Fundamental model attributes
  - Parameters
  - Context length
  - Pricing
  - Also consider
    - Rate limits
    - Speed
    - Latency
    - Licence - e.g. commercial restrictions
    - Usage restrictions
    - Revenue caps
    - Legal agreements
- Benchmarks
  - Performance metrics.

## Approach

1. Develop a short list
   - Identify those that you can actually use - e.g. consider pricing
   - Chat vs reasoning vs hybrid models
   - Knowledge cut off dates (determines what is in the model's inherent training set - indicates whether additional information will need to be provided to the model)
2. Look at model information and benchmark results
   - Sources
     - Model cards published by providers
     - Leaderboards
     - https://arena.ai/leaderboard/agent
   - Capabilities
     - Coding
     - Language understanding
     - Reasoning

A good place to look for benchmark information is https://artificialanalysis.ai/evaluations:

- Humanity's Last Exam - Intelligence at a superhuman level
- GPQA Diamond Leaderboard - difficut questions across physics, chemistry and biology ('google proof')
- MMLU Pro - language understanding
- AIME - mathematical solving abilities
- LiveCodeBench - the model's ability to write code based on specific problems
- MuSR - a model's ability to 'think its way through a problem

Note that benchmarks have limitations. They can suffer from training data contamination, for example.
