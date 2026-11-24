import type { Metadata } from "next";
import Image from "next/image";
import { aboutIntro, leadership, milestones, mission, values } from "@/content/company";
import { HeroButton, PageHero } from "@/components/page/page-hero";
import { Section, SectionTitle } from "@/components/page/section";
import { Cards, cardSurface } from "@/components/page/cards";
import { Steps } from "@/components/page/steps";
import { Reveal } from "@/components/ui/motion";
import { LinkedInIcon } from "@/components/ui/social-icons";
import { CtaSection } from "@/components/sections/cta-section";
import { pageMeta } from "@/lib/seo";
import { cn, firstSentence } from "@/lib/utils";
import chrisPhoto from "../../../public/images/team/chris-irvine.png";

const path = "/about/";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "Irvine Consolidated is an AI-first technology partner with enterprise roots: Workday specialists since 2015, now engineering AI, software and automated workflows.",
  path,
});

export default function AboutPage() {
  const person = leadership.people[0];
  return (
    <>
      <PageHero
        title={aboutIntro.headline}
        intro={firstSentence(aboutIntro.intro)}
        crumbs={[{ name: "About", path }]}
      >
        <HeroButton href="/contact/">Start a Conversation</HeroButton>
      </PageHero>

      <Section ground="grain">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-medium text-electric-600">Our story</p>
            <h2 className="mt-3 max-w-md text-h2">From Workday specialists to AI-first.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 border-l-2 border-electric-500 pl-6 text-lg leading-relaxed text-slate-600 lg:pl-8">
              {aboutIntro.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section ground="halo" id="mission">
        <SectionTitle title="Mission & vision." align="center" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-5">
          {[
            { label: "Mission", text: mission.originalMission },
            { label: "Vision", text: mission.originalVision },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className={cn(cardSurface, "pt-7 sm:pt-9")}>
              <p className="font-mono text-sm text-electric-600">{m.label}</p>
              <p className="mt-4 text-xl leading-relaxed font-medium text-ink">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ground="mist" id="history">
        <SectionTitle title="Our history." intro="Every milestone, from 2015 to today." />
        <Steps steps={milestones.map((m) => ({ title: `${m.year}: ${m.title}`, text: m.text }))} />
      </Section>

      {person ? (
        <Section ground="grain" id="leadership">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <div className="overflow-hidden rounded-md bg-white">
                <Image
                  src={chrisPhoto}
                  alt={`${person.name}, ${person.role}`}
                  className="aspect-square h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 400px, 100vw"
                  placeholder="blur"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <p className="text-sm font-medium text-electric-600">Leadership</p>
              <blockquote className="mt-4 text-h3 leading-snug font-medium text-ink">
                “{person.quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="font-semibold text-ink">{person.name}</p>
                  <p className="text-slate-600">{person.role}</p>
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-electric-600 hover:text-electric-600"
                >
                  <LinkedInIcon className="size-4" />
                  <span className="sr-only">{person.name} on LinkedIn (opens in a new tab)</span>
                </a>
              </div>
              <p className="mt-6 max-w-xl text-slate-600">{leadership.intro}</p>
            </Reveal>
          </div>
        </Section>
      ) : null}

      <Section ground="mist-alt" id="values">
        <SectionTitle title="What we value." />
        <Cards items={values} cols={4} />
      </Section>

      <CtaSection />
    </>
  );
}
