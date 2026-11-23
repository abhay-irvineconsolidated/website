import Image from "next/image";
import { cn } from "@/lib/utils";
import logoColor from "../../../public/images/brand/logo-color.png";
import logoWhite from "../../../public/images/brand/logo-orange-white.png";

/**
 * The Irvine Consolidated logo, used exactly as supplied.
 * `tone="dark"` (for dark surfaces) uses the orange-and-white version (the official color logo with its navy recolored to white).
 */
export function Logo({
  tone = "dark",
  className,
  priority,
}: {
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const src = tone === "dark" ? logoWhite : logoColor;
  return (
    <Image
      src={src}
      alt="Irvine Consolidated"
      priority={priority}
      sizes="200px"
      className={cn("h-8 w-auto", className)}
    />
  );
}
