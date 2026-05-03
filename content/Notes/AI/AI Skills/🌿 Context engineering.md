---
created: 2025-07-16
updated: 2025-10-27
dg-publish: true
type: garden
topic:
  - AI
---
Whereas prompt engineering focuses on providing the right instructions to an LLM, context engineering focuses heavily on filling the context window of an LLM with the most relevant information.

https://www.myexamcloud.com/blog/context-engineering-mcp-toolbox-modern-ai.article explains it like this: current AI prompts tend to follow models like 'as a (role), do (this task) based on the following requirements'. As AI users have gained familiarity and expertise, they have started to develop prompt libraries and more advance prompt construction to leverage AI results ([example](https://medium.com/lets-code-future/after-1-000-failed-prompts-i-accidentally-unlocked-chatgpts-superpower-923eb67a3240)). But prompt engineering, according to this article, is limited because it only controls part of the LLM behaviour. Real world applications involve a variety of aspects such as:

- Conversational state
- User intent recognition
- Factual grounding
- Role-based behaviour
- Data retrieval and integration
- Tool invocation
- Secure, compliant responses

For example, https://www.architectureandgovernance.com/uncategorized/context-engineering-a-framework-for-enterprise-ai-operations/ sets out that for a 'simple' request like “What’s our exposure to the XYZ market given current conditions?”, traditional systems (does this include traditional LLMs?) would query predefined reports, whereas a 'context-engineered AI system' would:

1. Pull current positions from trading systems
2. Analyze recent market movements from external feeds
3. Review internal research reports
4. Check compliance limits and risk parameters
5. Consider historical patterns from similar conditions
6. Synthesize insights from news and analyst reports
7. Generate a comprehensive analysis with specific recommendations

These cannot be addressed by a single prompt and require control of the entire input space - the context window.

![[Context Engineering.webp]]
Source: https://dcthemedian.substack.com/p/bye-prompts-hello-context-context

The art of context-engineering lies in ensuring that the context window is filled with the right information, not being overwhelmed with all available data. https://www.llamaindex.ai/blog/context-engineering-what-it-is-and-techniques-to-consider

[One point of view](https://www.tenpasttomorrow.com/blog/the-ai-enshitification-argument-and-why-it-is-shallow) is that context-engineering will play a part in avoiding the 'enshitification' of AI.
