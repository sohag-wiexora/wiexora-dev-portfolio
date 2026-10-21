// Technologies verified by this repository and active skill set.
// The marquee (TechMarquee.tsx) shows the full display list.
// This section provides detailed context for each technology.

export type StackGroup = { role: string; items: { name: string; why: string }[] };

export const groups: StackGroup[] = [
  {
    role: "Languages",
    items: [
      { name: "JavaScript", why: "Core language for browser and server-side logic." },
      { name: "TypeScript", why: "Types catch data-shape mistakes before users do." },
      { name: "Python", why: "Scripting, automation, and AI/ML workflows." },
      { name: "SQL", why: "Direct database queries and data modelling." },
    ],
  },
  {
    role: "Frontend",
    items: [
      { name: "React", why: "Component model that keeps interface logic predictable." },
      { name: "Next.js", why: "Server rendering by default, client code only where needed." },
      { name: "Tailwind CSS", why: "Utility-first styling with consistent design tokens." },
      { name: "CSS custom properties", why: "A small token system without a runtime cost." },
    ],
  },
  {
    role: "Backend & Data",
    items: [
      { name: "Node.js", why: "JavaScript runtime for server-side applications." },
      { name: "Express.js", why: "Minimal, flexible server framework for APIs." },
      { name: "PostgreSQL", why: "Relational database for structured, transactional data." },
      { name: "MongoDB", why: "Document database for flexible schema requirements." },
      { name: "Prisma", why: "Type-safe ORM bridging application code and database." },
    ],
  },
  {
    role: "DevOps & Tooling",
    items: [
      { name: "Docker", why: "Containerised environments for consistent deployments." },
      { name: "AWS", why: "Cloud infrastructure for production workloads." },
      { name: "Vercel", why: "Zero-config deployment for Next.js applications." },
      { name: "GitHub Actions", why: "CI/CD pipelines integrated with the repository." },
      { name: "Git", why: "Version control and collaborative workflows." },
      { name: "ESLint", why: "Static checks on every change." },
    ],
  },
];

export const toConfirm = [
  "AI model APIs",
  "Security tooling",
];
