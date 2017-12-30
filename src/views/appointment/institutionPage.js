import React from '../../utils/react/index';
import {connect} from 'react-redux';
import Form from '../../ui/handlers/formDispatcher';
import ButtonGroup from '../../ui/common/button/group/index';
import {bindActionCreators} from 'redux';
import {InstitutionSchema, InstitutionProperties} from '../../config/model/schema';
import Validation from '../../utils/validation/index';
import {Dialog} from './content/university/index';
import {ActionSearch, ContentClear} from 'material-ui/svg-icons';
import {updateInstitutionCity, clearInstitution, updateInstitutionErrorInfo, updateInstitutionName, updateInstitutionState, updateInstitutionStreet, updateInstitutionZip} from '../../actions/creators/institution';
import {openSearchDialog} from '../../actions/creators/universities';
class InstitutionPage extends React.PureComponent {
	constructor(props, context) {
		super(props, context);
		this.onUpdate = this.onUpdate.bind(this);
	}
	componentWillMount() {
		const errors = Validation.validateForm(this.props.institution, InstitutionSchema);
		this.props.actions.updateErrorInfo(errors);
	}
	componentWillReceiveProps(nextProps) {
		const nextInstitution = nextProps.institution;
		if(InstitutionProperties.values.some(key => nextInstitution[key] !== this.props.institution[key])) {
			const errors = Validation.validateForm(nextInstitution, InstitutionSchema);
			this.props.actions.updateErrorInfo(errors);
		}
	}
	onUpdate(name, value) {
		this.props.actions[name](value);
		const form = Object.assign({}, this.props.institution, {[name]: value});
		this.props.actions.updateErrorInfo(Validation.validateForm(form, InstitutionSchema));
	}
	render() {
		return (
			<div>
				<ButtonGroup
					leftLabel="Clear Form"
					rightLabel="Universities"
					rightIcon={<ActionSearch/>}
					leftIcon={<ContentClear/>}
					isleftdisabled={!Object.values(this.props.institution).some(Boolean)}
					onRightClick={this.props.actions.openSearchDialog}
					onLeftClick={this.props.actions.clearInstitution} />
				<Dialog />
				<Form
					form={this.props.institution}
					schema={InstitutionSchema}
					onChange={this.onUpdate}
					errors={this.props.errors}/>
			</div>
		);
	}
}

InstitutionPage.propTypes = {
	actions: React.PropTypes.object.isRequired,
	institution: React.PropTypes.object.isRequired,
	errors: React.PropTypes.object
};

InstitutionPage.defaultProps = {
	errors: {}
};

function mapStateToProps(state) {
	const {institution, errors: {institution: errors}} = state;
	return state.appointment.submitted ?
		{institution, errors} :
		{institution};
}

function mapDispatchToProps(dispatch) {
	const actions = {
		openSearchDialog,
		clearInstitution,
		updateErrorInfo: updateInstitutionErrorInfo,
		[InstitutionProperties.NAME]: updateInstitutionName,
		[InstitutionProperties.STREET]: updateInstitutionStreet,
		[InstitutionProperties.CITY]: updateInstitutionCity,
		[InstitutionProperties.STATE]: updateInstitutionState,
		[InstitutionProperties.ZIP]: updateInstitutionZip
	};
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionPage);