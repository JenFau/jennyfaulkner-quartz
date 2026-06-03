---
publish: true
title: Tokens
created:
modified: 2026-06-03T19:51:59.965Z
published: 2026-06-03T19:51:59.965Z
type: note
skill: AI Basics
updated:
---

A token is a chunk of text but not necessarily a word. It might be a whole word, or it might be a syllable or just a few characters. The word ‘cat’ is likely to be treated as just one token, but the word ‘caterpillar’ might be split into two or three. Or, it might be treated as one token - very familiar words are not necessarily split into chunks in the same way as less common ones. Other things to know: different spellings of the same word (think of the difference between the British ‘realise’ and the US ‘realize’) might be handled differently. Punctuation marks are often tokens in their own right, whereas a single space might be part of a token, or might be a token in itself.

For a bit of fun, [OpenAI's tokenizer site](https://platform.openai.com/tokenizer) shows how different models tokenise words in a given sentence.

This might seem like a lot of technical detail for most people. But knowing the basics of tokenisation helps to explain how models behave.

You might, for example, have come across the now-famous example that older AI models often couldn’t correctly say how many ‘r’s are in the word ‘strawberry’. Tokenisation is the reason for this: when the model processes ‘strawberry’, it does not see individual letters but instead sees tokens - chunks of letters. And because it is reasoning about those chunks, not about the individual characters, counting letters is genuinely hard.

Also, the exact way that text gets divided into tokens is determined by something called a ‘tokeniser’, which is trained separately and varies between different AI models. This is why different models, such as Claude, Gemini or ChatGPT, might respond to the same sentence in different ways - they may be chopping up the text in subtly different ways before the prediction process even begins.

You may have come across the word ‘token’ in a different context - you might have heard of a conversation ‘running out of tokens’ or about models having different token costs. That’s not a coincidence: it’s the same token. Every chunk of text in a prompt costs one token to process, as does every chunk in the response. So the billing unit and the working unit are the same thing. This will matter when we come to look at context windows.

So the next time an AI seems to make a strange error - a misspelling, a miscounting, etc - there’s a reasonable chance that at least part of the explanation is to do with tokens.
