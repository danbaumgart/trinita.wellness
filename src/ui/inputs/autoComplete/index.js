import React from '../../../utils/react';
import {AutoComplete} from 'material-ui';
import StaticErrors from '../../common/staticErrors';
class _AutoComplete extends React.PureComponent {
	constructor(props, context) {
		super(props, context);
		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.onNewRequest = this.onNewRequest.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.state = {searchText: props.value || ''}
	}
	onNewRequest(chosenRequest, index) {
		if (chosenRequest && index > -1) this.setState({searchText: chosenRequest.text},
			() => this.props.onNewRequest(chosenRequest.value, index));
		else this.setState({searchText: this.props.value || ''});
	}
	onUpdateInput(searchText) {
		this.setState({searchText}, () => this.props.onUpdateInput(this.props.name, searchText));
	}
	onFocus() {
		this.setState({searchText: ''});
	}
	onBlur() {
		this.setState({searchText: this.props.value || ''});
	}

	render() {
		const hasErrors = Array.isArray(this.props.errors) && this.props.errors.length > 0;
		return (
			<AutoComplete name={this.props.name}
						  floatingLabelText={this.props.label}
						  dataSource={this.props.dataSource}
						  errorText={hasErrors && <StaticErrors errors={this.props.errors}/>}
						  filter={this.props.filter}
						  maxSearchResults={5}
						  onBlur={this.onBlur}
						  onFocus={this.onFocus}
						  onNewRequest={this.onNewRequest}
						  onUpdateInput={this.onUpdateInput}
						  searchText={this.state.searchText}
						  fullWidth>
				{this.props.children}
			</AutoComplete>
		);
	}
}
_AutoComplete.propTypes = {
	name: React.PropTypes.string.isRequired,
	onUpdateInput: React.PropTypes.func.isRequired,
	dataSource: React.PropTypes.array.isRequired,
	onNewRequest: React.PropTypes.func.isRequired,
	label: React.PropTypes.string,
	value: React.PropTypes.string,
	errors: React.PropTypes.arrayOf(React.PropTypes.string),
	filter: React.PropTypes.func
};
_AutoComplete.defaultProps = {
	label: null,
	value: '',
	errors: [],
	filter: AutoComplete.noFilter
};
export default _AutoComplete;
