import React, {Component, PropTypes} from "react"
import * as AppConst from "../AppConst"

export default class TimerComponent extends Component {
	static propTypes = {
		time: PropTypes.number.isRequired,
		isPause: PropTypes.bool.isRequired,
		timerInit:PropTypes.func.isRequired,
		timerStart: PropTypes.func.isRequired,
		timerStop:PropTypes.func.isRequired,
		timerFinish:PropTypes.func.isRequired,
		timerTick:PropTypes.func.isRequired
	};

	componentDidMount(){
		this.props.timerInit(AppConst.DEFAULT_TIME);
		this.timer = setInterval(()=>{this.timerFunc()}, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.timer);
	}

	timerFunc(){
		if(this.props.status == AppConst.STATUS_STOP || this.props.isPause){return;}
		this.props.timerTick();
		if(this.props.time == 0){
			this.props.timerFinish();
		}
	}

	formatTime(time){
		let minutes = time / 60 | 0;
		let seconds = time - minutes*60;
		let minText = ""+minutes;
		let secText = ("0"+seconds).slice(-2);
		return {minText, secText};
	}
	getStatusText(status){
		switch(status){
			case AppConst.STATUS_WORKING:
				return "WORKING";
			case AppConst.STATUS_BREAKING:
				return "BREAKING";
			case AppConst.STATUS_STOP:
				return "NOT WORKING";
		}
		return "";
	}

	getSquare(count){
		let text = "■";
		for(let i = 0; i < count; i++){
			text += "■";
		}
		return text;
	}

	render() {
		const {time,status,pomodoroCount} = this.props;
		const {minText, secText} = this.formatTime(time);
		const statusText = this.getStatusText(status);
		const pomodoroCountSquare = this.getSquare(pomodoroCount);
		return (
			<div className="timer_component">
				<p className="timer_time_text">{minText}:{secText}</p>
				<p className="timer_status_text">{statusText}</p>
				<p className="timer_pomodoro_count">{pomodoroCountSquare}</p>
				<button onClick={(e)=>this.props.timerStart()}>START</button>
				<button onClick={(e)=>this.props.timerStop()}>STOP</button>
			</div>
		);
	}
}
