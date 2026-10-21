export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F0CF88" />
          <stop offset="1" stopColor="#9B7636" />
        </linearGradient>
      </defs>
      <polygon points="12,25 22,15 42,15 52,25 32,52" fill="none" stroke="url(#mk)" strokeWidth="3" strokeLinejoin="round" />
      <polyline points="12,25 52,25" fill="none" stroke="#D8AD58" strokeWidth="1.6" />
      <polyline points="22,15 27,25 32,52 37,25 42,15" fill="none" stroke="#D8AD58" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
