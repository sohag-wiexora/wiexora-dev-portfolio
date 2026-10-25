import Image from "next/image";

export function About() {
  return (
    <div className="two">
      <div className="about-photo-wrap">
        <Image
          src="/images/editorial/About Me Image.png"
          width={500}
          height={600}
          alt="Md. Sohag Islam — Founder of WIEXORA"
          className="about-photo"
          sizes="(min-width: 960px) 22rem, 80vw"
        />
        <p className="mono" style={{ marginTop: "1rem" }}>
          <span className="gold">Md. Sohag Islam</span> — The Person Behind WIEXORA
        </p>
      </div>
      <div className="prose">
        <p>
          I am <strong>Md. Sohag Islam</strong>, a Full-Stack Web Developer and Cloud DevOps Engineer pursuing my Diploma in Textile Engineering (7th Semester). I approach digital software the same way an industrial engineer approaches high-precision manufacturing: with an uncompromising focus on quality, system resilience, and process discipline.
        </p>
        <p>
          At <strong>WIEXORA</strong>, I build scalable web applications using Next.js, TypeScript, React, Node.js, and containerized Docker environments. <strong>Quality</strong> means the application stays resilient when inputs are unexpected, the interface feels fast and fluid across all devices, and the underlying architecture is clean, secure, and maintainable.
        </p>
        <p>
          <strong>Communication</strong> is transparent, written, and structured. Whether building high-impact platforms or architecting cloud workflows, scope, boundaries, deliverables, and timelines are agreed with total clarity before any build begins.
        </p>
      </div>
    </div>
  );
}
