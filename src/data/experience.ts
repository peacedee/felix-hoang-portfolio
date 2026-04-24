export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  workMode: string;
  tech: string;
  logo?: string;
  description: string[];
  github?: string;
  mode: "developer" | "qa";
}

export const experiences: Experience[] = [
  // ── Developer mode ────────────────────────────────────
  {
    company: "Zimaw LLC",
    role: "Frontend Developer",
    type: "Full-time",
    period: "Jun 2025 – Aug 2025",
    duration: "3 months",
    workMode: "On-site",
    tech: "React JS, Express JS, SQL",
    logo: "https://logo.clearbit.com/zimaw.com",
    description: [
      "Led a small team, managing task distribution, progress, and collaboration.",
      "Analyzed and clarified requirements to align business logic and user flows.",
      "Developed core features: hotel listing, room booking, booking & user management.",
      "Actively performed pre-demo functional testing, reviewed features, and fixed issues to ensure product quality.",
      "Contributed to smoother demos by aligning implementation with requirements.",
    ],
    github: "https://github.com/binhnexusx/Ticketify",
    mode: "developer",
  },

  // ── QA mode (newest → oldest) ─────────────────────────
  {
    company: "Laidon Company",
    role: "QC Intern",
    type: "Internship",
    period: "Apr 2026 – Present",
    duration: "Current",
    workMode: "On-site",
    tech: "Manual Testing, ERP Systems",
    logo: "https://logo.clearbit.com/laidon.com",
    description: [
      "Gaining practical testing skills in a real-world enterprise environment.",
      "Performing manual testing on ERP systems, covering core business workflows and functional scenarios.",
    ],
    mode: "qa",
  },
  {
    company: "Shade of Hue",
    role: "Software Testing Trainee (AI-Aware Tester)",
    type: "Full-time",
    period: "Dec 2025 – Jan 2026",
    duration: "2 months",
    workMode: "Hybrid",
    tech: "Manual Testing, Exploratory Testing, GenAI",
    logo: "https://logo.clearbit.com/shadeofhue.com",
    description: [
      "Built strong software testing mindset: QA vs QC vs Testing, SDLC (Agile/Waterfall), cost of defects.",
      "Designed effective test cases using Equivalence Partitioning, BVA, State Transition, and Exploratory Testing.",
      "Created test plans, test strategies, and professional bug reports (severity & priority based).",
      "Used GenAI as a testing co-pilot to generate and refine test cases, test data, and edge cases.",
      "Practiced AI system testing: hallucination detection, output inconsistency, bias & robustness checks.",
      "Applied black-box exploratory testing mindset for both traditional and AI-powered systems.",
    ],
    mode: "qa",
  },
  {
    company: "KMS Technology",
    role: "Software Testing Trainee (AI-Aware)",
    type: "Full-time",
    period: "Dec 2025 – Jan 2026",
    duration: "2 months · 6-week intensive",
    workMode: "On-site",
    tech: "Postman, API Testing, CI/CD, GenAI, Automation",
    logo: "https://logo.clearbit.com/kms-technology.com",
    description: [
      "Built a solid foundation in software testing fundamentals: testing mindset, QA vs QC vs Testing, and SDLC.",
      "Designed and executed manual test cases using Equivalence Partitioning, Boundary Value Analysis, and Exploratory Testing.",
      "Performed test execution, defect reporting, and result analysis following professional testing workflows.",
      "Gained hands-on exposure to API testing using Postman and understanding of RESTful services.",
      "Explored AI-assisted and Generative AI testing — leveraging GenAI to support test case generation, test data creation, and exploratory testing.",
      "Applied an AI-aware testing mindset, focusing on evaluating probabilistic outputs and identifying inconsistencies.",
      "Participated in a capstone mini project, applying testing knowledge end-to-end and presenting outcomes.",
    ],
    mode: "qa",
  },
];
