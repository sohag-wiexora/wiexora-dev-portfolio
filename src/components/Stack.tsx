import { groups } from "@/data/stack";

export function Stack() {
  return (
    <div className="stack-grid">
      {groups.map((g) => (
        <section className="stack-group" key={g.role} aria-label={g.role}>
          <h3 className="mono gold">{g.role}</h3>
          <ul>
            {g.items.map((i) => (
              <li key={i.name}>
                <b>{i.name}</b>
                <span>{i.why}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
