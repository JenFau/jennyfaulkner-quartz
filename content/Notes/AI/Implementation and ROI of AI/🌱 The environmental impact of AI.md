---
created: 2025-07-13
updated: 2025-10-27
type: garden
topic:
  - AI
dg-publish: true
---
## The issue

The concern about the environmental impact of the data centres required to run them was recently highlighted by Tim Peake, speaking at Goodwood Festival of Speed. https://www.independent.co.uk/climate-change/news/tim-peake-chatgpt-ceo-british-chichester-b2787894.html

Peake points out that AI is currently available with no limits and is often built in to apps by default. According to the article, Business Energy UK estimates that ChatGPT may presently use around 39.98 Million kWh per day.

This makes me wonder whether restrictions will be applied in the future and what they might look like. From a corporate perspective, does this present any risks to AI solutions currently being rolled out which are based on unrestricted usage (within the limitations of paid plans)?

### Scale of AI's Environmental Impact

**Datacentre Energy Demand**
By mid-2025, AI workloads may account for nearly half of global datacentre electricity consumption. Analysis by Digiconomist founder Alex de Vries-Gao projects AI could consume up to 49 per cent of datacentre power by the end of 2025—up from around 20 per cent in 2024—driven by training and inference on increasingly large models ([The Guardian](https://www.theguardian.com/environment/2025/may/22/ai-data-centre-power-consumption?utm_source=chatgpt.com "AI could account for nearly half of datacentre power usage 'by end of year'")).

**Global Electricity Projections**
The International Energy Agency's April 2025 report forecasts that AI-related energy demand could rival the total electricity consumption of a major economy by 2030. Such growth raises concerns over energy security and carbon emissions without substantial efficiency gains or shifts to renewables ([Artificial intelligence](https://nationalcentreforai.jiscinvolve.org/wp/2025/06/05/artificial-intelligence-and-the-environment-looking-ahead/?utm_source=chatgpt.com "Artificial intelligence and the environment: Looking ahead")).

**Water Usage and Cooling**
Beyond electricity, AI-driven datacentres consume vast quantities of water for cooling. MIT researchers highlight that generative AI production increases both electricity demand and water consumption—especially in regions reliant on traditional cooling methods—which can exacerbate local water stresses ([MIT News](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117?utm_source=chatgpt.com "Explained: Generative AI's environmental impact | MIT News")).

## Technological and Operational Mitigations

**Hardware Efficiency Advances**
Innovations in GPU design and cooling—such as immersion cooling and direct liquid-to-chip systems—have improved Power Usage Effectiveness (PUE) for high-performance AI clusters. Early adopters report double-digit efficiency gains, reducing per-model energy use by up to 20 per cent ([TechRadar](https://www.techradar.com/pro/how-can-we-create-a-sustainable-ai-future?utm_source=chatgpt.com "How can we create a sustainable AI future?")).

**Model-Level Optimisations**
A joint UNESCO–UCL report (June 2025) demonstrates that modest architectural changes—pruning, quantisation, sparse attention—can slash training energy by as much as 90 per cent with negligible performance loss. The study advocates prioritising compact, resource-efficient models over ever-larger "foundation" models ([UNESCO](https://www.unesco.org/en/articles/ai-large-language-models-new-report-shows-small-changes-can-reduce-energy-use-90?utm_source=chatgpt.com "AI Large Language Models: new report shows small changes can ...")).

**Renewable Energy Procurement**
Leading cloud providers have contracted substantial renewable capacity; Microsoft alone has secured 19 GW across 16 countries. Nevertheless, Microsoft's carbon emissions rose 23.4 per cent since 2020 owing to AI and cloud expansion, underscoring the difficulty of decoupling growth from emissions ([Windows Central](https://www.windowscentral.com/microsoft/microsoft-admits-that-its-carbon-emissions-have-soared-on-an-168-percent-glut-in-ai-energy-demand-we-recognize-that-we-must-also-bring-more-carbon-free-electricity-onto-the-grids?utm_source=chatgpt.com "Microsoft sees its carbon emissions soar on a 168% glut in AI energy demand, \"we recognize that we must also bring more carbon-free electricity onto the grids.\"")).
### Emerging Policy and Regulatory Frameworks
**Voluntary Reporting Initiatives**
The Artificial Intelligence Environmental Impacts Act of 2024 (US) would establish voluntary reporting for AI's full-lifecycle impacts—including energy, water and e-waste—though it has yet to advance in the current Congress ([Congress.gov](https://www.congress.gov/bill/118th-congress/senate-bill/3732/text?utm_source=chatgpt.com "S.3732 - Artificial Intelligence Environmental Impacts Act of 2024")).

**Data-Centre Construction Regulations**
In Virginia (December 2024), proposed legislation would require datacentres to estimate and report water usage, reflecting growing state-level concerns about resource consumption ([Times Union](https://www.timesunion.com/capitol/article/new-bill-aims-curb-environmental-impact-ai-data-19971462.php?utm_source=chatgpt.com "New bill aims to curb environmental impact of AI data centers")).

**Climate-Related AI Provisions**
An arXiv policy paper (June 2025) recommends amendments to the EU AI Act (enacted June 2024) to mandate disclosure of AI inference energy use, aligning AI regulation with broader data-centre climate requirements ([arXiv](https://arxiv.org/html/2410.06681v2?utm_source=chatgpt.com "AI, Climate, and Regulation: From Data Centers to the AI Act - arXiv")).

### Risks, Challenges and the Likelihood of Tighter Restrictions

**Rebound Effects**
Efficiency gains may lower operating costs, potentially encouraging more compute-intensive research and applications—thereby offsetting environmental benefits (the so-called "rebound effect").

**Supply-Chain Emissions**
Scope 3 emissions—from hardware manufacturing and mineral extraction—remain hard to measure and regulate, creating a blind spot in most corporate pledges.

**Regulatory Fragmentation**
Varied approaches (voluntary reporting in the US, EU's AI Act, state-level water rules) may produce inconsistent standards, complicating compliance for global AI operators.

-**Market Pressures**
Without carbon-pricing mechanisms or mandatory emissions caps, commercial incentives still prioritise performance and cost over sustainability.

Despite these challenges, the convergence of academic research, industry commitments and nascent regulation suggests that AI will face **incrementally tighter restrictions**—not through blanket bans, but via:

1. **Mandatory Reporting** of energy and water metrics.
2. **Minimum Efficiency Standards** for data-centre PUE and hardware design.
3. **Incentives and Penalties**—such as carbon levies or reduced procurement preferences for high-impact AI services.

## How will this impact end users

End-user restrictions on AI usage—beyond the contractual limits of paid plans—are unlikely to emerge as blunt, government-mandated caps on requests. Instead, any future constraints will almost certainly arise indirectly, via provider-level policies or market-based mechanisms designed to internalise AI's environmental costs. The following factors shape this outlook:

1. Regulatory Focus on Providers and Infrastructure
    Regulators are concentrating on datacentre energy and water use—where the bulk of AI's environmental impact occurs—rather than on individual user behaviour. Proposals under consideration (for example, amendments to the EU AI Act) would mandate providers to disclose inference energy consumption and meet minimum efficiency standards for Power Usage Effectiveness (PUE) ([gao.gov](https://www.gao.gov/assets/gao-25-107172.pdf?utm_source=chatgpt.com "[PDF] GAO-25-107172, ARTIFICIAL INTELLIGENCE")). Policymakers recognise that capping requests at the user level would be administratively complex and less effective than targeting the supply side of AI services.

2. Provider-Level Carbon Accounting and Dynamic Pricing
    Major cloud and AI platform providers are developing carbon-tracking dashboards and offering customers the option to set "billing limits" or "usage alerts" to monitor both financial and environmental costs. For instance, OpenAI's API console allows developers to impose hard spending caps per project—a feature intended for cost control but readily adaptable to carbon budgeting ([OpenAI Community](https://community.openai.com/t/how-to-set-billing-limits-and-restrict-model-usage-for-a-project-via-openai-api/1087771?utm_source=chatgpt.com "How to Set Billing Limits and Restrict Model Usage for a Project via ...")). Microsoft's Online Service Terms similarly grant the right to throttle usage or deactivate services if certain thresholds are reached ([Microsoft](https://www.microsoft.com/licensing/terms/product/ForOnlineServices/all?utm_source=chatgpt.com "For Online Services - Microsoft Product Terms")). Such controls place the onus on customers to self-regulate, rather than imposing blanket quotas.

3. Market-Based Mechanisms over Direct Quotas
    Economists and some policymakers favour carbon-pricing mechanisms—such as levies on AI compute or tradable carbon credits—to reflect the true social cost of electricity and water usage. This approach would raise the marginal cost of each generation request, discouraging excessively large or frivolous workloads without explicit per-user caps. By contrast, hard request limits risk stifling legitimate innovation and differential needs across sectors.

4. Rebound Effects and Innovation Risks
    Efficiency gains in hardware and algorithms may paradoxically encourage heavier usage (the so-called rebound effect), undermining simple caps. Moreover, as AI becomes deeply embedded in productivity tools, healthcare and scientific research, rigid limits on end-user requests could impede critical applications. Policymakers and industry leaders are therefore wary of measures that could hamper beneficial uses.

5. Emergent "Green AI" Standards and Voluntary Commitments
    Academic and industry coalitions are coalescing around voluntary standards for "Green AI"—best practices that include reporting per-inference energy use, optimising model size, and preferring renewable-powered datacentres. While not legally binding, such standards can become de facto requirements through procurement policies and customer expectations.
