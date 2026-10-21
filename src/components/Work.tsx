import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { Mark } from "./Mark";

const statusLabel: Record<Project["status"], string> = {
  "live-reference": "Live project",
  prototype: "Self-initiated build",
  placeholder: "Placeholder: replace in src/data/projects.ts",
};

export function Work() {
  return (
    <div>
      {projects.map((p) => (
        <article className="project" key={p.slug} aria-labelledby={`p-${p.slug}`}>
          <div className="visual-col">
            <div className="visual">
              {p.image ? (
                <Image src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} sizes="(min-width: 960px) 50vw, 100vw" />
              ) : (
                <Mark />
              )}
            </div>
            {!p.image && (
              <p className="mono" style={{ marginTop: ".75rem" }}>
                No project visual supplied yet
              </p>
            )}
          </div>
          <div className="meta">
            <div>
              <span className={`badge${p.status === "placeholder" ? " warn" : ""}`}>{statusLabel[p.status]}</span>
              <h3 id={`p-${p.slug}`} style={{ marginTop: "1rem" }}>{p.name}</h3>
              <p className="mono" style={{ marginTop: ".5rem" }}>{p.type}</p>
            </div>
            <dl className="meta">
              <div><dt className="mono">Objective</dt><dd>{p.objective}</dd></div>
              <div><dt className="mono">My role</dt><dd>{p.role}</dd></div>
              <div>
                <dt className="mono">Key features</dt>
                <dd><ul className="bullets">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></dd>
              </div>
              <div>
                <dt className="mono">Engineering decisions</dt>
                <dd><ul className="bullets">{p.decisions.map((d) => <li key={d}>{d}</li>)}</ul></dd>
              </div>
              <div>
                <dt className="mono">Stack</dt>
                <dd><ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul></dd>
              </div>
              {p.results && p.results.length > 0 && (
                <div><dt className="mono">Verified results</dt><dd><ul className="bullets">{p.results.map((r) => <li key={r}>{r}</li>)}</ul></dd></div>
              )}
            </dl>
            {p.links && (p.links.live || p.links.source) && (
              <div className="cta-row" style={{ marginTop: 0 }}>
                {p.links.live && (
                  <a
                    className="btn btn-ghost"
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live project: ${p.name}`}
                  >
                    View Live Project
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" style={{ marginLeft: ".25rem" }}>
                      <path d="M4 1h8v8M12 1L1 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
                {p.links.source && (
                  <a
                    className="btn btn-ghost"
                    href={p.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code: ${p.name}`}
                  >
                    Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
