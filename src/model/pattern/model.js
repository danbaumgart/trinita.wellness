import {Model} from '..';
import Utils from '../../utils';
import {CharacterPatterns, DataPatterns} from '../schema/handlers/patterns';
class Pattern extends Model {
    constructor(patternType) {
        super();
        this.type = patternType;
        this.value = Pattern.getValueByPatternType(patternType);
    }
    get expression() {
        return Pattern.Expression(this.value);
    }
    get wrappedExpression() {
        let pattern = this.value;
        if(Pattern.isCharacterPattern(pattern)) pattern += '+';
        return Pattern.WrappedExpression(pattern);
    }
    static get TYPE_ERROR_MESSAGE() {
        return `Pattern type must be one of: ${JSON.stringify(Pattern.Types)}`;
    }
    static get Types() {
        return Utils.removeDuplicates(DataPatterns.keys.concat(CharacterPatterns.keys));
    }
    static getValueByPatternType(type) {
        if(Pattern.isCharacterPattern(type)) return CharacterPatterns[type];
        else if(Pattern.isDataPattern(type)) return DataPatterns[type];
        Pattern.throwTypeError(Pattern.TYPE_ERROR_MESSAGE, {type});
    }
    static Expression(pattern) {
        return new RegExp(pattern, Utils.RegExp.Parameters.GLOBAL_MATCH);
    }
    static WrappedExpression(pattern) {
        return new RegExp(`^${pattern}$`, Utils.RegExp.Parameters.GLOBAL_MATCH);
    }
    static isDataPattern(patternType) {
        return DataPatterns.keys.includes(patternType);
    }
    static isCharacterPattern(patternType) {
        return CharacterPatterns.keys.includes(patternType);
    }
}

export default Pattern;
