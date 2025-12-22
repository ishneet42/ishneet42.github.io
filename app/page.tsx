import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";

const focusAreas = [
  "Machine Learning & NLP",
  "Systems & Infrastructure",
  "Responsible AI",
];

const researchSpotlight = [
  {
    title:
      "Performance Evaluation of Open-Source LLMs for Text-to-SQL Conversion in Healthcare",
    description:
      "First-author study presented at ICPCT 2025 and published on IEEE Xplore, evaluating open-source LLMs (Llama 3.1, Mixtral, Gemma 2) on MIMICSQL for clinically grounded Text-to-SQL translation. The evaluation emphasizes empirical rigor through exact-match accuracy and logical-form correctness, revealing clear scale–reliability trade-offs and positioning Llama 3.1–70B as the most dependable model for high-stakes clinical decision support.",
    methods: [
      "Healthcare NLP",
      "Open-source LLMs",
      "Clinical decision support",
      "MIMICSQL benchmark",
      "Exact-match accuracy",
      "Logical-form correctness",
    ],
    link: {
      label: "Read paper",
      href: "https://ieeexplore.ieee.org/abstract/document/10941238",
    },
  },
  {
    title:
      "Cloud Computing Applications in Digital Health: Challenges Related to Privacy and Security",
    description:
      "Co-authored the Springer edited book chapter “Cloud Computing Applications in Digital Health: Challenges Related to Privacy and Security” in Explainable IoT Applications: A Demystification (Information Systems Engineering and Management, vol. 21) under Dr. Tripti Rathee. The chapter examines cloud service models, privacy and safety threats, and security methods for digital health systems, with real-world applications such as telemedicine, medical imaging, clinical information systems, and IoMT. First online: 14 Feb 2025 (pp. 79–97).",
    methods: [
      "Cloud computing",
      "IoT applications",
      "Digital health",
      "Privacy & security",
      "Ethics",
      "Governance",
      "Applied ML",
    ],
    link: {
      label: "View chapter",
      href: "https://link.springer.com/chapter/10.1007/978-3-031-74885-1_5",
    },
  },
  {
    title: "SemEval-2025 Task 6: Clarity & Evasion Detection (QEvasion / CLARITY)",
    description:
      "Study on detecting strategic ambiguity in political interviews by classifying question–answer pairs into Clear Reply, Ambivalent Reply, and Clear Non-Reply. Using the QEvasion dataset of U.S. presidential interviews, we conduct EDA on label distributions and answer-length patterns, implement BERT-based baselines, and evaluate macro F1 while analyzing error sources and limitations.",
    methods: [
      "Political NLP",
      "Question–answer classification",
      "BERT baseline",
      "Macro F1",
      "Exploratory data analysis",
      "Evasion detection",
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ishneet-kaur-chadha",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M20.447 20.452H16.89V14.89c0-1.326-.025-3.032-1.848-3.032-1.848 0-2.131 1.445-2.131 2.94v5.654H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.366-1.848 3.6 0 4.265 2.37 4.265 5.455v6.284zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zm1.781 13.019H3.556V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ishneet42",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M12 .5a11.5 11.5 0 0 0-3.636 22.4c.574.105.784-.25.784-.556v-2.01c-3.19.694-3.862-1.538-3.862-1.538-.522-1.326-1.276-1.68-1.276-1.68-1.043-.713.08-.699.08-.699 1.154.081 1.762 1.186 1.762 1.186 1.026 1.758 2.693 1.25 3.35.956.104-.744.401-1.25.73-1.536-2.548-.29-5.227-1.274-5.227-5.67 0-1.253.447-2.276 1.184-3.077-.12-.29-.514-1.46.112-3.043 0 0 .965-.309 3.162 1.175a10.95 10.95 0 0 1 2.88-.387c.978.004 1.963.132 2.88.387 2.196-1.484 3.16-1.175 3.16-1.175.628 1.583.234 2.753.115 3.043.737.801 1.183 1.824 1.183 3.077 0 4.406-2.683 5.377-5.238 5.663.412.356.78 1.058.78 2.134v3.164c0 .309.208.666.79.553A11.5 11.5 0 0 0 12 .5z" />
      </svg>
    ),
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=gvsF5X8AAAAJ&hl=en",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M12 3L1 9l11 6 11-6-11-6zm0 8.75L5 9l7-3.75L19 9l-7 2.75z" />
        <path d="M6.5 12.5v3.5c0 2.071 2.46 3.75 5.5 3.75s5.5-1.679 5.5-3.75v-3.5l-5.5 2.5-5.5-2.5z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <PageLayout>
      <section
        className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        aria-labelledby="home-hero"
      >
        <div className="flex flex-col gap-6">
          <div className="max-w-[16rem] space-y-3 lg:max-w-[18rem]">
            <Image
              src="/profile.jpg"
              alt="Portrait of Ishneet Kaur Chadha"
              width={768}
              height={768}
              className="h-auto w-full rounded-2xl border border-border object-contain"
              priority
            />
            {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
              Research profile
            </p> */}
            <ul className="list-disc space-y-2 pl-5 text-sm text-subtle">
              <li>Drawn to problems that reward patience and precision.</li>
              <li>Enjoys thoughtful discussions and careful iteration.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="#research-spotlight" variant="primary">
              View Research
            </Button>
            <Button href="/projects" variant="secondary">
              View Projects
            </Button>
            <Button href="/resume.pdf" variant="subtle" download>
              Download Resume
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                <span className="text-accent">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">
            University of Colorado Boulder
          </p>
          <div className="space-y-4">
            <h1
              id="home-hero"
              className="text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl font-[var(--font-heading)]"
            >
              Ishneet Kaur Chadha
            </h1>
            <p className="max-w-2xl text-lg text-subtle">
              {/* Research-oriented MS Computer Science student specializing in machine
              learning, natural language processing, and production-grade systems. */}
              "I enjoy building software that’s easy to read, easy to reason about, and built to last. My work focuses on clean, maintainable code, collaborative problem-solving, and adapting quickly as ideas evolve. As a Computer Science graduate student working across systems, machine learning, and research-oriented projects, I care as much about clarity and design as I do about results and I’m always happy to connect and talk through interesting problems."
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <Tag key={area} label={area} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-subtle">
            <a
              href="mailto:ishneet.chadha@colorado.edu"
              className="font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              ishneet.chadha@colorado.edu
            </a>
          </div>
          <Card className="flex flex-col justify-between bg-accent-soft/40">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">
                Current focus
              </h2>
              <p className="text-sm text-subtle">
                I’m working on questions around state, consistency, and evaluation in learning driven pipelines, especially in settings where data arrives incrementally rather than as a static dataset.
              </p>
            </div>
            <div className="space-y-3 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                Areas of attention
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-foreground">
                <li>Evaluation and benchmarking for NLP systems</li>
                <li>Reproducible ML experimentation pipelines</li>
                <li>Bias, data quality, and model reliability</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-20 space-y-8" aria-labelledby="research-spotlight">
        <SectionHeading
          eyebrow="Research"
          id="research-spotlight"
          title="Research spotlight"
          subtitle="Three active areas where I am building evaluation-first, trustworthy ML systems."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {researchSpotlight.map((item) => (
            <Card key={item.title} as="article" className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-subtle">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.methods.map((method) => (
                  <Tag key={method} label={method} className="normal-case" />
                ))}
              </div>
              {item.link ? (
                <a
                  href={item.link.href}
                  className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.link.label}
                </a>
              ) : (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                  Work in progress
                </p>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20 space-y-8" aria-labelledby="hackathons">
        <SectionHeading
          eyebrow="Hackathons"
          id="hackathons"
          title="Selected hackathon wins"
          subtitle="Highlights from rapid-build competitions focused on applied AI, systems, and sustainability."
        />
        <Carousel ariaLabel="Hackathon highlights">
          <Card as="article" className="w-[85%] max-w-md shrink-0 space-y-4 sm:w-[60%] md:w-[32%]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                Cal Hacks × Fetch.ai Innovation Lab
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                Winner, Fetch.ai track — AgentViewAR
              </h3>
              <p className="text-sm text-subtle">
                Built an empathy-driven VR interview coaching system that surfaces
                real-time stress insights to recruiters. A Meta Quest 3 HUD shows
                pace, pauses, tension levels, and prompts; Fetch.ai agents coordinate
                recruiter/candidate feedback loops. Groq Whisper handles fast speech
                transcription, FastAPI + ChromaDB track recovery patterns, and Claude
                produces interview summaries and coaching recommendations.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
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
                ].map((tech) => (
                  <Tag key={tech} label={tech} className="normal-case" />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://devpost.com/software/interviewar"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                Devpost
              </a>
              <a
                href="https://medium.com/fetch-ai/agentviewar-building-empathy-into-interviews-with-fetch-ai-agents-e2c6ebb0d8ad"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                Medium article
              </a>
              <a
                href="https://github.com/sukritisehgal-28/InterVIew-AR-Calhacks2025"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Card>

          <Card as="article" className="w-[85%] max-w-md shrink-0 space-y-4 sm:w-[60%] md:w-[32%]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                HackHazards ’24
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                Winner, xxnetwork track — CrimsonConnect
              </h3>
              <p className="text-sm text-subtle">
                Built a transparent, user-friendly platform that connects donors and
                recipients quickly, improving timeliness while preserving privacy
                with blockchain-based verification.
              </p>
              <p className="text-sm text-subtle">
                Implemented a Django web app (auth, templates, static assets) and
                integrated Solidity/Hardhat with Ethereum tooling and Polygon Mumbai.
                Added location capabilities with Leaflet.js and navigated xxNetwork
                ecosystem constraints and test token limitations.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
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
                ].map((tech) => (
                  <Tag key={tech} label={tech} className="normal-case" />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://devfolio.co/projects/crimsonconnect-ef6c"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                Devfolio
              </a>
              <a
                href="https://www.youtube.com/watch?v=l96gFrTGNow&t=34s"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                YouTube Demo
              </a>
              <a
                href="https://github.com/PranavPC2003/Crimson-Connect"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Card>

          <Card as="article" className="w-[85%] max-w-md shrink-0 space-y-4 sm:w-[60%] md:w-[32%]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                GeeksforGeeks Ecotech Hacks
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                2nd place — OptiSpace
              </h3>
              <p className="text-sm text-subtle">
                OptiSpace is a smart office system that combines IoT sensing,
                machine learning, and computer vision to optimize energy usage,
                occupancy-aware climate control, and waste management. It ingests
                temperature, humidity, lighting, and door-entry signals alongside
                OpenWeatherMap context, then applies predictive + rule-augmented
                ML to adjust lighting and HVAC. A lightweight vision pipeline
                detects waste and feeds a dashboard for real-time monitoring and
                energy insights.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "IoT & sensing",
                  "Real-time inference",
                  "Machine learning",
                  "Predictive modeling",
                  "Django",
                  "RESTful APIs",
                  "Backend orchestration",
                  "Computer vision",
                ].map((tech) => (
                  <Tag key={tech} label={tech} className="normal-case" />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/watch?v=QPVVrf_-cgo"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                YouTube Demo
              </a>
              <a
                href="https://github.com/ishneet42/Smart_Room"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Card>

          <Card as="article" className="w-[85%] max-w-md shrink-0 space-y-4 sm:w-[60%] md:w-[32%]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                AWS GameDay Hackathon
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                2nd place — team performance highlight
              </h3>
              <p className="text-sm text-subtle">
                Secured 2nd place while collaborating under time pressure using
                Amazon Bedrock, OpenSearch, SageMaker, and AWS Guardrails. This was
                a competitive team challenge rather than a single product build.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Amazon Bedrock",
                  "OpenSearch",
                  "SageMaker",
                  "AWS Guardrails",
                  "Cloud architecture",
                  "GenAI workflows",
                ].map((tech) => (
                  <Tag key={tech} label={tech} className="normal-case" />
                ))}
              </div>
            </div>
          </Card>
        </Carousel>
      </section>

      <section className="mt-20 space-y-8" aria-labelledby="career-timeline">
        <SectionHeading
          eyebrow="Timeline"
          id="career-timeline"
          title="Education and internship timeline"
          subtitle="A snapshot of academic milestones and applied industry experience."
        />
        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <h3 className="text-xl font-semibold text-foreground font-[var(--font-heading)] lg:text-right">
              Education
            </h3>
            <div className="hidden w-16 lg:block" />
            <h3 className="text-xl font-semibold text-foreground font-[var(--font-heading)]">
              Internships
            </h3>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />
            <div className="space-y-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
                <div className="lg:pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle lg:hidden">
                    2025
                  </p>
                  <div className="relative rounded-2xl border border-border bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                      Aug 2025 – Present
                    </p>
                    <p className="mt-2 text-base font-semibold text-foreground">
                      Master of Science in Computer Science
                    </p>
                    <p className="text-sm text-subtle">
                      University of Colorado Boulder
                    </p>
                    <span className="absolute right-0 top-6 hidden h-0.5 w-8 translate-x-full bg-border lg:block" />
                  </div>
                </div>
                <div className="hidden w-16 flex-col items-center lg:flex">
                  <span className="mt-6 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                    2025
                  </span>
                </div>
                <div className="lg:pl-8">
                  <div className="relative rounded-2xl border border-border bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                      Jan 2025 – Jun 2025
                    </p>
                    <p className="mt-2 text-base font-semibold text-foreground">
                      Data Analyst Intern, Decision Tree Analytics
                    </p>
                    <p className="text-sm text-subtle">Gurugram</p>
                    <span className="absolute left-0 top-6 hidden h-0.5 w-8 -translate-x-full bg-border lg:block" />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
                <div className="lg:pr-8" />
                <div className="hidden w-16 flex-col items-center lg:flex">
                  <span className="mt-6 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                    2024
                  </span>
                </div>
                <div className="space-y-4 lg:pl-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle lg:hidden">
                    2024
                  </p>
                  <div className="relative rounded-2xl border border-border bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                      Aug 2024 – Nov 2024
                    </p>
                    <p className="mt-2 text-base font-semibold text-foreground">
                      AI/ML Intern, TEMS Tech Solutions
                    </p>
                    <p className="text-sm text-subtle">Remote</p>
                    <span className="absolute left-0 top-6 hidden h-0.5 w-8 -translate-x-full bg-border lg:block" />
                  </div>
                  <div className="relative rounded-2xl border border-border bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                      Jul 2024 – Aug 2024
                    </p>
                    <p className="mt-2 text-base font-semibold text-foreground">
                      AI/ML Intern, Tech Mahindra
                    </p>
                    <p className="text-sm text-subtle">Remote</p>
                    <span className="absolute left-0 top-6 hidden h-0.5 w-8 -translate-x-full bg-border lg:block" />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
                <div className="lg:pr-8" />
                <div className="hidden w-16 flex-col items-center lg:flex">
                  <span className="mt-6 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                    2023
                  </span>
                </div>
                <div className="lg:pl-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle lg:hidden">
                    2023
                  </p>
                  <div className="relative rounded-2xl border border-border bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                      Jul 2023 – Sep 2023
                    </p>
                    <p className="mt-2 text-base font-semibold text-foreground">
                      Research Trainee, Defence Research and Development Organization
                    </p>
                    <p className="text-sm text-subtle">New Delhi</p>
                    <span className="absolute left-0 top-6 hidden h-0.5 w-8 -translate-x-full bg-border lg:block" />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
                <div className="lg:pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle lg:hidden">
                    2021
                  </p>
                  <div className="relative rounded-2xl border border-border bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                      Aug 2021 – Jun 2025
                    </p>
                    <p className="mt-2 text-base font-semibold text-foreground">
                      Bachelor of Information Technology
                    </p>
                    <p className="text-sm text-subtle">Undergraduate program</p>
                    <span className="absolute right-0 top-6 hidden h-0.5 w-8 translate-x-full bg-border lg:block" />
                  </div>
                </div>
                <div className="hidden w-16 flex-col items-center lg:flex">
                  <span className="mt-6 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                    2021
                  </span>
                </div>
                <div className="lg:pl-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
