import * as TimerAction from "../actions/TimerAction"
import * as AppConst from "../AppConst"

const initialState = {
	time:AppConst.DEFAULT_TIME.workTime,
	status: AppConst.STATUS_STOP,
	setting:null,
	isPause:false,
	pomodoroCount:0
};

export default function timer(state = initialState, action) {
	switch (action.type){
		case TimerAction.TIMER_INIT:
			const {setting} = action;
			return Object.assign({}, state, {setting:setting});
		case TimerAction.TIMER_START:{
			const {workTime} = state.setting;
			return Object.assign({}, state, {time:workTime, status:AppConst.STATUS_WORKING});
		}
		case TimerAction.TIMER_TICK :{
			const {time} = state;
			let currentTime = time;
			currentTime--;
			if(currentTime < 0){
				currentTime = 0;
			}
			return Object.assign({}, state, {time:currentTime});
		}
		case TimerAction.TIMER_PAUSE:{
			let {isPause} = state;
			return Object.assign({}, state, {isPause:!isPause});
		}
		case TimerAction.TIMER_STOP:{
			const {workTime} = state.setting;
			return Object.assign({}, state, {time:workTime, status:AppConst.STATUS_STOP});
		}
		case TimerAction.TIMER_FINISH:{
			let newState = Object.assign({}, state);
			if(state.status == AppConst.STATUS_WORKING){
				if(state.pomodoroCount < 4){
					newState.status = AppConst.STATUS_BREAKING;
					newState.time = state.setting.breakTime;
				}
				else{
					newState.status = AppConst.STATUS_BREAKING;
					newState.time = state.setting.longBreakTime;
					newState.pomodoroCount = 0;
				}
			}
			else{
				newState.pomodoroCount++;
				newState.status = AppConst.STATUS_WORKING;
				newState.time = state.setting.workTime;
			}
			return newState;
		}
		default:
			return state;
	}
}
