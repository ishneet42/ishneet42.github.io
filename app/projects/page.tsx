import Button from "@/components/Button";
import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";

const projectCategories = [
  {
    title: "Distributed Systems & Infrastructure",
    projects: [
      {
        name: "Distributed Stream Processing System",
        problem:
          "Designed and implemented a fault-tolerant, exactly-once stream processing engine that demystifies Apache Flink-style internals while meeting real-time correctness and latency requirements.",
        stack: [
          "Python",
          "FastAPI",
          "gRPC",
          "Protocol Buffers",
          "Apache Kafka",
          "RocksDB",
          "PostgreSQL",
          "MinIO",
          "S3",
          "GCS",
          "Prometheus",
          "Grafana",
          "Docker Compose",
          "Kubernetes",
          "GKE",
        ],
        contribution:
          "Implemented Chandy-Lamport distributed snapshots for exactly-once semantics, built a self-healing control plane with heartbeat-based recovery (<60s) from S3/GCS, and deployed HA workloads on GKE with autoscaling and persistent state.",
        outcome:
          "Achieved 10–50ms end-to-end latency for stateless pipelines and 50–200ms for stateful windows; delivered production-ready orchestration with observability dashboards and durable checkpointing.",
        link: "https://github.com/ishneet42/datacenter-stream-engine",
        youtube: "https://youtu.be/wpKeepR5zLA",
      },
    ],
  },
  {
    title: "Machine Learning & NLP",
    projects: [
      {
        name: "Political QA Clarity Detection (SemEval Task 6)",
        problem:
          "Built an end-to-end NLP system to detect clarity and evasiveness in political interview responses using QEvasion question–answer pairs.",
        stack: [
          "Python",
          "scikit-learn",
          "Hugging Face Transformers",
          "PyTorch",
          "RoBERTa",
          "BERT",
          "DeBERTa",
          "TF-IDF",
          "Linear SVM",
          "Logistic Regression",
          "Pandas",
          "Matplotlib",
          "Google Colab",
        ],
        contribution:
          "Framed the task as multi-class classification (Clear Reply, Ambivalent Reply, Clear Non-Reply), ran EDA on class imbalance and answer length patterns, and evaluated lexical baselines alongside transformer models and hybrid ensembles using Macro F1.",
        outcome:
          "TF-IDF + Linear SVM delivered a strong baseline; RoBERTa generalized best on hidden evaluation, while simple ensembling showed limited gains without careful calibration.",
        link: "https://github.com/ishneet42/semeval2026-task6-clarity",
        youtube: "https://youtu.be/QoJZDntffB8",
      },
      {
        name: "EEG Cognitive State Classification",
        problem:
          "Classify cognitive states from EEG signals during rest vs. mental arithmetic using deep learning and spectral analysis.",
        stack: [
          "Python",
          "MNE",
          "EEGNet",
          "TSception",
          "Jupyter Notebook",
          "PhysioNet",
          "Power Spectral Density",
          "NumPy",
          "Pandas",
          "Matplotlib",
        ],
        contribution:
          "Loaded PhysioNet mental arithmetic EEG data, computed band-wise PSD (delta–gamma), engineered features, and trained EEGNet and TSception models with accuracy/precision/recall/F1 evaluation.",
        outcome:
          "EEGNet achieved 91.78% accuracy and 91.69% F1, outperforming TSception (80.78% accuracy, 79.73% F1), demonstrating stronger EEG-specific modeling.",
        link: "https://github.com/ishneet42/EEG-Cognitive-State-Classification",
      },
      {
        name: "Shakespeare Text Generator",
        problem:
          "Generate Shakespeare-style text using a character-level RNN with LSTM layers trained on a subset of Shakespeare’s works.",
        stack: [
          "Python",
          "TensorFlow",
          "Keras",
          "LSTM",
          "RNN",
          "One-hot encoding",
          "RMSprop",
        ],
        contribution:
          "Preprocessed text into fixed-length character sequences, trained an LSTM-based model with softmax outputs, and tuned sampling via temperature to control creativity.",
        outcome:
          "Produced coherent, Shakespeare-like text samples using a lightweight RNN architecture and character-level generation.",
        link: "https://github.com/ishneet42/poetic-text-generation-using-RNN",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <PageLayout>
      <SectionHeading
        eyebrow="Projects"
        as="h1"
        title="Applied research, engineered for impact"
        subtitle="A selection of projects spanning ML research, infrastructure, and product-focused builds."
      />

      <div className="mt-10 space-y-10">
        {projectCategories.map((category) => (
          <section key={category.title} className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">
              {category.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {category.projects.map((project) => (
                <Card key={project.name} as="article" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-subtle">{project.problem}</p>
                  </div>
                  <div className="space-y-2 text-sm text-foreground">
                    <p>
                      <span className="font-semibold">Contribution:</span> {project.contribution}
                    </p>
                    <p>
                      <span className="font-semibold">Outcome:</span> {project.outcome}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech} label={tech} className="normal-case" />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button href={project.link} variant="secondary" external>
                      GitHub
                    </Button>
                    {"youtube" in project && project.youtube ? (
                      <Button href={project.youtube} variant="subtle" external>
                        YouTube Demo
                      </Button>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
