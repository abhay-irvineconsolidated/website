import { approach } from "@/content/company";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/** Discover → Architect → Build → Deploy → Evolve. Shared by Home and About. */
export function ApproachSteps({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Stagger as="ol" gap={0.1} className="relative grid gap-10 md:grid-cols-5 md:gap-6">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-[1.125rem] right-0 left-0 hidden h-px md:block",
          dark ? "bg-white/10" : "bg-ink/10",
        )}
      />
      {approach.map((step, i) => (
        <StaggerItem as="li" key={step.title} className="relative">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "relative z-10 flex size-9 items-center justify-center rounded-full border font-mono text-xs",
                i === approach.length - 1
                  ? "border-turquoise-500 bg-turquoise-500 text-midnight-900"
                  : dark
                    ? "border-white/20 bg-midnight-900 text-white"
                    : "border-ink/15 bg-white text-ink",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className={cn("mt-6 text-h3", dark ? "text-white" : "text-ink")}>{step.title}</h3>
          <p className={cn("mt-2 font-medium", dark ? "text-silver-200" : "text-ink")}>
            {step.text}
          </p>
          <ul
            className={cn("mt-4 space-y-1.5 text-sm", dark ? "text-silver-300" : "text-slate-600")}
          >
            {step.detail.map((d) => (
              <li key={d} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className={dark ? "text-turquoise-500" : "text-turquoise-700"}
                >
                  —
                </span>
                {d}
              </li>
            ))}
          </ul>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
