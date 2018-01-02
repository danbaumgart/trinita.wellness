const Metrics = {
    DATE: 'DATE',
    TIME: 'TIME'
};
Object.defineProperty(Metrics, 'values', {
    get: () => Object.values(Metrics)
});
Object.freeze(Metrics);
export default Metrics;