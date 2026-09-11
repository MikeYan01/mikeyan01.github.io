<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import {
	getDefaultCardBorderEnabled,
	getDefaultCardFollowThemeEnabled,
	getDefaultHue,
	getDefaultSakuraEnabled,
	getHue,
	getStoredCardBorderEnabled,
	getStoredCardFollowThemeEnabled,
	getStoredSakuraEnabled,
	setCardBorderEnabled,
	setCardFollowThemeEnabled,
	setHue,
	setSakuraEnabled,
} from "@utils/setting-utils";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import { displaySettingsConfig, siteConfig } from "@/config";

type TabKey = "appearance" | "effects";
type PostListLayout = "list" | "grid";

let hue = $state(getHue());
const defaultHue = getDefaultHue();
const defaultLayout = siteConfig.postListLayout.defaultMode;
const mobileDefaultLayout =
	siteConfig.postListLayout.mobileDefaultMode || defaultLayout;
let currentLayout = $state<PostListLayout>(defaultLayout);
let viewportWidth = $state(
	typeof window === "undefined" ? 1024 : window.innerWidth,
);
let mounted = $state(false);
let isSwitching = $state(false);
let layoutTimer: ReturnType<typeof setTimeout> | undefined;

const defaultSakuraEnabled = getDefaultSakuraEnabled();
const defaultCardBorderEnabled = getDefaultCardBorderEnabled();
const defaultCardFollowThemeEnabled = getDefaultCardFollowThemeEnabled();
let sakuraEnabled = $state(defaultSakuraEnabled);
let cardBorderEnabled = $state(defaultCardBorderEnabled);
let cardFollowThemeEnabled = $state(defaultCardFollowThemeEnabled);

const showThemeColor = displaySettingsConfig.themeColorSwitchable;
const allowLayoutSwitch = displaySettingsConfig.layoutSwitchable;
const isSakuraSwitchable = displaySettingsConfig.sakuraSwitchable;
const isCardBorderSwitchable = displaySettingsConfig.cardBorderSwitchable;
const isCardFollowThemeSwitchable =
	displaySettingsConfig.cardFollowThemeSwitchable;
const hasAppearanceTab =
	showThemeColor ||
	allowLayoutSwitch ||
	isCardBorderSwitchable ||
	isCardFollowThemeSwitchable;
const hasAnyContent = hasAppearanceTab || isSakuraSwitchable;
const visibleTabs: { key: TabKey; icon: string; label: string }[] = [];
if (hasAppearanceTab) {
	visibleTabs.push({
		key: "appearance",
		icon: "material-symbols:palette",
		label: i18n(I18nKey.settingsTabAppearance),
	});
}
if (isSakuraSwitchable) {
	visibleTabs.push({
		key: "effects",
		icon: "mdi:flower-poppy",
		label: i18n(I18nKey.settingsTabEffects),
	});
}
let activeTab = $state<TabKey>(visibleTabs[0]?.key ?? "appearance");
const effectiveDefaultLayout = $derived(
	viewportWidth < 380
		? "grid"
		: viewportWidth < 780
			? mobileDefaultLayout
			: defaultLayout,
);
const cardSettingsIsDefault = $derived(
	(!isCardBorderSwitchable || cardBorderEnabled === defaultCardBorderEnabled) &&
		(!isCardFollowThemeSwitchable ||
			cardFollowThemeEnabled === defaultCardFollowThemeEnabled),
);

function publishLayout(layout: PostListLayout) {
	currentLayout = layout;
	window.dispatchEvent(new CustomEvent("layoutChange", { detail: { layout } }));
}

function resetLayout() {
	localStorage.removeItem("postListLayout");
	publishLayout(effectiveDefaultLayout);
}

function switchLayout(layout: PostListLayout) {
	if (!mounted || isSwitching || currentLayout === layout) return;
	isSwitching = true;
	localStorage.setItem("postListLayout", layout);
	publishLayout(layout);
	layoutTimer = setTimeout(() => {
		isSwitching = false;
	}, 500);
}

function resetCardSettings() {
	if (isCardBorderSwitchable) {
		cardBorderEnabled = defaultCardBorderEnabled;
		setCardBorderEnabled(cardBorderEnabled);
	}
	if (isCardFollowThemeSwitchable) {
		cardFollowThemeEnabled = defaultCardFollowThemeEnabled;
		setCardFollowThemeEnabled(cardFollowThemeEnabled);
	}
}

onMount(() => {
	mounted = true;
	sakuraEnabled = getStoredSakuraEnabled();
	cardBorderEnabled = getStoredCardBorderEnabled();
	cardFollowThemeEnabled = getStoredCardFollowThemeEnabled();

	const syncLayout = () => {
		viewportWidth = window.innerWidth;
		const savedLayout = localStorage.getItem("postListLayout");
		currentLayout =
			viewportWidth < 380
				? "grid"
				: savedLayout === "list" || savedLayout === "grid"
					? savedLayout
					: viewportWidth < 780
						? mobileDefaultLayout
						: defaultLayout;
	};
	const handleLayoutChange = (event: Event) => {
		currentLayout = (event as CustomEvent<{ layout: PostListLayout }>).detail
			.layout;
	};
	syncLayout();
	window.addEventListener("resize", syncLayout);
	window.addEventListener("layoutChange", handleLayoutChange);
	return () => {
		window.removeEventListener("resize", syncLayout);
		window.removeEventListener("layoutChange", handleLayoutChange);
		clearTimeout(layoutTimer);
	};
});

