export const personalInfo = {
  name: "Shouvik Kumar Maity",
  title: "Full-Stack Software Engineer",
  tagline:
    "Architecting resilient web applications, distributed backend services, and high-performance interactive interfaces.",
  location: "Tamluk, West Bengal, India",
  email: "shouvikkumar2024@gmail.com",
  github: "https://github.com/shouvikkumar",
  linkedin:
    "https://www.linkedin.com/in/shouvik-kumar-maity-050844364?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "https://twitter.com",
  status: "Available for full-time roles & high-impact contracts",
  bio: `I am a full-stack engineer passionate about crafting scalable distributed systems and fluid, intuitive user experiences. With deep expertise across the JavaScript/TypeScript and cloud ecosystems, I specialize in building fault-tolerant microservices, modern single-page applications, and high-throughput APIs. When I'm not writing code, I enjoy exploring system architecture papers, contributing to open-source, and mentoring emerging developers.`,
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Production Apps Shipped", value: "20+" },
    { label: "Code Commits", value: "3.2k+" },
    { label: "API Uptime Standard", value: "99.98%" },
  ],
  roles: [
    "Full-Stack Web Developer",
    "React & Spring Boot Specialist",
    "Cloud & Distributed Systems Architect",
    "Performance Optimization Geek",
  ],
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Databases & Cache" },
    { id: "cloud", name: "DevOps & Cloud" },
  ],
  items: [
    {
      name: "React.js",
      category: "frontend",
      level: "Expert",
      icon: "Code",
      highlight: true,
    },
    {
      name: "Next.js",
      category: "frontend",
      level: "Advanced",
      icon: "Globe",
      highlight: true,
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: "Advanced",
      icon: "FileCode",
      highlight: true,
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Expert",
      icon: "Palette",
      highlight: false,
    },
    {
      name: "Zustand / Redux",
      category: "frontend",
      level: "Advanced",
      icon: "Cpu",
      highlight: false,
    },
    {
      name: "Vue.js",
      category: "frontend",
      level: "Intermediate",
      icon: "Layers",
      highlight: false,
    },

    {
      name: "Spring Boot",
      category: "backend",
      level: "Expert",
      icon: "Server",
      highlight: true,
    },

    {
      name: "Java",
      category: "backend",
      level: "Advanced",
      icon: "Binary",
      highlight: true,
    },
    {
      name: "GraphQL",
      category: "backend",
      level: "Intermediate",
      icon: "Network",
      highlight: false,
    },
    {
      name: "RESTful Architecture",
      category: "backend",
      level: "Expert",
      icon: "Share2",
      highlight: false,
    },
    {
      name: "Go (Golang)",
      category: "backend",
      level: "Intermediate",
      icon: "Zap",
      highlight: false,
    },

    {
      name: "PostgreSQL",
      category: "database",
      level: "Advanced",
      icon: "Database",
      highlight: true,
    },
    {
      name: "MongoDB",
      category: "database",
      level: "Advanced",
      icon: "HardDrive",
      highlight: false,
    },
    {
      name: "Redis",
      category: "database",
      level: "Advanced",
      icon: "Flame",
      highlight: true,
    },
    {
      name: "Prisma / Drizzle",
      category: "database",
      level: "Advanced",
      icon: "Cpu",
      highlight: false,
    },

    {
      name: "Docker",
      category: "cloud",
      level: "Advanced",
      icon: "Box",
      highlight: true,
    },
    {
      name: "Kubernetes",
      category: "cloud",
      level: "Intermediate",
      icon: "CloudRain",
      highlight: false,
    },
    {
      name: "AWS (S3, EC2, Lambda)",
      category: "cloud",
      level: "Advanced",
      icon: "Cloud",
      highlight: true,
    },
    {
      name: "CI/CD & GitHub Actions",
      category: "cloud",
      level: "Advanced",
      icon: "GitBranch",
      highlight: false,
    },
    {
      name: "Linux & Shell Scripting",
      category: "cloud",
      level: "Advanced",
      icon: "Terminal",
      highlight: false,
    },
  ],
};

