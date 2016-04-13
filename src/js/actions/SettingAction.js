export const SAVE_SETTING = "saveSetting";

export function saveSetting(setting) {
	return {
		type: SAVE_SETTING, setting
	};
}
