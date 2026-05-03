---
publish: true
created: 2025-07-15
modified: 2025-10-27
---

Agent-to-Agent (A2A) is an AI-centric protocol to facilitate communication between models, arising to comparisons with [[🌱 MCP (Model Context Protocol)]]. It was revealed at Google I/O in April 2025.

Like MCP, A2A is based on client-server architecture, and the two models use similar underlying messages and transport protocols. https://www.theregister.com/2025/07/12/ai\_agent\_protocols\_mcp\_a2a/.

However, whilst MCP standardises interacting between models and existing resources, such as databases and AIs, A2A aims to facilitate communications between agents.

According to https://www.theregister.com/2025/07/12/ai\_agent\_protocols\_mcp\_a2a/, agents in a system essentially exchange business cards, containing information on what they can do, how to authenticate, their optional functionality and what kinds of formats they can ingest or return. This means they can send each other tasks, with one acting as the client and the other as the server. Notably, these roles need not be fixed - an agent can act as either a client or a server depending on the context.

> A key impetus behind A2A is the idea that truly useful agentic systems will be assembled from multiple more specialized agents, some of which may have been developed internally, and others that are supplied by the software vendor.

It currently appears to have the backing of Amazon, Microsfot, Salesforce, ServiceNow, etc, as well as broad support from model builders, cloud providers and software vendors, including Atlassian and Workday.