export const projectsData = [
  {
    id: "nexus-mesh",
    title: "NexusMesh - Distributed Event Broker",
    category: "Full-Stack",
    tag: "Cloud / Distributed",
    featured: true,
    summary:
      "Real-time stream processing platform designed to handle 200k+ WebSocket connections with sub-15ms message latency.",
    description:
      "Architected a distributed event ingestion engine utilizing Node.js, Redis Pub/Sub, and Go microservices. Features automated partition balancing, live telemetry dashboard, and zero-downtime rolling deployments.",
    challenges:
      "Mitigated hot partition latency and buffer overflow by implementing backpressure streaming and intelligent Redis caching algorithms.",
    metrics:
      "200k+ concurrent connections, 99.99% availability, 12ms p99 latency",
    tech: ["Node.js", "Go", "Redis", "Docker", "Tailwind CSS", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cloud-pulse",
    title: "CloudPulse - Cloud Observability SaaS",
    category: "Full-Stack",
    tag: "SaaS / Full-Stack",
    featured: true,
    summary:
      "Comprehensive multi-cloud infrastructure monitoring suite with automated anomaly detection and intelligent alerting.",
    description:
      "Built the full-stack telemetry engine from ground up. Features customizable draggable dashboard widgets, anomaly detection heuristics, Slack/PagerDuty webhooks, and metric aggregations using time-series PostgreSQL.",
    challenges:
      "Handling queries over tens of millions of metric rows without UI lag by introducing aggregated materialized views and virtualized data tables.",
    metrics:
      "Reduced mean time to detection (MTTD) by 42% across beta customers",
    tech: ["React", "TypeScript", "FastAPI", "TimescaleDB", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "synth-forge",
    title: "SynthForge - AI Code Refactoring Engine",
    category: "AI / ML",
    tag: "AI / Developer Tool",
    featured: true,
    summary:
      "Intelligent developer assistant that identifies anti-patterns, generates unit test suites, and optimizes algorithms.",
    description:
      "Engineered an interactive VS Code extension companion web portal with AST-based code analysis, LLM prompt orchestration, and interactive side-by-side diff comparisons.",
    challenges:
      "Ensuring deterministic syntax validation and preventing hallucinated imports by building an AST parser validation pass before showing suggestions.",
    metrics: "Over 5,000+ code reviews processed with an 88% acceptance rate",
    tech: ["Next.js", "Python", "OpenAI API", "Monaco Editor", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hyper-cart",
    title: "HyperCart - Headless E-Commerce Suite",
    category: "Frontend / UI",
    tag: "Modern Frontend",
    featured: false,
    summary:
      "Ultra-fast headless e-commerce storefront delivering 99+ Google Lighthouse scores and micro-interactions.",
    description:
      "Developed a modern shopping experience leveraging Next.js App Router, edge server rendering, Stripe Checkout, and optimistic UI updates for instant cart reactivity.",
    challenges:
      "Achieved 100 Lighthouse performance on mobile devices with zero cumulative layout shift through aggressive asset optimization and font subsetting.",
    metrics: "Sub-0.8s First Contentful Paint, 35% higher checkout conversion",
    tech: ["React", "Next.js", "Stripe API", "Tailwind CSS", "Zustand"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vault-gate",
    title: "VaultGate - Zero-Trust Auth Gateway",
    category: "Cloud / API",
    tag: "Security / Backend",
    featured: false,
    summary:
      "Lightweight reverse proxy delivering JWT validation, token rotation, and dynamic rate limiting at the edge.",
    description:
      "Built an authentication proxy capable of intercepting and validating 10k+ requests per second using memory-mapped token revoking lists and sliding-window rate limiters.",
    challenges:
      "Preventing timing attacks and DDoS spikes through constant-time cryptographic checks and Redis sliding log algorithms.",
    metrics: "Zero security breaches, <3ms added latency per proxy hop",
    tech: ["Go", "Redis", "Docker", "JWT", "Prometheus"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dev-space",
    title: "DevSpace - Collaborative Markdown Canvas",
    category: "Frontend / UI",
    tag: "Productivity",
    featured: false,
    summary:
      "Real-time collaborative documentation workspace featuring live cursor sync and offline PWA capability.",
    description:
      "Web application featuring CRDT-based operational transformation, live multi-cursor presence, instant LaTeX/Mermaid diagram rendering, and local-first indexedDB persistence.",
    challenges:
      "Conflict resolution in concurrent offline edits handled elegantly with Yjs and WebRTC data channels.",
    metrics: "Zero data conflict loss across 10k test document sync sessions",
    tech: ["React", "TypeScript", "WebRTC", "Yjs", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const experienceData = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Aether Systems",
    period: "2023 - Present",
    location: "Remote",
    description:
      "Lead architect for core cloud microservices and developer dashboard. Spearheaded migration from monolithic API to event-driven Go and Node services, cutting response latencies by 45%.",
    achievements: [
      "Mentored a team of 6 engineers across frontend and backend best practices.",
      "Designed and deployed automated CI/CD pipelines reducing release cycles from weekly to daily.",
      "Spearheaded database optimization that saved $14,000/month in cloud infrastructure costs.",
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Vanguard Tech Labs",
    period: "2021 - 2023",
    location: "Bengaluru, India",
    description:
      "Built high-frequency internal tooling, analytics portals, and customer-facing responsive applications using React, Express, and Python.",
    achievements: [
      "Developed an automated real-time notification engine using WebSockets and Redis.",
      "Improved frontend web performance, lifting average Core Web Vitals score from 68 to 96.",
      "Collaborated closely with product designers to establish a reusable component design system.",
    ],
    skills: ["TypeScript", "React", "Python", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Software Developer Intern",
    company: "CyberMatrix Innovations",
    period: "2020 - 2021",
    location: "Kolkata, India",
    description:
      "Implemented RESTful API endpoints, authored comprehensive unit and integration test suites, and created responsive landing pages.",
    achievements: [
      "Built automated data export scripts reducing manual ops by 15 hours/week.",
      "Achieved 85%+ code coverage across microservices with Jest and Supertest.",
    ],
    skills: ["JavaScript", "Node.js", "Express", "MySQL", "Git"],
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Maulana Abul Kalam Azad University of Technology",
    period: "2017 - 2021",
    details:
      "Specialized in Distributed Computing, Data Structures, Algorithms, and Software Engineering. Graduated with First Class Honors.",
  },
];

export const terminalCommands = {
  help: `Available commands:
  • about      : Quick background & bio
  • skills     : Summary of technical competencies
  • projects   : Highlighted production applications
  • contact    : Email, socials, & communication channels
  • stats      : Engineering metrics & uptime
  • clear      : Clear this console window
  • hire       : Fast-track email outreach`,

  about: `Shouvik Kumar Maity - Full-Stack Software Engineer.
Specializing in resilient distributed architectures, cloud infrastructure, and modern interactive web apps.
Current Focus: Cloud microservices, React performance, and distributed stream processing.`,

  skills: `Core Languages & Tech:
• Frontend : React, Next.js, TypeScript, Tailwind CSS, Zustand
• Backend  : Spring Boot,   Java/FastAPI, GraphQL
• Data     : PostgreSQL, Redis, MongoDB, TimescaleDB
• Cloud    : Docker, Kubernetes, AWS, CI/CD, Linux`,

  projects: `Featured Works:
1. NexusMesh   -> High-throughput distributed event broker (200k+ WebSocket connections)
2. CloudPulse  -> Cloud observability SaaS with real-time alerting
3. SynthForge  -> AI-powered automated code refactoring & AST analysis
4. HyperCart   -> Ultra-fast headless Next.js e-commerce storefront`,

  contact: `Let's connect:
• Email    : shouvikkumar2024@gmail.com
• GitHub   : https://github.com/shouvik4611
• LinkedIn : https://www.linkedin.com/in/shouvik-kumar-maity-050844364?utm_source=share_via&utm_content=profile&utm_medium=member_android
• Location : Tamluk, West Bengal, India`,

  stats: `Engineering Metrics:
• Experience   : 4+ Years
• Shipped Apps : 20+ Production Applications
• Git Commits  : 3,200+
• SLA Target   : 99.98% Service Uptime`,

  hire: `🚀 Priority recruitment mode unlocked!
Direct email: shouvikkumar2024@gmail.com
Status: Ready for high-impact engineering roles.`,
};
