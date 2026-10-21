export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  { q: "What projects do you accept?", a: "Full-stack websites and web apps, APIs, deployment setup, AI integrations and improvements to existing code. If it is outside that, I will say so early." },
  { q: "How is pricing decided?", a: "Packages give a starting range. The final price is a written quote after scope is defined. The ranges are starting anchors, not guaranteed quotes." },
  { q: "How long will it take?", a: "I do not promise timelines before scope is defined. Each proposal includes an estimate with its assumptions." },
  { q: "How do we communicate?", a: "By email or your preferred written channel, with updates at agreed milestones." },
  { q: "How do revisions work?", a: "Each package states a number of revision rounds within the agreed scope. New features are handled as change requests." },
  { q: "Who owns the source code?", a: "Ownership terms are written into the proposal before work starts. Third-party libraries keep their own licences." },
  { q: "Do you handle deployment?", a: "Yes, as a scoped item. You own the hosting account; I configure the release." },
  { q: "Do you offer maintenance?", a: "Short post-launch fixes are included per package. Ongoing maintenance is a separate agreement." },
  { q: "What third-party costs should I expect?", a: "Hosting, domains, email providers, AI model usage and paid APIs are billed by those providers and are listed up front." },
];
