---
created: 2025-07-09
updated: 2025-10-27
dg-publish: true
type: garden
topic:
  - AI
aliases:
  - tokens
---
A token, in the context of LLMs, is the basic unit of input and output processing. Instead of working directly with sentences and words as humans do, LLMs break text down into tokens which are then converted for computation.

A token is typically a word, part of a word or a punctuation mark, determined by the LLM's tokeniser. This is dependent on the model's vocabulary and rules.

Examples might be:

|Text|Tokens|
|---|---|
|"apple"|`["apple"]`|
|"applesauce"|`["apple", "sauce"]`|
|"unbelievable"|`["un", "believ", "able"]`|
|"I'm going."|`["I", "'m", " going", "."]`|
### Vectorising

Each token is then converted into a numerical identifier and mapped to a high-dimensional vector through an embedding layer. These vectors are learned during training and encode statistical relationships between tokens. For instance, the vectors for _freely_ and _openly_ will tend to be close together because those words appear in similar contexts across the training data. The model is not working with meanings as humans understand them, but with numerical representations that capture patterns of usage.

### Associations

During training, the model is exposed to extremely large volumes of text and learns probabilistic associations between sequences of tokens. This explains why some continuations are highly predictable. For example, the sequence “Mary had a little…” is strongly associated with the token _lamb_, because that continuation appears frequently in the data. Importantly, these associations are probabilistic rather than deterministic. The model does not store a rule that “Mary had a little” must be followed by _lamb_; it simply assigns that continuation a much higher probability than alternatives.

When a user provides free-form or original input, the same mechanism applies. Even if the wording is novel, the underlying grammatical structures, rhetorical forms, and conceptual patterns resemble many others seen during training. For example, a question such as “How do you process free-form language and still respond meaningfully?” shares structural similarities with other explanatory or meta-level questions about cognition, language, or systems. The model identifies these similarities through token patterns and uses them to guide its response.

### Attention

Transformer architectures enable this process through **self-attention**. Rather than processing tokens strictly from left to right, each token can attend to every other token in the input. This allows the model to determine which parts of a sentence are most relevant to interpreting a given word. For example, in the phrase “I talk freely, like now?”, the token _talk_ may attend strongly to _I_ (to identify the subject), _freely_ (as an adverb modifying the action), and _now_ (to establish immediacy). Punctuation and question marks also influence interpretation by signalling sentence type.

To preserve word order, positional encodings are added to token embeddings. Without these, the model would not be able to distinguish between “the dog chased the cat” and “the cat chased the dog”. Across many layers of attention and feed-forward processing, the model progressively refines its internal representations, capturing higher-level abstractions such as whether an input is a question, an explanation, or a request, and what kind of response is typically expected.

### Text Generation

Text generation then proceeds one token at a time. After processing the input, the model produces a probability distribution over all possible next tokens. For example, after a question about internal processing, it may assign high probability to tokens such as _I_, _the_, or _models_, and much lower probability to unrelated words. One token is selected (either the most probable or sampled from the distribution), appended to the context, and the process repeats. Over many steps, this produces a fluent and contextually appropriate response.

A crucial limitation is that this entire process operates without human-like understanding or awareness. The model does not grasp meaning, intent, or truth in a conscious sense. Instead, what appears as understanding emerges from statistical regularities in how language is used by humans. Responses feel meaningful because they resemble how humans typically explain, question, or reason in similar situations, not because the model itself comprehends the content it generates.

**Optimising for Token Efficiency**

The maximum number of tokens that a LLM can handle at once is called the context window. This can vary dramatically between models. Such tokens include user input, model output and any intermediate context. Once the limit is reached, earlier tokens are dropped from memory.

To stay within the budget and maintain context, users can:

- Use concise phrasing
- Avoid repeating long quoted passages
- Split tasks into smaller parts
- Ask me to summarise and condense earlier text


