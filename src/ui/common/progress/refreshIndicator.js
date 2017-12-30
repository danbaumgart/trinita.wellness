import React from '../../../utils/react';
import {RefreshIndicator} from 'material-ui';
import Colors from '../../../config/constants/colors';
import Status from './constants/status';
import debounce from '../../../utils/debounce';
class _RefreshIndicator extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {status: Status.READY};
		this.debouncedTimer = debounce(this.debouncedTimer.bind(this), 2500);
	}
	componentWillReceiveProps(nextProps){
		if(this.state.status === Status.READY && nextProps.pendingRequests)
			this.setState({status: Status.LOADING});
		else if(nextProps.pendingRequests === 0) this.debouncedTimer();
	}
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	debouncedTimer(pendingRequests){
		if(this.state.status === Status.LOADING)
			setTimeout(() => this.setState({status: Status.READY}), 1000);
		else this.setState({status: Status.LOADING},
			() => setTimeout(() => this.setState({status: Status.READY}), 1000)
		);
	}
	render() {
		return <RefreshIndicator left={this.props.containerWidth - this.props.offsetLeft}
								 status={this.state.status}
								 loadingColor={Colors.PALE_GREEN}
								 style={{display: 'inline-block'}}
								 top={5} />;
	}
}

_RefreshIndicator.propTypes = {
	containerWidth: React.PropTypes.number.isRequired,
	offsetLeft: React.PropTypes.number.isRequired,
	pendingRequests: React.PropTypes.number
};
_RefreshIndicator.defaultProps = {
	pendingRequests: 0
};
export default _RefreshIndicator;