export type { AnalyticsConfig } from "./analyticsConfig";
export type { CoverImageConfig } from "./coverImageConfig";
export type { DisplaySettingsConfig } from "./displaySettingsConfig";
export type { SakuraConfig } from "./effectsConfig";

export type {
	ExpressiveCodeConfig,
	PluginCollapsibleConfig,
	PluginLanguageBadgeConfig,
} from "./expressiveCodeConfig";
export type { FontSelectionConfig } from "./fontConfig";
export type { LicenseConfig } from "./licenseConfig";
export type { MermaidConfig } from "./mermaidConfig";
export type {
	NavBarConfig,
	NavBarLink,
	NavBarSearchConfig,
	NavBarSearchMethod,
} from "./navBarConfig";
export type { PlantUMLConfig } from "./plantumlConfig";
export type { ProfileConfig } from "./profileConfig";
export type {
	CalendarConfig,
	MobileBottomComponentConfig,
	SidebarLayoutConfig,
	WidgetComponentConfig,
	WidgetComponentType,
	WidgetSpecificConfig,
} from "./sidebarConfig";
export type { Favicon, LIGHT_DARK_MODE, SiteConfig } from "./siteConfig";

// 响应式图像布局类型
export type ResponsiveImageLayout = "constrained" | "full-width" | "none";

// 图像格式类型
export type ImageFormat = "avif" | "webp" | "png" | "jpg" | "jpeg" | "gif";
