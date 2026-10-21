import Link from "next/link";
import { services } from "@/data/services";

export function Services() {
  return (
    <div>
      {services.map((s, i) => (
        <article className="service" key={s.id} aria-labelledby={`s-${s.id}`}>
          <div>
            <p className="mono gold">{String(i + 1).padStart(2, "0")}</p>
            <h3 id={`s-${s.id}`}>{s.name}</h3>
            <p className="muted" style={{ marginTop: ".5rem" }}>{s.solves}</p>
          </div>
          <div>
            <dl className="service-cols">
              <div><dt className="mono">Included</dt><dd><ul>{s.includes.map((x) => <li key={x}>{x}</li>)}</ul></dd></div>
              <div><dt className="mono">Deliverables</dt><dd><ul>{s.deliverables.map((x) => <li key={x}>{x}</li>)}</ul></dd></div>
              <div><dt className="mono">Suitable for</dt><dd>{s.suitableFor}</dd></div>
              <div><dt className="mono">Exclusions and dependencies</dt><dd>{s.exclusions}</dd></div>
            </dl>
            <p style={{ marginTop: "1.25rem" }}>
              <Link href="/#contact" className="btn btn-ghost">Discuss this project</Link>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
