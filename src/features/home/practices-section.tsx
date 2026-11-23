import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { PracticeArt } from "@/components/visualizations/practice-art";

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

export function PracticesSection() {
  return (
    <section id="what-we-do" className="scroll-mt-24 bg-ice-50 pt-10 pb-24 lg:pb-32">
      <div className="container-wide">
        <Reveal className="max-w-3xl">
          <h2 className="text-h2">Three practices, one engineering team.</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {practices.map((p) => (
            <StaggerItem key={p.href} className="flex flex-col">
              <PracticeArt
                variant={p.variant}
                className="aspect-[4/3] overflow-hidden rounded-[2rem]"
              />
              <h3 className="mt-7 text-h3">{p.name}</h3>
              <p className="mt-2 text-slate-600">{p.text}</p>
              <ButtonLink href={p.href} variant="outline-light" arrow className="mt-6 self-start">
                See {p.name}
              </ButtonLink>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
