const Meridiem = {
    AM: 'AM',
    PM: 'PM'
};
Object.defineProperty(Meridiem, 'values', {
    get: () => Object.values(Meridiem)
});
Object.freeze(Meridiem);
export default Meridiem;