import {
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
	SYSTEM_MODE,
} from "@constants/constants";
import type { LIGHT_DARK_MODE } from "@/types/config";
import { expressiveCodeConfig, sakuraConfig, siteConfig } from "../config";

export function getDefaultHue(): number {
	if (typeof document === "undefined") {
		return siteConfig.themeColor.hue;
	}
	const configHue = document.getElementById("config-carrier")?.dataset.hue;
	return configHue ? Number.parseInt(configHue, 10) : siteConfig.themeColor.hue;
}

export function getDefaultTheme(): LIGHT_DARK_MODE {
	return siteConfig.themeColor.defaultMode ?? DEFAULT_THEME;
}

export function getSystemTheme(): LIGHT_DARK_MODE {
	if (typeof window === "undefined") {
		return LIGHT_MODE;
	}
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? DARK_MODE
		: LIGHT_MODE;
}

export function resolveTheme(theme: LIGHT_DARK_MODE): LIGHT_DARK_MODE {
	return theme === SYSTEM_MODE ? getSystemTheme() : theme;
}

export function getHue(): number {
	if (typeof localStorage === "undefined") {
		return getDefaultHue();
	}
	const stored = localStorage.getItem("hue");
	return stored ? Number.parseInt(stored, 10) : getDefaultHue();
}

export function setHue(hue: number): void {
	if (typeof localStorage === "undefined" || typeof document === "undefined") {
		return;
	}
	localStorage.setItem("hue", String(hue));
	document.documentElement.style.setProperty("--hue", String(hue));
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE): void {
	if (typeof document === "undefined") {
		return;
	}

	const isDark = resolveTheme(theme) === DARK_MODE;
	document.documentElement.classList.toggle("dark", isDark);
	const expectedTheme = isDark
		? expressiveCodeConfig.darkTheme
		: expressiveCodeConfig.lightTheme;
	if (document.documentElement.getAttribute("data-theme") !== expectedTheme) {
		document.documentElement.setAttribute("data-theme", expectedTheme);
	}
}

let systemThemeListener: ((event: MediaQueryListEvent) => void) | null = null;
let systemThemeQuery: MediaQueryList | null = null;

function cleanupSystemThemeListener(): void {
	if (!systemThemeQuery || !systemThemeListener) return;
	if (systemThemeQuery.removeEventListener) {
		systemThemeQuery.removeEventListener("change", systemThemeListener);
	} else {
		systemThemeQuery.removeListener(systemThemeListener);
	}
	systemThemeListener = null;
	systemThemeQuery = null;
}

export function setupSystemThemeListener(): void {
	cleanupSystemThemeListener();
	if (typeof window === "undefined") return;

	systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
	systemThemeListener = (event) => {
		const currentIsDark = document.documentElement.classList.contains("dark");
		if (currentIsDark === event.matches) return;
		applyThemeToDocument(event.matches ? DARK_MODE : LIGHT_MODE);
		window.dispatchEvent(new CustomEvent("theme-change"));
	};

	applyThemeToDocument(SYSTEM_MODE);
	if (systemThemeQuery.addEventListener) {
		systemThemeQuery.addEventListener("change", systemThemeListener);
	} else {
		systemThemeQuery.addListener(systemThemeListener);
	}
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
	if (typeof localStorage === "undefined") return;
	applyThemeToDocument(theme);
	localStorage.setItem("theme", theme);
	if (theme === SYSTEM_MODE) {
		setupSystemThemeListener();
	} else {
		cleanupSystemThemeListener();
	}
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	if (typeof localStorage === "undefined") {
		return getDefaultTheme();
	}
	return (
		(localStorage.getItem("theme") as LIGHT_DARK_MODE) || getDefaultTheme()
	);
}

export function initThemeListener(): void {
	if (typeof localStorage === "undefined") return;
	if (getStoredTheme() === SYSTEM_MODE) {
		setupSystemThemeListener();
	}
}

export function getDefaultSakuraEnabled(): boolean {
	return sakuraConfig?.enable ?? false;
}

export function getStoredSakuraEnabled(): boolean {
	if (typeof localStorage === "undefined") {
		return getDefaultSakuraEnabled();
	}
	const stored = localStorage.getItem("sakuraEnabled");
	return stored === null ? getDefaultSakuraEnabled() : stored === "true";
}

export function setSakuraEnabled(enabled: boolean): void {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem("sakuraEnabled", String(enabled));
	document.documentElement.setAttribute("data-sakura-enabled", String(enabled));
	window.dispatchEvent(
		new CustomEvent("sakuraToggle", { detail: { enabled } }),
	);
}

export function getDefaultCardBorderEnabled(): boolean {
	return siteConfig.card?.border ?? false;
}

export function getStoredCardBorderEnabled(): boolean {
	if (typeof localStorage === "undefined") {
		return getDefaultCardBorderEnabled();
	}
	const stored = localStorage.getItem("cardBorderEnabled");
	return stored === null ? getDefaultCardBorderEnabled() : stored === "true";
}

export function setCardBorderEnabled(enabled: boolean): void {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem("cardBorderEnabled", String(enabled));
	document.documentElement.classList.toggle("enable-card-border", enabled);
}

export function getDefaultCardFollowThemeEnabled(): boolean {
	return siteConfig.card?.followTheme ?? false;
}

export function getStoredCardFollowThemeEnabled(): boolean {
	if (typeof localStorage === "undefined") {
		return getDefaultCardFollowThemeEnabled();
	}
	const stored = localStorage.getItem("cardFollowThemeEnabled");
	return stored === null
		? getDefaultCardFollowThemeEnabled()
		: stored === "true";
}

export function setCardFollowThemeEnabled(enabled: boolean): void {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem("cardFollowThemeEnabled", String(enabled));
	document.body.classList.toggle("card-follow-theme-hue", enabled);
}
