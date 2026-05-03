---
publish: true
created: 2026-03-01
modified: 2026-03-01
---

[[🌱 Claude Code]] is, at the time of writing, quickly becoming the tool of choice for many social media articles on AI. Many YouTube creators, article writers, etc, are claiming that Claude Code can replace many other tools.

Two YouTube creators have reached opposite conclusions about whether [[🌱 NotebookLM]] and Claude Code should coexist or compete.

That is the suggestion of [Claude's 200 Skills Destroyed My NotebookLM Workflow](https://www.youtube.com/watch?v=4-gKmXzvEmc\&list=WL\&index=17), which argues that NotebookLM's fixed offering of only nine Studio output types is a real limitation. His solution is to build 200+ Claude "skills"  - reusable prompt templates that act like personal digital employees, each tuned to produce a specific output in a specific format.

He claims that skills beat NotebookLM in the following ways:

- Unlimited output types  - not constrained to nine artefacts
- Skills can be connected to external tools (e.g. a community platform), so they don't just generate text  - they execute actions end-to-end
- Portable across Claude, Claude Code, Gemini, OpenAI, and other major platforms
- Codified once, reused indefinitely with consistent results

It is important to note, however, that skills can not currently replicate NotebookLM's citation functionality.

On the other hand, [Claude Code Can't Read 300 Files. So I Put It Inside NotebookLM](https://www.youtube.com/watch?v=qiOu7Ptjxng\&list=WL\&index=14) identifies a further limit with Claude Code - it can't handle the same number of documents as NotebookLM. As such, he designed a boundary to leverage multiple tools. His architecture has three parts:

1. **Claude Code** runs in a terminal inside an Obsidian vault and orchestrates the whole workflow.
2. **A NotebookLM CLI** (an unofficial, community-built tool using internal Google APIs) lets Claude Code programmatically create notebooks, upload sources, run queries, and retrieve cited results.
3. **Obsidian** receives the outputs  - answers with citations preserved as wikilinks that jump to exact source passages.

The workflow he demonstrates: Claude Code searches YouTube for relevant videos → curates a list → uploads them to a new NotebookLM notebook via the CLI → asks a research question → retrieves the cited answer → writes it into an Obsidian dashboard, Q\&A log, and per-source notes.

He claims that this approach offers the following advantages:

- NotebookLM's citation grounding reduces hallucination risk  - each claim links back to a real passage
- Claude Code adds control over _which_ sources go in (better signal-to-noise than NotebookLM's built-in "fast research")
- Outputs live permanently in Obsidian as plain files, not trapped in a browser
- The graph view in Obsidian reveals connections across sources and topics
- Audio overviews, mind maps, and flashcards can all be triggered via CLI and imported into Obsidian

He notes that his own citation audit found roughly 60% strong matches, 31% partial, and 10-15% weak  - so he treats citations as inspectable evidence to verify, not guaranteed truth.

However, the NotebookLM CLI is unofficial and will likely break.
