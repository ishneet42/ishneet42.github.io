import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    role: "Data Analyst Intern",
    org: "Decision Tree Analytics & Services, Gurugram",
    dates: "Jan 2025 – Jun 2025",
    highlights: [
      "Developed real-time Tableau dashboards for supply-chain monitoring, reducing delivery delays by 25%.",
      "Automated ETL pipelines and optimized SQL queries for logistics data, cutting query runtime by 20% and manual processing by 60%.",
      "Worked with structured/unstructured datasets, applying preprocessing and feature engineering to reduce missing/duplicate data cases by 15%.",
    ],
  },
  {
    role: "AI/ML Intern",
    org: "TEMS Tech Solutions, Remote",
    dates: "Aug 2024 – Nov 2024",
    highlights: [
      "Developed a hybrid CNN–LSTM model with DNN layers for malware detection in WordPress and webmail systems, achieving 70.3% accuracy.",
      "Used SMOTE-based augmentation and regularization to balance imbalanced datasets, improving F1-score by 18%.",
      "Streamlined experiment reproducibility with Python (NumPy, Pandas, TensorFlow, scikit-learn) and automated evaluation workflows, cutting setup time by 35%.",
    ],
  },
  {
    role: "AI/ML Intern",
    org: "Tech Mahindra, Remote",
    dates: "Jul 2024 – Aug 2024",
    highlights: [
      "Fine-tuned ML/NLP models to optimize telecom field survey workflows, improving processing efficiency by 10%.",
      "Deployed speech-to-text and text-to-speech systems using Python, Streamlit, and AWS EC2, reducing manual reporting time by 30%.",
      "Evaluated LLMs for automated survey summarization, increasing report generation speed by 40%.",
    ],
  },
  {
    role: "Student Researcher",
    org: "Defence Research and Development Organization, New Delhi",
    dates: "Jul 2023 – Sep 2023",
    highlights: [
      "Implemented supervised ML models for a crop recommendation system, improving yield prediction accuracy by 22%.",
      "Analyzed large-scale agricultural datasets using Python, NumPy, Pandas, scikit-learn, optimizing model selection and feature engineering.",
      "Built a Django web application with SQLite for visualization and experiment tracking, improving research accessibility.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <PageLayout>
      <SectionHeading
        eyebrow="Experience"
        as="h1"
        title="Applied research and ML engineering"
        subtitle="Impact-focused roles across research labs and industry teams."
      />

      <div className="mt-10 space-y-6">
        {experiences.map((item) => (
          <Card key={`${item.role}-${item.org}-${item.dates}`} as="article">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm text-subtle">{item.org}</p>
              </div>
              <p className="text-sm font-semibold text-subtle">{item.dates}</p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-subtle">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
