import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";

const hackathons = [
  {
    name: "Cal Hacks × Fetch.ai Innovation Lab",
    title: "Winner, Fetch.ai track — AgentViewAR",
    description:
      "Built an empathy-driven VR interview coaching system that surfaces real-time stress insights to recruiters. A Meta Quest 3 HUD shows pace, pauses, tension levels, and prompts; Fetch.ai agents coordinate recruiter/candidate feedback loops. Groq Whisper handles fast speech transcription, FastAPI + ChromaDB track recovery patterns, and Claude produces interview summaries and coaching recommendations.",
    stack: [
      "Meta Quest 3",
      "WebXR",
      "Three.js",
      "VR HUD",
      "WebSockets",
      "FastAPI",
      "Whisper",
      "ASR",
      "Speech analytics",
      "Claude API",
      "LLM summarization",
      "Fetch.ai Agentverse",
      "Multi-agent system",
      "ChromaDB",
      "Vector database",
    ],
    links: [
      {
        label: "Devpost",
        href: "https://devpost.com/software/interviewar",
      },
      {
        label: "Medium article",
        href: "https://medium.com/fetch-ai/agentviewar-building-empathy-into-interviews-with-fetch-ai-agents-e2c6ebb0d8ad",
      },
      {
        label: "GitHub",
        href: "https://github.com/sukritisehgal-28/InterVIew-AR-Calhacks2025",
      },
    ],
  },
  {
    name: "HackHazards ’24",
    title: "Winner, xxnetwork sponsor track — CrimsonConnect",
    description:
      "Built a transparent, user-friendly platform that connects donors and recipients quickly, improving timeliness while preserving privacy with blockchain-based verification. Implemented a Django web app and integrated Solidity/Hardhat with Ethereum tooling and Polygon Mumbai, plus location capabilities with Leaflet.js.",
    stack: [
      "Solidity",
      "Node.js",
      "Django",
      "JavaScript",
      "React.js",
      "Hardhat",
      "Ethereum TestRPC",
      "Polygon Mumbai",
      "Leaflet.js",
      "xx-network",
    ],
    links: [
      {
        label: "Devfolio",
        href: "https://devfolio.co/projects/crimsonconnect-ef6c",
      },
      {
        label: "YouTube Demo",
        href: "https://www.youtube.com/watch?v=l96gFrTGNow&t=34s",
      },
      {
        label: "GitHub",
        href: "https://github.com/PranavPC2003/Crimson-Connect",
      },
    ],
  },
  {
    name: "GeeksforGeeks Ecotech Hacks",
    title: "2nd place — OptiSpace",
    description:
      "OptiSpace is a smart office system that combines IoT sensing, machine learning, and computer vision to optimize energy usage, occupancy-aware climate control, and waste management. It ingests environmental signals alongside OpenWeatherMap context, applies predictive + rule-augmented ML to adjust lighting/HVAC, and uses a lightweight vision pipeline to detect waste and feed real-time dashboards.",
    stack: [
      "IoT & sensing",
      "Real-time inference",
      "Machine learning",
      "Predictive modeling",
      "Django",
      "RESTful APIs",
      "Backend orchestration",
      "Computer vision",
    ],
    links: [
      {
        label: "YouTube Demo",
        href: "https://www.youtube.com/watch?v=QPVVrf_-cgo",
      },
      {
        label: "GitHub",
        href: "https://github.com/ishneet42/Smart_Room",
      },
    ],
  },
  {
    name: "AWS GameDay Hackathon",
    title: "2nd place — team performance highlight",
    description:
      "Secured 2nd place while collaborating under time pressure using Amazon Bedrock, OpenSearch, SageMaker, and AWS Guardrails. This was a competitive team challenge rather than a single product build.",
    stack: [
      "Amazon Bedrock",
      "OpenSearch",
      "SageMaker",
      "AWS Guardrails",
      "Cloud architecture",
      "GenAI workflows",
    ],
    links: [],
  },
];

const coCurriculars = [
  {
    title: "HackWIE 3.0 – Women-Centric Hackathon",
    details:
      "Organized a 24-hour hackathon addressing challenges faced by Women in Engineering, promoting inclusivity in tech. Led technical workshops, webinars, and knowledge-sharing sessions on emerging technologies (AI/ML, blockchain), boosting student engagement and skill development.",
  },
  {
    title: "HackAvenue Hackathon (2023)",
    details:
      "Led planning across budgeting, timelines, event scheduling, and theme development for 32 participating teams. Managed cross-functional teams (marketing, logistics, sponsorship) and coordinated with college authorities for approvals and compliance.",
  },
  {
    title: "Organizing Committee Member, R10 Hackathon (IEEE India Council)",
    details:
      "Contributed to the planning and execution of the IEEE India Council hackathon at KIET Group of Institutions, Ghaziabad (IEEE SSH 2024), facilitating innovation-driven problem-solving.",
  },
];

export default function HackathonsPage() {
  return (
    <PageLayout>
      <SectionHeading
        eyebrow="Hackathons & Co-Curriculars"
        as="h1"
        title="Building community through hands-on work"
        subtitle="Hackathons, teaching, and service activities that complement my research and engineering interests."
      />

      <section className="mt-10 space-y-6" aria-labelledby="hackathons">
        <h2
          id="hackathons"
          className="text-2xl font-semibold text-foreground font-[var(--font-heading)]"
        >
          Hackathons
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((item) => (
            <Card key={item.name} as="article">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                {item.name}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-subtle">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Tag key={tech} label={tech} className="normal-case" />
                ))}
              </div>
              {item.links.length ? (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-6" aria-labelledby="cocurricular">
        <h2
          id="cocurricular"
          className="text-2xl font-semibold text-foreground font-[var(--font-heading)]"
        >
          Hackathon Organizer
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {coCurriculars.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-subtle">{item.details}</p>
            </Card>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
