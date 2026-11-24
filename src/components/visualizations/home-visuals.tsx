/**
 * Bespoke line visuals for the homepage. Pure SVG, deterministic, decorative (aria-hidden);
 * the surrounding headings carry the meaning. Stroke colours follow currentColor so each
 * visual sits on either a dark or light ground.
 */

const r = (n: number) => Math.round(n * 10) / 10;

/* -------------------------------------------------------------------------------------------- */
/* Introduction: signal lines drawn together into one point of intelligence                      */
/* -------------------------------------------------------------------------------------------- */

export function IntroVisual({ className }: { className?: string }) {
  const lines = Array.from({ length: 15 }, (_, i) => {
    const pts: string[] = [];
    for (let x = 0; x <= 520; x += 8) {
      const env = Math.exp(-(((x - 320) / 170) ** 2));
      const y = 36 + i * 36 + 52 * env * Math.sin((x / 520) * Math.PI * 1.7 + i * 0.42);
      pts.push(`${x === 0 ? "M" : "L"}${x} ${r(y)}`);
    }
    return pts.join(" ");
  });
  const marked = [3, 7, 11];
  const nodeY = (i: number) =>
    r(36 + i * 36 + 52 * Math.sin((320 / 520) * Math.PI * 1.7 + i * 0.42));

  return (
    <svg viewBox="0 0 520 600" fill="none" aria-hidden="true" className={className}>
      <g strokeWidth="1">
        {lines.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={marked.includes(i) ? "var(--color-brand-azure)" : "currentColor"}
            strokeOpacity={marked.includes(i) ? 0.9 : 0.2}
            className={marked.includes(i) ? "flow-line" : undefined}
          />
        ))}
      </g>
      <line
        x1="320"
        y1="0"
        x2="320"
        y2="600"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeDasharray="2 6"
      />
      {marked.map((i) => (
        <g key={i}>
          <circle
            cx="320"
            cy={nodeY(i)}
            r="13"
            stroke="var(--color-brand-turquoise)"
            strokeOpacity="0.5"
            className="breathe"
          />
          <circle cx="320" cy={nodeY(i)} r="3.5" fill="var(--color-brand-turquoise)" />
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------------------------- */
/* Practices                                                                                     */
/* -------------------------------------------------------------------------------------------- */

function Orbits() {
  const radii = [58, 112, 166, 220];
  const nodes = [
    [0, -112],
    [97, -56],
    [166, 0],
    [0, 166],
    [-142, 82],
    [-112, -112 * 0.2],
    [156, 150],
  ].map(([x, y]) => [320 + x!, 240 + y!] as const);
  return (
    <g fill="none" stroke="currentColor">
      {radii.map((rad, i) => (
        <circle
          key={rad}
          cx="320"
          cy="240"
          r={rad}
          strokeOpacity={0.14 + i * 0.03}
          strokeDasharray={i % 2 ? "2 7" : undefined}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <line key={i} x1="320" y1="240" x2={x} y2={y} strokeOpacity="0.2" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={`n${i}`}
          cx={x}
          cy={y}
          r="5"
          fill="var(--color-brand-midnight)"
          strokeOpacity="0.8"
        />
      ))}
      <circle
        cx="320"
        cy="240"
        r="26"
        stroke="var(--color-brand-turquoise)"
        strokeOpacity="0.55"
        className="breathe"
      />
      <circle cx="320" cy="240" r="7" fill="var(--color-brand-turquoise)" stroke="none" />
    </g>
  );
}

function Planes() {
  const ys = [320, 262, 204, 146];
  const diamond = (y: number) => `M320 ${y - 64} L510 ${y} L320 ${y + 64} L130 ${y} Z`;
  return (
    <g fill="none" stroke="currentColor">
      {[130, 510].map((x) => (
        <line key={x} x1={x} y1="146" x2={x} y2="320" strokeOpacity="0.2" strokeDasharray="2 6" />
      ))}
      {ys.map((y, i) => (
        <path
          key={y}
          d={diamond(y)}
          fill={i === 3 ? "rgb(8 127 202 / 0.14)" : "var(--color-brand-midnight)"}
          stroke={i === 3 ? "var(--color-brand-cyan)" : "currentColor"}
          strokeOpacity={i === 3 ? 0.9 : 0.3 + i * 0.08}
        />
      ))}
      {[-60, 0, 60].map((dx) => (
        <line
          key={dx}
          x1={320 + dx}
          y1={146 - 64 * (1 - Math.abs(dx) / 190)}
          x2={320 + dx}
          y2={146 + 64 * (1 - Math.abs(dx) / 190)}
          stroke="var(--color-brand-cyan)"
          strokeOpacity="0.4"
        />
      ))}
      <circle
        cx="320"
        cy="146"
        r="4"
        fill="var(--color-brand-turquoise)"
        stroke="none"
        className="breathe"
      />
    </g>
  );
}

function Lattice() {
  const cols = 5;
  const rows = 4;
  const at = (i: number, j: number) => [96 + i * 112, 90 + j * 100] as const;
  const edges: string[] = [];
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      const [x, y] = at(i, j);
      if (i < cols - 1) edges.push(`M${x} ${y} H${x + 112}`);
      if (j < rows - 1 && (i + j) % 2 === 0) edges.push(`M${x} ${y} V${y + 100}`);
      if (i < cols - 1 && j < rows - 1 && (i * 3 + j) % 4 === 1)
        edges.push(`M${x} ${y} L${x + 112} ${y + 100}`);
    }
  const hub = at(2, 1);
  return (
    <g fill="none" stroke="currentColor">
      <path d={edges.join(" ")} strokeOpacity="0.22" />
      <path
        d={`M${at(0, 2)[0]} ${at(0, 2)[1]} H${hub[0]} V${hub[1]} H${at(4, 1)[0]}`}
        stroke="var(--color-brand-azure)"
        strokeOpacity="0.9"
        className="flow-line"
      />
      {Array.from({ length: cols * rows }, (_, k) => {
        const [x, y] = at(k % cols, Math.floor(k / cols));
        return (
          <circle
            key={k}
            cx={x}
            cy={y}
            r="4"
            fill="var(--color-brand-midnight)"
            strokeOpacity="0.7"
          />
        );
      })}
      <circle
        cx={hub[0]}
        cy={hub[1]}
        r="20"
        stroke="var(--color-brand-turquoise)"
        strokeOpacity="0.55"
        className="breathe"
      />
      <circle cx={hub[0]} cy={hub[1]} r="6" fill="var(--color-brand-turquoise)" stroke="none" />
    </g>
  );
}

export function PracticeVisual({
  variant,
  className,
}: {
  variant: "ai" | "software" | "enterprise";
  className?: string;
}) {
  return (
    <svg viewBox="0 0 640 480" aria-hidden="true" className={className}>
      {variant === "ai" && <Orbits />}
      {variant === "software" && <Planes />}
      {variant === "enterprise" && <Lattice />}
    </svg>
  );
}

/* -------------------------------------------------------------------------------------------- */
/* The bigger picture: four capabilities orbiting the enterprise systems they serve               */
/* -------------------------------------------------------------------------------------------- */

export function ConnectedVisual({ className }: { className?: string }) {
  const nodes = [
    { label: "AI", x: 300, y: 130, lx: 300, ly: 98, a: "middle" },
    { label: "Custom software", x: 470, y: 300, lx: 490, ly: 307, a: "start" },
    { label: "Workflows", x: 300, y: 470, lx: 300, ly: 518, a: "middle" },
    { label: "Integrations", x: 130, y: 300, lx: 110, ly: 307, a: "end" },
  ];
  return (
    <svg viewBox="-120 0 840 600" fill="none" aria-hidden="true" className={className}>
      <circle
        cx="300"
        cy="300"
        r="268"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeDasharray="2 8"
      />
      <circle cx="300" cy="300" r="170" stroke="currentColor" strokeOpacity="0.25" />
      <circle
        cx="300"
        cy="300"
        r="170"
        stroke="var(--color-brand-azure)"
        strokeOpacity="0.9"
        strokeDasharray="1 24"
        strokeWidth="2.5"
        className="flow-line"
      />
      {/* each capability reaches the core, and its neighbours */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length]!;
        return (
          <g key={n.label} stroke="currentColor" strokeOpacity="0.28">
            <line x1="300" y1="300" x2={n.x} y2={n.y} />
            <path d={`M${n.x} ${n.y} Q300 300 ${next.x} ${next.y}`} strokeOpacity="0.14" />
          </g>
        );
      })}
      <circle
        cx="300"
        cy="300"
        r="64"
        fill="var(--color-brand-midnight)"
        stroke="var(--color-brand-turquoise)"
        strokeOpacity="0.7"
      />
      <circle
        cx="300"
        cy="300"
        r="78"
        stroke="var(--color-brand-turquoise)"
        strokeOpacity="0.3"
        className="breathe"
      />
      <g className="font-mono" fontSize="13" letterSpacing="1.5" textAnchor="middle" fill="white">
        <text x="300" y="296">
          ENTERPRISE
        </text>
        <text x="300" y="316">
          SYSTEMS
        </text>
      </g>
      {nodes.map((n) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy={n.y}
            r="9"
            fill="var(--color-brand-ice)"
            stroke="var(--color-brand-electric)"
            strokeWidth="1.5"
          />
          <circle cx={n.x} cy={n.y} r="3" fill="var(--color-brand-electric)" />
          <text
            x={n.lx}
            y={n.ly}
            textAnchor={n.a as "start" | "middle" | "end"}
            fill="currentColor"
            fontSize="26"
            fontWeight="500"
            letterSpacing="-0.3"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
