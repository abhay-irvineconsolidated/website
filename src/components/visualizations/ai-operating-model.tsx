import { operatingModel } from "@/content/ai-solutions";

/**
 * The AI operating model on a midnight panel: five layers on one rail, information in on the left
 * and outcomes out on the right. Governance, oversight, permissions and security run underneath
 * all five. A single pulse travels the rail (CSS, stopped under reduced motion). On mobile the
 * rail turns vertical. Semantic ordered list, so it reads in order without the visuals.
 */
export function AiOperatingModel() {
  const { layers, controls, controlsLabel } = operatingModel;
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-midnight-900 px-6 pt-12 pb-10 text-white sm:px-10 lg:px-14 lg:pt-16 lg:pb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-electric-500/20 blur-3xl"
      />
      <div className="relative">
        {/* The rail, desktop only */}
        <div
          aria-hidden="true"
          className="absolute top-[0.1875rem] right-0 left-0 hidden h-px bg-gradient-to-r from-electric-400/70 via-cyan-400/60 to-turquoise-500/90 lg:block"
        >
          <span className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise-300 shadow-[0_0_14px_3px_rgb(95_224_218/0.6)] motion-safe:animate-travel motion-reduce:hidden" />
        </div>

        <ol className="grid lg:grid-cols-5">
          {layers.map((layer, i) => (
            <li
              key={layer.title}
              className="relative border-l border-white/15 pr-4 pb-10 pl-6 last:pb-10 lg:pr-5"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 -left-[0.3125rem] size-[0.5625rem] rounded-full bg-turquoise-500"
              />
              <p className="font-mono text-sm text-turquoise-500">0{i + 1}</p>
              <h3 className="mt-3 text-xl leading-tight font-semibold text-white">{layer.title}</h3>
              <p className="mt-2 font-mono text-[0.6875rem] tracking-[0.12em] text-cyan-200 uppercase">
                {layer.tag}
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-silver-300">{layer.items}</p>
            </li>
          ))}
        </ol>

        {/* Foundation: the comb of layer lines lands on this rule */}
        <div className="border-t border-turquoise-500/60 pt-6">
          <p className="font-mono text-xs tracking-[0.18em] text-turquoise-500 uppercase">
            {controlsLabel}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-lg font-medium text-white">
            {controls.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
