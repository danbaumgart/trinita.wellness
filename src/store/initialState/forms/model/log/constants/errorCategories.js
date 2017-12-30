const ErrorCategories = {
    ARGUMENTS: "ARGUMENTS",
    TYPE: "TYPE",
    VALUE: "VALUE"
};
Object.defineProperty(ErrorCategories, 'values', {
    get: () => Object.values(ErrorCategories)
});
Object.freeze(ErrorCategories);
export default ErrorCategories;
