import _Card from 'material-ui/Card/Card';
import _CardText from './cardText';
import _CardMedia from './cardMedia';
import _CardTitle from 'material-ui/Card/CardTitle';
import _CardHeader from 'material-ui/Card/CardHeader';
const CARD_COMPONENTS = {
	Card: _Card,
	CardText: _CardText,
	CardMedia: _CardMedia,
	CardTitle: _CardTitle,
	CardHeader: _CardHeader
};
export const {Card, CardText, CardMedia, CardTitle, CardHeader} = CARD_COMPONENTS;