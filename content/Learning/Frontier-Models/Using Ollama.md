---
publish: true
title: Using Ollama
created: 2026-06-05
modified: 2026-06-05
published: 2026-06-05T09:34:33.456Z
type: note
skill: LLM
updated: 2026-06-05
---

To list installed models

```
ollama list
```

To delete installed models

```
ollama rm llama3
```

Install a model

```
ollama pull [model name]
```

Using the OpenAI endpoint - Completions

```python
from openai import OpenAI

client = OpenAI(
    base_url='http://localhost:11434/v1/',
    api_key='ollama',  # required but ignored
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            'role': 'user',
            'content': 'Say this is a test',
        }
    ],
    model='gpt-oss:20b',
)
print(chat_completion.choices[0].message.content)
```

Using the OpenAI endpoint - Responses

```python
from openai import OpenAI

client = OpenAI(
    base_url='http://localhost:11434/v1/',
    api_key='ollama',  # required but ignored
)

responses_result = client.responses.create(
  model='qwen3:8b',
  input='Write a short poem about the color blue',
)
print(responses_result.output_text)
```
