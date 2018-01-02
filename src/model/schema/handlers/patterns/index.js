import {Pattern} from '../../../pattern';
import CharacterPatternHandler from './characters';
import DataPatternHandler from './data';
export const CharacterPatterns = CharacterPatternHandler;
export const DataPatterns = DataPatternHandler;
const PatternHandler = {
    isValidType(type) {
        return Pattern.isCharacterPattern(type) ||
            Pattern.isDataPattern(type);
    },
    getExpression(pattern) {
        if(PatternHandler.isValidType(pattern))
            return new Pattern(pattern).expression;
        return Pattern.Expression(pattern);
    },
    getWrappedExpression(pattern) {
        if(PatternHandler.isValidType(pattern))
            return new Pattern(pattern).wrappedExpression;
        return Pattern.WrappedExpression(pattern);
    },
    inputValueMatchesPattern(inputValue, pattern) {
        const wrappedExpression = PatternHandler.getWrappedExpression(pattern);
        return wrappedExpression.test(inputValue.trim());
    },
    getPatternMatches(inputValue, pattern){
        const expression = pattern instanceof RegExp && pattern ||
            PatternHandler.getExpression(pattern);
        return inputValue.match(expression) || [];
    }
};
export default PatternHandler;