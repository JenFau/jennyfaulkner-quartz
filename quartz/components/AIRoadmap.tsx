import { QuartzComponent, QuartzComponentConstructor } from "./types"

interface TrackItem {
  title: string
  detail: string
}

interface Track {
  name: string
  items: TrackItem[]
}

interface Phase {
  id: number
  label: string
  title: string
  duration: string
  color: string
  accent: string
  icon: string
  summary: string
  tracks: Track[]
}

// Skills with a corresponding vault page get an <a> tag; all others stay <span>
const LINKED_SKILLS: Record<string, string> = {
  Python: "/Learning/Python/",
  "LLM literacy": "/Learning/LLM/",
}

function dedupeSkills(phase: Phase): TrackItem[] {
  return phase.tracks
    .flatMap((t) => t.items)
    .filter((item, idx, arr) => arr.findIndex((x) => x.title === item.title) === idx)
}

const phases: Phase[] = [
  {
    id: 1,
    label: "Phase 01",
    title: "Foundations",
    duration: "Months 1–4",
    color: "#2D6A4F",
    accent: "#B7E4C7",
    icon: "◈",
    summary:
      "Get coding, get cloud-ready, get data-literate. The bedrock everything else is built on.",
    tracks: [
      {
        name: "Technical Core",
        items: [
          {
            title: "Python",
            detail:
              "Start with analytical scripting (NumPy, Pandas) and progress to production-grade code: classes, async/await, type hints, packaging, testing. Not just notebooks.",
          },
          {
            title: "ML fundamentals",
            detail:
              "Supervised/unsupervised learning, model evaluation, bias/variance tradeoff. Andrew Ng's courses are the gold standard.",
          },
          {
            title: "LLM literacy",
            detail:
              "Understand transformers conceptually. Read 'Attention Is All You Need'. Know what tokenization, fine-tuning, and RLHF mean.",
          },
          {
            title: "AI tooling",
            detail:
              "Hands-on: OpenAI API, LangChain, vector databases (Pinecone/Weaviate), basic RAG pipelines.",
          },
        ],
      },
      {
        name: "Software Engineering",
        items: [
          {
            title: "Distributed systems fundamentals",
            detail:
              "Understand CAP theorem, message queues (Kafka, RabbitMQ), API design (REST, gRPC), and microservices. AI systems are distributed systems.",
          },
          {
            title: "Cloud infrastructure",
            detail:
              "Pick one cloud deeply: AWS (SageMaker, ECS, Lambda, S3), GCP (Vertex AI, GKE), or Azure (Azure ML, AKS). Get a professional-level cert.",
          },
          {
            title: "Containerization & orchestration",
            detail:
              "Docker from scratch. Kubernetes fundamentals — deployments, services, autoscaling, resource limits. Essential for deploying models at scale.",
          },
          {
            title: "CI/CD & DevOps",
            detail:
              "GitHub Actions or CircleCI pipelines. Infrastructure as Code with Terraform. You'll be setting standards for MLOps pipelines.",
          },
        ],
      },
      {
        name: "Data Engineering",
        items: [
          {
            title: "Data pipeline design",
            detail:
              "Apache Airflow, dbt, Spark. Understand batch vs. streaming ingestion. Know how to move and transform data reliably at scale.",
          },
          {
            title: "Storage architecture",
            detail:
              "When to use data lakes (S3/GCS), warehouses (Snowflake/BigQuery), lakehouses (Databricks/Delta Lake), and vector stores (Pinecone/pgvector).",
          },
          {
            title: "Schema design & data modeling",
            detail:
              "Dimensional modeling, slowly changing dimensions, event sourcing. Bad data architecture will sink any AI system.",
          },
          {
            title: "Streaming data",
            detail:
              "Kafka or Kinesis for real-time inference pipelines. Many production AI systems need sub-second data freshness.",
          },
        ],
      },
      {
        name: "Milestones",
        items: [
          {
            title: "Earn 1 cloud architect cert",
            detail:
              "AWS Solutions Architect, GCP Professional Cloud Architect, or Azure Solutions Architect Expert.",
          },
          {
            title: "Deploy a full-stack app to prod",
            detail: "Containerized, CI/CD'd, cloud-hosted, monitored. Something you built and own.",
          },
          {
            title: "Complete 1 ML certification",
            detail:
              "AWS ML Specialty, Google Cloud Professional ML Engineer, or DeepLearning.AI specialization.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Phase 02",
    title: "LLM Engineering & Agents",
    duration: "Months 5–9",
    color: "#1D3557",
    accent: "#A8DADC",
    icon: "◉",
    summary:
      "Get into practical LLM work fast. Models, fine-tuning, RAG, and agents — the core of modern AI engineering.",
    tracks: [
      {
        name: "Model Fundamentals",
        items: [
          {
            title: "ML theory",
            detail:
              "Linear/logistic regression, decision trees, ensembles, gradient boosting. Know bias-variance, regularization, and cross-validation cold.",
          },
          {
            title: "Deep learning architecture",
            detail:
              "CNNs, RNNs, transformers — understand the math, not just the APIs. Implement a transformer from scratch in PyTorch.",
          },
          {
            title: "LLMs in depth",
            detail:
              "Pre-training, fine-tuning (SFT, LoRA, QLoRA), RLHF, inference optimization (quantization, speculative decoding). Read the GPT-4 technical report.",
          },
          {
            title: "Multimodal systems",
            detail:
              "Vision-language models (CLIP, LLaVA), speech (Whisper), image generation (diffusion models).",
          },
        ],
      },
      {
        name: "MLOps & Production AI",
        items: [
          {
            title: "Experiment tracking",
            detail:
              "MLflow, Weights & Biases, or Neptune. Design the systems teams use for experiment management.",
          },
          {
            title: "Feature stores",
            detail:
              "Feast, Tecton, or Hopsworks. The bridge between data engineering and ML. Critical for preventing training-serving skew.",
          },
          {
            title: "Model serving",
            detail:
              "Triton Inference Server, TorchServe, vLLM for LLMs. Latency vs. throughput tradeoffs. GPU memory management.",
          },
          {
            title: "Model monitoring",
            detail:
              "Data drift, concept drift, performance degradation. Evidently AI, Arize, or custom solutions.",
          },
        ],
      },
      {
        name: "RAG & Agents",
        items: [
          {
            title: "RAG architecture",
            detail:
              "Advanced RAG: hybrid search, re-ranking, query routing, agentic retrieval. Know when naive RAG fails and how to fix it — chunking strategy, embedding model selection, metadata filtering.",
          },
          {
            title: "Agentic systems",
            detail:
              "Multi-agent frameworks (LangGraph, AutoGen, CrewAI). Understand orchestration vs. choreography, tool-use patterns, memory architectures, and failure modes.",
          },
          {
            title: "AI gateway patterns",
            detail:
              "Prompt routing, load balancing across models, fallback chains, cost management, semantic caching. The infrastructure layer most orgs need but few have designed well.",
          },
          {
            title: "Evaluation architecture",
            detail:
              "LLM-as-judge pipelines, automated test suites, red-teaming infrastructure. Systems for continuous quality measurement.",
          },
        ],
      },
      {
        name: "Milestones",
        items: [
          {
            title: "Fine-tune and deploy an LLM",
            detail:
              "Use LoRA on an open-source model (Llama, Mistral). Serve it with vLLM behind a FastAPI endpoint. Benchmark latency and throughput.",
          },
          {
            title: "Build a complete MLOps pipeline",
            detail:
              "Data ingestion → training → evaluation → registry → serving → monitoring. Automated retraining on drift.",
          },
          {
            title: "Ship an agentic application",
            detail:
              "A real multi-step agent using LangGraph or AutoGen. Tool use, memory, error recovery. Not a demo — something that solves a real problem.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Phase 03",
    title: "Systems Design",
    duration: "Months 10–15",
    color: "#7B2D8B",
    accent: "#E0AAFF",
    icon: "◎",
    summary:
      "Architecture is about tradeoffs at scale. Design systems that are reliable, observable, and evolvable.",
    tracks: [
      {
        name: "AI System Patterns",
        items: [
          {
            title: "Human-in-the-loop design",
            detail:
              "When and how to insert human review. Confidence thresholds, escalation paths, feedback loops for retraining. Critical for regulated industries.",
          },
          {
            title: "AI platform strategy",
            detail:
              "Build vs. buy decisions at the org level. How to sequence investments: data foundation first, then training infrastructure, then serving, then tooling.",
          },
          {
            title: "Cost architecture",
            detail:
              "GPU cost modeling, spot instance strategies, inference cost per token, make vs. buy decisions. Architects who ignore cost get fired.",
          },
        ],
      },
      {
        name: "Reliability & Scale",
        items: [
          {
            title: "High-availability AI systems",
            detail:
              "Multi-region model serving, failover strategies, circuit breakers. SLA design for AI — latency SLOs are different from traditional services.",
          },
          {
            title: "Security for AI systems",
            detail:
              "Prompt injection defense, model exfiltration risks, PII leakage in training data, audit logging. SOC2 and ISO27001 implications.",
          },
          {
            title: "Observability",
            detail:
              "Distributed tracing for AI pipelines (OpenTelemetry), LLM-specific metrics (token usage, latency percentiles, refusal rates), dashboards.",
          },
        ],
      },
      {
        name: "Architecture Docs",
        items: [
          {
            title: "ADR practice",
            detail:
              "Architecture Decision Records. Document why you made each major choice. Architects who can't explain their decisions don't last.",
          },
          {
            title: "C4 model diagrams",
            detail:
              "Context, Container, Component, Code diagrams. Master PlantUML or Mermaid for version-controlled diagrams.",
          },
          {
            title: "RFCs and design reviews",
            detail:
              "Learn to write Request for Comment documents and run architecture review boards. You'll spend as much time in review as in design.",
          },
        ],
      },
      {
        name: "Milestones",
        items: [
          {
            title: "Design a production-grade AI platform",
            detail:
              "Full architecture: data layer, training infrastructure, serving, monitoring, governance. Write the ADRs. Present to engineering leadership.",
          },
          {
            title: "Contribute to open source",
            detail:
              "PR to LangChain, LlamaIndex, vLLM, or similar. Shows you can work in complex codebases and builds community reputation.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Phase 04",
    title: "Depth & Specialisation",
    duration: "Month 16+",
    color: "#B5451B",
    accent: "#FFDDD2",
    icon: "◐",
    summary:
      "You've earned the right to specialise. Pick a vertical, go deep on governance, and start packaging your expertise.",
    tracks: [
      {
        name: "Choose Your Vertical",
        items: [
          {
            title: "Healthcare AI",
            detail:
              "Clinical decision support, medical imaging, patient data. Requires HIPAA literacy and clinical workflow knowledge.",
          },
          {
            title: "Financial Services",
            detail:
              "Fraud detection, algorithmic risk, NLP for documents. High regulation — know your compliance.",
          },
          {
            title: "Retail & E-commerce",
            detail: "Recommendation engines, demand forecasting, AI-driven personalization.",
          },
          {
            title: "Enterprise / Ops",
            detail:
              "Process automation, AI agents for internal tooling, knowledge management. Broadest market.",
          },
        ],
      },
      {
        name: "Advanced Expertise",
        items: [
          {
            title: "AI strategy",
            detail:
              "Learn to present AI investment cases at the C-suite level. Read about enterprise change management and technology adoption curves.",
          },
          {
            title: "Responsible AI & governance",
            detail:
              "EU AI Act, model risk management, bias auditing. Compliance knowledge is increasingly a table-stakes requirement.",
          },
          {
            title: "Build vs. buy frameworks",
            detail:
              "Help orgs decide: fine-tune, prompt-engineer, or buy a SaaS tool. Map total cost of ownership across options.",
          },
          {
            title: "Technical standards",
            detail:
              "Write the org's AI architecture principles. Model cards, data sheets, deployment checklists, incident runbooks.",
          },
        ],
      },
      {
        name: "Milestones",
        items: [
          {
            title: "Develop a signature framework",
            detail:
              "Create your own 'AI Readiness Assessment' or 'Use Case Prioritization Matrix'. Own language = perceived expertise.",
          },
          {
            title: "Publish technical writing",
            detail:
              "Engineering blog posts on architecture decisions, postmortems, benchmarks. Builds credibility and sharpens thinking.",
          },
          {
            title: "Give a talk",
            detail:
              "Start local: meetups, industry associations, webinars. Working toward a real conference submission.",
          },
        ],
      },
    ],
  },
]

const AIRoadmap: QuartzComponent = () => {
  return (
    <div id="ai-roadmap">
      {/* Header */}
      <div class="rm-header">
        <div class="rm-eyebrow">Personal Learning Path</div>
        <h2 class="rm-title">AI Roadmap</h2>
        <p class="rm-subtitle">
          A hybrid path combining AI engineering and architecture. Journal notes kept in Obsidian.
        </p>
      </div>

      {/* Phase selector */}
      <div class="rm-phase-selector">
        {phases.map((p, i) => (
          <button
            key={p.id}
            class={`rm-phase-btn${i === 0 ? " active" : ""}`}
            data-phase={String(i)}
            style={{ "--phase-color": p.color, "--phase-accent": p.accent } as any}
          >
            <div class="rm-pb-label">{p.label}</div>
            <div class="rm-pb-title">{p.title}</div>
            <div class="rm-pb-duration">{p.duration}</div>
            <div class="rm-pb-bar" />
          </button>
        ))}
      </div>

      {/* Phase panels — all rendered, CSS shows only .active */}
      <div class="rm-body">
        {phases.map((p, pi) => {
          const skills = dedupeSkills(p)
          return (
            <div
              key={p.id}
              class={`rm-phase-panel${pi === 0 ? " active" : ""}`}
              data-phase={String(pi)}
              style={{ "--phase-color": p.color, "--phase-accent": p.accent } as any}
            >
              {/* Phase header */}
              <div class="rm-ph-header">
                <div class="rm-ph-icon">{p.icon}</div>
                <div class="rm-ph-info">
                  <div class="rm-ph-title-row">
                    <h3 class="rm-ph-title">{p.title}</h3>
                    <span class="rm-ph-badge">{p.duration}</span>
                  </div>
                  <p class="rm-ph-summary">{p.summary}</p>
                </div>
              </div>

              {/* Track tabs */}
              <div class="rm-track-tabs">
                {p.tracks.map((t, ti) => (
                  <button
                    key={ti}
                    class={`rm-track-btn${ti === 0 ? " active" : ""}`}
                    data-track={String(ti)}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              {/* Track panels — all rendered, CSS shows only .active */}
              {p.tracks.map((t, ti) => (
                <div
                  key={ti}
                  class={`rm-track-panel${ti === 0 ? " active" : ""}`}
                  data-track={String(ti)}
                >
                  {t.items.map((item, ii) => (
                    <div key={ii} class="rm-item-card" data-item={String(ii)}>
                      <div class="rm-ic-header">
                        <div class="rm-ic-left">
                          <span class="rm-ic-num">{String(ii + 1).padStart(2, "0")}</span>
                          <span class="rm-ic-title">{item.title}</span>
                        </div>
                        <span class="rm-ic-toggle">+</span>
                      </div>
                      <div class="rm-ic-detail">
                        <p>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Skills chips */}
              <div class="rm-skills-section">
                <div class="rm-skills-label">All Skills</div>
                <div class="rm-skills-chips">
                  {skills.map((item, i) => {
                    const href = LINKED_SKILLS[item.title]
                    return href ? (
                      <a key={i} href={href} class="rm-skill-chip rm-skill-chip--linked">
                        {item.title}
                      </a>
                    ) : (
                      <span key={i} class="rm-skill-chip">
                        {item.title}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

AIRoadmap.css = `
#ai-roadmap {
  font-family: 'Cabinet Grotesk', sans-serif;
  color: var(--dark);
  margin-top: 1.5rem;
}

/* ── Header ── */
.rm-header {
  border-bottom: 1.5px solid var(--lightgray);
  padding-bottom: 24px;
  margin-bottom: 0;
}

.rm-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--gray);
  margin-bottom: 10px;
  text-transform: uppercase;
}

.rm-title {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--dark);
  margin: 0 0 12px 0;
}

.rm-subtitle {
  color: var(--gray);
  font-size: 13px;
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.6;
  margin: 0;
}

/* ── Phase selector ── */
.rm-phase-selector {
  border-bottom: 1.5px solid var(--lightgray);
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

@media (max-width: 600px) {
  .rm-phase-selector {
    grid-template-columns: repeat(2, 1fr);
  }
}

.rm-phase-btn {
  cursor: pointer;
  transition: all 0.18s ease;
  border: 1.5px solid var(--lightgray);
  background: var(--light);
  border-radius: 8px;
  text-align: left;
  width: 100%;
  padding: 14px 16px;
  color: inherit;
}

.rm-phase-btn:hover {
  border-color: var(--gray);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transform: translateY(-1px);
}

.rm-phase-btn.active {
  border-color: var(--phase-color);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.rm-pb-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: var(--gray);
  letter-spacing: 0.15em;
  margin-bottom: 5px;
}

.rm-phase-btn.active .rm-pb-label {
  color: var(--phase-color);
}

.rm-pb-title {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--gray);
  margin-bottom: 3px;
}

.rm-phase-btn.active .rm-pb-title {
  color: var(--dark);
}

.rm-pb-duration {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: var(--gray);
}

.rm-pb-bar {
  display: none;
  margin-top: 8px;
  height: 2px;
  background: var(--phase-color);
  border-radius: 1px;
}

.rm-phase-btn.active .rm-pb-bar {
  display: block;
}

/* ── Body ── */
.rm-body {
  padding-top: 28px;
}

.rm-phase-panel {
  display: none;
}

.rm-phase-panel.active {
  display: block;
}

/* ── Phase header ── */
.rm-ph-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1.5px solid var(--lightgray);
}

.rm-ph-icon {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 8px;
  background: var(--phase-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--phase-color);
}

.rm-ph-info {
  flex: 1;
}

.rm-ph-title-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.rm-ph-title {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--dark);
  margin: 0;
}

.rm-ph-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--phase-color);
  background: var(--phase-accent);
  padding: 2px 10px;
  border-radius: 20px;
  border: 1.5px solid var(--phase-accent);
  white-space: nowrap;
}

.rm-ph-summary {
  color: var(--gray);
  font-size: 13.5px;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
}

/* ── Track tabs ── */
.rm-track-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.rm-track-btn {
  cursor: pointer;
  padding: 7px 14px;
  border-radius: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
  transition: all 0.15s;
  border: 1.5px solid var(--lightgray);
  background: var(--light);
  color: var(--gray);
}

.rm-track-btn.active {
  background: var(--phase-color);
  color: #fff;
  border-color: var(--phase-color);
  font-weight: 500;
}

.rm-track-btn:not(.active):hover {
  border-color: var(--gray);
  color: var(--dark);
}

/* ── Track panels ── */
.rm-track-panel {
  display: none;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}

.rm-track-panel.active {
  display: flex;
}

/* ── Item cards ── */
.rm-item-card {
  border: 1.5px solid var(--lightgray);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.15s, box-shadow 0.15s;
  cursor: pointer;
  background: var(--light);
}

.rm-item-card:hover {
  border-color: var(--gray);
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
}

.rm-item-card.expanded {
  border-color: var(--phase-color);
}

.rm-ic-header {
  padding: 13px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.rm-ic-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rm-ic-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  background: var(--phase-accent);
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  color: var(--phase-color);
}

.rm-ic-title {
  font-size: 14px;
  color: var(--dark);
  letter-spacing: 0.01em;
}

.rm-ic-toggle {
  color: var(--lightgray);
  font-size: 18px;
  line-height: 1;
  transition: transform 0.2s, color 0.15s;
  display: inline-block;
  flex-shrink: 0;
}

.rm-item-card.expanded .rm-ic-toggle {
  transform: rotate(45deg);
  color: var(--phase-color);
}

.rm-ic-detail {
  display: none;
  padding: 12px 16px 14px 48px;
  border-top: 1.5px solid var(--phase-accent);
}

.rm-item-card.expanded .rm-ic-detail {
  display: block;
}

.rm-ic-detail p {
  font-size: 13px;
  color: var(--gray);
  line-height: 1.7;
  font-style: italic;
  margin: 0;
}

/* ── Skills ── */
.rm-skills-section {
  border-top: 1.5px solid var(--lightgray);
  padding-top: 24px;
  margin-top: 4px;
}

.rm-skills-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--gray);
  margin-bottom: 14px;
  text-transform: uppercase;
}

.rm-skills-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.rm-skill-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1.5px solid var(--lightgray);
  background: var(--light);
  color: var(--gray);
  letter-spacing: 0.03em;
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
}

a.rm-skill-chip--linked {
  border-color: var(--secondary);
  color: var(--secondary);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

a.rm-skill-chip--linked:hover {
  background: var(--secondary);
  color: #fff;
}
`

AIRoadmap.afterDOMLoaded = `
(function () {
  var roadmap = document.getElementById("ai-roadmap");
  if (!roadmap) return;

  function activatePhase(phaseIdx) {
    roadmap.querySelectorAll(".rm-phase-btn").forEach(function (btn) {
      btn.classList.toggle("active", parseInt(btn.dataset.phase) === phaseIdx);
    });
    roadmap.querySelectorAll(".rm-phase-panel").forEach(function (panel) {
      panel.classList.toggle("active", parseInt(panel.dataset.phase) === phaseIdx);
    });
  }

  function activateTrack(phasePanel, trackIdx) {
    phasePanel.querySelectorAll(".rm-track-btn").forEach(function (btn) {
      btn.classList.toggle("active", parseInt(btn.dataset.track) === trackIdx);
    });
    phasePanel.querySelectorAll(".rm-track-panel").forEach(function (panel) {
      panel.classList.toggle("active", parseInt(panel.dataset.track) === trackIdx);
    });
    phasePanel.querySelectorAll(".rm-item-card.expanded").forEach(function (card) {
      card.classList.remove("expanded");
    });
  }

  roadmap.addEventListener("click", function (e) {
    var phaseBtn = e.target.closest(".rm-phase-btn");
    if (phaseBtn) {
      activatePhase(parseInt(phaseBtn.dataset.phase));
      return;
    }

    var trackBtn = e.target.closest(".rm-track-btn");
    if (trackBtn) {
      var phasePanel = trackBtn.closest(".rm-phase-panel");
      activateTrack(phasePanel, parseInt(trackBtn.dataset.track));
      return;
    }

    var itemCard = e.target.closest(".rm-item-card");
    if (itemCard) {
      var trackPanel = itemCard.closest(".rm-track-panel");
      var wasExpanded = itemCard.classList.contains("expanded");
      trackPanel.querySelectorAll(".rm-item-card.expanded").forEach(function (c) {
        c.classList.remove("expanded");
      });
      if (!wasExpanded) itemCard.classList.add("expanded");
    }
  });
})();
`

export default (() => AIRoadmap) satisfies QuartzComponentConstructor
