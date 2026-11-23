/**
 * Panel art for the three practices: brand gradient plus a single line-art motif.
 * Decorative (the card's heading names the practice).
 */
type Variant = "ai" | "software" | "enterprise";

const grounds: Record<Variant, string> = {
  ai: "linear-gradient(160deg, #123b39 0%, #0b2524 45%, #080d20 100%)",
  software: "linear-gradient(160deg, #1748b8 0%, #123c9e 40%, #0a102b 100%)",
  enterprise: "linear-gradient(160deg, #323b48 0%, #1a1f27 45%, #060a19 100%)",
};

function AiMotif() {
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const a = ((-90 + i * 60) * Math.PI) / 180;
    return { x: 160 + 70 * Math.cos(a), y: 200 + 70 * Math.sin(a) };
  });
  return (
    <g fill="none" stroke="currentColor">
      <circle cx="160" cy="200" r="118" strokeOpacity="0.15" />
      <circle cx="160" cy="200" r="70" strokeOpacity="0.35" strokeDasharray="2 6" />
      {nodes.map((p, i) => {
        const q = nodes[(i + 2) % 6]!;
        return <line key={i} x1={p.x} y1={p.y} x2={q.x} y2={q.y} strokeOpacity="0.35" />;
      })}
      {nodes.map((p, i) => (
        <circle key={`n${i}`} cx={p.x} cy={p.y} r="6" fill="#080d20" strokeOpacity="0.9" />
      ))}
      <circle cx="160" cy="200" r="10" fill="currentColor" stroke="none" />
    </g>
  );
}

function SoftwareMotif() {
  return (
    <g fill="none" stroke="currentColor">
      <rect x="44" y="96" width="232" height="168" rx="10" strokeOpacity="0.5" />
      <line x1="44" y1="120" x2="276" y2="120" strokeOpacity="0.4" />
      <line x1="104" y1="120" x2="104" y2="264" strokeOpacity="0.3" />
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="120"
          y1={144 + i * 28}
          x2={250 - i * 18}
          y2={144 + i * 28}
          strokeOpacity="0.45"
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
      <circle cx="58" cy="108" r="3" fill="currentColor" stroke="none" fillOpacity="0.6" />
      <path d="M60 300 H140 V330 H220" strokeOpacity="0.5" strokeDasharray="3 6" />
      <circle cx="220" cy="330" r="5" fill="currentColor" stroke="none" />
    </g>
  );
}

function EnterpriseMotif() {
  const top = [70, 130, 190, 250];
  return (
    <g fill="none" stroke="currentColor">
      {top.map((x) => (
        <g key={x}>
          <rect x={x - 18} y="96" width="36" height="24" rx="5" strokeOpacity="0.5" />
          <line x1={x} y1="120" x2={x} y2="196" strokeOpacity="0.35" strokeDasharray="2 5" />
        </g>
      ))}
      <line x1="40" y1="200" x2="280" y2="200" strokeOpacity="0.6" />
      <line x1="40" y1="206" x2="280" y2="206" strokeOpacity="0.25" />
      <line x1="160" y1="206" x2="160" y2="262" strokeOpacity="0.5" />
      <rect x="92" y="262" width="136" height="44" rx="8" strokeOpacity="0.8" />
      <circle cx="160" cy="284" r="5" fill="currentColor" stroke="none" />
    </g>
  );
}

export function PracticeArt({ variant, className }: { variant: Variant; className?: string }) {
  const accent = variant === "ai" ? "#5fe0da" : variant === "software" ? "#a6e6f7" : "#aab5c2";
  return (
    <div aria-hidden="true" className={className} style={{ background: grounds[variant] }}>
      <svg
        viewBox="0 0 320 400"
        className="h-full w-full"
        style={{ color: accent }}
        preserveAspectRatio="xMidYMid meet"
      >
        {variant === "ai" && <AiMotif />}
        {variant === "software" && <SoftwareMotif />}
        {variant === "enterprise" && <EnterpriseMotif />}
      </svg>
    </div>
  );
}
