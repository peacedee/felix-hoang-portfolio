export interface Project {
  title: string;
  description: string;
  tech: string[];
  mode: "developer" | "qa" | "both";
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce web app with product management, cart, and payment integration.",
    tech: ["React", "NestJS", "PostgreSQL", "TypeScript"],
    mode: "developer",
  },
  {
    title: "Internal Dashboard",
    description:
      "Developed an internal analytics dashboard for real-time monitoring and reporting.",
    tech: ["React", "Express.js", "REST API"],
    mode: "developer",
  },
  {
    title: "QA Automation Suite",
    description:
      "Built and maintained automated test suites for web applications ensuring quality releases.",
    tech: ["Selenium", "Jest", "CI/CD", "GitHub Actions"],
    mode: "qa",
  },
];
