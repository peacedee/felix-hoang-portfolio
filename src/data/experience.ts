export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  mode: "developer" | "qa";
}

export const experiences: Experience[] = [
  {
    company: "Tech Company",
    role: "Frontend Developer",
    period: "2022 – 2023",
    description:
      "Built and maintained web applications using React, TypeScript, and modern frontend technologies. Collaborated with backend teams to deliver features.",
    mode: "developer",
  },
  {
    company: "QA Training Program",
    role: "QA Trainee",
    period: "2023",
    description:
      "Completed intensive QA training covering manual testing, test case design, and bug reporting methodologies.",
    mode: "qa",
  },
  {
    company: "QA Bootcamp",
    role: "QA Trainee",
    period: "2023",
    description:
      "Hands-on practice with automation tools, API testing, and CI/CD pipeline integration for quality assurance.",
    mode: "qa",
  },
  {
    company: "Current Company",
    role: "QC Engineer",
    period: "2023 – Present",
    description:
      "Responsible for test planning, execution, and quality assurance across multiple product teams. Leveraging developer background for deeper system understanding.",
    mode: "qa",
  },
];
