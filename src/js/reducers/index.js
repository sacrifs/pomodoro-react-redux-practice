import {combineReducers} from "redux"
import timer from "./timer"
import setting from "./setting"


const reducer = combineReducers({
	timer,
	setting
});
export default reducer;
