import React from '../../utils/react/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ScheduleProperties, ScheduleSchema} from '../../config/model/schema';
import Form from '../../ui/handlers/formDispatcher';
import Validation from '../../utils/validation/index';
import {updateScheduleDate, updateScheduleDetails, updateScheduleTime, updateScheduleFlexible, updateScheduleErrorInfo} from '../../actions/creators/schedule';
class SchedulePage extends React.PureComponent {
	constructor(props, context) {
		super(props, context);
		this.onUpdate = this.onUpdate.bind(this);
	}
	componentWillUnmount() {
		const errors = Validation.validateForm(this.props.schedule, ScheduleSchema);
		this.props.actions.updateErrorInfo(errors);
	}
	componentWillReceiveProps(nextProps) {
		const {schedule} = this.props;
		const nextSchedule = nextProps.schedule;
		if(ScheduleProperties.values.some(key => nextSchedule[key] !== schedule[key])) {
			const errors = Validation.validateForm(nextSchedule, ScheduleSchema);
			this.props.actions.updateErrorInfo(errors);
		}
	}
	onUpdate(name, value) {
		this.props.actions[name](value);
		const form = Object.assign({}, this.props.schedule, {[name]: value});
		this.props.actions.updateErrorInfo(Validation.validateForm(form, ScheduleSchema));
	}
	render() {
		return (
			<Form
				form={this.props.schedule}
				schema={ScheduleSchema}
				onChange={this.onUpdate}
				errors={this.props.errors}
				submitted={this.props.submitted}/>
		)
	}
}

SchedulePage.propTypes = {
	actions: React.PropTypes.object.isRequired,
	schedule: React.PropTypes.object.isRequired,
	errors: React.PropTypes.object
};

SchedulePage.defaultProps = {
	errors: {}
};

function mapStateToProps(state, ownProps) {
	const {values: {schedule}, errors: {schedule: errors}} = state.forms.appointment;
	return state.appointment.submitted ? {schedule, errors} : {schedule};
}

function mapDispatchToProps(dispatch) {
	const actions = {
		updateErrorInfo: updateScheduleErrorInfo,
		[ScheduleProperties.DATE]: updateScheduleDate,
		[ScheduleProperties.TIME]: updateScheduleTime,
		[ScheduleProperties.DETAILS]: updateScheduleDetails,
		[ScheduleProperties.FLEXIBLE]: updateScheduleFlexible
	};
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);