import type { ReactNode } from "react";

export function SectionHead({
  index,
  kicker,
  title,
  children,
  id,
}: {
  index: string;
  kicker: string;
  title: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <header className="head">
      <p className="mono">
        <span className="gold">{index}</span> / {kicker}
      </p>
      <h2 id={id}>{title}</h2>
      {children ? <p>{children}</p> : null}
    </header>
  );
}
