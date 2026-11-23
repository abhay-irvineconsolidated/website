import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { site } from "@/constants/site";

/** Closing call to action on a halo ground, used at the end of every page. */
export function CtaSection({
  eyebrow = "Start a conversation",
  title = "Let’s build what’s next.",
  text = "Have a business challenge worth solving? Let’s explore how AI, software and intelligent automation can help.",
  primary = { label: "Start a Conversation", href: "/contact/" },
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section className="ground-halo bg-ice-50 py-32 [--halo-y:50%] lg:py-44">
      <Reveal className="container-content text-center">
        <p className="text-sm font-medium text-electric-600">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-h1">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lead text-slate-600">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={primary.href} variant="primary" size="lg" arrow>
            {primary.label}
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="outline-light" size="lg">
            {site.email}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
