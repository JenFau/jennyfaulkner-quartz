---
publish: true
title: protecting API keys
created: 2026-06-03T07:21:28.336+01:00
modified: 2026-06-03T07:22:15.700+01:00
---

To install the OpenAI Python library and `python-dotenv` for secure key management:

```
!pip install openai python-dotenv
```

The library needs to be configured with your account's secret key. **Never hardcode your API key directly in your code.**

Instead, store it in a `.env` file in your project root:

```
OPENAI_API_KEY=sk-...
```

Then add `.env` to your `.gitignore` to prevent it from being committed:

```
.env
```

You can then load the key securely at runtime:

python

```python
from dotenv import load_dotenv
import os
import openai

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")
```

If deploying to a cloud environment (e.g. AWS, Heroku, Railway), set `OPENAI_API_KEY` as an environment variable in their dashboard instead — `os.getenv()` will work the same way without needing a `.env` file.
