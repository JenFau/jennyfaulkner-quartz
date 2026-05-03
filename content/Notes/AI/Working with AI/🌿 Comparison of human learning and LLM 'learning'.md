---
created: 2025-07-09
updated: 2025-10-27
dg-publish: true
type: garden
topic:
  - AI
  - thinking-models
---
Whilst LLMs might produce output that resembles the product of human learning, the way they 'learn', process and store data is quite different. An awareness of this is helpful to understand the (current) limitations of LLMs and, therefore, where human thinking and ability remains important.

## Learning

Human learning is based on neuroplasticity – the brain's ability to reorganise neural networks in response to experience. It follows Hebbian theory: “neurons that fire together wire together.”

Crucially, humans are capable of few-shot learning – one or two exposures can form a lasting memory. Learning is continuous and dynamic – humans update knowledge in real time.

In contract, LLM learning is based on backpropagation: the model adjusts internal weights to minimise prediction error during training.

It requires millions of training examples and repeated exposure to new words. Learning happens during training only – parameters are static during use.

## Information Processing

Humans process information in a manner that is both parallel and distributed - different brain regions process different types of data (e.g. vision, sound).

We process concepts and meaning holistically. We do not treat each part of an input separately and in sequence, but instead interpret the whole structure in terms of its overall meaning, drawing from prior experience, emotional cues, etc - all simultaneously.

Human processing operates in a content-addressable way - we can retrieve knowledge based on meaning or partial cues, and we can immediately retrieve related concepts to a cue or trigger without needing to search a specific information location.

Furthermore, we use associative networks in memory - smells, single words, a feeling, a song, can all activate related memories or concepts. These are not stored as a record but are reconstructed by the brain from a web of associations.

In contrast, LLMs process [[🌱 Tokens in Large Language Models|tokens]], not concepts. They use vector representations and attention mechanisms to predict next tokens, and they perform pattern completion rather than conceptual understanding.

## Memory

Human memory comprises of sensory memory, working memory and long term memory. As we have seen above, memories are linked by meaning, context and emotion.

For an LLM, knowledge is stored in the model's weights. Weights are numerical values that represent the strength or importance of connections between neurons in the model's neural network. They are a crucial part of the model's parameters and are adjusted during training to allow the LLM to learn language patterns and generate text.

Instead of working memory, an LLM has a context window, or recent tokens. Memory is non-associative and non-persistent. (JKF: is that still true?). In essence, once a LLM loses the context of a conversation, it is forgotten.

## Reasoning

Humans use different systems of reasoning. According to Kahneman, we use System 1 (fast, intuitive) and System 2 (slow, deliberate and logical) thinking.

LLMs can simulate step-by-step reasoning through chain-of-thought prompting. Whilst the results may appear logical, they lack genuine understanding. LLMs can struggle with tasks like counting letters in a word and fail in ways that humans typically do not.

## Error

Both human thinking and LLM can produce erroneous results, but the cause of such errors are different.

For example, humans might unconsciously create false memories of explanations. This is known as confabulation, and is not conscious lying but a side-effect of memory construction.

On the other hand, LLMs are known for their hallucination - generating confident-sounding but factually incorrect information. Whilst the results might be similar to human confabulation, the errors are produced in a mechanistic way. LLMs lack awareness or belief in the truth or falsehoods of their outputs. Instead of drawing from subjective experience or a mental model, it is simply producing text by predicting the most likely next token based on the patterns it was exposed through during its training.

Humans have a model for belief, which involves a metnal commitment that something is true, a framework for testing or justifying that belief, and a sense of ownership or investment of that belief. Many humans experience profound emotion - embarrassment, regret, guilt - upon discovering that a belief is wrong and, as a result, will often take steps to ensure that their beliefs are justified / right.

LLMs have no such awareness of wrong and right and have no beliefs. They just have statistical associations between tokens. Unless they are explicitly trained to mimic evaluations of outputs in terms of accuracy, ethical fit, etc, they cannot make such a judgment.

JKF note: all this is interesting in epistemological terms, given the standard claim that knowledge requires 'justified, true belief'. Since LLMs cannot hold beliefs, they cannot have knowledge.

## Interaction

Humans are embodied beings - we interact directly with the physical world. Concepts are grounded in sensory experience, for example, the feel of water informs the concept of 'wet'.

AI is disembodied, existing only in code and hardware. Knowledge of the world is derived from input written by humans, and it has no first hand experience. As a result, it may generate physically implausible scenarios, something often seen in AI generated images.

Source: https://youtu.be/-ovM0daP6bw?si=khzpTUTeiIfDb3Kg
