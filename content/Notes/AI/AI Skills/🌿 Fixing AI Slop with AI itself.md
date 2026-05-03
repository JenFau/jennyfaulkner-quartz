---
publish: true
created: 2025-10-12
modified: 2025-10-27
---

AI slop - seemingly polished but low-value AI generated work - is now a big problem in workplaces. The _Harvard Business Review_ article [AI-Generated Workslop Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity) (September 2025) highlights the key quantitative findings:

- 40% of workers surveyed reported receiving AI-generated “workslop” and each instance of AI slop costs an average of two hours to correct or reinterpret.
- For a company with 10,000 employees, this equates to approximately $9 million per year in lost productivity. Over one-third of respondents said they now spend more time checking AI outputs than producing original work.
- The main cause identified was indiscriminate AI use — employees using generative tools by default rather than by need.

In other words, colleagues who use AI indiscriminately and put forward poor quality work are passing the problem down the line - _they_ may save time, but others have to put in the effort to fix the work.

It's not all bad news, though: the HBR article reports that teams with clear norms for AI use and defined review processes reported significantly fewer issues and higher quality outputs.

This topic is tackled in Nate B. Jones's video [I Stopped Drowning in AI Slop—Prompts That Saved Me 100+ Hours](https://youtu.be/rY6MOdXv02M?si=JT8KtydNETTkaOvm), in which he proposes an approach that uses AI itself to fight AI slop. His own prompt outputs a structured evaluation as JSON, but here's a version with more human readable output:

```
You are evaluating a Product Requirements Document (PRD). Your job is to determine if an engineering team could build this without needing three clarifying meetings.  

## Evaluation Criteria  

### 1. Completeness  
Assess whether the PRD contains all essential elements:  
- Clear and measurable acceptance criteria (e.g. “P95 latency <200ms under 1000 RPS load” rather than “should be fast”)  
- Explicit edge cases and failure modes  
- Non-goals that prevent unnecessary scope creep  

Give specific feedback where details are vague or missing.  

### 2. Testability  
Determine if QA could derive clear pass/fail tests directly from this document.  
- Are success and failure states defined?  
- Are there concrete examples or scenarios?  
If not, explain which sections need more clarity and why.  

### 3. Scoping Clarity  
Evaluate how clearly the boundaries of the feature are defined.  
- Does the document identify dependencies on other teams or systems?  
- Is the rollout plan or delivery sequence described?  
Point out where ambiguity or missing dependencies could cause confusion or rework.  

### 4. Decision Framework  
Review whether the rationale behind key decisions is documented.  
- Are trade-offs and assumptions stated?  
- Are alternatives briefly considered and rejected with reason?  
Highlight any areas where reasoning or context should be expanded to help future readers understand design intent.  

### 5. Dependency Mapping  
Check that the document specifies external APIs, services, or systems.  
- Are version numbers, authentication methods, and rate limits included?  
- Are data or integration points described clearly enough for implementation?  
If not, identify exactly what information is missing and why it matters.  

## Required Elements Check  
Confirm that the PRD includes:  
- A user story or job-to-be-done explaining the purpose of the work  
- Acceptance criteria defining completion  
- Success metrics to measure outcomes  
- Non-goals clarifying what is out of scope  

If any are absent or weak, list them and suggest how to strengthen them.  

## Final Output Format  
Write your feedback as a clear, human-readable report using the structure below. Do **not** output JSON or tables. Use plain text with short sections and bullet points.  

### Example Output  

**Overall Verdict:** Revise  

**Summary:**  
The PRD outlines a reasonable solution but lacks measurable success metrics and clear boundaries between backend and frontend responsibilities. Several dependencies are mentioned without detail, which would likely require multiple follow-up meetings.  

**Strengths:**  
- Problem statement is clear and aligned with business goals  
- Acceptance criteria mostly testable  
- Non-goals well defined  

**Weaknesses:**  
- Missing success metrics and quantitative measures of success  
- Vague acceptance criteria such as “improve performance”  
- Dependencies listed (Stripe API, DataDog) but with no version or auth details  
- No explicit rationale for choosing one approach over another  
```
