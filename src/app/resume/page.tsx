import type { Metadata } from "next";
import Link from "next/link";
import { ResumeRecord, hasResumePdf } from "@/components/ResumeRecord";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Md. Sohag Islam | Full-Stack & DevOps Engineer",
  description: "Executive Résumé of Md. Sohag Islam, Founder of WIEXORA. Full-Stack Developer & Cloud DevOps Engineer.",
};

export default function ResumePage() {
  const pdf = hasResumePdf();

  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-row no-print" style={{ marginBottom: "2.5rem", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            {pdf ? (
              <a href="/resume/cv.pdf" className="btn btn-primary" download="Md_Sohag_Islam_CV.pdf">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Official CV (PDF)
              </a>
            ) : (
              <span className="badge warn">PDF not supplied yet: add public/resume/cv.pdf</span>
            )}
            <Link href="/#contact" className="btn btn-ghost">
              Discuss an Engagement
            </Link>
          </div>
          <Link href="/" className="btn btn-ghost">
            ← Back to Portfolio
          </Link>
        </div>

        <ResumeRecord />
      </div>
    </section>
  );
}
