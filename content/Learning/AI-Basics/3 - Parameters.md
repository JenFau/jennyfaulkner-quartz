---
publish: true
title: Parameters
created: 2026-06-02T21:24:19.353+01:00
modified: 2026-06-02T21:31:09.190+01:00
---

We have seen that AI is, at its core, simply a [[1 - Prediction Machines|prediction machine]] and that it works on chunks of text called [[2 - Tokens|tokens]]. But how do these two things work together? The answer lies in the concept of parameters.

This is simpler than it might sound.

Imagine that the AI model has to decide how likely the word ‘Paris’ is to follow the phrase ‘The capital of France is…’. It does this by running the tokens through a vast network of connections, and each connection has a strength. That strength - literally just a number - is a parameter. A high number means ‘these things are strongly associated’, whilst a low number means ‘barely related’. Parameters can be negative, which means ‘actively unlikely’.

An AI model has billions, or even hundreds of billions, of these connections, all feeding into each other. When you type the prompt, the tokens flow through the entire network simultaneously, each connection either amplifying or dampening the signal - and what comes out the other end is the probability distribution: all the possible next tokens, ranked by likelihood. The model picks from the top of the list, and that’s the response, one token at a time.

Training an AI is the process of tuning all those connection strengths. The model is shown billions of examples, its predictions are compared with the right answers, and the relevant numbers are nudged in the right direction. When that is done enough times, across enough examples and on enough computing power, the numbers settle into a configuration that produces good predictions across an enormous range of inputs.

The exact parameter counts of frontier models are rarely published — the big labs treat this as proprietary information. But we know the numbers are vast: estimates run into the hundreds of billions, and almost certainly beyond.

Crucially, no single parameter means anything on its own. There is no one parameter that represents ‘Paris’ or ‘France’. Instead the ‘knowledge’ is distributed across billions or trillions of connections simultaneously, all interacting with each other. This is why it is so hard to explain or audit behaviour: nobody wrote a rule saying ‘“Paris” follows “the capital of France is”’, it emerged from billions of tiny numerical adjustments that are genuinely difficult to unpick or understand. In fact, there is an entire field of research, called ‘mechanistic interpretability’, which is dedicated to this problem.

A further thing that is worth knowing is that parameters are fixed after training. When we have a conversation with an AI, those numbers don’t change. The model is not learning from our conversations in the way that a human might, it is simply applying the same statistical predictions to our specific input. This is why the same model can feel very different depending on the prompt we give it: the parameters aren’t changing but the context in which they operate is.

This may come as a surprise: it can _seem_ as if a model is learning from our conversations. What is happening here is that some models do adapt their responses based on our style, context and preferences. But this is not the same as technical learning, and unless the model has persistent memory, the moment the conversation ends that adaptation is gone.

You may also have heard of ‘fine-tuning’ a model, a process that _does_ change the parameters, and which some businesses use to adapt a model to their specific needs. But this is a complex and expensive technical undertaking, not something that happens automatically.
