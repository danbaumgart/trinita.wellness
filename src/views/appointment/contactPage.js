import React from '../../utils/react/index';
import {connect} from 'react-redux';
import {ContactProperties, ContactSchema} from '../../config/model/schema';
import Form from '../../ui/handlers/formDispatcher';
import {bindActionCreators} from 'redux';
import Validation from '../../utils/validation';
import {updateFirstName, updateLastName, updatePhoneNumber, updateEmailAddress, updateExtension, updateContactErrorInfo} from '../../actions/creators/contact';
class ContactPage extends React.PureComponent {
	constructor(props, context) {
		super(props, context);
		this.onUpdate = this.onUpdate.bind(this)
	}
	componentWillUnmount() {
		const errors = Validation.validateForm(this.props.contact, ContactSchema);
		this.props.actions.updateErrorInfo(errors);
	}
	onUpdate(name, value) {
		this.props.actions[name](value);
		const form = Object.assign({}, this.props.contact, {[name]: value});
		const errors = Validation.validateForm(form, ContactSchema);
		this.props.actions.updateErrorInfo(errors);
	}
	render() {
		return <Form form={this.props.contact}
					 schema={ContactSchema}
					 onChange={this.onUpdate}
					 errors={this.props.errors}/>
	}
}

ContactPage.propTypes = {
	actions: React.PropTypes.object.isRequired,
	contact: React.PropTypes.object.isRequired,
	errors: React.PropTypes.object
};

ContactPage.defaultProps = {
	errors: {}
};

function mapStateToProps(state, ownProps) {
	const {values: {contact}, errors: {contact: errors}} = state.forms.appointment;
	return state.appointment.submitted ?
		{contact, errors} :
		{contact};
}

function mapDispatchToProps(dispatch) {
	const actions = {
		updateErrorInfo: updateContactErrorInfo,
		[ContactProperties.FIRST_NAME]: updateFirstName,
		[ContactProperties.LAST_NAME]: updateLastName,
		[ContactProperties.EXTENSION]: updateExtension,
		[ContactProperties.EMAIL_ADDRESS]: updateEmailAddress,
		[ContactProperties.PHONE_NUMBER]: updatePhoneNumber
	};
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);