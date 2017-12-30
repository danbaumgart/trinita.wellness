const Institutions = {
	HIGH_SCHOOL: "HIGH_SCHOOL",
	UNIVERSITY: "UNIVERSITY",
	OTHER: "OTHER"
};
Object.defineProperty(Institutions, 'values', {
	get: () => Object.values(Institutions)
});
export default Object.assign(Object.freeze(Institutions));
