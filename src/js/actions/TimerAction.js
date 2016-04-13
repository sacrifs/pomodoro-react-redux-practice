export const TIMER_INIT = "timerInit";
export const TIMER_TICK = "timerTick";
export const TIMER_START = "timerStart";
export const TIMER_STOP = "timerStop";
export const TIMER_FINISH = "timerFinish";

export function timerInit(setting) {
	return {
		type: TIMER_INIT, setting
	};
}
export function timerStart() {
	return {
		type: TIMER_START
	};
}
export function timerTick() {
	return {
		type: TIMER_TICK
	};
}
export function timerStop() {
	return {
		type: TIMER_STOP
	};
}
export function timerFinish() {
	return {
		type: TIMER_FINISH
	};
}
