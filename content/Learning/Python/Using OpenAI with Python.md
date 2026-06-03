---
publish: true
created: 2026-05-03T15:55:49.260Z
modified: 2026-06-03T08:38:35.187Z
---

## Install OpenAI python library

To install the OpenAI Python library and `python-dotenv` for secure key management:

```python
!pip install openai python-dotenv
```

See [[Protecting API keys]]

## Load environment variables

```python
from dotenv import load_dotenv
import os
import openai

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")
```

## OpenAI library v 1.0.0

```python
openai = OpenAI()

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.chat.completions.create(
        model=model,
        messages=messages,
        temperature=0
    )
    return response.choices[0].message.content
```

## Simple prompting

```python
response = get_completion("The capital of France is")
    print(response)
```

If wanting to work with the characters in a string (e.g. counting the 'r's in raspberry), put a hyphen between each character.

```python
response = get_completion("How many 'r's are there in r-a-s-b-e-r-r-y")
```

## Separating the prompts

You can separate the prompts or messages for system, user and assistant. System messages are 'You are a \[role]'; user messages are the instructions.

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

## Simpler view

```python
messages = [
	{"role": "system", "content": "You are a helpfulassistant"},
	{"role": "user", "content": "What is 2 + 2?"}
]

response = openai.chat.completions.create(model="gpt-4.1-nano", messages=messages)
response.choices[0].message.content
```

## Another example

```python

system_prompt = """
You are a very helpful assistant
"""
user_prompt = """
Why is AI so popular?
"""

# Make the mesages list
messages = [
	{"role": "system", "content": system_prompt},
	{"role": "user", "content": user_prompt}
]

# Call the API
response = openai.chat.completions.create(
	model="gpt-5-nano",
	messages=messages
)

# Display the response 
display(Markdown(response.choices[0].message.content))
```

## To monitor token use:

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

Sources:
[Building Systems with the ChatGPT API](https://learn.deeplearning.ai/courses/chatgpt-building-system/lesson/k0pk1/introduction)
Ed Donner's LLM engineering course, Udemy
