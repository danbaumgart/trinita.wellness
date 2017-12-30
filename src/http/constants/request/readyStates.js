const ReadyStates = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
};
Object.defineProperty(ReadyStates, 'values', {
    get: () => Object.values(ReadyStates)
});
Object.freeze(ReadyStates);
export default ReadyStates;