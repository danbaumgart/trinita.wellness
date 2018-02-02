import RegExp from './regexp';
export const Reducers = {
    Unique: (array, item) => !array.includes(item) ? array.concat(item) : array
};
export const RegularExpression = RegExp;
export default {
    RegExp,
    Reducers
};