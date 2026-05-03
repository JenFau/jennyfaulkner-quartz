---
publish: true
created: 2026-03-01
modified: 2026-03-01
---

Knowledge distillation is a model compression technique where a smaller "student" model is trained to replicate the behaviour of a larger, more capable "teacher" model. The goal is to transfer the teacher's learned knowledge into a more efficient package, without starting from scratch.

The term was popularised by Geoffrey Hinton in a 2015 paper, _Distilling the Knowledge in a Neural Network_.

Rather than training the student model on raw labelled data alone, it is trained on the **soft outputs** (probability distributions) of the teacher model. These soft outputs carry richer information than hard labels - for example, a teacher might output "90% cat, 8% dog, 2% fox" rather than just "cat", and the student learns from those nuances.

The process typically involves:

1. Training a large, high-performing teacher model
2. Running the teacher over a dataset to generate soft predictions
3. Training the student to match those predictions, often combined with the original labels

Distillations leads to:

- **Efficiency** - smaller models are cheaper to run, faster to inference, and easier to deploy on edge devices
- **Accessibility** - distillation is how many open-source models (like Mistral or Phi) achieve strong performance with far fewer parameters than frontier models
- **Specialisation** - a student can be distilled on a narrow domain, producing a smaller model that outperforms the teacher in that specific area

## Distillation in LLMs

Distillation plays a major role in the modern LLM ecosystem. Models like DeepSeek-R1 and Microsoft's Phi series use distillation heavily - training on outputs from larger frontier models (e.g. GPT-4, Claude) to punch above their weight class. This has sparked debate about whether distilling from proprietary model outputs violates terms of service, and whether it constitutes a form of "knowledge laundering".

For example, February 2026, Anthropic accused three Chinese Labs - DeepSeek, Moonshot AI, and MiniMax - of using fraudulent API accounts to distill Claude. The claim is that this was not internal distillation but external competitive distillation - using Claude to develop a rival product.

The ethical position of this is unclear, since Anthropic itself has been accused of using copyrighted data in order to train its models.

## Relationship to other concepts

- [[🌱 LLMs vs SLMs]] - distillation is a core method for creating capable SLMs
- [[🌱 Generative AI]] - most distillation in NLP applies to generative models
- Fine-tuning is related but different: fine-tuning adapts a model to new data; distillation compresses knowledge from one model into another

## Limitations

- The student is bounded by the teacher - it cannot exceed the teacher's capabilities, only approximate them
- Soft labels from a flawed or biased teacher propagate those flaws
- Very small student models may fail to capture the full complexity of the teacher, no matter how well distillation is applied
