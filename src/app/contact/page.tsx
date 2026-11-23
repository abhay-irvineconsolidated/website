import type { Metadata } from "next";
import Image from "next/image";
import { Check, Mail, MapPin, Newspaper, Phone } from "lucide-react";
import { consultationTopics } from "@/content/enterprise";
import { leadership } from "@/content/company";
import { site } from "@/constants/site";
import { PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { cardSurface } from "@/components/page/cards";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { LinkedInIcon, YouTubeIcon } from "@/components/ui/social-icons";
import { ContactForm } from "@/features/contact/contact-form";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";
import chrisPhoto from "../../../public/images/team/chris-irvine.png";

const path = "/contact/";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Talk to Irvine Consolidated about AI, software, automation or Workday. Send a message, email info@irvineconsolidated.com or book a consultation.",
  path,
});

const details = [
  { icon: Mail, label: "General enquiries", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone.display, href: site.phone.href },
  { icon: Newspaper, label: "Media", value: site.mediaEmail, href: `mailto:${site.mediaEmail}` },
  { icon: MapPin, label: "Based in", value: "Houston, Texas · 100% remote team" },
];

export default function ContactPage() {
  const person = leadership.people[0];
  return (
    <>
      <PageHero
        title="Let’s build what’s next."
        intro="Tell us what you’re working on, and the right person will get back to you."
        crumbs={[{ name: "Contact", path }]}
      />

      <Section ground="mist" id="form" className="pt-8 lg:pt-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className={cn(cardSurface, "relative p-6 sm:p-9 lg:col-span-8")}>
            <h2 className="text-h3">Send us a message</h2>
            <p className="mt-2 mb-8 text-slate-600">Fields marked * are required.</p>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-4">
            <ul className={cn(cardSurface, "p-2")}>
              {details.map((d) => {
                const Icon = d.icon;
                const inner = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                      <Icon aria-hidden="true" className="size-[1.125rem]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-slate-600">{d.label}</span>
                      <span className="block font-medium break-words text-ink">{d.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={d.label} className="border-b border-ink/[0.07] last:border-b-0">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="flex items-center gap-4 rounded-xl px-4 py-4 transition-colors pointer-fine:hover:bg-ice-50"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 px-4 py-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-pill border border-ink/15 bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-electric-600 hover:text-electric-600"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-pill border border-ink/15 bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-electric-600 hover:text-electric-600"
              >
                <YouTubeIcon className="size-4" />
                YouTube
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {person ? (
        <Section ground="grain" id="schedule">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-6">
              <p className="text-sm font-medium text-electric-600">Schedule a consultation</p>
              <h2 className="mt-3 max-w-xl text-h2">Your partner in achieving Workday success.</h2>
              <p className="mt-5 max-w-lg text-lead text-slate-600">
                Book time with {person.name}, our {person.role}, on any of these topics.
              </p>
              <ButtonLink
                href={site.schedulingUrl}
                variant="primary"
                size="lg"
                arrow
                className="mt-8"
              >
                Schedule a Meeting
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <div className={cn(cardSurface, "p-2")}>
                <div className="flex items-center gap-4 px-4 pt-4 pb-3">
                  <Image
                    src={chrisPhoto}
                    alt=""
                    className="size-14 rounded-full object-cover"
                    sizes="56px"
                  />
                  <div>
                    <p className="font-semibold text-ink">{person.name}</p>
                    <p className="text-sm text-slate-600">{person.role}</p>
                  </div>
                </div>
                <ul>
                  {consultationTopics.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-3 border-t border-ink/[0.07] px-4 py-3.5 font-medium text-ink"
                    >
                      <Check aria-hidden="true" className="size-4 text-turquoise-700" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}
    </>
  );
}
