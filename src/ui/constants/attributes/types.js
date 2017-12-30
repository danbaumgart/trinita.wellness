const TypeAttributes = {
	TEXT: 'text',
	TEL: 'tel',
	EMAIL: 'email',
	PASSWORD: 'password',
	SEARCH: 'search',
	URL: 'url',
	DATETIME: 'datetime',
	DATE: 'date',
	TIME: 'time',
	NUMBER: 'number'
};
Object.defineProperty(TypeAttributes, 'values', {
	get: () => Object.values(TypeAttributes)
});
export default Object.freeze(TypeAttributes);
