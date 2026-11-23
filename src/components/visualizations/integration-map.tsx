/**
 * Enterprise integration map: a Workday tenant at the center, connected through an integration layer
 * to the systems around it, with AI services as one of the connected capabilities.
 * Pure SVG, light-surface variant. Dashes animate with CSS (disabled under reduced motion).
 */
const spokes = [
  { label: "Payroll providers", x: 70, y: 70 },
  { label: "Benefits carriers", x: 70, y: 210 },
  { label: "Finance & ERP", x: 70, y: 350 },
  { label: "Identity & access", x: 490, y: 70 },
  { label: "Data & analytics", x: 490, y: 210 },
  { label: "AI services", x: 490, y: 350, ai: true },
];

const HUB = { x: 280, y: 210 };

export function IntegrationMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-labelledby="imap-title imap-desc"
      className={className}
    >
      <title id="imap-title">Enterprise integration map</title>
      <desc id="imap-desc">
        A Workday tenant connected through an integration layer to payroll providers, benefits
        carriers, finance and ERP, identity and access, data and analytics, and AI services.
      </desc>
      <defs>
        <linearGradient id="imap-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-electric-600)" />
          <stop offset="1" stopColor="var(--color-electric-800)" />
        </linearGradient>
      </defs>

      {/* integration ring */}
      <circle
        cx={HUB.x}
        cy={HUB.y}
        r="104"
        fill="none"
        stroke="var(--color-ink)"
        strokeOpacity="0.08"
      />
      <circle
        cx={HUB.x}
        cy={HUB.y}
        r="104"
        fill="none"
        stroke="var(--color-electric-600)"
        strokeOpacity="0.35"
        strokeDasharray="2 8"
        className="motion-safe:animate-dash"
      />

      {spokes.map((s) => {
        const dx = s.x < HUB.x ? 64 : -64;
        const sx = s.x + dx;
        const d = `M${sx} ${s.y} C${(sx + HUB.x) / 2} ${s.y} ${(sx + HUB.x) / 2} ${HUB.y} ${HUB.x + (s.x < HUB.x ? -56 : 56)} ${HUB.y}`;
        return (
          <g key={s.label}>
            <path
              d={d}
              fill="none"
              stroke={s.ai ? "var(--color-turquoise-500)" : "var(--color-electric-600)"}
              strokeOpacity={s.ai ? 0.7 : 0.25}
              strokeWidth="1.25"
            />
            <path
              d={d}
              fill="none"
              stroke={s.ai ? "var(--color-turquoise-500)" : "var(--color-electric-600)"}
              strokeWidth="1.5"
              strokeDasharray="3 9"
              className="motion-safe:animate-dash"
            />
            <g transform={`translate(${s.x - 64} ${s.y - 19})`}>
              <rect
                width="128"
                height="38"
                rx="10"
                fill={s.ai ? "var(--color-midnight-900)" : "white"}
                stroke={s.ai ? "var(--color-turquoise-500)" : "var(--color-ink)"}
                strokeOpacity={s.ai ? 0.7 : 0.12}
              />
              <circle
                cx="16"
                cy="19"
                r="3.5"
                fill={s.ai ? "var(--color-turquoise-500)" : "var(--color-electric-600)"}
              />
              <text
                x="28"
                y="23.5"
                fontSize="12"
                fontWeight="500"
                fontFamily="var(--font-geist)"
                fill={s.ai ? "white" : "var(--color-ink)"}
              >
                {s.label}
              </text>
            </g>
          </g>
        );
      })}

      {/* hub */}
      <g transform={`translate(${HUB.x} ${HUB.y})`}>
        <circle r="56" fill="url(#imap-hub)" />
        <circle r="56" fill="none" stroke="white" strokeOpacity="0.25" />
        <text
          y="-2"
          textAnchor="middle"
          fill="white"
          fontSize="15"
          fontWeight="600"
          fontFamily="var(--font-geist)"
        >
          Workday
        </text>
        <text
          y="16"
          textAnchor="middle"
          fill="var(--color-electric-100)"
          fontSize="9.5"
          letterSpacing="0.14em"
          fontFamily="var(--font-geist-mono)"
        >
          TENANT
        </text>
      </g>
      <text
        x={HUB.x}
        y={HUB.y + 128}
        textAnchor="middle"
        fill="var(--color-slate-500)"
        fontSize="10"
        letterSpacing="0.16em"
        fontFamily="var(--font-geist-mono)"
      >
        INTEGRATION LAYER
      </text>
    </svg>
  );
}
