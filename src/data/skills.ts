export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  { name: "TypeScript", category: "Core" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "NestJS", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "RESTful APIs", category: "Others" },
  { name: "CI/CD", category: "Others" },
  { name: "GitHub Actions", category: "Others" },
];
