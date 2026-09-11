import { scheduleContentOverflowEnhancements } from "@/utils/content-overflow-utils";
import { initializeFloatingPanels } from "@/utils/floating-panel-utils";
import {
	updateMainGridCols,
	updateSidebarComponentsVisibility,
} from "@/utils/grid-layout-utils";
import { isHomePage } from "@/utils/layout-utils";
import { scrollFunction } from "@/utils/scroll-utils";
import { applyThemeToDocument, getStoredTheme } from "@/utils/setting-utils";
import { pathsEqual } from "@/utils/url-utils";

function startProgressBar(): void {
	const bar = document.getElementById("progress-bar");
	if (!bar) return;
	bar.getAnimations().forEach((animation) => {
		animation.cancel();
	});
	bar.animate(
		[
			{ transform: "scaleX(0)", opacity: 1 },
			{ transform: "scaleX(0.95)", opacity: 1 },
		],
		{
			duration: 8000,
			easing: "cubic-bezier(0.1, 0.05, 0.1, 1)",
			fill: "forwards",
		},
	);
}

function finishProgressBar(): void {
	const bar = document.getElementById("progress-bar");
	if (!bar) return;
	bar.getAnimations().forEach((animation) => {
		animation.cancel();
	});
	bar.animate(
		[
			{ transform: "scaleX(1)", opacity: 1 },
			{ transform: "scaleX(1)", opacity: 0 },
		],
		{ duration: 500, easing: "ease-out", fill: "forwards" },
	);
}

function registerSwupHooks(): void {
	window.swup.hooks.on(
		"link:click",
		(_visit: unknown, { el }: { el: HTMLAnchorElement }) => {
			document.documentElement.style.setProperty("--content-delay", "0ms");
			const target = new URL(el.href, window.location.href);
			document.documentElement.classList.toggle(
				"is-page-transitioning",
				!pathsEqual(target.pathname, window.location.pathname),
			);
		},
	);

	window.swup.hooks.on("visit:start", (visit: { to: { url: string } }) => {
		startProgressBar();
		const target = new URL(visit.to.url, window.location.href);
		document.body.classList.toggle("is-home", isHomePage(target.pathname));
		document
			.getElementById("navbar-wrapper")
			?.classList.remove("navbar-hidden");
		document.body.classList.remove("dynamic-navbar-hidden");
	});

	window.swup.hooks.on("content:replace", () => {
		initializeFloatingPanels();
		scheduleContentOverflowEnhancements();
		import("@/utils/icon-loader").then(({ initIconLoader }) => {
			initIconLoader();
		});
	});

	window.swup.hooks.on("page:view", () => {
		updateMainGridCols();
		updateSidebarComponentsVisibility();
		// Recheck after the new page's top widgets have completed their transition.
		window.setTimeout(updateSidebarComponentsVisibility, 300);
		applyThemeToDocument(getStoredTheme());
	});

	window.swup.hooks.on("visit:end", () => {
		finishProgressBar();
		window.setTimeout(() => {
			document.documentElement.classList.remove("is-page-transitioning");
			scrollFunction();
		}, 200);
	});
}

export function setupSwupTransitions(): void {
	if (window.swup?.hooks) {
		registerSwupHooks();
	} else {
		document.addEventListener("swup:enable", registerSwupHooks, { once: true });
	}
}
