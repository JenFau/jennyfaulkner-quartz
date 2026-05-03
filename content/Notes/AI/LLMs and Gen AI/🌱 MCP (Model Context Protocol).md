---
created: 2025-07-09
updated: 2025-10-27
dg-publish: true
type: garden
topic: AI
---
The MCP (Model Context Protocol) aims to create a standard for communication between technologies. It is an open standard and open source framework, developed and introduced by Anthropic in November 2024. It provides a standardised way for models to interact with existing data sources, such as databases or existing APIs.

The general architecture of MCP is a client-server model. 

- The **AI model** (the "host") makes requests for data or actions.
- The **MCP client** (embedded in the AI or its platform) manages communication.
- The **MCP server** acts as a bridge to external data sources (APIs, files, databases, etc.), retrieving information or performing actions as requested

The main objective of MCP is to provide a protocol to standardise how models and tools expose their capabilities, thus facilitating communication, hence its comparison the the USB-C standard. 

In practice (February 2026), MCPs are proving to be context heavy (burning up tokens and causing the user to hit usage limits). 

[[⏰]] Need to clarify how the term 'MCP' is used - not just a protocol. 