export function Thesis() {
  return (
    <section className="section" aria-labelledby="thesis-title">
      <div className="wrap thesis">
        <div>
          <p className="mono" style={{ marginBottom: "1.25rem" }}>
            <span className="gold">01</span> / The Engineering Thesis
          </p>
          <h2 id="thesis-title">
            Precision is visible.
            <em>Engineering is underneath.</em>
          </h2>
        </div>
        <div className="thesis-body">
          <p>
            A clean interface is the part people notice. What makes it last is underneath: sensible data models,
            validated inputs, clear boundaries between layers and a deployment that can be repeated.
          </p>
          <p>
            WIEXORA is one engineer working carefully: scope agreed first, security considered from the start, and
            honest statements about what is and is not included.
          </p>
        </div>
      </div>
    </section>
  );
}
