import { Stagger, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/**
 * A sequence of numbered steps along one hairline (stacked with a left rule on mobile).
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
    <Stagger as="ol" className={cn("mt-14 grid gap-10 lg:gap-8", cols, className)}>
      {steps.map((step, i) => (
        <StaggerItem
          as="li"
          key={step.title}
          className="relative border-l border-ink/15 pl-6 lg:border-t lg:border-l-0 lg:pt-7 lg:pl-0"
        >
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-electric-600 lg:-top-[5px] lg:left-0"
          />
          <span className="block kicker text-electric-600">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-h4 text-ink">{step.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">{step.text}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
