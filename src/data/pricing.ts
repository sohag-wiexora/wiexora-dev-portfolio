// Pricing anchors. These are proposed starting ranges, not market averages and not quotes.
// Change every number and term in this single file.

export type Package = {
  id: string;
  name: string;
  range: string;
  idealFor: string;
  deliverables: string[];
  boundaries: string;
  timeline: string;
  revisions: string;
  support: string;
  exclusions: string;
};

export const pricingNote =
  "One-time development fees only. Hosting, domains, subscriptions, API usage and ongoing maintenance are separate recurring costs and are listed before work begins.";

export const packages: Package[] = [
  {
    id: "foundation",
    name: "FOUNDATION",
    range: "US$250–500",
    idealFor: "A focused site or a single well-defined feature.",
    deliverables: ["Up to a few pages or one feature", "Responsive layout", "Basic contact or form handling", "Deployment help"],
    boundaries: "Fixed scope agreed in writing; no accounts or custom backend.",
    timeline: "Estimated once scope is defined.",
    revisions: "Up to 2 rounds within the agreed scope.",
    support: "Short bug-fix window after launch.",
    exclusions: "Content writing, stock assets, hosting and domain fees.",
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    range: "US$700–1,500",
    idealFor: "A business site or small app with a backend and data.",
    deliverables: ["Multi-page or multi-feature build", "Database and API", "Validated forms", "Deployment and handover notes"],
    boundaries: "Defined feature list; additions are scoped as change requests.",
    timeline: "Estimated once scope is defined.",
    revisions: "Up to 3 rounds within the agreed scope.",
    support: "Bug-fix window after launch.",
    exclusions: "Third-party service fees, content creation, long-term maintenance.",
  },
  {
    id: "advanced",
    name: "ADVANCED",
    range: "US$2,000–5,000+",
    idealFor: "A SaaS-style product, integrations or an AI-enabled workflow.",
    deliverables: ["Authentication and roles", "Core product features", "External integrations", "Tests for critical paths", "Deployment and runbook"],
    boundaries: "Phased scope with milestones agreed before build.",
    timeline: "Phased; estimated after discovery.",
    revisions: "Reviewed per milestone.",
    support: "Agreed per project.",
    exclusions: "Provider usage fees, ongoing product operation.",
  },
  {
    id: "custom",
    name: "CUSTOM",
    range: "Individually scoped",
    idealFor: "Work that does not fit the packages above.",
    deliverables: ["Defined during discovery"],
    boundaries: "Proposal written after we talk.",
    timeline: "Defined in the proposal.",
    revisions: "Defined in the proposal.",
    support: "Defined in the proposal.",
    exclusions: "Listed in the proposal.",
  },
];
