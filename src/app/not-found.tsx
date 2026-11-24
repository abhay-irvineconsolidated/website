import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="atmos-dark flex min-h-svh flex-col items-center justify-center px-5 pt-36 pb-32 text-center text-white">
      <p className="font-mono text-sm text-turquoise-500">404</p>
      <h1 className="mt-4 max-w-3xl text-h1 text-white">
        This page has moved or no longer exists.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lead text-silver-200">
        Our site has been rebuilt. Try one of these instead.
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <ButtonLink href="/" variant="accent" size="lg" arrow>
          Go to the homepage
        </ButtonLink>
        <ButtonLink href="/contact/" variant="outline-dark" size="lg">
          Contact us
        </ButtonLink>
      </div>
    </section>
  );
}
