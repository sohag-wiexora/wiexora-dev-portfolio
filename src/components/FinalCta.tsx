import { Crystal } from "./Crystal";
import { ContactForm } from "./ContactForm";
import { site } from "@/data/site";

export function FinalCta() {
  return (
    <section id="contact" className="section cta" aria-labelledby="cta-title">
      <div className="cta-mark" aria-hidden="true">
        <Crystal id="cta" sheen={false} />
      </div>
      <div className="wrap cta-grid">
        <div>
          <p className="mono" style={{ marginBottom: "1.25rem" }}>
            <span className="gold">14</span> / The Convergence
          </p>
          <h2 id="cta-title">Have a system worth building?</h2>
          <p className="lead">Tell me what you are building, where you are stuck, and what success should look like.</p>
          {site.contactEmail ? (
            <p style={{ marginTop: "1.5rem" }}>
              <a className="btn btn-ghost" href={`mailto:${site.contactEmail}`}>Email WIEXORA</a>
            </p>
          ) : null}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
