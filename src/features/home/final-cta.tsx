import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { site } from "@/constants/site";

/** Closing dark band, minimal and centred. */
export function FinalCta() {
  return (
    <section className="atmos-dark py-32 text-center lg:py-48">
      <Reveal className="container-content">
        <h2 className="mx-auto max-w-3xl text-display text-white">Let’s build what’s next.</h2>
        <p className="mx-auto mt-8 max-w-xl text-lead text-silver-200">
          Tell us about your goals. We’ll help turn them into a practical, production-ready
          solution.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <ButtonLink href="/contact/" variant="accent" size="lg" arrow>
            Start a Conversation
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="link-dark">
            {site.email}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
