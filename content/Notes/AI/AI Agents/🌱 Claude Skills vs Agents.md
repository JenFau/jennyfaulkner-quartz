---
dg-publish: true
---
Agents have traditionally been thought of as comprising of an orchestration layer, explicit planning or reasoning loops, tool use with memory of state and multi-step pursuit. Common agentic frameworks include LangChain, AutoGPT, CrewAI, etc. 

This concept is still valid, but can be seen as engineering-heavy, fragile, expensive to run, and overly complex for many organisations. 

One such example is [[🌱 Claude Skills]]. Rather than build a full agent framework around a model, Skills allow the embedding of structured procedures directly inside the model's operating environment. This does not make them full agents: whilst they share the ability to select tools and procedures and to undertake context-aware execution, they do not support long-running autonomy, complex planning layers or orchestration frameworks.

If an organisation's business needs can be met with standardised workflows, consistent outputs and reduced manual effort, Skills significantly lower the barrier to entry of AI supported work. There is a fundamental shift in who can build automation - it moves to the informed end user on standard equipment rather than to engineers with specialised tools and dedicated hardware. 

This also perhaps represents a consolidation of the meaning of 'agent' from technical architecture to a model that can choose and execute capabilities. 

Currently, however, Skills alone do not provide scheduling, event-driven automation, cross system coordination or multi-agent collaboration. Orchestration tools such as n8n, Zapier or indeed agent frameworks are still needed for this. 

On the other hand, [[🌱 Claude Co-Work]] is more explicitly an agentic interface, and draws upon Skills. Even this, however, is not full orchestration. 