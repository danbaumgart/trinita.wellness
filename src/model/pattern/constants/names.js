const Names = {
    DATE: 'Date',
    EMAIL: 'Email',
    TIME: 'Time',
    PHONE: 'Phone',
    ALPHA: 'Alpha',
    ALPHANUMERIC: 'Alphanumeric',
    LOWERCASE: 'Lowercase',
    NUMERIC: 'Numeric',
    SPECIAL: 'Special',
    UPPERCASE: 'Uppercase'
};
Object.defineProperty(Names, 'values', {
    get: () => Object.values(Names)
});
Object.freeze(Names);
export default Names;