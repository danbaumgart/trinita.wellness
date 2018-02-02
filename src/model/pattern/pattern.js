import {Model} from '..';
import Utils from '../../utils';
import Patterns from './constants/patterns';
class PatternModel extends Model {
    constructor(pattern) {
        super();
        this.value = pattern;
    }
    get regularExpression() {
        return PatternModel.RegularExpression(this.value);
    }
    get wrappedRegularExpression() {
        return PatternModel.WrappedRegularExpression(this.value);
    }

    static RegularExpression(patternValue) {
        return new RegExp(patternValue, Utils.RegExp.Arguments.GlobalMatch);
    }
    static get keys() {
        return Patterns.keys;
    }
    static WrappedRegularExpression(patternValue){
        return new RegExp(`^${patternValue}$`, Utils.RegExp.Arguments.GlobalMatch);
    }
    static getName(pattern) {
        return pattern && this.keys.find(key => key.toLowerCase() === pattern.toLowerCase()) || null;
    }
}
export default PatternModel;