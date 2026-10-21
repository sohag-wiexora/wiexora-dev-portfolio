// Lightweight SVG crystal. Static by default; the single gold sheen is CSS-only and
// disabled under prefers-reduced-motion. No JavaScript is required for it to render.
export function Crystal({ id = "c", sheen = true }: { id?: string; sheen?: boolean }) {
  const facets: { pts: string; o: number }[] = [
    { pts: "50,160 130,90 160,160", o: 0.1 },
    { pts: "130,90 200,90 160,160", o: 0.22 },
    { pts: "200,90 240,160 160,160", o: 0.07 },
    { pts: "200,90 270,90 240,160", o: 0.18 },
    { pts: "270,90 350,160 240,160", o: 0.12 },
    { pts: "50,160 160,160 200,350", o: 0.16 },
    { pts: "160,160 240,160 200,350", o: 0.05 },
    { pts: "240,160 350,160 200,350", o: 0.2 },
  ];
  const outline = "50,160 130,90 270,90 350,160 200,350";
  return (
    <svg className="crystal" viewBox="0 0 400 420" role="img" aria-label="Abstract faceted diamond">
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F0CF88" />
          <stop offset="1" stopColor="#9B7636" />
        </linearGradient>
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F0CF88" stopOpacity="0" />
          <stop offset="0.5" stopColor="#F0CF88" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F0CF88" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <polygon points={outline} />
        </clipPath>
      </defs>
      <ellipse cx="200" cy="395" rx="120" ry="8" fill="#D8AD58" opacity="0.08" />
      {facets.map((f, i) => (
        <polygon key={i} points={f.pts} fill="#F5F5F2" fillOpacity={f.o} stroke={`url(#${id}-gold)`} strokeWidth="1.2" strokeLinejoin="round" />
      ))}
      <polygon points={outline} fill="none" stroke={`url(#${id}-gold)`} strokeWidth="2.4" strokeLinejoin="round" />
      {sheen && (
        <g clipPath={`url(#${id}-clip)`}>
          <g className="sheen">
            <polygon points="0,80 22,80 -34,360 -56,360" fill={`url(#${id}-sheen)`} transform="translate(60 0)" />
          </g>
        </g>
      )}
    </svg>
  );
}
