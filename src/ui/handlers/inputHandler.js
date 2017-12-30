import INPUTS from '../constants/inputs';
import TextField from '../inputs/textField';
import NumberField from '../inputs/numberField';
import EmailField from '../inputs/emailField';
import TextArea from '../inputs/textArea';
import SearchField from '../inputs/searchField';
import TimePicker from '../inputs/timePicker';
import DatePicker from '../inputs/datePicker';
import Checkbox from '../inputs/checkbox';
import ExtensionField from '../inputs/extensionField';
import PhoneNumber from '../inputs/masked/phoneNumber';
import SelectField from '../inputs/selectField';
import AutoComplete from '../inputs/autoComplete';
export default {
	[INPUTS.TEXT]: TextField,
	[INPUTS.EXTENSION]: ExtensionField,
	[INPUTS.NUMBER]: NumberField,
	[INPUTS.SEARCH]: SearchField,
	[INPUTS.EMAIL]: EmailField,
	[INPUTS.TEXTAREA]: TextArea,
	[INPUTS.SELECT]: SelectField,
	[INPUTS.CHECKBOX]: Checkbox,
	[INPUTS.AUTOCOMPLETE]: AutoComplete,
	[INPUTS.DATEPICKER]: DatePicker,
	[INPUTS.TIMEPICKER]: TimePicker,
	[INPUTS.PHONENUMBER]: PhoneNumber
};