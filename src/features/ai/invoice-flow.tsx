"use client";

import { useState } from "react";
import { invoiceScenario, type InvoiceLane } from "@/content/ai-solutions";
import { cn } from "@/lib/utils";

const laneDot: Record<InvoiceLane, string> = {
  "Enterprise Intelligence": "bg-cyan-400",
  "AI Agents & Automation": "bg-turquoise-500",
  "AI Engineering & Integration": "bg-electric-500",
};

/**
 * One illustrative invoice, stepped through five stages. The left list picks the step and names
 * which capability does the work; the ledger on the right fills in as the invoice moves on.
 * Values are invented for illustration. Native buttons, so it is keyboard and screen-reader usable.
 */
export function InvoiceFlow() {
  const { steps, rows, record } = invoiceScenario;
  const [active, setActive] = useState(0);
  const visible = rows.filter((r) => r.step <= active);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <ol className="border-t border-ink/15">
          {steps.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.title} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={on ? "step" : undefined}
                  aria-controls="invoice-ledger"
                  className="group flex w-full items-start gap-5 py-5 text-left"
                >
                  <span
                    className={cn(
                      "pt-1 font-mono text-sm transition-colors",
                      on ? "text-electric-600" : "text-slate-500",
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-xl font-semibold transition-colors",
                        on ? "text-ink" : "text-slate-600 group-hover:text-ink",
                      )}
                    >
                      {s.title}
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                      <span
                        aria-hidden="true"
                        className={cn("size-2 rounded-full", laneDot[s.lane])}
                      />
                      {s.lane}
                    </span>
                    {on ? (
                      <span className="mt-3 block leading-relaxed text-slate-600 motion-safe:animate-rise">
                        {s.text}
                      </span>
                    ) : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="lg:col-span-7">
        <div
          id="invoice-ledger"
          aria-live="polite"
          className="rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_-40px_rgb(8_13_32/0.35)] ring-1 ring-ink/[0.06] sm:p-9"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/10 pb-5">
            <div>
              <p className="font-mono text-xs tracking-[0.14em] text-slate-500 uppercase">
                Invoice
              </p>
              <p className="mt-1 text-2xl font-semibold text-ink">{record.id}</p>
            </div>
            <p
              key={active}
              className="rounded-full bg-turquoise-100 px-4 py-1.5 text-sm font-semibold text-teal-900 motion-safe:animate-rise"
            >
              {steps[active]?.status}
            </p>
          </div>

          <dl className="divide-y divide-ink/[0.07]">
            {visible.map((r) => (
              <div
                key={r.label}
                className={cn(
                  "grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6",
                  r.step === active && "motion-safe:animate-rise",
                )}
              >
                <dt className="text-sm text-slate-600">{r.label}</dt>
                <dd className={cn("font-medium", r.warn ? "text-[#a14400]" : "text-ink")}>
                  {r.value}
                  {r.source ? (
                    <span className="mt-0.5 block text-sm font-normal text-slate-600">
                      Source: {r.source}
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Illustrative example only. Invoice, vendor and figures are invented; this is not a client
          implementation.
        </p>
      </div>
    </div>
  );
}
