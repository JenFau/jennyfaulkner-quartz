---
aliases:
dg-publish: true
---
According to the Claude website, skills are

>folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized tasks. Skills teach Claude how to complete specific tasks in a repeatable way, whether that's creating documents with your company's brand guidelines, analyzing data using your organization's specific workflows, or automating personal tasks. [Source](https://support.claude.com/en/articles/12512176-what-are-skills)

Skills are essentially targeted SOPs - a mini playbook that an agent or AI assistant can choose to load and follow when relevant. 

A key factor of Claude skills is that they work through progressive disclosure - Claude determines which Skills are relevant and loads the information it needs to complete the task. This helps to prevent context window overload, representing an advantage over [[🌱 MCP (Model Context Protocol)]].

Note also the shift here from Claude simply giving advice to taking action. Whilst it is not a fully autonomous agent, Claude begins to use agent-like behaviour. A further shift of Claude from 'advice giver' / chat assistant is seen in [[🌱 Claude - general#Interactive tools]]. See also [[🌱 Claude Skills vs Agents]].

Skills can be maintained by Anthropic, or can be Custom Skills. The Open Format for agent skills can be found at https://agentskills.io/home. As this is an open format, other platforms and tools can adopt the standard. 

There are also partner skills from partners like Notion, Figma, Atlassian, etc. 

[Some users claim](https://www.youtube.com/watch?v=-iTNOaCmLcw&list=WL&index=2) that agents may fail to select the right skill so automated evaluation should be considered. 
## Examples / Use Cases

https://github.com/Ronnie-Nutrition/last30days-skill?tab=readme-ov-file This skill researches your topic across Reddit, X, and the web from the last 30 days, finds what the community is actually upvoting and sharing, and writes you a prompt that works today, not six months ago. [Source](https://scrapeshq.notion.site/10-tips-claude-code)

Further examples of potential flows: [(Source)](https://support.claude.com/en/articles/12512176-what-are-skills)
- Apply brand style guidelines to documents and presentations.
- Generate communications following company email templates.
- Structure meeting notes with company-specific formats.
- Create tasks in company tools (JIRA, Asana, Linear) following team conventions.
- Execute company-specific data analysis workflows.
- Automate personal workflows and customise Claude to match your work style.

[This video](https://www.youtube.com/watch?v=YajqB9RDdzI&list=WL&index=2) practically demonstrated how a carefully selected set of marketing Skills can turn Claude Code into a full-stack marketing assistant capable of building, optimising and running growth functions. [[⏰]] Review this video in more detail.  


