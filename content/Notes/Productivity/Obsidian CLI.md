---
dg-publish: true
---
Obsidian has recently released a CLI (command line interface) that lets you control Obsidian from your terminal. This allows for scripting, automation, and integration with external tools. [Source](https://help.obsidian.md/cli)

Obsidian can be controlled from the CLI, but it also enables agents to access the vault. [Source](https://youtu.be/ntvZlLRjYTI?si=disP8IXSp8Z7TYh2)

Advantages over the MCP - faster, gives direct access to local files, no need for a server, easier for both humans and agents to access and explore. CLI can move and rename files without breaking backlinks. [Source](https://youtu.be/ntvZlLRjYTI?si=disP8IXSp8Z7TYh2)

Some example use cases ([Source](https://youtu.be/ntvZlLRjYTI?si=disP8IXSp8Z7TYh2)):
**1) Telegram voice inbox to daily note**
- Send a voice note or photo to a Telegram bot
- AI agent processes it.
- CLI appends it to the current daily note as a task.
- Creates a frictionless capture system across devices.
    
**2) Voice-driven task management**
- Ask the agent for unchecked tasks.
- Mark tasks as done via CLI.
- No need to open the note manually.

**3) Quick task filtering by tags**
- Query tasks tagged “quick” or “deep”.
- Display them as a table.
- Use spare time efficiently by seeing relevant tasks.
    
**4) Agent-driven file organisation**
- Ask the agent to rename or move files.
- CLI preserves backlinks automatically.
- Maintains vault integrity during automation.

**5) Automated vault health report**
- Run commands to detect:
    - Orphan notes
    - Broken links
    - Dead ends
- Agent produces a structured report.
- Suggests next steps for cleanup.

**6) Bulk property updates**
- Change note status from “unread” to “processed”.
- Done via CLI without opening files.
- Used for bookmark or reading-inbox workflows.

**7) Structured bookmark database**
- Agent adds bookmarks directly into a base.
- Can query unread bookmarks.
- Works for links, videos, or photos.

**8) Querying structured skill or project data**
- Agent retrieves records from a base.
- Only front matter is read, reducing context size.
- Used for skill tracking or journals.

**9) Version comparison**
- Retrieve an earlier file version.
- Ask the agent what changed.
- Receive a summary of differences. 