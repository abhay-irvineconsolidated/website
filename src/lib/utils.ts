import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** tailwind-merge needs to know about our custom font-size tokens so they don't clash with text colours. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "h4", "lead", "body", "caption"] }],
    },
  },
});

/** Compose class names, letting later Tailwind utilities override earlier ones. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format an ISO date (YYYY-MM-DD) for display without timezone drift. */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(Date.UTC(y ?? 1970, (m ?? 1) - 1, d ?? 1));
}

/** The first sentence of a paragraph, for short hero lines (keeps the full text in the content file). */
export function firstSentence(text: string) {
  const match = /^.*?[.!?](?=\s+[A-Z“"‘(]|$)/.exec(text);
  return match ? match[0] : text;
}
