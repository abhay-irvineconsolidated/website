"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { duration, ease } from "@/constants/motion";

type StepKind = "input" | "ai" | "system" | "human" | "outcome";
type Scenario = {
  id: string;
  label: string;
  summary: string;
  href: string;
  linkLabel: string;
  steps: { kind: StepKind; title: string; detail: string }[];
};

/** Illustrative scenarios: how each AI capability moves work from request to outcome. */
const scenarios: Scenario[] = [
  {
    id: "documents",
    label: "Document intelligence",
    summary:
      "Invoices, forms and contracts are read, classified and validated automatically. People only see the exceptions.",
    href: "/ai-solutions/ai-agents/#intelligent-automation",
    linkLabel: "Intelligent automation",
    steps: [
      { kind: "input", title: "Document arrives", detail: "Invoice, form or contract" },
      { kind: "ai", title: "Extract & classify", detail: "Fields, entities, document type" },
      { kind: "system", title: "Validate", detail: "Match against ERP records" },
      { kind: "human", title: "Review exceptions", detail: "Only what needs judgement" },
      { kind: "outcome", title: "Posted & filed", detail: "With a full audit trail" },
    ],
  },
  {
    id: "knowledge",
    label: "Knowledge assistant",
    summary:
      "Employees ask in plain language and get answers grounded in your current policies and records, with sources cited.",
    href: "/ai-solutions/enterprise-ai/",
    linkLabel: "Enterprise AI",
    steps: [
      { kind: "input", title: "Question asked", detail: "In chat, portal or Teams" },
      { kind: "system", title: "Retrieve", detail: "Permission-aware search" },
      { kind: "ai", title: "Generate answer", detail: "Grounded, with citations" },
      { kind: "ai", title: "Quality check", detail: "Confidence & guardrails" },
      { kind: "outcome", title: "Answer + sources", detail: "Or a hand-off to an expert" },
    ],
  },
  {
    id: "support",
    label: "Support automation",
    summary:
      "An agent triages every request, gathers context from your systems and drafts a resolution, escalating with full context when a person is needed.",
    href: "/ai-solutions/ai-agents/",
    linkLabel: "AI agents",
    steps: [
      { kind: "input", title: "Ticket received", detail: "Email, form or chat" },
      { kind: "ai", title: "Triage agent", detail: "Intent, priority, routing" },
      { kind: "system", title: "Gather context", detail: "Account, history, policy" },
      { kind: "ai", title: "Draft resolution", detail: "Steps and response" },
      { kind: "outcome", title: "Resolve or escalate", detail: "With everything attached" },
    ],
  },
  {
    id: "workflow",
    label: "Agentic workflow",
    summary:
      "A business event triggers an agent that plans the steps, acts across systems and pauses for approval before anything sensitive changes.",
    href: "/ai-solutions/ai-agents/",
    linkLabel: "Agentic workflows",
    steps: [
      { kind: "input", title: "Business event", detail: "New hire, request, change" },
      { kind: "ai", title: "Plan", detail: "Break work into steps" },
      { kind: "system", title: "Act across systems", detail: "Secure tool calls" },
      { kind: "human", title: "Approve", detail: "Before sensitive changes" },
      { kind: "outcome", title: "Complete & log", detail: "Every action traceable" },
    ],
  },
  {
    id: "apps",
    label: "AI-powered apps",
    summary:
      "Generative AI built into the applications your teams already use: drafting, summarizing and analyzing in context.",
    href: "/ai-solutions/generative-ai/",
    linkLabel: "Generative AI",
    steps: [
      { kind: "input", title: "User intent", detail: "Inside an existing app" },
      { kind: "system", title: "Assemble context", detail: "Your data & templates" },
      { kind: "ai", title: "Generate", detail: "Structured output" },
      { kind: "human", title: "Edit & approve", detail: "People stay in control" },
      { kind: "outcome", title: "Result in context", detail: "Saved where work happens" },
    ],
  },
];

/** Lower-case a label for use mid-sentence, leaving acronyms ("AI agents") alone. */
const sentenceStart = (s: string) =>
  /^[A-Z][A-Z]/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1);

const kindLabel: Record<StepKind, string> = {
  input: "Input",
  ai: "AI",
  system: "Your systems",
  human: "Person",
  outcome: "Outcome",
};

