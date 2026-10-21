import Link from "next/link";
import { Mark } from "./Mark";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="brand"><Mark />{site.name}</p>
          <p className="mono gold" style={{ marginTop: "1rem" }}>{site.tagline.join(" • ")}</p>
          <p className="muted" style={{ marginTop: "1rem", fontSize: ".85rem" }}>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {site.nav.map((n) => <li key={n.id}><Link href={n.href}>{n.label}</Link></li>)}
            <li><Link href="/resume">Resume</Link></li>
          </ul>
        </nav>
        <ul aria-label="Contact">
          {site.contactEmail && <li><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>}
          {site.socials.map((s) => <li key={s.href}><a href={s.href} rel="noopener noreferrer" target="_blank">{s.label}</a></li>)}
          {!site.contactEmail && site.socials.length === 0 && <li><Link href="/#contact">Contact form</Link></li>}
        </ul>
      </div>
    </footer>
  );
}
