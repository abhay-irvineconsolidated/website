import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { PracticeVisual } from "@/components/visualizations/home-visuals";
import { cn } from "@/lib/utils";

const practices = [
  {
    variant: "ai" as const,
    name: "AI Solutions",
    text: "Agents, automation and knowledge systems grounded in your own data.",
    href: "/ai-solutions/",
  },
  {
    variant: "software" as const,
    name: "Software & Workflows",
    text: "Custom applications, workflow systems and integrations, built end to end.",
    href: "/software-workflows/",
  },
  {
    variant: "enterprise" as const,
    name: "Enterprise Solutions",
    text: "Workday implementation, support and engineering since 2015.",
    href: "/enterprise-solutions/",
  },
];

/** Dark editorial rows: a large drawn visual and a statement, alternating sides. */
export function PracticesSection() {
  return (
    <section id="what-we-do" className="atmos-navy scroll-mt-24 py-24 lg:py-36">
      <div className="container-wide">
        <Reveal>
          <p className="kicker text-brand-cyan">What we do</p>
          <h2 className="mt-6 max-w-3xl text-h1 text-white">
            Three practices, one engineering team.
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          {practices.map((p, i) => (
            <Reveal
              key={p.href}
              className="grid items-center gap-8 border-t border-white/10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
            >
              <PracticeVisual
                variant={p.variant}
                className={cn(
                  "w-full max-w-xl text-white lg:col-span-6",
                  i % 2 === 1 && "lg:order-2 lg:col-start-7",
                )}
              />
              <div
                className={cn(
                  "lg:col-span-5",
                  i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8",
                )}
              >
                <p className="kicker text-silver-300">0{i + 1}</p>
                <h3 className="mt-4 text-h2 text-white">{p.name}</h3>
                <p className="mt-5 max-w-md text-lead text-silver-200">{p.text}</p>
                <ButtonLink href={p.href} variant="link-dark" arrow className="mt-8">
                  See {p.name}
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
