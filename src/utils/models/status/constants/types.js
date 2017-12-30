const StatusTypes = {
    WARNING: 'WARNING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    INFO: 'INFO'
};
Object.defineProperty(StatusTypes, 'values', {
    get: () => Object.values(StatusTypes)
});
export default Object.assign(Object.freeze(StatusTypes));