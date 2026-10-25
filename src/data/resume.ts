// Professional Résumé Data for Md. Sohag Islam
// WIEXORA — Independent Digital Engineering Practice

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location?: string;
  notes: string[];
}

export interface EducationItem {
  credential: string;
  field?: string;
  school: string;
  period: string;
  grade?: string;
  status?: string;
  highlights?: string[];
}

export interface ProjectResumeItem {
  name: string;
  type: string;
  stack: string[];
  description: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PersonalDetails {
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  nationality: string;
  religion?: string;
  presentAddress: string;
  permanentAddress: string;
  languages: { language: string; proficiency: string }[];
}

export const resume = {
  name: "Md. Sohag Islam",
  headline: "Full-Stack Developer & AI / Cloud DevOps Engineer",
  tagline: "Founder & Lead Digital Engineer at WIEXORA",
  avatar: "/images/editorial/formal-portrait-white-background.webp",
  
  contact: {
    email: "wiexora.dev@gmail.com",
    altEmail: "mdsohagchowdhuri690@gmail.com",
    whatsapp: "+8801611530770",
    github: "https://github.com/sohag-wiexora",
    linkedin: "https://www.linkedin.com/in/sohag-wiexora-90a0193b7",
    location: "Kashempur, Gazipur / Dhaka, Bangladesh",
    portfolio: "https://wiexora-dev-portfolio.vercel.app",
    status: "Available for High-Impact Projects & Global Opportunities",
  },

  summary:
    "Analytical and results-driven Full-Stack Developer and Cloud DevOps Engineer with a rigorous engineering mindset honed through Diploma in Textile Engineering. Founder of WIEXORA, specializing in modern JavaScript/TypeScript architectures, Next.js server-rendered applications, scalable backend APIs, and automated cloud workflows (Docker, CI/CD, AWS, Vercel). Known for disciplined execution, security-first engineering, and clean code that scales seamlessly under pressure.",

  skillCategories: [
    {
      category: "Languages & Core",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3 / SCSS", "Bash Scripting"],
    },
    {
      category: "Frontend Architecture",
      skills: ["React.js", "Next.js (App Router)", "Tailwind CSS", "Redux Toolkit", "Responsive UI/UX", "Component Design"],
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express.js", "RESTful APIs", "FastAPI", "Zod Validation", "API Security & Auth"],
    },
    {
      category: "Databases & Storage",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "Database Schema Design"],
    },
    {
      category: "Cloud, DevOps & Tooling",
      skills: ["Docker", "AWS (EC2, S3)", "Vercel", "GitHub Actions (CI/CD)", "Linux / Nginx", "Git & GitHub"],
    },
  ] as SkillCategory[],

  // Flat list for backwards compatibility
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "CI/CD",
    "Linux",
    "Git",
    "Zod",
  ],

  experience: [
    {
      role: "Founder & Lead Digital Engineer",
      org: "WIEXORA",
      period: "2024 — Present",
      location: "Dhaka, Bangladesh (Remote)",
      notes: [
        "Architected and deployed high-performance digital solutions combining luxury aesthetic standards with resilient engineering.",
        "Implemented full-stack applications with Next.js App Router, SSR, TypeScript, and micro-service integrations.",
        "Built automated deployment pipelines and robust security layers across cloud platforms.",
      ],
    },
    {
      role: "Full-Stack Web & Cloud Developer",
      org: "Independent Practice",
      period: "2023 — Present",
      location: "Bangladesh",
      notes: [
        "Engineered and shipped real-world production web applications including Bazar Dor (E-Commerce) and Fit Log (Health & Fitness Tracker).",
        "Configured continuous integration and automated preview workflows via GitHub Actions and Vercel.",
        "Designed accessible, mobile-first interfaces and optimized database query patterns for fast response times.",
      ],
    },
  ] as ExperienceItem[],

  projectsDetailed: [
    {
      name: "Bazar Dor",
      type: "Full-Stack E-Commerce Platform",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      description:
        "Comprehensive e-commerce application featuring dynamic product catalog browsing, responsive storefront design, and high-speed page rendering.",
      liveUrl: "https://bazardor-o9va.vercel.app",
    },
    {
      name: "Fit Log",
      type: "Workout & Fitness Tracking Web App",
      stack: ["Next.js", "React", "TypeScript", "Vercel"],
      description:
        "Fitness metrics and activity logging platform designed with a distraction-free, high-utility interface tailored for mobile and desktop tracking.",
      liveUrl: "https://assinment-6-kohl.vercel.app",
    },
    {
      name: "Developer Portfolio Platform",
      type: "Modern Engineering Showcase",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      description:
        "Custom-crafted digital portfolio demonstrating technical competencies, performance optimization, and modular UI engineering.",
      liveUrl: "https://assinment-5-3kk7.vercel.app",
    },
    {
      name: "WIEXORA Digital Platform",
      type: "Independent Digital Studio Site",
      stack: ["Next.js App Router", "TypeScript", "Zod", "Server Actions", "CSS Tokens"],
      description:
        "Luxury dark-gold themed studio web portal featuring SSR architecture, typed data workflows, client-server validation, and automated mail dispatch.",
      liveUrl: "https://wiexora-dev-portfolio.vercel.app",
    },
  ] as ProjectResumeItem[],

  // Simple string list for backward compatibility
  projects: [
    "Bazar Dor — E-Commerce Web Platform (https://bazardor-o9va.vercel.app)",
    "Fit Log — Workout & Fitness Tracker (https://assinment-6-kohl.vercel.app)",
    "Developer Portfolio — Showcase Platform (https://assinment-5-3kk7.vercel.app)",
    "WIEXORA — Independent Digital Engineering Practice",
  ],

  education: [
    {
      credential: "Diploma in Textile Engineering",
      field: "Textile Engineering & Industrial Systems",
      school: "Textile Institute / Polytechnic",
      period: "Current (7th Semester — Final Year)",
      status: "In Progress (Expected Completion 2025/2026)",
      highlights: [
        "Engineering discipline covering industrial production, material science, quality control protocols, and process optimization.",
        "Directly bridged physical systems engineering methodologies into modern software architecture and DevOps pipelines.",
      ],
    },
    {
      credential: "Secondary School Certificate (SSC)",
      field: "Science",
      school: "Secondary School Education Board",
      period: "Completed",
      grade: "GPA: 3.78 / 5.00",
      status: "Graduated",
      highlights: [
        "Core coursework in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).",
      ],
    },
  ] as EducationItem[],

  certifications: [
    {
      name: "Full-Stack Web Development & Modern JavaScript",
      issuer: "Verified Coursework & Project Implementations",
      year: "2023 — 2024",
    },
    {
      name: "Cloud Architecture, Containerization & DevOps Fundamentals",
      issuer: "Self-Directed Engineering & Continuous Deployment",
      year: "2024",
    },
  ],

  personal: {
    fatherName: "Md. Abdul Alim",
    motherName: "Mst. Bulbuli Begum",
    dateOfBirth: "01 January 2001",
    nationality: "Bangladeshi",
    religion: "Islam",
    presentAddress: "Hatimara, Mollamarket, Kashimpur, Dhaka, Bangladesh",
    permanentAddress: "Kazirhat, Baninagar, Lalmonirhat, Bangladesh",
    languages: [
      { language: "Bengali", proficiency: "Native / Mother Tongue" },
      { language: "English", proficiency: "Professional Working Proficiency" },
    ],
  } as PersonalDetails,
};
