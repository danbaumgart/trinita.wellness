const SchemaLimits = {
    MINIMUM: "minimum",
    MAXIMUM: "maximum"
};
Object.defineProperty(SchemaLimits, 'values', {
    get: () => Object.values(SchemaLimits)
});
Object.freeze(SchemaLimits);
export default SchemaLimits;