export type Project = {
  title: string;
  projectName?: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string;
};

export const projects: Project[] = [
  {
    title: "AI Business Automation",
    description:
      "KI-gestützte Full-Stack-Plattform zur automatisierten Verarbeitung und Analyse von Geschäftsdokumenten.",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "OpenAI"],
    github: "https://github.com/ulrich2k25/ai-business-automation-platform",
    demo: "https://ai-business-automation-platform-swart.vercel.app/",
    image: "/projects/ai-automation.png",
  },

  {
    title: "ApplyFlow",
    description:
      "Full-Stack-Webanwendung zur Verwaltung und Nachverfolgung von Bewerbungen mit Authentifizierung, E-Mail-Verifizierung und Passwort-Wiederherstellung.",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    github: "https://github.com/ulrich2k25/applyflow",
    demo: "https://applyflow-de.netlify.app/",
    image: "/projects/applyflow.png",
  },

  {
    title: "Football Analytics Platform",
    projectName: "Pronobet",
    description:
      "Datenbasierte Webplattform zur Analyse von Fußballspielen mit externen APIs und statistischen Auswertungen.",
    tech: ["Next.js", "TypeScript", "Supabase", "REST API"],
    github: "https://github.com/ulrich2k25/pronobet",
    demo: "https://pronobet.vercel.app/",
    image: "/projects/pronobet.png",
  },

  {
    title: "RoboCode – AI Battle Robots",
    description:
      "Hochschulprojekt zur Entwicklung autonomer Kampfroboter mit Java und algorithmischen Strategien in der Robocode-Simulationsumgebung.",
    tech: ["Java", "OOP", "Algorithmen"],
    github: "https://github.com/ulrich2k25/Robocode",
    demo: null,
    image: "/projects/robocode.png",
  },

  {
    title: "Lagerverwaltungssoftware",
    description:
      "Objektorientierte Anwendung zur Verwaltung von Produkten, Lagerbeständen und Inventurprozessen.",
    tech: ["Python", "OOP"],
    github: "https://github.com/ulrich2k25/lagerverwaltungssoftware",
    demo: null,
    image: "/projects/lagerverwaltungssoftware.png",
  },
];
