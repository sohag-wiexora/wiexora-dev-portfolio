import { stages } from "@/data/process";

export function Process() {
  return (
    <ol className="timeline">
      {stages.map((s) => (
        <li className="stage" key={s.name}>
          <h3>{s.name}</h3>
          <p>{s.happens}</p>
          <div>
            <p className="get"><span className="mono gold">You receive </span>{s.receive}</p>
            {s.tech && s.tech.length > 0 && (
              <ul className="stage-tech">
                {s.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
