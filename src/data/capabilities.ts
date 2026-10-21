export type Axis = {
  id: "build" | "secure" | "innovate";
  label: string;
  lead: string;
  points: string[];
  note: string;
  image: { src: string; width: number; height: number };
};

export const axes: Axis[] = [
  {
    id: "build",
    label: "BUILD",
    lead: "Interfaces, applications, APIs and the architecture that holds them together.",
    points: [
      "Full-stack web development",
      "Responsive, accessible interfaces",
      "Backend and API engineering",
      "Database and application architecture",
    ],
    note: "Structure first: clear data models and boundaries make later changes cheaper.",
    image: { src: "/images/capabilities/dark-architecture-gold-edges.webp", width: 1024, height: 1024 },
  },
  {
    id: "secure",
    label: "SECURE",
    lead: "Security treated as a design input, not a final checklist.",
    points: [
      "Authentication and authorization",
      "Input validation and secure configuration",
      "Security-aware application design",
      "Reliability and deployment hygiene",
    ],
    note: "This is engineering practice, not a certification or a penetration-test service.",
    image: { src: "/images/capabilities/layered-shield-planes.webp", width: 1024, height: 1024 },
  },
  {
    id: "innovate",
    label: "INNOVATE",
    lead: "Applying AI where it removes real friction, and saying so when it does not.",
    points: [
      "AI integration",
      "Intelligent automation",
      "AI-enabled product features",
      "Workflow optimization",
    ],
    note: "Scoped per project; model quality, cost and data handling are discussed up front.",
    image: { src: "/images/capabilities/isometric-node-network.webp", width: 1110, height: 1110 },
  },
];
