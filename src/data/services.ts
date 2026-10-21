export type Service = {
  id: string;
  name: string;
  solves: string;
  includes: string[];
  deliverables: string[];
  suitableFor: string;
  exclusions: string;
};

export const services: Service[] = [
  {
    id: "fullstack",
    name: "Full-Stack Web Development",
    solves: "You need a complete website or web app, not just a front end.",
    includes: ["Interface build", "Server logic and data layer", "Forms and validation", "Responsive behavior"],
    deliverables: ["Source code repository", "Deployed build (if hosting is arranged)", "Short handover notes"],
    suitableFor: "Small businesses, founders and teams with a defined feature set.",
    exclusions: "Copywriting, photography, and third-party licences are not included unless agreed.",
  },
  {
    id: "saas",
    name: "SaaS and Web Application Development",
    solves: "You need accounts, roles and recurring workflows in a real product.",
    includes: ["Authentication and roles", "Core data model", "Admin or dashboard views", "Billing integration (scoped separately)"],
    deliverables: ["Working application", "Documented data model", "Environment and setup guide"],
    suitableFor: "Early products with a clear first version.",
    exclusions: "Ongoing product management and user support are outside the build scope.",
  },
  {
    id: "backend",
    name: "Backend and API Engineering",
    solves: "Your product needs a dependable, documented API or service layer.",
    includes: ["API design", "Validation and error handling", "Database schema work", "Integration with external services"],
    deliverables: ["API implementation", "Endpoint documentation", "Test coverage for critical paths"],
    suitableFor: "Teams with an existing front end or mobile app.",
    exclusions: "Third-party API fees and paid service tiers are billed by those providers.",
  },
  {
    id: "ai",
    name: "AI Integration and Automation",
    solves: "A repetitive or text-heavy workflow could be assisted by a language model.",
    includes: ["Use-case assessment", "Model API integration", "Prompt and guardrail design", "Workflow automation"],
    deliverables: ["Working integration", "Documented limits and failure behavior", "Cost estimate per usage"],
    suitableFor: "Projects where an AI feature has a measurable purpose.",
    exclusions: "No guarantee of model accuracy. Usage fees are paid to the model provider.",
  },
  {
    id: "cloud",
    name: "Cloud and Deployment Setup",
    solves: "The app works locally but is not reliably deployed.",
    includes: ["Hosting configuration", "Environment variables and secrets handling", "CI build and deploy", "Basic monitoring hooks"],
    deliverables: ["Running deployment", "Deployment runbook", "Rollback instructions"],
    suitableFor: "Projects that need a repeatable release path.",
    exclusions: "Hosting and domain costs are recurring and paid to the provider.",
  },
  {
    id: "hardening",
    name: "Performance and Security Improvements",
    solves: "An existing site is slow, fragile or has unreviewed security basics.",
    includes: ["Code and configuration review", "Performance fixes", "Validation and access-control fixes", "Dependency updates"],
    deliverables: ["Prioritized findings list", "Implemented fixes", "Summary of remaining risks"],
    suitableFor: "Existing codebases I can access.",
    exclusions: "This is not a formal security audit or penetration test.",
  },
];
