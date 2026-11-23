import {
  Check,
  ChevronRight,
  GitBranch,
  Inbox,
  BarChart3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A request-and-approval application of the kind we build: a queue beside the open request, whose
 * workflow includes an AI policy check. Live HTML, sample data, decorative for assistive tech (the
 * section's text says what it shows).
 */
const queue = [
  { id: "REQ-2483", title: "Finance BI access", who: "S. Patel", age: "2h", status: "check" },
  {
    id: "REQ-2481",
    title: "Q4 spot bonuses: Field Ops",
    who: "M. Alvarez",
    age: "5h",
    status: "waiting",
  },
  { id: "REQ-2479", title: "Vendor onboarding", who: "J. Chen", age: "1d", status: "waiting" },
  {
    id: "REQ-2476",
    title: "Contract renewal: facilities",
    who: "R. Okafor",
    age: "2d",
    status: "waiting",
  },
  { id: "REQ-2470", title: "New starter equipment", who: "L. Moreau", age: "3d", status: "done" },
] as const;

const status = {
  check: { label: "AI check", cls: "bg-turquoise-100 text-turquoise-700" },
  waiting: { label: "Waiting", cls: "bg-electric-50 text-electric-600" },
  done: { label: "Approved", cls: "bg-ice-100 text-slate-600" },
} as const;

const steps = [
  { title: "Submitted", meta: "S. Patel · Mon 09:12", state: "done" },
  { title: "Manager approval", meta: "J. Chen · Mon 10:40", state: "done" },
  { title: "AI policy check", meta: "Flagged for review", state: "ai" },
  { title: "Security review", meta: "Waiting on you", state: "current" },
  { title: "Provision access", meta: "Automatic after approval", state: "todo" },
] as const;

export function AppMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-xl bg-white text-ink shadow-raised ring-1 ring-ink/10 select-none",
        className,
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-ink/[0.07] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink/12" />
          <span className="size-2.5 rounded-full bg-ink/12" />
          <span className="size-2.5 rounded-full bg-ink/12" />
        </div>
        <span className="mx-auto font-mono text-[0.6875rem] text-slate-500">
          requests.yourcompany.com
        </span>
      </div>

      <div className="grid min-h-[30rem] grid-cols-[3.25rem_1fr] md:grid-cols-[11.5rem_1fr] lg:grid-cols-[11.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* rail */}
        <nav className="border-r border-ink/[0.07] bg-ice-50 p-2 md:p-3">
          <p className="hidden px-2 pt-1 pb-3 text-[0.8125rem] font-semibold md:block">Requests</p>
          {[
            { icon: Inbox, label: "Inbox" },
            { icon: ShieldCheck, label: "Approvals", count: 4, active: true },
            { icon: GitBranch, label: "Workflows" },
            { icon: BarChart3, label: "Reports" },
          ].map(({ icon: Icon, label, count, active }) => (
            <div
              key={label}
              className={cn(
                "mb-0.5 flex items-center gap-2.5 rounded-md px-2 py-2 text-[0.8125rem]",
                active ? "bg-white font-medium shadow-card" : "text-slate-600",
              )}
            >
              <Icon
                className={cn("size-4 shrink-0", active ? "text-electric-600" : "text-slate-500")}
              />
              <span className="hidden flex-1 md:inline">{label}</span>
              {count && (
                <span className="hidden rounded bg-electric-600 px-1.5 text-[0.6875rem] font-medium text-white md:inline">
                  {count}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* queue */}
        <div className="hidden border-r border-ink/[0.07] md:block">
          <div className="flex items-center gap-2 border-b border-ink/[0.07] px-4 py-3">
            <Search className="size-3.5 text-slate-500" />
            <span className="text-[0.75rem] text-slate-500">Search requests</span>
          </div>
          <div className="flex gap-4 px-4 pt-3 text-[0.75rem]">
            <span className="border-b-2 border-ink pb-2 font-medium">Waiting on me · 4</span>
            <span className="pb-2 text-slate-500">All open · 24</span>
          </div>
          <ul className="border-t border-ink/[0.07]">
            {queue.map((r, i) => (
              <li
                key={r.id}
                className={cn(
                  "flex items-center gap-3 border-b border-ink/[0.06] px-4 py-3",
                  i === 0 && "bg-electric-50/60 shadow-[inset_2px_0_0_var(--color-electric-600)]",
                )}
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.8125rem] font-medium">{r.title}</p>
                  <p className="mt-0.5 text-[0.6875rem] text-slate-500">
                    {r.id} · {r.who} · {r.age}
                  </p>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded px-1.5 py-0.5 text-[0.6875rem] font-medium",
                    status[r.status].cls,
                  )}
                >
                  {status[r.status].label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* detail */}
        <div className="min-w-0 p-4 sm:p-5 md:hidden lg:block xl:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.6875rem] text-slate-500">REQ-2483</p>
              <p className="mt-1 text-[1.0625rem] font-semibold tracking-[-0.01em]">
                Finance BI access
              </p>
            </div>
            <span className="rounded bg-electric-50 px-2 py-1 text-[0.6875rem] font-medium text-electric-600">
              Security review
            </span>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.75rem]">
            {[
              ["Requested by", "S. Patel, Finance"],
              ["System", "Finance BI"],
              ["Role requested", "Workspace admin"],
              ["Needed by", "Friday"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-slate-500">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <ol className="mt-5 border-t border-ink/[0.07] pt-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative grid grid-cols-[1.25rem_1fr] gap-x-3 pb-3 last:pb-0"
              >
                {i < steps.length - 1 && (
                  <span className="absolute top-5 bottom-0 left-[0.5625rem] w-px bg-ink/10" />
                )}
                <span
                  className={cn(
                    "relative z-10 mt-0.5 flex size-[1.125rem] items-center justify-center rounded-full border",
                    s.state === "done" && "border-electric-600 bg-electric-600 text-white",
                    s.state === "ai" && "border-turquoise-500 bg-turquoise-500 text-midnight-900",
                    s.state === "current" && "border-electric-600 bg-white",
                    s.state === "todo" && "border-ink/20 bg-white",
                  )}
                >
                  {s.state === "done" && <Check className="size-3" strokeWidth={3} />}
                  {s.state === "ai" && <Sparkles className="size-2.5" />}
                  {s.state === "current" && (
                    <span className="size-1.5 rounded-full bg-electric-600" />
                  )}
                </span>
                <div>
                  <p className="text-[0.8125rem] font-medium">{s.title}</p>
                  <p className="text-[0.6875rem] text-slate-500">{s.meta}</p>
                  {s.state === "ai" && (
                    <div className="mt-2 rounded-md border border-turquoise-500/40 bg-turquoise-100/50 p-2.5 text-[0.75rem] leading-snug">
                      Workspace admin is above the access a Finance analyst normally holds.{" "}
                      <span className="font-medium">Suggested: Analyst, read-only.</span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex gap-2">
            <span className="rounded-md bg-electric-600 px-3 py-1.5 text-[0.75rem] font-medium text-white">
              Approve suggested role
            </span>
            <span className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[0.75rem] font-medium ring-1 ring-ink/12">
              Send back <ChevronRight className="size-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
