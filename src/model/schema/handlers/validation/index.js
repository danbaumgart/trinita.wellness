import PatternHandler from '../patterns';
import {SchemaPatterns, SchemaTypes} from '../../constants';
import Moment from 'moment';
import {DateTime} from '../../../../utils/dateTime/model';
import DataTypes from '../../../../utils/constants/dataTypes';
import TypeHandler from '../constraints/restrict';
const ValidationUtils = {
    TypeHandler,
    typeOfNumber(input) {
        return typeof input === DataTypes.NUMBER;
    },
    typeOfBoolean(input) {
        return typeof input === DataTypes.BOOLEAN;
    },
    typeOfString(input) {
        return typeof input === DataTypes.STRING;
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
    minimumLength(input, minimum) {
        return ValidationUtils.typeOfString(input) && input.length >= minimum;
    },
    maximumLength(input, maximum) {
        return ValidationUtils.typeOfString(input) && input.length <= maximum;
    },
    minimumValue(input, minimum) {
        return ValidationUtils.typeOfNumber(input) && input >= minimum;
    },
    maximumValue(input, maximum) {
        return ValidationUtils.typeOfNumber(input) && input >= maximum;
    },
    minimumPatternMatch(patternKey, inputValue, minimum) {
        return PatternHandler.getPatternMatches(inputValue, patternKey).length >= minimum;
    },
    maximumPatternMatch(pattern, inputValue, maximum) {
        return PatternHandler.getPatternMatches(inputValue, pattern).length <= maximum;
    },
    patternMatch(pattern, input) {
        return PatternHandler.inputValueMatchesPattern(input, pattern);
    }
};
export const Validate = ValidationUtils;
export default ValidationUtils;
