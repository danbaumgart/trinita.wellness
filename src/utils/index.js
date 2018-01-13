import RegExpArguments from './regexp/constants/arguments';
export const Reducers = {
    Unique: (array, item) => !array.includes(item) ? array.concat(item) : array
};
export const RegExp = {
    Arguments: RegExpArguments
};
export default {
    RegExp,
    Reducers
};
