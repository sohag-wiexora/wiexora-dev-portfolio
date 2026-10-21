"use client";

type Tech = { name: string; color: string };

const group = (color: string, names: string[]): Tech[] =>
  names.map((name) => ({ name, color }));

const technologies: Tech[] = [
  ...group("#f5c46b", ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3", "Bash"]),
  ...group("#4fd1ff", ["React", "Next.js", "Tailwind CSS", "Redux", "Vue.js"]),
  ...group("#a78bfa", ["Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL"]),
  ...group("#34e0a1", ["PostgreSQL", "MongoDB", "Redis"]),
  ...group("#ff7a9c", ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"]),
  ...group("#6ea8ff", ["Git", "GitHub", "Prisma"]),
];

export function TechMarquee() {
  return (
    <section className="marquee" aria-label="Technology stack">
      <div className="wrap">
        {/* ONE shared border wraps the button and the marquee */}
        <div className="marquee-bar">
          <div className="marquee-badge">
            <span className="marquee-badge-icon" aria-hidden="true" />
            <span className="marquee-badge-text mono">Technology Stack</span>
            <span className="marquee-badge-count mono">{technologies.length}</span>
          </div>

          <div className="marquee-rail">
            <div className="marquee-track">
              {[0, 1].map((g) => (
                <ul className="marquee-group" key={g} aria-hidden={g === 1}>
                  {technologies.map((t) => (
                    <li
                      className="marquee-chip"
                      key={`${g}-${t.name}`}
                      style={{ "--c": t.color } as React.CSSProperties}
                    >
                      {t.name}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}