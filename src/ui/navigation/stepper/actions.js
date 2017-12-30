import React from '../../../utils/react';
import {RaisedButton, FlatButton, FloatingActionButton} from 'material-ui';
import {ImageNavigateNext, ImageNavigateBefore, ContentSend} from 'material-ui/svg-icons';
class StepperActions extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		const width = this.props.showSubmit ? "25%" : "50%";
		const style = {
			container: {position: "fixed", bottom: "0px", width: "100%"},
			previous: {width, left: "0px"},
			next: {width, position: "absolute", right: "0px"},
			submit: {width: "50%"}
		};
		return (
			<div style={style.container}>
				<RaisedButton
					labelPosition="after"
					icon={<ImageNavigateBefore />}
					label={!this.props.showSubmit && "Previous" || null}
					style={style.previous}
					disabled={this.props.stepIndex === 0}
					onTouchTap={this.props.onPreviousClick}/>
				{this.props.showSubmit &&
				<RaisedButton
					secondary={true}
					icon={<ContentSend />}
					style={style.submit}
					label='Submit'
					onTouchTap={this.props.onSubmit}/>}
				<RaisedButton
					labelPosition="before"
					icon={<ImageNavigateNext />}
					style={style.next}
					label={!this.props.showSubmit && "Next" || null}
					onTouchTap={this.props.onNextClick}
					disabled={this.props.isFinalStep}/>
			</div>
		);
	}
}
StepperActions.propTypes = {
	onNextClick: React.PropTypes.func.isRequired,
	onPreviousClick: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired,
	isFinalStep: React.PropTypes.bool,
	showSubmit: React.PropTypes.bool,
	stepIndex: React.PropTypes.number
};

StepperActions.defaultProps = {
	isFinalStep: false,
	showSubmit: false,
	stepIndex: 0
};
export default StepperActions;
