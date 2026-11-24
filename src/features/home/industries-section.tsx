import { industries } from "@/content/company";
import { Reveal } from "@/components/ui/motion";

/** Dark, typographic: ten industries as large names between hairlines. */
export function IndustriesSection() {
  return (
    <section className="atmos-dark py-24 lg:py-36">
      <div className="container-wide">
        <Reveal>
          <p className="kicker text-brand-cyan">Industries</p>
          <h2 className="mt-6 max-w-3xl text-h1 text-white">
            Technology for complex business environments.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-x-16 lg:mt-20 lg:grid-cols-2">
          {industries.map((ind) => (
            <li
              key={ind.name}
              className="group flex flex-col justify-between gap-1 border-t border-white/10 py-6 transition-colors sm:flex-row sm:items-baseline sm:gap-6 lg:py-7"
            >
              <span className="text-h3 text-white transition-colors group-hover:text-brand-cyan">
                {ind.name}
              </span>
              <span className="text-sm text-silver-300 sm:max-w-[14rem] sm:text-right">
                {ind.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
