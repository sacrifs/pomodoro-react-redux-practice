import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import * as TimerAction from "../actions/TimerAction"
import * as SettingAction from "../actions/SettingAction"
import TimerComponent from "../components/TimerComponent"
import SettingComponent from "../components/SettingComponent"



class App extends Component {

	render() {
		return (
			<div>
				<h1>Pomodoro Timer</h1>
				<TimerComponent {...this.props.timerDispatch} {...this.props.timerProp} />
				<SettingComponent {...this.props.settingDispatch} {...this.props.settingProp} />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		timerProp:state.timer,
		settingProp:state.setting
	}
}

function mapDispatchToProps(dispatch){
	return {
		timerDispatch:{
			timerInit:(setting)=>{
				dispatch(SettingAction.saveSetting());
				dispatch(TimerAction.timerInit(setting));
			},
			timerStart:()=>dispatch(TimerAction.timerStart()),
			timerStop:()=>dispatch(TimerAction.timerStop()),
			timerReset:()=>dispatch(TimerAction.timerReset()),
			timerFinish:()=>dispatch(TimerAction.timerFinish()),
			timerTick:()=>dispatch(TimerAction.timerTick()),
		},
		settingDispatch:{
			saveSetting:(setting)=>{
				dispatch(SettingAction.saveSetting(setting));
				dispatch(TimerAction.timerInit(setting));
				dispatch(TimerAction.timerStop());
			}
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
