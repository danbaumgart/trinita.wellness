//import PatternHandler from '../patterns';
import PatternHandler from '../../pattern/handler';
import Pattern from '../../pattern/pattern';
import {SchemaPatterns, SchemaTypes} from '../../schema/constants/index';
import Moment from 'moment';
import {DateTime} from '../../../utils/dateTime/model';
import ValueTypes from '../../../utils/constants/valueTypes';
import TypeHandler from '../../schema/handlers/constraints/restrict';
const ValidationUtils = {
    TypeHandler,
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
        return ValidationUtils.typeOfNumber(value) && value % 1 === 0;
    },
    typeOfDate(value) {
        if(ValidationUtils.typeOfString(value)) return ValidationUtils.patternMatch(SchemaTypes.DATE, value);
        return DateTime.isDateModel(value) ||
            DateTime.isStandardDate(value) ||
            Moment(value).isValid();
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
        const matches = PatternHandler.isValid(pattern) ?
            Pattern.getMatchingInstances(new PatternHandler(pattern).regularExpression) || [] :
            new Pattern(pattern).getMatchingInstances(inputValue);
        return matches <= maximum;
    },
    isValidPatternMatch(pattern, value) {
        if(PatternHandler.isValid(pattern)) {
            return new PatternHandler(pattern).wrappedRegularExpression.test(value);
        } return new Pattern(pattern).testInputValue(value);
    }
};
export const Validate = ValidationUtils;
export default ValidationUtils;
