// Selected work. Only list projects you can stand behind.
// Screenshots live in public/images/editorial/ and are referenced as /images/editorial/<file>.
// Set `placeholder: true` for anything not yet verified; the UI labels it visibly.

export type Project = {
  slug: string;
  name: string;
  type: string;
  status: "live-reference" | "prototype" | "placeholder";
  objective: string;
  role: string;
  features: string[];
  stack: string[];
  decisions: string[];
  results?: string[];
  image?: { src: string; alt: string; width: number; height: number };
  links?: { live?: string; source?: string };
};

export const projects: Project[] = [
  
    {
    slug: "wiexora-portfolio",
    name: "WIEXORA Portfolio",
    type: "Independent technology studio",
    status: "prototype",
    objective:
      "Present services, process and pricing honestly, with a working contact flow and no invented proof.",
    role: "Design and full implementation.",
    features: [
      "Server-rendered sections with small client islands",
      "Contact form with client and server validation",
      "Central data files for work, services, pricing and résumé",
      "Reduced-motion and keyboard-friendly interactions",
    ],
    stack: ["Next.js (App Router)", "React", "TypeScript", "Zod", "CSS custom properties"],
    decisions: [
      "Content lives in typed data files so copy and prices change in one place.",
      "Interactivity is limited to navigation, capability tabs, the architecture explorer and the form.",
      "The contact API refuses to report success unless a message is actually delivered.",
    ],
    image: {
      src: "/images/editorial/wiexora.png",
      alt: "WIEXORA studio home page",
      width: 1600,
      height: 900,
    },
    links: { live: "https://wiexora-dev-portfolio.vercel.app" },
  },
  
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    type: "E-commerce web application",
    status: "live-reference",
    objective:
      "A deployed e-commerce platform for browsing and managing product listings with a responsive storefront.",
    role: "Full-stack design and implementation.",
    features: [
      "Product listing and browsing interface",
      "Responsive layout across devices",
      "Dynamic routing and page structure",
      "Deployed and publicly accessible on Vercel",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    decisions: [
      "Built with Next.js App Router for server-rendered pages and fast navigation.",
      "Deployed on Vercel for zero-config hosting and automatic previews.",
    ],
    image: {
      src: "/images/editorial/bazardor.png",
      alt: "Bazar Dor e-commerce home page",
      width: 1600,
      height: 900,
    },
    links: { live: "https://bazardor-o9va.vercel.app" },
  },
  {
    slug: "fit-log",
    name: "Fit Log",
    type: "Fitness tracking application",
    status: "live-reference",
    objective:
      "A fitness-focused web application for logging and tracking workout data with a clean, functional interface.",
    role: "Full-stack design and implementation.",
    features: [
      "Workout logging and tracking interface",
      "Responsive, mobile-friendly design",
      "Structured data management",
      "Deployed and publicly accessible on Vercel",
    ],
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    decisions: [
      "Prioritised a clear, distraction-free interface suited to quick data entry.",
      "Structured for easy extension with additional fitness metrics.",
    ],
    image: {
      src: "/images/editorial/fit-log.png",
      alt: "Fit Log workout tracking home page",
      width: 1600,
      height: 900,
    },
    links: { live: "https://assinment-6-kohl.vercel.app" },
  },
  {
    slug: "developer-portfolio",
    name: "Developer Portfolio",
    type: "Personal portfolio website",
    status: "live-reference",
    objective:
      "A personal portfolio site showcasing development skills and projects with a polished, professional layout.",
    role: "Design and full implementation.",
    features: [
      "Project showcase with structured sections",
      "Responsive design for all screen sizes",
      "Clean navigation and visual hierarchy",
      "Deployed and publicly accessible on Vercel",
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS", "Vercel"],
    decisions: [
      "Focused on content hierarchy and readability over decorative complexity.",
      "Built as a static site for fast load times and zero server costs.",
    ],
    image: {
      src: "/images/editorial/dev-stack.png",
      alt: "Developer Portfolio home page",
      width: 1600,
      height: 900,
    },
    links: { live: "https://assinment-5-3kk7.vercel.app" },
  },

];