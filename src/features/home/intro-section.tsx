import { Reveal } from "@/components/ui/motion";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { IntroVisual } from "@/components/visualizations/home-visuals";

/** Light editorial introduction: statement left, one bespoke visual right. */
export function IntroSection() {
  return (
    <section id="intro" className="paper scroll-mt-0">
      <div className="container-wide grid items-center gap-14 py-24 lg:grid-cols-12 lg:gap-8 lg:py-36">
        <Reveal className="lg:col-span-6">
          <p className="kicker text-electric-600">Who we are</p>
          <h2 className="mt-6 max-w-xl text-h1">
            Technology that transforms how businesses operate.
          </h2>
          <p className="mt-8 max-w-lg text-lead text-slate-600">
            Irvine Consolidated combines AI engineering, software development and enterprise
            technology expertise in one team, so the systems we deliver work in the real world.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <IntroVisual className="mx-auto w-full max-w-md text-brand-midnight lg:max-w-none" />
        </Reveal>
      </div>
      <div className="border-t border-ink/[0.07] py-8">
        <LogoMarquee />
      </div>
    </section>
  );
}
