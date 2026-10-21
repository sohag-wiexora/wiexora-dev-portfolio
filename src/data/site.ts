// Central site configuration. Edit here; nothing below is invented.
// Empty values are deliberately hidden by the UI until you fill them in.

export const site = {
  name: "WIEXORA",
  statement: "The Precision of Intelligence",
  tagline: ["BUILD", "SECURE", "INNOVATE"] as const,
  description:
    "WIEXORA is an independent digital engineering practice: full-stack web development, secure application architecture, cloud setup and AI integration.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // TODO(owner): set NEXT_PUBLIC_CONTACT_EMAIL in .env.local. While empty, no mailto link is rendered.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  // TODO(owner): add verified profile URLs only, e.g. { label: "GitHub", href: "https://github.com/..." }.
  socials: [] as { label: string; href: string }[],

  nav: [
    { label: "Home", href: "/#hero", id: "hero" },
    { label: "Portfolio", href: "/#work", id: "work" },
    { label: "Services", href: "/#services", id: "services" },
    { label: "Process", href: "/#process", id: "process" },
    { label: "Pricing", href: "/#pricing", id: "pricing" },
    { label: "About", href: "/#about", id: "about" },
  ],
};

export type NavItem = (typeof site.nav)[number];
