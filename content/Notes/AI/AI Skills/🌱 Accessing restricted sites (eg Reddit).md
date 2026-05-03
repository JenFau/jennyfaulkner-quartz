---
dg-publish: true
---
A challenge that I run across fairly frequently when using n8n to gather information for me is the difficulty of accessing certain sites, for example Reddit. 

[This video](https://chatgpt.com/c/6990b5ea-06c8-8396-ba85-329053483b6b#:~:text=Change%20Everything%0AURL%3A-,https%3A//www.youtube.com/watch%3Fv%3DV9atNrDjnZs,-The%20video%E2%80%99s%20core) outlines a workaround of installing the Gemini CLI in [[🌱 Claude Code]] and creating a "Reddit fetch" skill that instructs Clause to call Gemini from the command line to fetch and summarise content and then return the results to Claude's workflow. It is open that this basic workaround can fail - Gemini can summarise generalities rather than the specified thread. 

To address this, the video suggests using a 'last 30 days' research [[🌱 Claude Skills|skill]] which can be found in https://github.com/ykdojo/claude-code-tips:

```
---
name: reddit-fetch
description: Fetch and summarize content from Reddit using Gemini CLI via tmux. Use when the user asks to fetch, read, or summarize Reddit posts or threads.
---

# Reddit Fetch Skill

When asked to fetch content from Reddit or other blocked sites:

1. Start a tmux session
2. Use Gemini CLI to fetch the content: `gemini "fetch and summarize: <url>"`
3. Capture the output
4. Return the results

Use this pattern: tmux new-session -d -s research 'gemini "<prompt>"' sleep 5 tmux capture-pane -t research -p
```

If Clause recognises it can't access Reddit directly, it fires up Gemini in a tmux session, fetches the content, and brings it back. 

[[❓]] What is tmux? 
[[❓]] Are there other use cases that a tmux session would address? 
