import {Model} from '../../..';
import CharacterPatterns from './characters';
import DataPatterns from './data';
import Utils from '../../../../utils';

class Pattern extends Model {
    constructor(name) {
        super();
        this.name = name;
        this.value = Pattern.getPatternValue(name);
    }
    static getPatternValue(patternName) {
        if(!Pattern.NAMES.includes(name)) Pattern.throwTypeError(Pattern.TYPE_ERROR_MESSAGE, {name});
        else if(DataPatterns.keys.includes(patternName)) return DataPatterns[patternName];
        else if(CharacterPatterns.keys.includes(patternName)) return CharacterPatterns[patternName];
    }
    get expression() {
        return Pattern.Expression(this.pattern);
    }
    get wrappedExpression() {
        let pattern = this.pattern;
        if(CharacterPatterns.keys.includes(this.name)) pattern += '+';
        return Pattern.Expression(`^${pattern}$`, Utils.RegExp.Parameters.GLOBAL_MATCH);
    }
    static Expression(pattern) {
        return new RegExp(pattern, Utils.RegExp.Parameters.GLOBAL_MATCH);
    }
    static get TYPE_ERROR_MESSAGE() {
        return `Pattern name must be one of: ${JSON.stringify(Pattern.NAMES)}`;
    }
    static get NAMES() {
        return Utils.removeDuplicates(DataPatterns.keys.concat(CharacterPatterns.keys));
    }
}
export default {
    matchEntire(inputValue, patternKey){
        const wrappedExpression = new Pattern(patternKey).wrappedExpression;
        return wrappedExpression.test(inputValue.trim());
    },
    matchEntireInput(inputValue, patternKey){
        const wrappedExpression = new Pattern(patternKey).wrappedExpression;
        return wrappedExpression.test(inputValue.trim());
    },
    getInstances(inputValue, patternKey){
        const expression = new Pattern(patternKey).expression;
        return inputValue.match(expression) || [];
    }
};
