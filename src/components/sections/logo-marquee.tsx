/* eslint-disable @next/next/no-img-element -- tiny local SVG marks, no optimisation needed */

/**
 * Platforms named in our own service content (software.ts, enterprise.ts, ai-solutions.ts).
 * Marks from Simple Icons; names are trademarks of their owners. Listing a platform
 * states that we work with it, not a partnership (Workday is the one formal partnership).
 */
const platforms: { name: string; file?: string }[] = [
  { name: "Workday" },
  { name: "OpenAI", file: "openai" },
  { name: "Anthropic", file: "anthropic" },
  { name: "AWS", file: "amazonaws" },
  { name: "Microsoft Azure", file: "microsoftazure" },
  { name: "Google Cloud", file: "googlecloud" },
  { name: "Databricks", file: "databricks" },
  { name: "Snowflake", file: "snowflake" },
  { name: "Python", file: "python" },
  { name: "TypeScript", file: "typescript" },
  { name: "React", file: "react" },
  { name: "Next.js", file: "nextdotjs" },
  { name: ".NET", file: "dotnet" },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-14 pr-14">
      {platforms.map((p) => (
        <li key={p.name} className="flex shrink-0 items-center gap-3">
          {p.file ? (
            <img
              src={`/logos/${p.file}.svg`}
              alt=""
              width={28}
              height={28}
              className="size-7 object-contain"
            />
          ) : null}
          <span className="text-lg font-semibold tracking-tight whitespace-nowrap text-ink">
            {p.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Auto-scrolling platform strip. Pauses on hover; stops under reduced motion. */
export function LogoMarquee() {
  return (
    <div
      role="group"
      aria-label="Platforms we build on and integrate with"
      className="w-full min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
    >
      <div className="flex w-max motion-safe:animate-marquee pointer-fine:hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
