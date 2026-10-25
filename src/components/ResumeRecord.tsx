import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { resume } from "@/data/resume";

export function hasResumePdf(): boolean {
  return (
    fs.existsSync(path.join(process.cwd(), "public", "resume", "cv.pdf")) ||
    fs.existsSync(path.join(process.cwd(), "public", "images", "editorial", "cv.pdf"))
  );
}

export function ResumeRecord() {
  const r = resume;

  return (
    <article className="resume-sheet">
      {/* Executive Header */}
      <header className="resume-header">
        <div className="resume-header-main">
          {r.avatar && (
            <div className="resume-avatar-frame">
              <Image
                src={r.avatar}
                alt={`${r.name} — Formal Portrait`}
                width={200}
                height={260}
                className="resume-avatar"
                priority
              />
            </div>
          )}
          <div className="resume-header-text">
            <span className="badge">Executive Curriculum Vitae</span>
            <h1 className="resume-name">{r.name}</h1>
            <p className="resume-headline">{r.headline}</p>
            <p className="resume-tagline mono gold">{r.tagline}</p>

            <div className="resume-quick-meta">
              <span className="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {r.contact.location}
              </span>
              <span className="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                {r.contact.portfolio.replace("https://", "")}
              </span>
              <span className="meta-item meta-status">
                <span className="status-dot" aria-hidden="true"></span>
                {r.contact.status}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="resume-section" aria-labelledby="resume-summary-title">
        <h2 id="resume-summary-title" className="mono resume-section-title">
          <span className="gold">01</span> / Executive Summary
        </h2>
        <div className="resume-prose">
          <p>{r.summary}</p>
        </div>
      </section>

      {/* Technical Competencies */}
      <section className="resume-section" aria-labelledby="resume-skills-title">
        <h2 id="resume-skills-title" className="mono resume-section-title">
          <span className="gold">02</span> / Technical Competencies & Tooling
        </h2>
        <div className="resume-skills-grid">
          {r.skillCategories.map((cat) => (
            <div key={cat.category} className="resume-skill-cat">
              <h3 className="mono gold-subtle">{cat.category}</h3>
              <ul className="chips">
                {cat.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="resume-section" aria-labelledby="resume-exp-title">
        <h2 id="resume-exp-title" className="mono resume-section-title">
          <span className="gold">03</span> / Professional Experience & Leadership
        </h2>
        <div className="resume-timeline">
          {r.experience.map((e) => (
            <div key={`${e.org}-${e.role}`} className="resume-entry">
              <div className="resume-entry-head">
                <div>
                  <h3 className="resume-entry-title">{e.role}</h3>
                  <p className="resume-entry-org gold">{e.org}</p>
                </div>
                <div className="resume-entry-meta mono">
                  <span>{e.period}</span>
                  {e.location && <span className="muted"> · {e.location}</span>}
                </div>
              </div>
              <ul className="bullets">
                {e.notes.map((n, idx) => (
                  <li key={idx}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Verified Projects */}
      <section className="resume-section" aria-labelledby="resume-projects-title">
        <h2 id="resume-projects-title" className="mono resume-section-title">
          <span className="gold">04</span> / Key Deployed Engineering Projects
        </h2>
        <div className="resume-projects-grid">
          {r.projectsDetailed.map((p) => (
            <div key={p.name} className="resume-project-card">
              <div className="resume-project-head">
                <div>
                  <h3 className="resume-project-name">{p.name}</h3>
                  <span className="mono resume-project-type">{p.type}</span>
                </div>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost resume-live-btn"
                    aria-label={`Visit live site for ${p.name}`}
                  >
                    Live Demo
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 1h8v8M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="resume-project-desc">{p.description}</p>
              <div className="chips">
                {p.stack.map((tech) => (
                  <span key={tech} className="mono tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Academic Background */}
      <section className="resume-section" aria-labelledby="resume-edu-title">
        <h2 id="resume-edu-title" className="mono resume-section-title">
          <span className="gold">05</span> / Education & Engineering Foundation
        </h2>
        <div className="resume-timeline">
          {r.education.map((edu) => (
            <div key={edu.credential} className="resume-entry">
              <div className="resume-entry-head">
                <div>
                  <h3 className="resume-entry-title">{edu.credential}</h3>
                  <p className="resume-entry-org gold">{edu.field}</p>
                </div>
                <div className="resume-entry-meta mono">
                  <span className="gold-hi">{edu.status || edu.period}</span>
                  {edu.grade && <span className="badge" style={{ marginLeft: ".5rem" }}>{edu.grade}</span>}
                </div>
              </div>
              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="bullets">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Personal Profile & CV Details */}
      <section className="resume-section" aria-labelledby="resume-personal-title">
        <h2 id="resume-personal-title" className="mono resume-section-title">
          <span className="gold">06</span> / Personal Information & Bio-Data
        </h2>
        <div className="resume-personal-grid">
          <div className="personal-col">
            <dl className="personal-dl">
              <div>
                <dt className="mono">Father&apos;s Name</dt>
                <dd>{r.personal.fatherName}</dd>
              </div>
              <div>
                <dt className="mono">Mother&apos;s Name</dt>
                <dd>{r.personal.motherName}</dd>
              </div>
              <div>
                <dt className="mono">Date of Birth</dt>
                <dd>{r.personal.dateOfBirth}</dd>
              </div>
              <div>
                <dt className="mono">Nationality</dt>
                <dd>{r.personal.nationality}</dd>
              </div>
            </dl>
          </div>
          <div className="personal-col">
            <dl className="personal-dl">
              <div>
                <dt className="mono">Present Address</dt>
                <dd>{r.personal.presentAddress}</dd>
              </div>
              <div>
                <dt className="mono">Permanent Address</dt>
                <dd>{r.personal.permanentAddress}</dd>
              </div>
              <div>
                <dt className="mono">Language Proficiency</dt>
                <dd>
                  {r.personal.languages.map((l) => `${l.language} (${l.proficiency})`).join(" · ")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Certification & Continuous Learning */}
      <section className="resume-section" aria-labelledby="resume-cert-title">
        <h2 id="resume-cert-title" className="mono resume-section-title">
          <span className="gold">07</span> / Certifications & Continued Learning
        </h2>
        <div className="resume-cert-grid">
          {r.certifications.map((c) => (
            <div key={c.name} className="resume-cert-item">
              <h3 className="resume-cert-name">{c.name}</h3>
              <p className="muted mono">{c.issuer} <span className="gold">({c.year})</span></p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
