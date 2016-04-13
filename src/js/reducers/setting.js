import * as SettingAction from "../actions/SettingAction"
import * as AppConst from "../AppConst"

const initialState = AppConst.DEFAULT_TIME;

export default function setting(state = initialState, action) {
	switch (action.type){
		case SettingAction.SAVE_SETTING:
			const {setting} = action;
			return Object.assign({}, state, setting);
		default:
			return state;
	}
}
