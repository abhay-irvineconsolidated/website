"use cache";

import { cacheLife } from "next/cache";

/**
 * Current year for the copyright line. With Cache Components, reading the clock during prerender
 * must happen inside a cached scope; this re-renders at most once a day.
 */
export async function CopyrightYear() {
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
