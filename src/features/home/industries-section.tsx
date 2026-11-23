import { industries } from "@/content/company";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

/** Mist ground (mirrored): heading and the ten industries as white cards, 5 x 2 on desktop. */
export function IndustriesSection() {
  return (
    <section className="ground-mist-alt bg-ice-50 py-28 lg:py-36">
      <div className="container-wide">
        <Reveal className="max-w-3xl">
          <h2 className="text-h2">Industries we know well.</h2>
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {industries.map((ind) => (
            <StaggerItem
              key={ind.name}
              className="rounded-2xl border border-ink/[0.07] bg-white p-5 shadow-[0_18px_40px_-28px_rgb(11_17_36/0.3)] sm:p-6"
            >
              <h3 className="text-lg leading-snug font-semibold text-ink">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{ind.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
