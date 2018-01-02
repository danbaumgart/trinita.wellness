const Units = {
    HOUR: 'hour',
    DAY: 'day',
    MONTH: 'month',
    MINUTE: 'minute',
    SECOND: 'second',
    MILLISECOND: 'millisecond',
    YEAR: 'year',
    MERIDIEM: 'meridiem'
};
Object.defineProperty(Units, 'values', {
    get: () => Object.values(Units)
});
Object.freeze(Units);
export default Units;