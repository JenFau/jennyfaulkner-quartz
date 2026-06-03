---
publish: true
title: Protecting API keys
created: 2026-06-03T06:21:28.336Z
modified: 2026-06-03T08:13:44.765Z
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

Basic way for checking for valid key in a notebook:

```python
# Load environment variables in a file called .env
# prioritise the .env file in the current directory
load_dotenv(override=True)

# get the api key from the environment variable
api_key = os.getenv('OPENAI_API_KEY')

  

# Check the key
# if the key is not found, print an error message
if not api_key:
print("No API key was found - please head over to the troubleshooting notebook in this folder to identify & fix!")

# if the key is not found, print an error message
elif not api_key.startswith("sk-proj-"):
print("An API key was found, but it doesn't start sk-proj-; please check you're using the right key - see troubleshooting notebook")
elif api_key.strip() != api_key:
print("An API key was found, but it looks like it might have space or tab characters at the start or end - please remove them - see troubleshooting notebook")

else:

print("API key found and looks good so far!")
```
