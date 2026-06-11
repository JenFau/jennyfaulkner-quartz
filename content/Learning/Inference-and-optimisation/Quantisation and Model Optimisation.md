---
publish: true
title: Quantisation and Model Optimisation
created: 2026-06-11
modified: 2026-06-11
published: 2026-06-11T18:05:23.444Z
type: note
skill: Data and ML
updated: 2026-06-11
---

## What quantisation means

Quantisation is a technique used to make AI models smaller and less demanding to run.

Large language models contain billions of parameters - numbers that are often stored at relatively high precision, such as 16-bit or 32-bit values. Quantisation reduces the precision of those numbers, for example by representing them as 8-bit or 4-bit values instead. This reduces the amount of memory needed to load and run the model. It can also make inference faster or cheaper, especially when running open-source models on local hardware or cloud GPUs.

## Simple explanation

A simple analogy is a dimmer switch: with high precision, the dimmer can be adjusted very smoothly, with many possible brightness levels. With lower precision, the dimmer becomes more like a click switch, with fewer possible settings.

Quantisation does something similar to the model’s internal numbers. Instead of allowing extremely precise values, it stores them using fewer possible values, making the model lighter, but slightly less exact.

## Why quantisation is useful

Quantisation is useful because by reducing the precision of the model weights, larger models can run on smaller or cheaper infrastructure. For example, a quantised open-source model may be able to run on a free or low-cost cloud GPU, where the full-precision version would require more expensive hardware.

## The trade-off

Whilst the benefit is lower memory use and potentially lower cost, the model quality may decline. It may become slightly less accurate, less fluent, or less reliable, depending on the task and the level of quantisation. The impact is not always obvious in advance, so quantised models need to be evaluated against the intended use case.

This makes quantisation an optimisation decision, not just a technical shortcut.

## Why it matters for open-source models

Quantisation is especially relevant when working with open-source or open-weight models.

Frontier models such as GPT, Claude, and Gemini are usually accessed through APIs, so the provider manages the infrastructure. With open-source models, the organisation may need to decide how and where the model will run.

This raises practical questions:

- How much GPU memory is required?
- Can the model run locally?
- Can it run in a private cloud environment?
- What is the cost of hosting it?
- Does quantisation reduce quality too much?
- Is the performance still good enough for the use case?

Quantisation can make open-source deployment more practical, but it does not remove the need for testing and governance.

## Business analysis relevance

For a business analyst or AI consultant, quantisation matters because it connects model selection with cost, infrastructure, and quality.

It helps explain why the “best” model is not always the largest model. A smaller or quantised model may be good enough for a specific business task, especially where cost, speed, privacy, or deployment constraints matter.

For example, a quantised model may be suitable for:

- summarising internal documents
- classifying support tickets
- extracting structured information
- generating synthetic data
- running prototypes on limited hardware
- testing open-source alternatives to frontier models

However, if the use case is high risk, customer-facing, safety-critical, or legally sensitive, the quality impact of quantisation must be carefully evaluated.

## Quantisation in solution design

When specifying or assessing an AI solution, quantisation should be considered alongside other design factors.

Key questions include:

- What model is being used?
- Is the model full precision or quantised?
- What level of quantisation is applied?
- What hardware is required?
- What quality testing has been done?
- What tasks does the model perform well or badly after quantisation?
- What are the cost savings?
- What are the risks of degraded performance?
- Is there a human review step for uncertain outputs?
