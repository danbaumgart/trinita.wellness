const ValueTypes = {
    UNDEFINED: 'undefined',
    NULL: 'null',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    STRING: 'string',
    SYMBOL: 'symbol',
    FUNCTION: 'function',
    OBJECT: 'object'
};
Object.defineProperty(ValueTypes, 'values', {
    get: () => Object.values(ValueTypes)
});
Object.freeze(ValueTypes);
export default ValueTypes;