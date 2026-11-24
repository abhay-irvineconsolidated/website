import { useId, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ControlProps = {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
  "aria-required"?: boolean;
  className: string;
};

/** Label, control and error message, wired together for screen readers. */
export function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: (props: ControlProps) => ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-electric-600">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        "aria-required": required,
        className: cn(
          "w-full rounded-xl border bg-white px-4 py-3 text-base text-ink transition-[border-color,box-shadow] outline-none placeholder:text-slate-500 focus:border-electric-600 focus:ring-4 focus:ring-electric-600/15",
          error ? "border-red-600" : "border-ink/15",
        ),
      })}
      {error ? (
        <p id={errorId} className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
