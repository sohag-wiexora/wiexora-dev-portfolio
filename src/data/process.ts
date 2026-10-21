export type Stage = { name: string; happens: string; receive: string; tech?: string[] };

export const stages: Stage[] = [
  { name: "DISCOVER", happens: "We talk through the goal, users, constraints and what success looks like.", receive: "A written summary of what I understood.", tech: ["Notion", "Figma", "Google Meet"] },
  { name: "DEFINE", happens: "Scope, priorities and exclusions are agreed before any build starts.", receive: "A scoped proposal with costs and assumptions.", tech: ["Markdown", "Git", "Trello"] },
  { name: "ARCHITECT", happens: "Data model, API boundaries, security approach and hosting choices.", receive: "A short architecture outline.", tech: ["TypeScript", "PostgreSQL", "Docker", "AWS", "Terraform"] },
  { name: "DESIGN", happens: "Layout, flows and visual system for the interface.", receive: "Design direction to review before build.", tech: ["Figma", "CSS3", "Tailwind CSS"] },
  { name: "BUILD", happens: "Implementation in small, reviewable increments.", receive: "Working previews as features land.", tech: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "REST APIs"] },
  { name: "VERIFY", happens: "Validation, error handling, responsive and keyboard checks, build checks.", receive: "A list of what was tested and what was not.", tech: ["Jest", "Cypress", "ESLint", "Zod", "GitHub Actions"] },
  { name: "DEPLOY", happens: "Production configuration, environment variables, release.", receive: "A running site and a deployment runbook.", tech: ["Docker", "Kubernetes", "Nginx", "CI/CD", "AWS", "Google Cloud"] },
  { name: "EVOLVE", happens: "Fixes within the agreed window, then optional improvement work.", receive: "A clear path for what comes next.", tech: ["Prometheus", "Grafana", "Git", "Terraform"] },
];
