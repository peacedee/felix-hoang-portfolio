export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  mode: "developer" | "qa" | "both";
}

export const projects: Project[] = [
  // Developer Projects
  {
    title: "Ticketify – Hotel Booking System",
    description:
      "A full-stack hotel booking platform with room search/filtering, booking workflows, and admin modules. Built with React, TypeScript and RESTful APIs. Deployed responsive interfaces from Figma designs.",
    tech: ["React", "TypeScript", "Express JS", "SQL", "Tailwind CSS"],
    github: "https://github.com/binhnexusx/Ticketify",
    mode: "developer",
  },
  {
    title: "Black Aries – E-Commerce Platform",
    description:
      "High-performance e-commerce platform with secure authentication, shopping cart, product search/filtering, and order management. Built using Agile/Scrum methodology.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/codebybinh/Black-Aries-Project",
    mode: "developer",
  },
  {
    title: "Gogo – Restaurant & Tour Platform",
    description:
      "Responsive web platform for homepage, cuisines, and tour pages using MVC architecture. Features search functionality and optimized database structure.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/kyBa-Le/Gogo",
    mode: "developer",
  },
  
  // QA Projects
  {
    title: "Healthcare App Test Automation",
    description:
      "Designed and implemented an automated testing suite using Katalon Studio for KMS Technology's healthcare demo applications. Integrated the automated tests into CI/CD pipelines to ensure continuous testing and quality assurance during the development lifecycle.",
    tech: ["Katalon Studio", "CI/CD", "Automation Testing", "Healthcare Domain"],
    mode: "qa",
  },
];
