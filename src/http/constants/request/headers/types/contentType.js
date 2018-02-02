const ContentType = {
	ApplicationXWWWFormUriEncoded: 'application/x-www-form-urlencoded',
	ApplicationJSON: 'application/json'
};
Object.defineProperties(ContentType, 'values', {
	get: () => Object.values(ContentType)
});
Object.freeze(ContentType);
export default ContentType;