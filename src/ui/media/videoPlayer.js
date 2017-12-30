import React from '../../utils/react';
import { Player } from 'video-react';
import '../../styles/video-react.css';
const VideoPlayer = (props) => <Player playsInline src={props.video}/>;
VideoPlayer.propTypes = {
	video: React.PropTypes.oneOfType([
		React.PropTypes.node,
		React.PropTypes.string
	]).isRequired
};
export default VideoPlayer;