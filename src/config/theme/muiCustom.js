import * as colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import * as spacing from 'material-ui/styles/spacing';
import CustomColors from '../constants/colors';

const palette = {
	primary1Color: CustomColors.PURPLE,
	primary2Color: CustomColors.GREEN_YELLOW,
	primary3Color: colors.grey400,
	accent1Color: CustomColors.GREEN_YELLOW,
	accent2Color: colors.grey100,
	accent3Color: colors.grey500,
	textColor: colors.darkBlack,
	alternateTextColor: colors.fullWhite,
	canvasColor: colors.white,
	borderColor: colors.grey300,
	disabledColor: fade(colors.darkBlack, 0.3),
	pickerHeaderColor: CustomColors.GREEN_YELLOW,
	clockCircleColor: fade(colors.darkBlack, 0.075),
	shadowColor: colors.fullBlack
};

export default {
	spacing: spacing,
	fontFamily: 'Roboto, sans-serif',
	palette,
	overlay: {
		backgroundColor: fade(colors.fullBlack, 0.57)
	},
	appBar: {
		color: CustomColors.PURPLE,
		textColor: colors.white
	},
	ripple: {
		color: colors.fullWhite,
		backgroundColor: colors.fullWhite
	},
	baseTheme: {
		canvasColor: colors.fullWhite
	},
	zIndex: {
		appBar: 1250,
		drawer: 1200
	}
};
