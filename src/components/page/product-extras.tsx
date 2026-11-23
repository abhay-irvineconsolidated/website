import Image from "next/image";
import { productFeatures, productLinks } from "@/content/enterprise";
import { ButtonLink } from "@/components/ui/button";
import productShot from "../../../public/images/products/bulk-one-time-payments.png";

/** Reward My Team icon, the launch feature list and the demo and Marketplace links. */
export function ProductExtras() {
  return (
    <div className="grid gap-10">
      <div className="flex items-center gap-6">
        <Image
          src={productShot}
          alt="Reward My Team app icon"
          className="size-28"
          sizes="112px"
          placeholder="blur"
        />
        <p className="max-w-xs text-slate-600">Available on the Workday Marketplace.</p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2">
        {productFeatures.map((f) => (
          <li key={f.title} className="border-t border-ink/15 pt-4">
            <p className="font-semibold text-ink">{f.title}</p>
            <p className="mt-1 leading-relaxed text-slate-600">{f.text}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={productLinks.demo} variant="primary" arrow external>
          Book a Demo
        </ButtonLink>
        <ButtonLink href={productLinks.marketplace} variant="outline-light" arrow external>
          View on the Marketplace
        </ButtonLink>
      </div>
    </div>
  );
}
