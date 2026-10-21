import Link from "next/link";
import { packages, pricingNote } from "@/data/pricing";

export function Pricing() {
  return (
    <div>
      <p className="pricing-note">{pricingNote}</p>
      <div className="pricing-grid">
        {packages.map((p) => {
          const isPopular = p.id === "professional";
          const isAdvanced = p.id === "advanced";
          return (
            <article
              className={`pricing-card${isPopular ? " pricing-popular" : ""}${isAdvanced ? " pricing-premium" : ""}`}
              key={p.id}
              aria-labelledby={`pk-${p.id}`}
            >
              {isPopular && <div className="pricing-badge">Most Popular</div>}
              {isAdvanced && <div className="pricing-badge pricing-badge-premium">Best Value</div>}
              <div className="pricing-card-head">
                <h3 id={`pk-${p.id}`}>{p.name}</h3>
                <p className="pricing-range">{p.range}</p>
                <p className="pricing-ideal">{p.idealFor}</p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  {p.deliverables.map((d, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
                <dl className="pricing-details">
                  <div><dt>Timeline</dt><dd>{p.timeline}</dd></div>
                  <div><dt>Revisions</dt><dd>{p.revisions}</dd></div>
                  <div><dt>Support</dt><dd>{p.support}</dd></div>
                </dl>
              </div>
              <div className="pricing-card-foot">
                <Link
                  href="/#contact"
                  className={`btn ${isPopular || isAdvanced ? "btn-primary" : "btn-ghost"} pricing-cta`}
                >
                  {p.id === "custom" ? "Let's Talk" : `Get ${p.name.charAt(0) + p.name.slice(1).toLowerCase()}`}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
