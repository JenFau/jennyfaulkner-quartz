---
created: 2025-06-12
updated: 2025-10-27
dg-publish: true
type: garden
topic: AI
aliases:
  - Prompt Engineering
---
See also [[Claude prompting protocol]]
### Core Principles
- Clarity – Reduces ambiguity and improves interpretation.
- Context – Adds background and improves relevance.
- Constraint – Focuses tone, length, or structure.
## Best practice
- Place the most important information first.
- Be specific about what's required (see framework below)
## Prompt Patterns and Techniques
### Five-Step Prompt Design Framework (T-C-R-E-I)
- A complete prompt framework based on Google’s model: Task, Context, References, Evaluate, Iterate.
- Why use it: Improves prompt clarity, completeness, and relevance.
- Example:
	- Task: “Summarise this report.”
	- Context: “Audience is the executive board.”
	- References: “Match the tone of last quarter's briefing.”
	- Evaluate: “Does it highlight risks and outcomes?”
	- Iterate: “Add bullet points for each key insight.”
### Role
- Assigns the AI a specific role to adopt in generating the response.
- Why use it: Aligns tone, terminology, and assumptions with the user’s needs.
- Example: “Act as a senior legal advisor assessing risk in this contract.”
### Audience
- Defines the target audience for the AI’s output.
- Why use it: Tailors complexity and tone for specific stakeholders.
- Example: “Explain this IT architecture to a non-technical CEO.”
#### Question Refinement 
- Prompts the AI to revise or optimise an existing prompt.
- Why use it: Improves unclear or poorly scoped prompts.
- Example: “Improve this prompt: ‘Write something about our product’.”
### Chain of Thought 
- Instructs AI to explain its thinking step-by-step before answering.
- Why use it: Increases transparency and reduces reasoning errors.
- Example: “Explain each step of your logic before recommending a hiring decision.”
### Tree of Thought 
- Explores multiple reasoning paths or solution options in parallel.
- Why use it: Enables comparison between approaches.
- Example: “Suggest three pricing strategies and explain the pros and cons of each.”
### ReACT Prompting (Reason + Action)
- Combines logical reasoning with specific actions like calculations or data lookup.
- Why use it: Improves realism and precision in decision-making tasks.
- Example: “Calculate ROI for these investments and then suggest which to pursue.”
### Cognitive Verifier Pattern
- Asks the AI to assess the accuracy and coherence of its response.
- Why use it: Reduces errors and hallucinations.
- Example: “Review your answer for consistency with these three sources.”
### Flipped Interaction Pattern
- Turns the AI into the questioner or evaluator of the user.
- Why use it: Builds user understanding through challenge or testing.
- Example: “Quiz me on stakeholder management techniques using case examples.”
### Ask for Input Pattern
- Encourages AI to seek missing details before responding.
- Why use it: Prevents low-quality outputs caused by lack of information.
- Example: “What else do you need to create a detailed training plan?
### Fact Check List Pattern
- Guides the AI to validate all factual claims against known sources.
- Why use it: Reduces misinformation or invented content.
- Example: “Identify every factual claim and confirm it against the report provided.”
### Filter Pattern
- Restricts the AI’s output to specific themes or meanings.
- Why use it: Improves focus and avoids off-topic content.
- Example: “Only include insights relevant to supply chain optimisation.”
### Meta Prompting
- Uses AI to help create more effective prompts.
- Why use it: Helps users who are unsure how to phrase a request.
- Example: “Suggest a well-structured prompt to extract insights from meeting transcripts.”

**See also**
[[🌱 Preventing AI Hallucinations]]

**Sources:**
https://youtu.be/p09yRj47kNM?si=Jki8bF2wAr3SNc3T
https://www.coursera.org/learn/prompt-engineering?specialization=prompt-engineering
