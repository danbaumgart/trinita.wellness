import {Pattern} from '../../../pattern';
import CharacterPatternHandler from './characters';
import DataPatternHandler from './data';
export const CharacterPatterns = CharacterPatternHandler;
export const DataPatterns = DataPatternHandler;
export default {
    isValidType(type) {
        return Pattern.isCharacterPattern(type) || Pattern.isFormatPattern(type);
    },
    getRegularExpression(pattern) {
        if(this.isValidType(pattern)) return new Pattern(pattern).regularExpression;
        return Pattern.RegularExpression(pattern);
    },
    getWrappedRegularExpression(pattern) {
        if(this.isValidType(pattern)) return new Pattern(pattern).wrappedRegularExpression;
        return Pattern.WrappedRegularExpression(pattern);
    },
    inputValueMatchesPattern(value, pattern) {
        const wrappedExpression = this.getWrappedRegularExpression(pattern);
        return wrappedExpression.test(value.trim());
    },
    isRegularExpression(regExp) {
        return regExp instanceof RegExp;
    },
    getPatternMatches(inputValue, pattern){
        const expression = this.isRegularExpression(pattern) ? pattern : this.getExpression(pattern);
        return inputValue.match(expression) || [];
    }
};