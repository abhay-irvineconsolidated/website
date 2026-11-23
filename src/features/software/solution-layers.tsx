import { solutionLayers } from "@/content/software";

/**
 * One business solution drawn as five stacked layers joined by a single spine. The slabs are
 * numbered to match the list beside them, so the drawing needs no text of its own.
 */
export function SolutionLayers() {
  const cx = 230;
  const step = 112;
  const h = 88;
  const w = 205;
  const t = 18;
  const top0 = 24;
  const fills = ["#4f7deb", "#2a5ed6", "#1748b8", "#123c9e", "#0e2f7c"];
  const centre = (i: number) => top0 + i * step + h / 2;

  return (
    <svg
      viewBox="0 0 460 580"
      role="img"
      aria-label="Five connected layers of one solution: interfaces, business logic, integrations, data and infrastructure."
      className="mx-auto h-auto w-full max-w-[30rem]"
    >
      {solutionLayers
        .map((layer, i) => ({ layer, i }))
        .reverse()
        .map(({ layer, i }) => {
          const y = top0 + i * step;
          const pt = (x: number, yy: number) => `${x},${yy}`;
          const top = [pt(cx, y), pt(cx + w, y + h / 2), pt(cx, y + h), pt(cx - w, y + h / 2)].join(
            " ",
          );
          const left = [
            pt(cx - w, y + h / 2),
            pt(cx, y + h),
            pt(cx, y + h + t),
            pt(cx - w, y + h / 2 + t),
          ].join(" ");
          const right = [
            pt(cx + w, y + h / 2),
            pt(cx, y + h),
            pt(cx, y + h + t),
            pt(cx + w, y + h / 2 + t),
          ].join(" ");
          const k = 0.62;
          const inner = [
            pt(cx, y + h / 2 - (h / 2) * k),
            pt(cx + w * k, y + h / 2),
            pt(cx, y + h / 2 + (h / 2) * k),
            pt(cx - w * k, y + h / 2),
          ].join(" ");
          return (
            <g key={layer.title}>
              <polygon points={left} fill="#060a19" />
              <polygon points={right} fill="#0a1233" />
              <polygon points={top} fill={fills[i]} stroke="#a6e6f7" strokeOpacity="0.4" />
              <polygon points={inner} fill="none" stroke="#a6e6f7" strokeOpacity="0.22" />
            </g>
          );
        })}

      {/* the spine and its nodes, over the slabs */}
      {solutionLayers.slice(1).map((_, i) => (
        <line
          key={i}
          x1={cx}
          y1={centre(i)}
          x2={cx}
          y2={centre(i + 1)}
          stroke="#28bce8"
          strokeWidth="1.5"
          strokeDasharray="2 5"
          strokeLinecap="round"
        />
      ))}
      {solutionLayers.map((layer, i) => (
        <g key={layer.title}>
          <circle cx={cx} cy={centre(i)} r="14" fill="#080d20" stroke="#5fe0da" strokeWidth="1.5" />
          <text
            x={cx}
            y={centre(i) + 4.5}
            textAnchor="middle"
            fontSize="13"
            fontFamily="ui-monospace, monospace"
            fill="#ffffff"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}
