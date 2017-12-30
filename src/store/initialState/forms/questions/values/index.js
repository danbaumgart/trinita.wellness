const Message = {
	name: '',
	email: '',
	subject: '',
	body: ''
};
Object.defineProperty(Message, 'errors', {
	get: () => Object.assign(...Object.keys(Message).map(key => ({[key]: []})))
});
Object.seal(Message);
export default Message;