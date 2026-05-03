---
publish: true
created: 2026-02-18
modified: 2026-02-18
---

[[🌱 AI Agents|Agentic AI]] tools like OpenClaw (formerly ClawdBot / MoltBot) introduce a new category of security risk. Because these agents run persistently with access to files, email, APIs and online services, they present a much larger attack surface than traditional software.

## Key Threat Categories (as of Feb 2026)

| Threat | Description |
|---|---|
| **Infostealer / Credential theft** | Malware (e.g. Vidar variants) scans config directories for keywords like "token" and "private key", exfiltrating gateway tokens and API keys from files like `openclaw.json` |
| **Prompt injection** | Malicious instructions hidden in web pages, emails or documents hijack the agent's behaviour, causing it to exfiltrate credentials without triggering conventional alerts |
| **Remote code execution (RCE)** | Hundreds of thousands of exposed OpenClaw instances have been found, creating pivot points for attackers who can execute arbitrary code via a single exposed service |
| **Malicious third-party skills** | Bad actors upload poisoned skills to ClawHub, sometimes bypassing VirusTotal by hosting payloads on lookalike sites rather than embedding them in SKILL.md files |
| **Memory poisoning** | Adversarial instructions planted in an agent's long-term memory persist across sessions, causing it to take harmful actions days or weeks after the initial compromise |
\*\*

## Learning Resources

### Paid (Coursera)

| Priority | Course | Provider | Why Relevant |
|---|---|---|---|
| ⭐ Best pick | [AI Security: Security in the Age of Artificial Intelligence](https://www.coursera.org/specializations/ai-security-security-in-the-age-of-artificial-intelligence) | Coursera | Covers end-to-end AI system security, adversarial attacks, and AI-specific threat models — directly maps to prompt injection and agentic attack surfaces |
| ⭐⭐ Runner-up | [Cyber Security: Security of AI](https://www.coursera.org/learn/cyber-security-security-ai) | Macquarie University | Emerging threats targeting AI systems, adversarial attack defence, evaluating AI security controls. Updated July 2025 |
| ⭐⭐⭐ Supplementary | [IBM Generative AI for Cybersecurity Professionals](https://www.coursera.org/specializations/generative-ai-for-cybersecurity-professionals) | IBM | Focuses on real-world breach case studies, NLP-based attack techniques, and mitigating attacks on generative AI models — covers the credential-theft angle |

### Paid (LinkedIn Learning)

| Course | Why Relevant |
|---|---|
| Search: _"AI security"_ or _"prompt injection"_ | LinkedIn Learning's catalogue in this area is thinner than Coursera's; check for updated 2025/2026 courses on AI agent security as the catalogue is growing quickly |

### Free

| Resource | Format | Why Relevant |
|---|---|---|
| [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | Reference doc | Prompt injection is #1 on the 2025 list. The definitive taxonomy — maps precisely to every OpenClaw vulnerability category |
| [OpenAI: Understanding Prompt Injections](https://openai.com/index/prompt-injections/) | Article | Concise, practical explanation of direct vs indirect prompt injection with defensive guidance. 15–20 min read |
| [Lakera: Indirect Prompt Injection](https://www.lakera.ai/blog/indirect-prompt-injection) | Article | Deep dive into how injections ride data flows (PDFs, emails, RAG docs, memory) — the exact mechanism used against OpenClaw |
| [Stellar Cyber: Top Agentic AI Security Threats in 2026](https://stellarcyber.ai/learn/agentic-ai-securiry-threats/) | Article | Covers prompt injection, memory poisoning, supply chain attacks — practical CISO-level framing |

## Suggested Learning Path

1. **Start** → OWASP LLM Top 10 (free, ~2 hrs) — build the threat taxonomy
2. **Then** → OpenAI and Lakera articles (free, ~1 hr) — understand prompt injection in depth
3. **Then** → Coursera: _AI Security: Security in the Age of Artificial Intelligence_ — structured, in-depth treatment
4. **Optional** → IBM Generative AI for Cybersecurity — if you want deeper coverage of the malware/credential-theft angle

## Related Notes

- [[🌱 AI Agents]]
- [[🌱 A2A]]

## Sources

- BleepingComputer, Feb 2026 — Infostealer malware found stealing OpenClaw secrets
- The Hacker News, Feb 2026 — Infostealer Steals OpenClaw AI Agent Configuration Files
- Aikido Security — Why Trying to Secure OpenClaw is Ridiculous
- SecurityScorecard STRIKE Team — Exposed OpenClaw Instances Report