$effect(() => {
	if (mounted) setHue(hue);
});
</script>

{#if hasAnyContent}
<div id="display-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-3 pt-0 pb-3 max-h-[80vh] overflow-y-auto custom-scrollbar" data-floating-panel data-floating-panel-trigger="display-settings-switch" inert aria-hidden="true">
	{#if visibleTabs.length > 1}
	<div class="flex gap-1 border-b border-black/5 dark:border-white/10 pt-3 pb-1 mb-3">
		{#each visibleTabs as tab (tab.key)}
			<button
				class="focus-ring-inset flex-1 flex flex-col items-center justify-center gap-1.5 py-2 px-2 text-xs font-medium transition-colors rounded-lg min-w-0
					{activeTab === tab.key
						? 'bg-(--btn-plain-bg-hover) text-(--primary)'
						: 'text-gray-500 dark:text-gray-400 hover:bg-(--btn-plain-bg-hover) hover:text-gray-700 dark:hover:text-gray-300'}"
				onclick={() => activeTab = tab.key}
			>
				<Icon icon={tab.icon} class="text-[1.5rem] shrink-0"></Icon>
				<span class="truncate">{tab.label}</span>
			</button>
		{/each}
	</div>
	{/if}

	{#if activeTab === "appearance"}
		{#if showThemeColor}
		<div>
			<div class="section-title">
				{i18n(I18nKey.themeColor)}
				<button aria-label="Reset to Default" class="btn-regular rounded-md active:scale-90"
						class:opacity-0={hue === defaultHue} class:pointer-events-none={hue === defaultHue}
						disabled={hue === defaultHue} aria-hidden={hue === defaultHue ? "true" : undefined} onclick={() => hue = defaultHue}>
					<div class="text-(--btn-content)">
						<Icon icon="fa7-solid:arrow-rotate-left" class="text-[0.75rem]"></Icon>
					</div>
				</button>
				<div id="hueValue" class="transition bg-(--btn-regular-bg) rounded-md flex justify-center font-bold items-center text-(--btn-content)">
					{hue}
				</div>
			</div>
			<div class="hue-slider-shell w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded-md select-none">
				<input aria-label={i18n(I18nKey.themeColor)} type="range" min="0" max="360" bind:value={hue}
					   class="slider" id="colorSlider" step="5" style="width: 100%">
			</div>
		</div>
		{/if}

		{#if allowLayoutSwitch}
		<div>
			<div class="section-title">
				{i18n(I18nKey.postListLayout)}
				<button aria-label="Reset to Default" class="btn-regular rounded-md active:scale-90"
						class:opacity-0={currentLayout === effectiveDefaultLayout} class:pointer-events-none={currentLayout === effectiveDefaultLayout}
						disabled={currentLayout === effectiveDefaultLayout} aria-hidden={currentLayout === effectiveDefaultLayout ? "true" : undefined} onclick={resetLayout}>
					<div class="text-(--btn-content)">
						<Icon icon="fa7-solid:arrow-rotate-left" class="text-[0.75rem]"></Icon>
					</div>
				</button>
			</div>
			<div class="flex gap-2">
				<button
					aria-label={i18n(I18nKey.postListLayoutList)}
					aria-pressed={currentLayout === "list"}
					class="flex-1 btn-regular rounded-md py-2 px-3 flex items-center justify-center gap-2 active:scale-95 transition-all relative overflow-hidden"
					class:opacity-60={currentLayout !== "list"}
					class:bg-(--btn-regular-bg-hover)={currentLayout === "list"}
					disabled={isSwitching || viewportWidth < 380}
					onclick={() => switchLayout("list")}
					title={i18n(I18nKey.postListLayoutList)}
				>
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
					</svg>
					<span class="text-xs font-medium">{i18n(I18nKey.postListLayoutList)}</span>
				</button>
				<button
					aria-label={i18n(I18nKey.postListLayoutGrid)}
					aria-pressed={currentLayout === "grid"}
					class="flex-1 btn-regular rounded-md py-2 px-3 flex items-center justify-center gap-2 active:scale-95 transition-all relative overflow-hidden"
					class:opacity-60={currentLayout !== "grid"}
					class:bg-(--btn-regular-bg-hover)={currentLayout === "grid"}
					disabled={isSwitching}
					onclick={() => switchLayout("grid")}
					title={i18n(I18nKey.postListLayoutGrid)}
				>
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
					</svg>
					<span class="text-xs font-medium">{i18n(I18nKey.postListLayoutGrid)}</span>
				</button>
			</div>
		</div>
		{/if}

		{#if isCardBorderSwitchable || isCardFollowThemeSwitchable}
		<div>
			<div class="section-title">
				{i18n(I18nKey.cardSettings)}
				<button aria-label="Reset to Default" class="btn-regular rounded-md active:scale-90"
						class:opacity-0={cardSettingsIsDefault} class:pointer-events-none={cardSettingsIsDefault}
						disabled={cardSettingsIsDefault} aria-hidden={cardSettingsIsDefault ? "true" : undefined} onclick={resetCardSettings}>
					<div class="text-(--btn-content)">
						<Icon icon="fa7-solid:arrow-rotate-left" class="text-[0.75rem]"></Icon>
					</div>
				</button>
			</div>
			<div class="space-y-1">
				{#if isCardBorderSwitchable}
				<button
					class="w-full btn-regular rounded-md py-2 px-3 flex items-center gap-3 text-left active:scale-95 transition-all relative overflow-hidden"
					class:bg-(--btn-regular-bg-hover)={cardBorderEnabled}
					aria-pressed={cardBorderEnabled}
					onclick={() => { cardBorderEnabled = !cardBorderEnabled; setCardBorderEnabled(cardBorderEnabled); }}
				>
					<Icon icon="material-symbols:border-outer-rounded" class="text-[1.25rem] shrink-0"></Icon>
					<span class="text-sm flex-1">{i18n(I18nKey.cardBorder)}</span>
					<div class="w-10 h-5 rounded-full transition-all duration-200 relative"
						 class:bg-(--primary)={cardBorderEnabled}
						 class:bg-(--btn-regular-bg-active)={!cardBorderEnabled}>
						<div class="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
							 class:left-0.5={!cardBorderEnabled}
							 class:left-5={cardBorderEnabled}></div>
					</div>
				</button>
				{/if}
				{#if isCardFollowThemeSwitchable}
				<button
					class="w-full btn-regular rounded-md py-2 px-3 flex items-center gap-3 text-left active:scale-95 transition-all relative overflow-hidden"
					class:bg-(--btn-regular-bg-hover)={cardFollowThemeEnabled}
					aria-pressed={cardFollowThemeEnabled}
					onclick={() => { cardFollowThemeEnabled = !cardFollowThemeEnabled; setCardFollowThemeEnabled(cardFollowThemeEnabled); }}
				>
					<Icon icon="material-symbols:palette" class="text-[1.25rem] shrink-0"></Icon>
					<span class="text-sm flex-1">{i18n(I18nKey.cardFollowTheme)}</span>
					<div class="w-10 h-5 rounded-full transition-all duration-200 relative"
						 class:bg-(--primary)={cardFollowThemeEnabled}
						 class:bg-(--btn-regular-bg-active)={!cardFollowThemeEnabled}>
						<div class="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
							 class:left-0.5={!cardFollowThemeEnabled}
							 class:left-5={cardFollowThemeEnabled}></div>
					</div>
				</button>
				{/if}
			</div>
		</div>
		{/if}
	{/if}

	{#if activeTab === "effects" && isSakuraSwitchable}
	<div>
		<div class="section-title">
			{i18n(I18nKey.effectsSettings)}
			<button aria-label="Reset to Default" class="btn-regular rounded-md active:scale-90"
					class:opacity-0={sakuraEnabled === defaultSakuraEnabled} class:pointer-events-none={sakuraEnabled === defaultSakuraEnabled}
					disabled={sakuraEnabled === defaultSakuraEnabled} aria-hidden={sakuraEnabled === defaultSakuraEnabled ? "true" : undefined}
					onclick={() => { sakuraEnabled = defaultSakuraEnabled; setSakuraEnabled(sakuraEnabled); }}>
				<div class="text-(--btn-content)">
					<Icon icon="fa7-solid:arrow-rotate-left" class="text-[0.75rem]"></Icon>
				</div>
			</button>
		</div>
		<button
			class="w-full btn-regular rounded-md py-2 px-3 flex items-center gap-3 text-left active:scale-95 transition-all relative overflow-hidden"
			class:bg-(--btn-regular-bg-hover)={sakuraEnabled}
			aria-pressed={sakuraEnabled}
			onclick={() => { sakuraEnabled = !sakuraEnabled; setSakuraEnabled(sakuraEnabled); }}
		>
			<Icon icon="mdi:flower-poppy" class="text-[1.25rem] shrink-0"></Icon>
			<span class="text-sm flex-1">{i18n(I18nKey.sakuraEffect)}</span>
			<div class="w-10 h-5 rounded-full transition-all duration-200 relative"
				 class:bg-(--primary)={sakuraEnabled}
				 class:bg-(--btn-regular-bg-active)={!sakuraEnabled}>
				<div class="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
					 class:left-0.5={!sakuraEnabled}
					 class:left-5={sakuraEnabled}></div>
			</div>
		</button>
	</div>
	{/if}
</div>
{/if}
