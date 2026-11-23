import type { Metadata } from "next";
import { absoluteUrl, site } from "@/constants/site";

export const OG_IMAGE = {
  url: "/opengraph-image/",
  width: 1200,
  height: 630,
  alt: "Irvine Consolidated: Engineering intelligence into every workflow",
};

/** Title, description, canonical URL and social tags for a page. `path` must match its URL. */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const shareTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: shareTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** schema.org BreadcrumbList from [label, path] pairs (Home is prepended). */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export const organizationId = `${site.url}/#organization`;
