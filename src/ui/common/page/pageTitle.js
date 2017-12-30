import React from '../../../utils/react';
import {StylePaper, Display, Position} from '../paper';
import {CardTitle, CardMedia} from 'material-ui/Card';
const PageTitle = (props) =>
	<StylePaper zDepth={1} margin={5} >
    <div>
      <CardTitle
        title={props.title}
        style={props.style}
        subtitle={props.subtitle || null}
        titleStyle={props.titleStyle}
        subtitleStyle={props.subtitleStyle}
      />
    </div>
	</StylePaper>;
PageTitle.propTypes = {
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string,
	titleStyle: React.PropTypes.object,
	subtitleStyle: React.PropTypes.object,
	style: React.PropTypes.object
};
PageTitle.defaultProps = {
	subtitle: null,
	titleStyle: {},
	subtitleStyle: {},
	style: {}
};
export default PageTitle;