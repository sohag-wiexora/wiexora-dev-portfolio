import Image from "next/image";
import Link from "next/link";
import { hasResumePdf } from "./ResumeRecord";

export function ResumeSection() {
  const pdf = hasResumePdf();

  return (
    <div className="two">
      <div className="resume-photo-wrap">
        <Image
          src="/images/editorial/formal-portrait-white-background.webp"
          width={400}
          height={520}
          alt="Md. Sohag Islam — Formal Portrait"
          className="resume-photo"
          sizes="(min-width: 960px) 18rem, 60vw"
        />
      </div>
      <div className="prose">
        <p>
          <strong>Md. Sohag Islam</strong> is a Full-Stack Developer and Cloud DevOps Engineer, and the founder of <strong>WIEXORA</strong>. With an academic background in Textile Engineering and deep hands-on expertise in Next.js, Node.js, TypeScript, and Docker/Cloud infrastructure, he bridges industrial engineering precision with modern web performance.
        </p>
        <p>
          The résumé includes verified project deliveries, technical core competencies, education credentials, and bio-data. You can inspect the digital version online or download the official PDF.
        </p>
        <div className="cta-row" style={{ marginTop: "1rem" }}>
          <Link href="/resume" className="btn btn-primary">
            View Full Résumé
          </Link>
          {pdf ? (
            <a href="/resume/cv.pdf" className="btn btn-ghost" download="Md_Sohag_Islam_CV.pdf">
              Download PDF (CV)
            </a>
          ) : (
            <span className="badge warn">PDF available soon</span>
          )}
        </div>
      </div>
    </div>
  );
}
