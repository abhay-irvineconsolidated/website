import { Plus } from "lucide-react";
import type { Faq } from "@/types/content";
import { cardSurface } from "@/components/page/cards";
import { cn } from "@/lib/utils";

/** Native disclosure list: works without JavaScript and is keyboard accessible by default. */
export function FaqList({ faqs, className }: { faqs: Faq[]; className?: string }) {
  return (
    <div className={cn(cardSurface, "divide-y divide-ink/[0.07] px-6 sm:px-8", className)}>
      {faqs.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus
              aria-hidden="true"
              className="size-5 shrink-0 text-electric-600 transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** schema.org FAQPage for the same questions. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
