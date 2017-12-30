import React from '../../utils/react';
import {Card, CardMedia, CardText, CardTitle} from 'material-ui';
import {ContentSend} from 'material-ui/svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import {PageCard, PageBody, PageImage, Float, StylePaper} from '../../ui/common/page';
import Container from '../../ui/common/paper/container';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import AppointmentOverlay from '../appointment/content/loadingOverlay/overlay';
import PROPERTIES from './properties';
import Form from '../../ui/handlers/formDispatcher';
import {bindActionCreators} from 'redux';
import schema from './schema';
import {JennySpeaking, NevadaSplash} from '../../images';
import Validation from '../../utils/validation';
import {updateName, updateSubject, updateEmail, updateBody, updateQuestionsErrorInfo, submitQuestions} from '../../actions/creators/questions';
import {ContactJenny, JennyHome} from "../../images/index";
class QuestionsPage extends React.PureComponent {
	constructor(props, context) {
		super(props, context);
		this.onUpdate = this.onUpdate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentWillUnmount() {
		const errors = Validation.validateForm(this.props.questions, schema);
		this.props.actions.updateErrorInfo(errors);
	}
	onUpdate(name, value) {
		this.props.actions[name](value);
		const form = Object.assign({}, this.props.questions, {[name]: value});
		const errors = Validation.validateForm(form, schema);
		this.props.actions.updateErrorInfo(errors);
	}
	onSubmit() {
		this.props.actions.submitQuestions(this.props.questions).then(({isSuccessful}) => {
        if(isSuccessful) browserHistory.push("/");
      });
	}
	render() {
		return (
			<Container scroll>
				<PageCard subtitle="Contact Jennifer" title="Questions?">
					<PageBody
            content={[
              "Please feel free to contact me with any questions and I will respond as quickly as possible.",
              <CardMedia style={{width: "45%"}}><img src={JennySpeaking} /></CardMedia>
            ]}
            pageImage={
              <PageImage top={-90} zDepth={5} float={Float.RIGHT} percentWidth={50}>
								<Form
									style={{width: "100%"}}
									form={this.props.questions}
									schema={schema}
									onChange={this.onUpdate}
									errors={this.props.errors}
									submitted={this.props.submitted} />
								<RaisedButton fullWidth icon={<ContentSend/>} onClick={this.onSubmit} secondary={true}/>
							</PageImage>
						} />
          {this.props.isSaving && <AppointmentOverlay show={true} />}
				</PageCard>
			</Container>
		);
	}
}
QuestionsPage.propTypes = {
	actions: React.PropTypes.object.isRequired,
	questions: React.PropTypes.object.isRequired,
	submitted: React.PropTypes.bool,
	errors: React.PropTypes.object,
	isSaving: React.PropTypes.bool
};

QuestionsPage.defaultProps = {
	submitted: false,
	errors: {},
	isSaving: false
};

function mapStateToProps(state, ownProps) {
	const {questions: errors} = state.errorInfo;
	const {name, email, subject, body, submitted, isSaving} = state.questions;
	return {questions: {name, email, subject, body}, errors, submitted, isSaving};
}

function mapDispatchToProps(dispatch) {
	const actions = {
		submitQuestions,
		updateErrorInfo: updateQuestionsErrorInfo,
		[PROPERTIES.NAME]: updateName,
		[PROPERTIES.EMAIL]: updateEmail,
		[PROPERTIES.SUBJECT]: updateSubject,
		[PROPERTIES.BODY]: updateBody
	};
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);