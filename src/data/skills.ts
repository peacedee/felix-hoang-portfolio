export interface Skill {
  name: string;
  category: string;
  mode: "developer" | "qa" | "both";
}

export const skills: Skill[] = [
  // Developer Skills
  { name: "TypeScript", category: "Core", mode: "developer" },
  { name: "React JS", category: "Frontend", mode: "developer" },
  { name: "Tailwind CSS", category: "Frontend", mode: "developer" },
  { name: "Express.js", category: "Backend", mode: "developer" },
  { name: "NestJS", category: "Backend", mode: "developer" },
  { name: "SQL / MySQL", category: "Database", mode: "developer" },
  { name: "RESTful APIs", category: "API", mode: "developer" },

  // QA / Testing Skills
  { name: "Manual Testing", category: "Testing", mode: "qa" },
  { name: "Exploratory Testing", category: "Testing", mode: "qa" },
  { name: "Test Case Design", category: "Testing", mode: "qa" },
  { name: "API Testing", category: "Testing", mode: "qa" },
  { name: "Postman", category: "Tools", mode: "qa" },
  { name: "GenAI in Testing", category: "AI", mode: "qa" },
  { name: "ERP Systems", category: "Domain", mode: "qa" },
  { name: "SDLC & Agile", category: "Process", mode: "qa" },
  { name: "Defect Tracking", category: "Process", mode: "qa" },

  // Both
  { name: "Git / GitHub", category: "Tools", mode: "both" },
  { name: "CI/CD", category: "Process", mode: "both" },
];
