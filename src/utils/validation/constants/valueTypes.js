const ValueTypes = {
    BOOLEAN: 'boolean',
    NULL: 'null',
    UNDEFINED: 'undefined',
    NUMBER: 'number',
    STRING: 'string',
    SYMBOL: 'symbol',
    OBJECT: 'object',
    PHONE: 'phone',
    EMAIL: 'email',
    DATE: 'date',
    TIME: 'time',
    INTEGER: 'integer',
    ARRAY: 'array'
};
Object.defineProperty(ValueTypes, "values", {
    get: () => Object.values(ValueTypes)
});
Object.freeze(ValueTypes);
export default ValueTypes;
