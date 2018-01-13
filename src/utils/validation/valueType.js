import Moment from 'moment';
import {DateTime} from '../dateTime/model';
import ValueTypes from '../constants/valueTypes';
const ValueType = {
    typeOfNumber(value) {
        return typeof value === ValueTypes.NUMBER;
    },
    typeOfBoolean(value) {
        return typeof value === ValueTypes.BOOLEAN;
    },
    typeOfString(value) {
        return typeof value === ValueTypes.STRING;
    },
    typeOfObject(value) {
        return typeof value === ValueTypes.OBJECT;
    },
    typeOfFunction(value) {
        return typeof value === ValueTypes.FUNCTION;
    },
    typeOfUndefined(value) {
        return typeof value === ValueTypes.UNDEFINED;
    },
    typeOfNull(value) {
        return typeof value === ValueTypes.NULL;
    },
    typeOfArray(value) {
        return Array.isArray(value);
    },
    typeOfInteger(value) {
        return this.typeOfNumber(value) && value % 1 === 0;
    },
    typeOfDate(value) {
        if(this.typeOfString(value)) return PatternUtils.isValidPatternMatch(ValueTypes.DATE, value);
        return DateTime.isDateModel(value) || DateTime.isStandardDate(value) || Moment(value).isValid();
    },
    typeOfTime(value) {
        if(ValidationUtils.typeOfString(value)) return ValidationUtils.patternMatch(SchemaTypes.TIME, value);
        return DateTime.isTimeModel(value) ||
            DateTime.isStandardDate(value) ||
            Moment(value).isValid();
    },
    typeOfPhone(value) {
        return ValidationUtils.patternMatch(SchemaTypes.PHONE, value);
    },
    typeOfEmail(value) {
        return ValidationUtils.patternMatch(SchemaTypes.EMAIL, value);
    },
    isNumeric(input) {
        return ValidationUtils.typeOfNumber(input) || !Number.isNaN(Number(input));
    },
    hasBooleanValue(input) {
        return ValidationUtils.typeOfBoolean(input) ||
            input === "true" || input === "false";
    },
    isValidRequired(input) {
        return ValidationUtils.typeOfArray(input) ? input.length > 0 : Boolean(input);
    },
    isValidMinimumLength(input, minimum) {
        return ValidationUtils.typeOfString(input) && input.length >= minimum;
    },
    isValidMaximumLength(input, maximum) {
        return ValidationUtils.typeOfString(input) && input.length <= maximum;
    },
    isValidMinimumValue(input, minimum) {
        return ValidationUtils.typeOfNumber(input) && input >= minimum;
    },
    isValidMaximumValue(input, maximum) {
        return ValidationUtils.typeOfNumber(input) && input >= maximum;
    },
    isValidMinimumPatternMatch(patternKey, inputValue, minimum) {
        return PatternHandler.getPatternMatches(inputValue, patternKey).length >= minimum;
    },
    isValidMaximumPatternMatch(pattern, inputValue, maximum) {
        return PatternHandler.getPatternMatches(inputValue, pattern).length <= maximum;
    },
    isValidPatternMatch(pattern, input) {
        return PatternHandler.inputValueMatchesPattern(input, pattern);
    }
};
export default ValidationUtils;
