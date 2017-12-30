import React from '../../../../utils/react/index';
import {Display} from '../../../../ui/constants/styles/index';
const OverlayContainer = (props) => (
	<div style={{
		display: props.show ? Display.BLOCK : Display.NONE,
		position: "fixed",
		margin: "0px",
		top: "0px",
		right: "0px",
		left: "0px",
		bottom: "0px",
		padding: "0px",
		backgroundColor: "rgba(0,0,0,0.5)",
		zIndex: "200",
		cursor: "pointer"}}>
    <div style={{position: 'relative'}}>
      {props.children}
    </div>
	</div>
);
OverlayContainer.propTypes = {
	show: React.PropTypes.bool
};
OverlayContainer.defaultProps = {
	show: false
};
export default OverlayContainer;