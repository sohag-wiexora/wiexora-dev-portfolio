import Link from "next/link";
import { Mark } from "./Mark";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappDigits = site.whatsapp.replace(/[^0-9]/g, "");

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand-col">
          <p className="brand"><Mark />{site.name}</p>
          <p className="mono gold" style={{ marginTop: "0.75rem" }}>{site.tagline.join(" • ")}</p>
          <p className="muted" style={{ marginTop: "1rem", fontSize: ".85rem", maxWidth: "24rem" }}>
            Independent digital engineering practice: full-stack web development, secure cloud setup, and modern UI architectures.
          </p>
          <p className="mono muted" style={{ marginTop: "1.25rem", fontSize: ".75rem" }}>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <div>
          <p className="mono gold" style={{ marginBottom: "1rem" }}>Index</p>
          <nav aria-label="Footer Navigation">
            <ul className="footer-list">
              {site.nav.map((n) => (
                <li key={n.id}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/resume">Curriculum Vitae (CV)</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="mono gold" style={{ marginBottom: "1rem" }}>Direct Contact</p>
          <ul className="footer-list" aria-label="Direct Contact">
            <li>
              <a href={`mailto:${site.contactEmail}`} className="footer-contact-link">
                <span className="mono gold">EMAIL</span> {site.contactEmail}
              </a>
            </li>
            {site.altEmail && (
              <li>
                <a href={`mailto:${site.altEmail}`} className="footer-contact-link">
                  <span className="mono gold">ALT</span> {site.altEmail}
                </a>
              </li>
            )}
            {site.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  <span className="mono gold">WA</span> WhatsApp ({site.whatsapp}) ↗
                </a>
              </li>
            )}
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <span className="mono gold">EXT</span> {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}