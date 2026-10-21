"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { axes } from "@/data/capabilities";

export function Capabilities() {
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % axes.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + axes.length) % axes.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = axes.length - 1;
    else return;
    e.preventDefault();
    setIndex(next);
    refs.current[next]?.focus();
  };

  const axis = axes[index];

  return (
    <div className="axes">
      <div className="axis-tabs" role="tablist" aria-label="Capability axes" onKeyDown={onKey}>
        {axes.map((a, i) => (
          <button
            key={a.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`tab-${a.id}`}
            type="button"
            className="axis-tab"
            aria-selected={i === index}
            aria-controls={`panel-${a.id}`}
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {a.label}
          </button>
        ))}
      </div>
      <div className="axis-panel" role="tabpanel" id={`panel-${axis.id}`} aria-labelledby={`tab-${axis.id}`} tabIndex={0}>
        <div className="axis-body">
          <h3>{axis.lead}</h3>
          <ul>
            {axis.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="axis-note">{axis.note}</p>
        </div>
        <div className="axis-visual">
          <Image
            key={axis.id}
            src={axis.image.src}
            width={axis.image.width}
            height={axis.image.height}
            alt=""
            sizes="(min-width: 960px) 30vw, 90vw"
          />
        </div>
      </div>
    </div>
  );
}
