---
publish: true
title: Routers and abstraction layers
created:
modified: 2026-06-05T17:35:07.454Z
published: 2026-06-05T17:35:07.454Z
type: note
skill: LLMs
updated:
---

Both routers and abstraction layers sit between you and the model.

A router decides which model or tool should handle the request. An example is OpenRouter, which can route requests to one of hundreds of different models with just one unified API. Another example is LiteLLM router.

An abstraction layer hides the difference between models, APIs and providers, allowing you to talk to one common interface. A key example is LangChain.

|Concept|Main job|Analogy|
|---|---|---|
|**AI router**|Chooses where the request goes|Railway signal box|
|**AI abstraction layer**|Makes different systems easier to use|Universal travel card|
LiteLLM: https://www.litellm.ai/
Langchain: https://www.langchain.com/
OpenRouter: https://openrouter.ai/
----------------------------------

LiteLLM

```python
tell_a_joke = [
    {"role": "user", "content": "Tell a joke for a student on the journey to becoming an expert in LLM Engineering"},
]

from litellm import completion
response = completion(model="openai/gpt-5.1", messages=tell_a_joke)
reply = response.choices[0].message.content
reply
```
