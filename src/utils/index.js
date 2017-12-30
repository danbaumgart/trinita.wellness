import RegularExpressionParameters from './regexp/constants/regExpParameters';
export const Reducers = {
    duplicateReducer(consolidatedArray, item) {
        if (!consolidatedArray.includes(item)) consolidatedArray.push(item);
        return consolidatedArray;
    }
};
export const RegExpParameters = RegularExpressionParameters;
export default {
    RegExp: {
        Parameters: RegExpParameters
    },
    removeDuplicates(comprehensiveArray) {
        return comprehensiveArray.reduce(Reducers.duplicateReducer, []);
    }
};
