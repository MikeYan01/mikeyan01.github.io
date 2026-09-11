import { navBarConfig } from "@/config";
import type { NavBarLink } from "@/types/navBarConfig";
import { resolveNavbarLinks } from "@/utils/navbar-i18n";

/** 解析导航栏链接的 i18n 名称。Navbar 与 NavMenuPanel 共用。 */
export function resolveNavMenuLinks(): NavBarLink[] {
	return resolveNavbarLinks(navBarConfig.links);
}
