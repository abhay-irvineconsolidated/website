import { Reveal } from "@/components/ui/motion";
import { ConnectedVisual } from "@/components/visualizations/home-visuals";

/** Light section: one illustration of how the capabilities work together. */
export function ConnectedSection() {
  return (
    <section className="paper py-24 lg:py-36">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
          <p className="kicker text-electric-600">The bigger picture</p>
          <h2 className="mt-6 max-w-xl text-h1">A connected approach to enterprise operations.</h2>
          <p className="mt-8 max-w-lg text-lead text-slate-600">
            AI, custom software, workflows and integrations are not separate projects. We build them
            to work together, and to work with the enterprise systems your business already runs on.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <ConnectedVisual className="mx-auto w-full max-w-2xl text-brand-midnight" />
        </Reveal>
      </div>
    </section>
  );
}
