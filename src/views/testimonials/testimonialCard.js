import React from '../../utils/react';
import {CardText} from '../../ui/common/card';
import {Card, CardHeader} from 'material-ui';
import Paper from '../../ui/common/paper';
import {SocialPerson} from 'material-ui/svg-icons'
const TestimonialCard = ({author, text, organization, website, phone}) => {
	const name = `${author.last}, ${author.first} ${author.middle}.`;
	const organizationNode = website ?
		<a target="_blank" href={`http://${website}`}>{organization || website}</a> :
		organization || null;
	const subtitle = phone ? <div>{organizationNode}<br/>{phone}</div> : organizationNode;
	return (
		<Paper margin={5} left={0} right={0} zDepth={2}>
			<Card>
				<CardHeader
					avatar={<SocialPerson/>}
					title={name}
					subtitle={subtitle} />
				<CardText content={text}/>
			</Card>
		</Paper>
	)
};
TestimonialCard.propTypes = {
	author: React.PropTypes.object.isRequired,
	text: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.string), React.PropTypes.string]).isRequired,
	organization: React.PropTypes.string,
	website: React.PropTypes.string,
	phone: React.PropTypes.string
};
TestimonialCard.defaultProps = {
	organization: null,
	website: null,
	phone: null
};


export default TestimonialCard;