import _TextField from './textField';
import _TextArea from './textArea';
import _TimePicker from './timePicker';
import _DatePicker from './datePicker';
import _Checkbox from './checkbox';
import _PhoneNumber from './masked/phoneNumber';
import _SelectField from './selectField';
import _AutoComplete from './autoComplete';
import _MaskedField from './masked/maskedField';
import _Paper from 'material-ui/Paper';
import _UniversityAutoComplete from '../../views/appointment/content/university/autoComplete';
const INPUTS = {
	TimePicker: _TimePicker,
	DatePicker: _DatePicker,
	Checkbox: _Checkbox,
	TextField: _TextField,
	MaskedField: _MaskedField,
	PhoneNumber: _PhoneNumber,
	Paper: _Paper,
	TextArea: _TextArea,
	AutoComplete: _AutoComplete,
	SelectField: _SelectField,
	UniversityAutoComplete: _UniversityAutoComplete
};
export const {
	TimePicker,
	DatePicker,
	Checkbox,
	TextField,
	Paper,
	TextArea,
	PhoneNumber,
	AutoComplete,
	SelectField
} = INPUTS;
