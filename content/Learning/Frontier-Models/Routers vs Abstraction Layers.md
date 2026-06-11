---
publish: true
title: Routers and abstraction layers
created:
modified: 2026-06-09T18:28:39.632Z
published: 2026-06-09T18:28:39.632Z
type: note
skill: LLMs
updated:
---

Both routers and LLM abstraction layers (also called frameworks) sit between you and the model.

A router decides which model or tool should handle the request. An example is OpenRouter, which can route requests to one of hundreds of different models with just one unified API.

LLM frameworks provide an abstraction layer over different model providers. Instead of writing separate code for every provider, you can use one framework interface and swap models more easily. Key examples are LangChain, which is heavyweight, and LiteLLM, which is more lightweight.

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
