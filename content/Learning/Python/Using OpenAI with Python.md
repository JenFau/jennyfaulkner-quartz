---
publish: true
created: 2026-05-03T16:55:49.260+01:00
modified: 2026-06-03T07:19:29.767+01:00
---

To install the OpenAI Python library and `python-dotenv` for secure key management:

```python
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

## If deploying to a cloud environment (e.g. AWS, Heroku, Railway), set `OPENAI_API_KEY` as an environment variable in their dashboard instead — `os.getenv()` will work the same way without needing a `.env` file.

With OpenAI library v 0.27.0

```python
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output 
    )
    return response.choices[0].message["content"]
```

With OpenAI library v 1.0.0

```python
client = openai.OpenAI()

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        temperature=0
    )
    return response.choices[0].message.content
```

---

Simple prompting

```python
response = get_completion("The capital for France is")
    print(response)
```

If wanting to work with the characters in a string (e.g. counting the 'r's in raspberry), put a hyphen between each character.

```python
response = get_completion("How many 'r's are there in r-a-s-b-e-r-r-y")
```

You can separate the prompts or messages for system, user and assistant. System messages are 'You are a \[role]'; user messages are the instructions. You can use assistant messages to let ChatGPT know what it had previously said if you wanted to continue the conversation, although this is not shown below.

```python
def get_completion_from_messages(messages, 
                                 model="gpt-3.5-turbo", 
                                 temperature=0, 
                                 max_tokens=500):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, # this is the degree of randomness of the model's output
        max_tokens=max_tokens, # the maximum number of tokens the model can ouptut 
    )
    return response.choices[0].message["content"]
```

```python
messages =  [  
{'role':'system', 
 'content':"""You are an assistant who responds in the style of Miss Piggy."""},    
{'role':'user', 
 'content':"""write me a very short article about a factory toenail"""},  
] 
response = get_completion_from_messages(messages, temperature=1)
print(response)
```

You would use the system content message to include instructions about the response, e.g. 'All responses must be one sentence long'.

To monitor token use:

```python
def get_completion_and_token_count(messages, 
                                   model="gpt-3.5-turbo", 
                                   temperature=0, 
                                   max_tokens=500):
    
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, 
        max_tokens=max_tokens,
    )
    
    content = response.choices[0].message["content"]
    
    token_dict = {
'prompt_tokens':response['usage']['prompt_tokens'],
'completion_tokens':response['usage']['completion_tokens'],
'total_tokens':response['usage']['total_tokens'],
    }

    return content, token_dict
```

```python
messages = [
{'role':'system', 
 'content':"""You are an assistant who responds\
 in the style of Karl Marx."""},    
{'role':'user',
 'content':"""write me a  short article \ 
 about a happy carrot"""},  
] 
response, token_dict = get_completion_and_token_count(messages)

print(response)
```

```python
print(token_dict)
```

Source: [Building Systems with the ChatGPT API](https://learn.deeplearning.ai/courses/chatgpt-building-system/lesson/k0pk1/introduction)
