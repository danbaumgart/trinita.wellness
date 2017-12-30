import React from '../../../utils/react';
import {Stepper, StepLabel, StepButton} from 'material-ui';
import Step from './step';
const Steps = (props) => {
	return (
		<Stepper
			linear={false}
			style={{width: "100%"}}
			activeStep={props.activeStep}
			children={props.stepLabels.map((stepLabel, index) => (
				<Step key={index}
					  index={index}
					  icon={props.stepIcons[index]}
					  error={props.errorSteps.includes(index)}
					  onRequestStep={() => props.onRequestStep(index)}
					  active={props.activeStep === index}
					  submitted={props.submitted}
					  completed={props.visitedSteps.includes(index)}>
					{stepLabel}
				</Step>
			))} />
	);
};
Steps.propTypes = {
	stepLabels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	onRequestStep: React.PropTypes.func.isRequired,
	stepIcons: React.PropTypes.arrayOf(React.PropTypes.node),
	activeStep: React.PropTypes.number,
	errorSteps: React.PropTypes.arrayOf(React.PropTypes.number),
	visitedSteps: React.PropTypes.arrayOf(React.PropTypes.number),
	submitted: React.PropTypes.bool
};
Steps.defaultProps = {
	stepIcons: null,
	activeStep: 0,
	errorSteps: [],
	visitedSteps: [],
	submitted: false
};
export default Steps;
