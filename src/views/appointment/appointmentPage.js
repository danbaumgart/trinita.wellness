import React from '../../utils/react';
import {connect} from 'react-redux';
import StepHandler from '../../config/model/step/handlers';
import {HorizontalStepper} from '../../ui/navigation/stepper';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import Timers from '../../config/constants/timers';
import Validation from '../../utils/validation';
import {updateStepIndex, completeLoadingTransition, beginLoadingTransition, submitAppointment} from '../../actions/creators/appointment';
import {updateScheduleErrorInfo} from '../../actions/creators/schedule';
import {updateInstitutionErrorInfo} from '../../actions/creators/institution';
import {updateContactErrorInfo} from '../../actions/creators/contact';
import LoadingOverlay from './content/loadingOverlay';
import Steps from '../../config/model/step/constants/types';

class AppointmentPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onRequestStep = this.onRequestStep.bind(this);
        this.onSubmitAppointment = this.onSubmitAppointment.bind(this);
        this.validateSteps = this.validateSteps.bind(this);
    }

    componentDidUpdate(previousProps) {
        if (!previousProps.loading && this.props.loading)
            setTimeout(() => this.props.actions.completeLoadingTransition(false), Timers.TRANSITION);
    }

    onRequestStep(stepIndex) {
        this.props.actions.updateStepIndex(stepIndex);
    }

    validateSteps() {
        const {actions, appointment} = this.props;
        return StepHandler.steps.map((step, index) => {
            const error = Validation.validateForm(appointment[step], StepHandler.schema[index]);
            actions[step](error);
            return error;
        });
    }

    onSubmitAppointment() {
        const formErrors = this.validateSteps().map(Object.values);
        const hasErrors = formErrors.some(fieldErrors =>
            Array.isArray(fieldErrors) && fieldErrors.length > 0 &&
            Object.values(fieldErrors).some(errorList => Array.isArray(errorList) && errorList.length > 0));
        if (hasErrors) this.props.actions.submitAppointment(null);
        else this.props.actions.submitAppointment(this.props.appointment)
            .catch(err => console.log("ERROR", err))
            .then(result => {
                console.log("RESULT", result);
                browserHistory.push('/');
            });
    }

    render() {

        const CurrentStep = StepHandler.content[this.props.stepIndex];
        const stepIcons = StepHandler.icons.map(IconHandler => <IconHandler/>);
        return (
            <HorizontalStepper
                stepLabels={StepHandler.labels}
                stepIcons={stepIcons}
                visitedSteps={this.props.visitedSteps}
                stepIndex={this.props.stepIndex}
                onSubmit={this.onSubmitAppointment}
                onStepRequested={this.onRequestStep}
                stepErrors={this.props.errorSteps}
                submitted={this.props.submitted}
                isFinalStep={StepHandler.lastIndex === this.props.stepIndex}
                loading={this.props.loading}
                stepContent={<CurrentStep/>}>
                <LoadingOverlay show={this.props.saving}/>
            </HorizontalStepper>
        );
    }
}

AppointmentPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    visitedSteps: React.PropTypes.arrayOf(React.PropTypes.number),
    errorSteps: React.PropTypes.arrayOf(React.PropTypes.number),
    stepIndex: React.PropTypes.number,
    submitted: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    saving: React.PropTypes.bool,
    appointment: React.PropTypes.object
};
AppointmentPage.defaultProps = {
    visitedSteps: [],
    errorSteps: [],
    stepIndex: 0,
    submitted: false,
    loading: false,
    saving: false,
    appointment: null
};

function mapStateToProps(state) {
    const {stepIndex, visitedSteps, submitted, loading, saving, values, errors} = state.forms.appointment;
    const errorSteps = Object.keys(state.errors)
        .filter(stepKey => Object.values(errors[stepKey])
            .some(fieldErrors => Array.isArray(fieldErrors) && fieldErrors.length > 0))
        .map(step => StepHandler.steps.findIndex(stepValue => stepValue === step));
    return {stepIndex, visitedSteps, errorSteps, submitted, saving, loading, appointment: values};
}

function mapDispatchToProps(dispatch) {
    const actions = {
        updateStepIndex,
        submitAppointment,
        beginLoadingTransition,
        completeLoadingTransition,
        [Steps.SCHEDULE]: updateScheduleErrorInfo,
        [Steps.CONTACT]: updateContactErrorInfo,
        [Steps.INSTITUTION]: updateInstitutionErrorInfo
    };
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);