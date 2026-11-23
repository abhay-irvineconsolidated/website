import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  "primary" | "accent" | "outline-dark" | "outline-light" | "link-dark" | "link-light";
export type ButtonSize = "md" | "lg";

const base =
  "group/btn inline-flex min-h-11 items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-(--ease-standard) focus-visible:outline-offset-4 pointer-fine:hover:-translate-y-px active:translate-y-px active:scale-[0.985] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  /** Royal blue, for light and dark surfaces. */
  primary:
    "bg-electric-600 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18)] hover:bg-electric-700",
  /** Turquoise: the "intelligence" accent. Use once per view at most. */
  accent:
    "bg-turquoise-500 text-midnight-900 shadow-[inset_0_1px_0_rgb(255_255_255/0.3)] hover:bg-turquoise-300",
  "outline-dark": "border border-white/20 text-white hover:border-white/45 hover:bg-white/[0.06]",
  "outline-light": "border border-ink/15 text-ink hover:border-ink/35 hover:bg-ink/[0.03]",
  "link-dark":
    "draw rounded-none px-0! py-1 text-white pointer-fine:hover:translate-y-0 hover:text-turquoise-300",
  "link-light":
    "draw rounded-none px-0! py-1 text-electric-600 pointer-fine:hover:translate-y-0 hover:text-electric-800",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Show a trailing arrow (→ for internal, ↗ for external). */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(base, variants[variant], sizes[size], className);
}

function Arrow({ external }: { external?: boolean }) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      aria-hidden="true"
      className="size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
      strokeWidth={2}
    />
  );
}

/** Link styled as a button. Internal links use next/link; external links open in a new tab. */
export function ButtonLink({
  href,
  external,
  variant,
  size,
  arrow,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
        {arrow && <Arrow external={newTab} />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

/** Native button with the same styling (used by forms). */
export function Button({
  variant,
  size,
  arrow,
  className,
  children,
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
