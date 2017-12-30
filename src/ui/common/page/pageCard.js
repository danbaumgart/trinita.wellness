import React from '../../../utils/react';
import {PageMedia, PageTitle} from './';
import CardTitle from 'material-ui/Card/CardTitle';
import {Card} from 'material-ui/Card';
class PageCard extends React.PureComponent {
	render() {
		const style = this.props.overlayStyle;
		style.height = "100px";
		return (
			<Card>
				<PageMedia
					title={this.props.title}
					subtitle={this.props.subtitle}>
					<PageTitle
						style={style}
						title={this.props.title}
						subtitle={this.props.subtitle || null}
						titleStyle={{color: "black"}}
						subtitleStyle={{color: "#888888"}} />
				</PageMedia>
				{this.props.children}
			</Card>
		);
	}
}
PageCard.propTypes = {
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string,
	overlayStyle: React.PropTypes.object,
	image: React.PropTypes.node
};
PageCard.defaultProps = {
	subtitle: null,
	overlayStyle: {},
	image: null
};

export default PageCard;