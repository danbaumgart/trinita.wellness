import React from '../../../utils/react';
import {Stepper} from '../stepper';
import {StylePaper, Display, Position} from '../../common/paper';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import StepperActions from './stepNavigation';

class HorizontalStepper extends React.PureComponent {
	constructor(props, context) {
		super(props, context);
		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.onRequestStep = this.onRequestStep.bind(this);
	}

	handleNext() {
		const stepIndex = this.props.stepIndex + 1;
		if (!this.props.loading && stepIndex < this.props.stepLabels.length)
			this.props.onStepRequested(stepIndex);
	}

	handlePrevious() {
		const stepIndex = this.props.stepIndex - 1;
		if (stepIndex >= 0 && !this.props.loading) this.props.onStepRequested(stepIndex);
	}

	onRequestStep(stepIndex) {
		if (stepIndex >= 0 && stepIndex < this.props.stepLabels.length && !this.props.loading)
			this.props.onStepRequested(stepIndex);
	}

	render() {
		return (
			<div>
				{this.props.children}
				<StylePaper position={Position.ABSOLUTE} top={136} right={0} left={0} bottom={0} margin={{bottom: 40}} scroll>
					<ExpandTransition open={true} loading={this.props.loading} style={{overflow: 'auto'}}>
						{this.props.stepContent}
					</ExpandTransition>
				</StylePaper>
				<StylePaper position={Position.RELATIVE} scroll zDepth={2} top={0} left={0} right={0}>
					<Stepper
						stepIcons={this.props.stepIcons}
						stepLabels={this.props.stepLabels}
						activeStep={this.props.stepIndex}
						errorSteps={this.props.stepErrors}
						submitted={this.props.submitted}
						onRequestStep={this.props.onStepRequested}
						visitedSteps={this.props.visitedSteps}/>
				</StylePaper>
				<StepperActions
					onLeftClick={this.handlePrevious}
					onRightClick={this.props.isFinalStep ? this.props.onSubmit : this.handleNext}
					isLeftDisabled={this.props.loading || this.props.stepIndex === 0}
					isRightDisabled={this.props.loading || this.props.submitted && this.props.stepErrors.length > 0 && this.props.isFinalStep}
					rightLabel={this.props.isFinalStep ? "Send" : null}
					isFinalStep={this.props.isFinalStep}
					padding={2}/>
			</div>
		);
	}
}

HorizontalStepper.propTypes = {
	onStepRequested: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired,
	stepLabels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	stepErrors: React.PropTypes.arrayOf(React.PropTypes.number),
	stepIcons: React.PropTypes.arrayOf(React.PropTypes.node),
	stepIndex: React.PropTypes.number,
	stepContent: React.PropTypes.node,
	visitedSteps: React.PropTypes.arrayOf(React.PropTypes.number),
	submitted: React.PropTypes.bool,
	loading: React.PropTypes.bool,
	transitionDelay: React.PropTypes.number,
	transitionDuration: React.PropTypes.number,
	isFinalStep: React.PropTypes.bool
};
HorizontalStepper.defaultProps = {
	stepIcons: null,
	stepIndex: 0,
	stepErrors: [],
	stepContent: null,
	visitedSteps: [],
	submitted: false,
	loading: false,
	transitionDelay: null,
	transitionDuration: null,
	isFinalStep: false
};
export default HorizontalStepper;