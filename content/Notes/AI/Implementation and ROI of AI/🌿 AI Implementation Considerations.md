---
publish: true
created: 2025-09-26
modified: 2025-11-29
---

The successful implementation of AI agents requires more than the agent itself.

This should come as no surprise to anyone who has implemented tools in the workplace: _any_  implementation involves much more than the tool itself. Far too many companies, however, still take a 'tool first' approach to implementation, and the issues arising from this approach will only be heightened when implementing AI tools.

The article [One Year of Agentic AI: Six Lessons from the People Doing the Work](https://www.mckinsey.com/capabilities/quantumblack/our-insights/one-year-of-agentic-ai-six-lessons-from-the-people-doing-the-work?stcr=01EDC1D68F604923BC43281A965B0491) suggests that many projects are failing - companies are dismantling attempted agent deployments. It claims success requires the redesign of processes, trust, governance, and feedback mechanisms. It sets out a practical analysis of implementing AI:

1. **Workflow**
   – Focus on redesigning end-to-end processes, not on building isolated agents.
   – Map workflows, identify pain points, and integrate agents where they reduce friction.
   – Example: legal provider logged user edits in contract review to refine the agent’s knowledge base.

2. **Only use agents when appropriate**
   – Some tasks (low variance, highly standardised) are better handled by simpler automation or prompting.
   – Evaluate variance, decision complexity, and error profiles before building agents.

3. **Evaluate output to build trust**
   – Users lose confidence quickly if outputs are poor or inconsistent.
   – Treat agents like new employees: define roles, onboard them, evaluate continuously.
   – Use frameworks to monitor precision, recall, hallucination rates, and alignment with human judgment.

4. **Track and verify every step**
   – End-outcome metrics are insufficient; observability into intermediate steps is essential.
   – Logging, error detection, and feedback loops allow early diagnosis and refinement.
   – Example: in document review, monitoring revealed upstream data quality issues driving errors.

5. **Reuse components where possible**
   – Avoid duplicating effort by creating modular, reusable components (prompt templates, evaluation logic, retrieval tools).
   – Shared platforms can cut nonessential work by 30–50%.

6. **Humans remain essential**
   – Agents can execute many steps, but humans must validate, handle exceptions, and oversee performance.
   – Clear workflow design should define handoffs between humans and agents.
   – Strong UI features (highlighting, click-to-validate) build user trust and adoption.
