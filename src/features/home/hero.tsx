import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

/** Dark atmospheric hero: the headline and the light do the work. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="atmos-dark flex min-h-svh flex-col">
      {/* steel-blue light rising from the foot of the screen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-[radial-gradient(90%_100%_at_50%_100%,rgb(8_127_202/0.5),rgb(23_75_197/0.18)_55%,transparent_80%)]"
      />
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pt-32 pb-28 text-center">
        <h1
          id="hero-title"
          className="max-w-3xl text-[clamp(2.25rem,1.4rem+3.4vw,4.25rem)] leading-[1.08] font-normal tracking-[-0.03em] text-white motion-safe:animate-rise"
        >
          Turn business complexity into{" "}
          <span className="text-cyan-200">intelligent operations.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-silver-300 motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
          AI solutions, custom software and enterprise platforms.
        </p>
        <div className="mt-8 motion-safe:animate-rise motion-safe:[animation-delay:220ms]">
          <ButtonLink
            href="/contact/"
            variant="outline-dark"
            arrow
            className="border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur-sm hover:bg-white/15"
          >
            Start Your AI Journey
          </ButtonLink>
        </div>
      </div>
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm text-silver-200 transition-colors hover:text-white"
      >
        Scroll down
        <ArrowDown aria-hidden="true" className="size-4 motion-safe:animate-pulse-soft" />
      </a>
    </section>
  );
}
