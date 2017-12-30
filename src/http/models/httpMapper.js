class HttpMapper {
    constructor(requestMapper, responseMapper) {
        const defaultMapper = data => data;
        this.responseMapper = typeof responseMapper === 'function' ? responseMapper : defaultMapper;
        this.requestMapper = typeof requestMapper === 'function' ? requestMapper : defaultMapper;
    }
    static isHttpMapper(mapper) {
        return mapper instanceof HttpMapper;
    }
}
export default HttpMapper;
