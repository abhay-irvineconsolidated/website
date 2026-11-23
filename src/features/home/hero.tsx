import { ButtonLink } from "@/components/ui/button";
import { LogoMarquee } from "@/components/sections/logo-marquee";

/**
 * Centred hero on the horizon ground: title, one line, two actions.
 * A light sheet carrying the platform marquee rounds up over its foot.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="surface-horizon flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center px-5 pt-32 pb-60 text-center text-white">
        <div className="relative w-full">
          <h1
            id="hero-title"
            className="mx-auto max-w-5xl text-display text-white motion-safe:animate-rise"
          >
            Engineering <span className="text-gradient-accent">intelligence</span> into every
            workflow.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lead text-silver-200 motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
            Enterprise AI, custom software and connected systems that change how your business runs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 motion-safe:animate-rise motion-safe:[animation-delay:220ms] sm:flex-row">
            <ButtonLink href="/ai-solutions/" variant="accent" size="lg" arrow>
              Explore Our Solutions
            </ButtonLink>
            <ButtonLink href="/contact/" variant="outline-dark" size="lg">
              Let’s Talk
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-12 rounded-t-[2.5rem] bg-ice-50">
        <div className="py-10">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}
