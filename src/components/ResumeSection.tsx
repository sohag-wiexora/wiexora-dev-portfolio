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
          alt="Md Sohag Islam — formal portrait"
          className="resume-photo"
          sizes="(min-width: 960px) 18rem, 60vw"
        />
      </div>
      <div className="prose">
        <p>The résumé page is built from a single data file and prints cleanly from the browser.</p>
        <div className="cta-row" style={{ marginTop: 0 }}>
          <Link href="/resume" className="btn btn-primary">View résumé</Link>
          {pdf ? (
            <a href="/resume/cv.pdf" className="btn btn-ghost" download>Download PDF</a>
          ) : (
            <span className="badge warn">PDF not supplied yet</span>
          )}
        </div>
      </div>
    </div>
  );
}
