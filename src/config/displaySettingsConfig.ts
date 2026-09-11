import type { DisplaySettingsConfig } from "../types/displaySettingsConfig";
import { resolveDisplaySettingsConfig } from "../utils/display-settings-utils";

// PUBLIC_DISPLAY_SETTINGS can override the panel's master switch.
export const displaySettingsConfig: DisplaySettingsConfig =
	resolveDisplaySettingsConfig({
		enable: true,
		themeColorSwitchable: true,
		layoutSwitchable: true,
		cardBorderSwitchable: true,
		cardFollowThemeSwitchable: true,
		sakuraSwitchable: true,
	});
