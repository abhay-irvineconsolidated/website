import { primaryNav, contactNav } from "@/constants/navigation";
import { HeaderShell } from "@/components/navigation/header-shell";

/**
 * Server wrapper: resolves navigation data on the server and hands the client shell only plain,
 * serialisable strings, so page content modules never ship in the client bundle.
 */
export function Header() {
  return <HeaderShell nav={primaryNav} cta={contactNav} />;
}
