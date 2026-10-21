"use client";

import { useState } from "react";
import { layers } from "@/data/architecture";

export function Architecture() {
  const [id, setId] = useState(layers[0].id);
  const current = layers.find((l) => l.id === id) ?? layers[0];

  return (
    <div className="arch">
      <div className="arch-stack">
        <div className="arch-layers" role="group" aria-label="Architecture layers">
          {layers.map((l, i) => (
            <button
              key={l.id}
              type="button"
              className="layer"
              aria-pressed={l.id === id}
              onClick={() => setId(l.id)}
            >
              {l.name}
              <span>L{i + 1}</span>
            </button>
          ))}
        </div>
        <div className="sec-rail" aria-hidden="true">SECURITY · ACROSS EVERY LAYER</div>
      </div>

      <div className="arch-detail" aria-live="polite">
        <p className="mono gold">Layer {layers.indexOf(current) + 1} of {layers.length}</p>
        <h3>{current.name}</h3>
        <p>{current.plain}</p>
        <div className="sec">
          <p className="mono" style={{ marginBottom: ".35rem" }}>Security at this layer</p>
          <p className="muted">{current.security}</p>
        </div>
      </div>
    </div>
  );
}
