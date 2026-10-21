import fs from "node:fs";
import path from "node:path";
import { resume } from "@/data/resume";

export function hasResumePdf(): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "resume", "cv.pdf"));
}

const Empty = ({ what }: { what: string }) => <p className="empty">{what} not provided yet.</p>;

export function ResumeRecord() {
  const r = resume;
  return (
    <div>
      <div className="resume-block">
        <h3>{r.name}</h3>
        <p className="muted">{r.headline}</p>
      </div>
      <div className="resume-block">
        <h4 className="mono">Professional summary</h4>
        {r.summary ? <p>{r.summary}</p> : <Empty what="Summary" />}
      </div>
      <div className="resume-block">
        <h4 className="mono">Skills</h4>
        {r.skills.length ? <ul className="chips">{r.skills.map((s) => <li key={s}>{s}</li>)}</ul> : <Empty what="Skills" />}
      </div>
      <div className="resume-block">
        <h4 className="mono">Experience</h4>
        {r.experience.length ? (
          r.experience.map((e) => (
            <div key={`${e.org}-${e.role}`}>
              <b>{e.role}</b>, {e.org} <span className="muted">({e.period})</span>
              <ul className="bullets">{e.notes.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          ))
        ) : (
          <Empty what="Experience" />
        )}
      </div>
      <div className="resume-block">
        <h4 className="mono">Education</h4>
        {r.education.length ? (
          r.education.map((e) => <p key={e.credential}><b>{e.credential}</b>, {e.school} <span className="muted">({e.period})</span></p>)
        ) : (
          <Empty what="Education" />
        )}
      </div>
      <div className="resume-block">
        <h4 className="mono">Certifications</h4>
        {r.certifications.length ? (
          r.certifications.map((c) => <p key={c.name}><b>{c.name}</b>, {c.issuer} <span className="muted">({c.year})</span></p>)
        ) : (
          <Empty what="Certifications" />
        )}
      </div>
      <div className="resume-block">
        <h4 className="mono">Selected projects</h4>
        <ul className="bullets">{r.projects.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
      <div className="resume-block">
        <h4 className="mono">Contact</h4>
        {r.contact.email || r.contact.location ? (
          <p>{[r.contact.email, r.contact.location].filter(Boolean).join(" · ")}</p>
        ) : (
          <Empty what="Contact details" />
        )}
      </div>
    </div>
  );
}
