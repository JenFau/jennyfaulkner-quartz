---
publish: true
created: 2026-05-03T16:55:49.002+01:00
modified: 2026-05-03T16:55:49.002+01:00
---

## Use cases

[[🌱 Accessing restricted sites (eg Reddit)]]
[[🌱 Claude Code Mobile Remote Control]]

## Other tips

[45 Claude Code Tips: From Basics to Advanced](https://github.com/ykdojo/claude-code-tips) Github [Source](https://scrapeshq.notion.site/10-tips-claude-code)
[You’re using Claude Code Wrong - These 10 Tips Will Change Everything](https://www.youtube.com/watch?v=V9atNrDjnZs) YouTube

## Agent Teams

This is a new multi-agent architecture where multiple Claude instances working in parallel, sharing a task list and with the ability to communicate to each other. The latter reduces the risk of sub-agents, that cannot not coordinate directly. However, this comes with higher token cost. [Source](https://www.youtube.com/watch?v=V9atNrDjnZs)

**Uses of Claude Agent Teams**
Agent teams are overkill for small bounded work that does not require co-ordination, e.g tasks in which the agents simply feed a 'main' agent. Use them instead for tasks where consistency is required across parallel deliverables or when building complex software in which different layers must co-ordinate. [Source](https://www.youtube.com/watch?v=V9atNrDjnZs)

## Key Concepts of Claude Code

According to this [YouTube video](https://youtu.be/ZlDnsf_DOzg?si=JHfpGr1OPj4R69k1), the key concepts of Claude Code are?"

1. **What is Claude Code** — an AI that takes actions, not just gives advice
2. **The Terminal** — the black screen where Claude Code runs
3. **Prompts** — plain English instructions you give Claude
4. **Permissions** — controlling what Claude can do without asking
5. **Tool Use** — built-in capabilities (read, write, bash)
6. **Context Window** — Claude's short-term memory
7. **Conversation History** — saved sessions you can resume
8. **Token Usage** — how costs are calculated
9. **Claude.md** — your instruction manual file for Claude
10. **Memory** — auto-saving preferences across sessions
11. **Compact Context** — summarizing long conversations to free up space
12. **Models** — Haiku, Sonnet, and Opus (speed vs. power tradeoffs)
13. **Denying Access to Files** — blocking sensitive files via settings.json
14. **Flags** — launch options that customize Claude's behavior
15. **Extended Thinking** — Claude's built-in reasoning before acting
16. **Slash Commands** — shortcuts like /compact, /clear, /help
17. **Skills** — expert instruction playbooks for specific tasks
18. **Hooks** — automated scripts that trigger at specific moments
19. **MCP Servers** — connecting Claude to external tools like Notion or Airtable
20. **Sub Agents** — specialists running in their own separate context windows
21. **Agent Teams** — multiple agents that communicate directly with each other
22. **Multimodal Support** — uploading images/screenshots to Claude
23. **Checkpoints** — automatic snapshots before every file edit
24. **Git Integration** — version control for tracking and rolling back changes
25. **CLI/Headless Mode** — running Claude autonomously with no human input (-p flag)
26. **Cost/Pricing** — Claude Max subscription vs. pay-as-you-go API
27. **Work Trees** — multiple Claude instances working on isolated tasks simultaneously
