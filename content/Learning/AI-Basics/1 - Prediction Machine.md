---
publish: true
title: Prediction Machines
created: 2026-06-02T21:13:50.255+01:00
modified: 2026-06-02T21:17:37.079+01:00
---

It is important to know that AI, at its core, is just a very sophisticated prediction machine. It might seem as if it understands what we are inputting, but in actual fact it is making sophisticated predictions based on its training. Let’s look at that in more detail.

The way that AI models are trained on an enormous amount of text - web pages, books, articles and conversations - involves reinforcing patterns. During training, the model is shown text with words missing and asked to fill in the blanks. “The capital of France is…” is a simple example. Every time the model guesses the blank incorrectly, it is nudged in the right direction; every time it guesses right, that pattern is reinforced.

What is striking is that the act of doing this billions of times across billions of examples does not just result in the model memorising what those blanks should be: it also develops an internal sense of how language works - how sentences are structured, what topics go together, what kinds of answers follow what kinds of questions. So when we type ‘The capital of France is…”, the response of ‘Paris’ is simply a pattern completion.

That might seem clear, but the interesting thing is when our question is less deterministic. “Write me a poem about a lonely rabbit” has no single right answer. What the model does here is to sample from a range of plausible continuations - it predicts what might come next in the poem.

The way it does this is fascinating. It does not make these predictions at the poem level; it is making the predictions on a word by word basis (actually on a token basis, but that’s for next time). This means that a LLM response is created one word at a time, with the question ‘what word is most likely to follow now’ being asked over and over until the response (a sentence, paragraph, essay, etc) is complete.

It’s like a sophisticated version of autocomplete on a phone: based on what has already been written, it suggests the next most likely word, one step at a time.

So, LLMs are only acting on patterns: they do not truly understand things the way that we do. This is part of the reason why they are prone to hallucinations - confidently asserting something that sounds plausible but that is in fact completely wrong. And this is also why they might respond very differently when the same question is slightly reworded: the pattern changes and so therefore does the response.
