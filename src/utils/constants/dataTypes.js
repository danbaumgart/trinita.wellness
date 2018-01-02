const DataTypes = {
    UNDEFINED: 'undefined',
    NULL: 'null',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    STRING: 'string',
    SYMBOL: 'symbol',
    FUNCTION: 'function',
    OBJECT: 'object'
};
Object.defineProperty(DataTypes, 'values', {
    get: () => Object.values(DataTypes)
});
Object.freeze(DataTypes);
export default DataTypes;