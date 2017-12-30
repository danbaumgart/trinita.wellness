const LogTypes = {
    ERROR: 'ERROR',
    WARN: 'WARN',
    LOG: 'LOG'
};
Object.defineProperty(LogTypes, 'values', {
    get: () => Object.values(LogTypes)
});
Object.freeze(LogTypes);
export default LogTypes;
