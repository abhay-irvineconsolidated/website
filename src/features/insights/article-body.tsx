import Link from "next/link";
import { Download, Quote } from "lucide-react";
import type { Block, Inline } from "@/types/insights";
import { ButtonLink } from "@/components/ui/button";

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

function InlineText({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        if ("href" in part) {
          const cls =
            "font-medium text-electric-600 underline decoration-electric-600/30 underline-offset-4 hover:decoration-electric-600";
          const text = part.strong ? <strong>{part.text}</strong> : part.text;
          return isExternal(part.href) ? (
            <a
              key={i}
              href={part.href}
              className={cls}
              {...(part.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {text}
            </a>
          ) : (
            <Link key={i} href={part.href} className={cls}>
              {text}
            </Link>
          );
        }
        return (
          <strong key={i} className="font-semibold text-ink">
            {part.strong}
          </strong>
        );
      })}
    </>
  );
}

/** Renders the small block model used by every insight (see src/types/insights.ts). */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="text-[1.0625rem] leading-[1.8] text-slate-600">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="mt-5 first:mt-0">
                <InlineText parts={block.content} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="mt-12 text-h3 text-ink first:mt-0">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 text-xl font-semibold text-ink">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 grid gap-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-electric-500"
                    />
                    <span>
                      <InlineText parts={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <figure key={i} className="my-10 rounded-2xl bg-ice-50 p-7 sm:p-8">
                <Quote aria-hidden="true" className="size-6 text-electric-500" />
                <blockquote className="mt-4 text-xl leading-relaxed font-medium text-ink">
                  {block.text}
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-600">{block.cite}</figcaption>
              </figure>
            );
          case "download":
            return (
              <a
                key={i}
                href={block.href}
                download
                className="group mt-8 flex items-center gap-4 rounded-2xl border border-ink/10 bg-ice-50 p-5 transition-colors hover:border-electric-600"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-electric-600">
                  <Download aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-ink group-hover:text-electric-600">
                    {block.label}
                  </span>
                  <span className="block text-sm text-slate-600">
                    PDF{block.size ? ` · ${block.size}` : ""}
                  </span>
                </span>
              </a>
            );
          case "cta":
            return (
              <div key={i} className="mt-8">
                <ButtonLink href={block.href} external={block.external} arrow>
                  {block.label}
                </ButtonLink>
              </div>
            );
        }
      })}
    </div>
  );
}
