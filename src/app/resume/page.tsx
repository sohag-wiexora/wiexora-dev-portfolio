import type { Metadata } from "next";
import Link from "next/link";
import { ResumeRecord, hasResumePdf } from "@/components/ResumeRecord";
import { SectionHead } from "@/components/SectionHead";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  const pdf = hasResumePdf();
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead index="R" kicker="The Record" title="Résumé" />
        <div className="cta-row no-print" style={{ marginBottom: "2rem" }}>
          {pdf ? (
            <a href="/resume/cv.pdf" className="btn btn-primary" download>Download PDF</a>
          ) : (
            <span className="badge warn">PDF not supplied yet: add public/resume/cv.pdf</span>
          )}
          <Link href="/" className="btn btn-ghost">Back to portfolio</Link>
        </div>
        <ResumeRecord />
      </div>
    </section>
  );
}
