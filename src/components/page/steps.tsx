import { Stagger, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/**
 * A left-to-right sequence of numbered steps joined by a line (a vertical rail on mobile).
 * Used for service flows, the delivery lifecycle and the Workday journey.
 */
export function Steps({
  steps,
  className,
}: {
  steps: { title: string; text: string }[];
  className?: string;
}) {
  const cols =
    steps.length >= 7
      ? "lg:grid-cols-7"
      : steps.length === 6
        ? "lg:grid-cols-6"
        : steps.length === 5
          ? "lg:grid-cols-5"
          : steps.length === 4
            ? "lg:grid-cols-4"
            : "lg:grid-cols-3";
  return (
    <Stagger as="ol" className={cn("relative mt-14 grid gap-8 lg:gap-6", cols, className)}>
      <span
        aria-hidden="true"
        className="absolute top-5 bottom-5 left-5 w-px bg-gradient-to-b from-electric-500/50 to-cyan-400/30 lg:top-5 lg:right-[6%] lg:bottom-auto lg:left-[6%] lg:h-px lg:w-auto lg:bg-gradient-to-r"
      />
      {steps.map((step, i) => (
        <StaggerItem as="li" key={step.title} className="relative flex gap-5 lg:block">
          <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-electric-500/30 bg-white font-mono text-sm text-electric-600 shadow-[0_6px_16px_-8px_rgb(11_17_36/0.35)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="lg:mt-6">
            <h3 className="text-lg leading-snug font-semibold text-ink">{step.title}</h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-slate-600">{step.text}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
