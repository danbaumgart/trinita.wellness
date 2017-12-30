import React from '../../../../utils/react/index';
import {RefreshIndicator} from 'material-ui';
import OverlayContainer from './overlay';
import Colors from '../../../../config/constants/colors';
class LoadingOverlay extends React.PureComponent {
	render() {
		const displacement = this.props.size / 2;
		return (
			<OverlayContainer show={this.props.show}>
				<RefreshIndicator
					loadingColor={Colors.GREEN_YELLOW}
					top={64 + displacement}
					left={-1 * displacement}
					style={{marginLeft: "50%"}}
					size={this.props.size}
					status={this.props.show ? "loading" : "hide"}
				/>
			</OverlayContainer>
		);
	}
}
LoadingOverlay.propTypes = {
	size: React.PropTypes.number,
	show: React.PropTypes.bool
};
LoadingOverlay.defaultProps = {
	size: 150,
	show: false
};
export default LoadingOverlay;