import {CriterionModel, PatternModel} from '../index';
import Names from '../constants/names';

export default {
    getCriterionName(name) {
        return Cri.getName(name);
    },
    getPatternName(name) {
        return PatternModel.Patterns.keys.find(key => key.toLowerCase() === name.toLowerCase());
    },
    getName(pattern) {
        if(pattern && Names.values.includes(pattern))
            return CriterionModel.keys.includes(pattern.toLowerCase()) ||
                PatternModel.keys.includes(pattern.toLowerCase()) || null;
    },
    getRegularExpression(name) {

    },
    getWrappedRegularExpression(name) {

    }
};

