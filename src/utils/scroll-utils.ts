import { navbarMode } from "@/config";
import { updateSidebarStickySpacing } from "@/utils/grid-layout-utils";

let lastScrollTop = 0;
let scrollFrame: number | undefined;

export function scrollFunction(): void {
	if (document.documentElement.classList.contains("is-page-transitioning")) {
		return;
	}

	const scrollTop = document.documentElement.scrollTop;
	const navbar = document.getElementById("navbar-wrapper");
	const navbarElement = document.getElementById("navbar");
	const backToTopBtn = document.getElementById("back-to-top-btn");

	updateSidebarStickySpacing();
	backToTopBtn?.classList.toggle(
		"hide",
		scrollTop <= window.innerHeight * 0.35,
	);

	if (navbar && navbarMode === "dynamic") {
		const delta = scrollTop - lastScrollTop;
		if (delta < 0 || scrollTop <= 80) {
			navbar.classList.remove("navbar-hidden");
		} else if (delta > 0 && scrollTop > 150) {
			navbar.classList.add("navbar-hidden");
		}
		document.body.classList.toggle(
			"dynamic-navbar-hidden",
			navbar.classList.contains("navbar-hidden"),
		);
	} else {
		navbar?.classList.remove("navbar-hidden");
	}

	lastScrollTop = scrollTop;
	navbarElement?.classList.toggle("navbar-sticky-shadow", scrollTop > 8);
}

export function initScroll(): void {
	window.addEventListener(
		"scroll",
		() => {
			if (scrollFrame !== undefined) return;
			scrollFrame = requestAnimationFrame(() => {
				scrollFrame = undefined;
				scrollFunction();
			});
		},
		{ passive: true },
	);

	scrollFunction();
}
