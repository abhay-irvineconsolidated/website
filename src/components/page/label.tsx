import { cn } from "@/lib/utils";

/** Small mono section label. `dark` is for midnight panels. */
export function Label({
  children,
  dark,
  className,
}: {
  children: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs tracking-[0.18em] uppercase",
        dark ? "text-turquoise-500" : "text-electric-600",
        className,
      )}
    >
      {children}
    </p>
  );
}
