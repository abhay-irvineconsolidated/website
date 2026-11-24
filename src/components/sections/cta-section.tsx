import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { site } from "@/constants/site";

/** Closing call to action on the dark atmospheric ground, used at the end of every page. */
export function CtaSection({
  title = "Let’s build what’s next.",
  text = "Tell us about your goals. We’ll help turn them into a practical, production-ready solution.",
  primary = { label: "Start a Conversation", href: "/contact/" },
}: {
  /** Kept for existing callers; the closing band no longer shows an eyebrow. */
  eyebrow?: string;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section className="atmos-dark py-28 text-center lg:py-40">
      <Reveal className="container-content">
        <h2 className="mx-auto max-w-3xl text-h1 text-white">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lead text-silver-200">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <ButtonLink href={primary.href} variant="accent" size="lg" arrow>
            {primary.label}
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="link-dark">
            {site.email}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
