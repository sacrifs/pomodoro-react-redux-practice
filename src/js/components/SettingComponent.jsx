import React, {Component, PropTypes} from "react"
import ReactDOM from "react-dom"

export default class SettingComponent extends Component {
	static propTypes = {
		saveSetting: PropTypes.func.isRequired,
		workTime: PropTypes.number.isRequired,
		breakTime: PropTypes.number.isRequired,
		longBreakTime: PropTypes.number.isRequired
	};

	btnSaveClick(){
		let workTime = parseInt(this.refs.workTime.value.trim(), 10);
		let breakTime = parseInt(this.refs.breakTime.value.trim(), 10);
		let longBreakTime = parseInt(this.refs.longBreakTime.value.trim(), 10);
		if(isNaN(workTime) || isNaN(breakTime) || isNaN(longBreakTime)){
			return;
		}
		if(workTime <= 0 || breakTime <= 0 || longBreakTime <= 0){
			return;
		}
		this.props.saveSetting({workTime, breakTime, longBreakTime});
	}

	render() {
		let {workTime, breakTime, longBreakTime} = this.props;

		return (
			<div className="setting_component">
				<label className="setting_time_label setting_worktime_label">
					<span className="setting_label_text">WorkTime:</span>
					<input className="setting_time_input setting_worktime_min" defaultValue={workTime} ref="workTime" type="text" /> min.
				</label>
				<label className="setting_time_label etting_breaktime_label">
					<span className="setting_label_text">BreakTime:</span>
					<input className="setting_time_input setting_breaktime_min" defaultValue={breakTime} ref="breakTime" type="text" /> min.
				</label>
				<label className="setting_time_label setting_longbreak_label">
					<span className="setting_label_text">LongBreakTime:</span>
					<input className="setting_time_input setting_longbreak_min" defaultValue={longBreakTime} ref="longBreakTime" type="text" /> min.
				</label>
				<button onClick={(e)=>this.btnSaveClick()} class="setting_save_btn">SAVE</button>
			</div>
		);
	}
}
