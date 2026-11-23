/**
 * Enterprise ecosystem: people and business operations at the core, ringed by the platforms,
 * finance and HR, data, integrations and custom applications that run them. Workday is named once,
 * inside "Enterprise platforms". Pure SVG for a light surface; dashes animate with CSS and pulses travel the spokes,
 * both stopping under reduced motion.
 */
const CX = 320;
const CY = 290;
const R = 150;

const defs: { lines: string[]; note?: string; hot?: boolean }[] = [
  { lines: ["Enterprise platforms"], note: "Workday among them", hot: true },
  { lines: ["Finance", "& HR"] },
  { lines: ["Data", "& analytics"] },
  { lines: ["Integrations", "& APIs"] },
  { lines: ["Custom apps", "& workflows"] },
];

const nodes = defs.map((n, i) => {
  const a = (-90 + i * 72) * (Math.PI / 180);
  return { ...n, x: CX + R * Math.cos(a), y: CY + R * Math.sin(a), cos: Math.cos(a) };
});

export function EnterpriseEcosystem({ className }: { className?: string }) {
  const ring =
    nodes.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + "Z";
  return (
    <svg
      viewBox="0 0 640 580"
      role="img"
      aria-labelledby="eco-title eco-desc"
      className={className}
    >
      <title id="eco-title">The enterprise technology environment</title>
      <desc id="eco-desc">
        People and business operations at the center, connected to enterprise platforms including
        Workday, finance and HR, data and analytics, integrations and APIs, and custom applications
        and workflows.
      </desc>
      <defs>
        <radialGradient id="eco-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="var(--color-cyan-400)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--color-cyan-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r="250" fill="none" stroke="var(--color-ink)" strokeOpacity="0.06" />
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--color-ink)" strokeOpacity="0.1" />
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="var(--color-cyan-400)"
        strokeOpacity="0.9"
        strokeDasharray="2 10"
        className="motion-safe:animate-dash"
      />
      <path d={ring} fill="none" stroke="var(--color-cyan-400)" strokeOpacity="0.35" />

      {nodes.map((n, i) => (
        <line
          key={i}
          x1={CX}
          y1={CY}
          x2={n.x}
          y2={n.y}
          stroke={n.hot ? "var(--color-turquoise-500)" : "var(--color-cyan-400)"}
          strokeOpacity={n.hot ? 0.9 : 0.7}
          strokeDasharray="3 8"
          className="motion-safe:animate-dash"
        />
      ))}

      {nodes.map((n, i) => (
        <circle
          key={`pulse-${i}`}
          r="4.5"
          fill={n.hot ? "var(--color-turquoise-500)" : "var(--color-cyan-400)"}
          className="motion-reduce:hidden"
        >
          <animateMotion
            dur="3.2s"
            begin={`${i * 0.64}s`}
            repeatCount="indefinite"
            path={`M${CX} ${CY} L${n.x.toFixed(1)} ${n.y.toFixed(1)}`}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.8;1"
            dur="3.2s"
            begin={`${i * 0.64}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      <circle cx={CX} cy={CY} r="86" fill="url(#eco-core)" />
      <circle cx={CX} cy={CY} r="52" fill="white" stroke="var(--color-ink)" strokeOpacity="0.3" />
      <text
        x={CX}
        y={CY - 2}
        textAnchor="middle"
        fill="var(--color-ink)"
        fontSize="16"
        fontWeight="600"
      >
        People &amp;
      </text>
      <text
        x={CX}
        y={CY + 17}
        textAnchor="middle"
        fill="var(--color-ink)"
        fontSize="16"
        fontWeight="600"
      >
        operations
      </text>

      {nodes.map((n, i) => {
        const p = n;
        const top = i === 0;
        const anchor = top ? "middle" : p.cos > 0 ? "start" : "end";
        const tx = top ? p.x : p.x + (p.cos > 0 ? 26 : -26);
        const ty0 = top ? p.y - 44 : p.y - (n.lines.length - 1) * 10 + 5;
        return (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="11"
              fill={n.hot ? "var(--color-turquoise-500)" : "white"}
              stroke={n.hot ? "var(--color-turquoise-700)" : "var(--color-cyan-400)"}
              strokeWidth="2"
            />
            {n.lines.map((l, k) => (
              <text
                key={l}
                x={tx}
                y={ty0 + k * 20}
                textAnchor={anchor}
                fill="var(--color-ink)"
                fontSize="17"
                fontWeight="500"
              >
                {l}
              </text>
            ))}
            {n.note ? (
              <text
                x={tx}
                y={ty0 + 20}
                textAnchor={anchor}
                fill="var(--color-turquoise-700)"
                fontSize="14"
              >
                {n.note}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
