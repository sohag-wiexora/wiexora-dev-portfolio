import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="mono gold">INDEPENDENT DIGITAL ENGINEERING</p>
          <h1 id="hero-title">
            <span>THE PRECISION</span>
            <span>OF INTELLIGENCE.</span>
          </h1>
          <p className="lead">
            Digital products designed for clarity, engineered for scale, and built with security in mind.
          </p>
          <div className="cta-row">
            <Link href="/#work" className="btn btn-primary">Explore Selected Work</Link>
            <Link href="/#contact" className="btn btn-ghost">Start a Project</Link>
          </div>
          <p className="signature mono" aria-label="Build, secure, innovate">
            {site.tagline.map((t, i) => (
              <span key={t}>
                {t}
                {i < site.tagline.length - 1 ? " •" : ""}
              </span>
            ))}
          </p>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/hero/gold-grey-faceted-crystal.webp"
            width={1024}
            height={1024}
            alt=""
            priority
            sizes="(min-width: 960px) 40vw, 80vw"
          />
        </div>
      </div>
    </section>
  );
}