const kindDot: Record<StepKind, string> = {
  input: "bg-silver-300",
  ai: "bg-turquoise-500",
  system: "bg-electric-400",
  human: "bg-white",
  outcome: "bg-cyan-400",
};

/**
 * Use cases as a plain vertical list (click or arrow keys); the selected one's pipeline is drawn
 * straight on the section's ground: one hairline, numbered markers, a signal stepping through.
 */
export function AgentWorkflow() {
  const [active, setActive] = useState(0);
  const [pulse, setPulse] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(rootRef, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const baseId = useId();
  const scenario = scenarios[active] ?? scenarios[0]!;
  const n = scenario.steps.length;

  // The signal walks the pipeline in a 3.3 s cycle while the section is on screen.
  useEffect(() => {
    if (!inView || reduce) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % (n + 1)), 660);
    return () => clearInterval(t);
  }, [inView, reduce, n]);

  const select = (i: number) => {
    setActive(i);
    setPulse(0);
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = scenarios.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? i === last
          ? 0
          : i + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? i === 0
            ? last
            : i - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  const lit = reduce ? n : pulse;

  return (
    <div ref={rootRef} className="grid gap-12 lg:grid-cols-12 lg:gap-6">
      <div
        role="tablist"
        aria-label="AI use cases"
        aria-orientation="vertical"
        className="flex flex-col lg:col-span-3"
      >
        {scenarios.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`${baseId}-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={cn(
                "relative flex min-h-12 items-center py-2 pl-5 text-left text-[1.0625rem] transition-colors duration-150",
                selected ? "text-white" : "text-silver-300 hover:text-white",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-2.5 bottom-2.5 left-0 w-0.5 transition-colors duration-200",
                  selected ? "bg-turquoise-500" : "bg-white/12",
                )}
              />
              {s.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${scenario.id}`}
        className="lg:col-span-8 lg:col-start-5"
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={scenario.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.fast, ease: ease.standard }}
          >
            <p className="max-w-xl text-h4 leading-snug font-normal text-white">
              {scenario.summary}
            </p>

            <ol className="relative mt-12 grid gap-7 md:mt-14 md:grid-cols-5 md:gap-4">
              {/* the line: vertical on phones, horizontal from md */}
              <span
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-[0.4375rem] w-px bg-white/15 md:top-[0.4375rem] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto"
              />
              <span
                aria-hidden="true"
                style={{ ["--p" as string]: Math.min(lit, n - 1) / Math.max(1, n - 1) }}
                className="absolute top-2 left-[0.4375rem] h-[calc((100%-1rem)*var(--p))] w-px bg-turquoise-500 transition-[height,width] duration-500 ease-(--ease-standard) md:top-[0.4375rem] md:left-0 md:h-px md:w-[calc(80%*var(--p))]"
              />
              {scenario.steps.map((step, i) => {
                const on = lit > i;
                return (
                  <li
                    key={step.title + i}
                    className="relative grid grid-cols-[1.5rem_1fr] gap-x-4 md:block"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "relative z-10 mt-0.5 block size-3.5 rounded-full border transition-[background-color,border-color] duration-300 md:mt-0",
                        on
                          ? step.kind === "ai"
                            ? "border-turquoise-500 bg-turquoise-500"
                            : "border-white bg-midnight-900"
                          : "border-white/30 bg-midnight-900",
                      )}
                    />
                    <div className="md:mt-6 md:pr-2">
                      <p className="flex items-center gap-2 font-mono text-[0.8125rem] text-silver-300">
                        <span
                          aria-hidden="true"
                          className={cn("size-1.5 rounded-full", kindDot[step.kind])}
                        />
                        {String(i + 1).padStart(2, "0")} {kindLabel[step.kind]}
                      </p>
                      <p className="mt-2 font-medium text-white">{step.title}</p>
                      <p className="mt-1 text-[0.9375rem] leading-snug text-silver-300">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <Link
              href={scenario.href}
              className="draw-host mt-12 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-turquoise-500 hover:text-turquoise-300"
            >
              <span className="draw">See {sentenceStart(scenario.linkLabel)}</span>
              <ArrowRight aria-hidden="true" className="nudge size-4" />
            </Link>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
