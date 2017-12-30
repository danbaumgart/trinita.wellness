const Types = {
    EMAIL: 'email',
    PHONENUMBER: 'phone',
    NUMBER: 'number',
    INTEGER: 'integer',
    DATE: 'date',
    TIME: 'time'
};
Object.defineProperty(Types, 'values', {
    get: () => Object.values(Types)
});
Object.freeze(Types);
export default Types;
