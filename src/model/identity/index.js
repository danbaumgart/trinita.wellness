import Model from '..';
class IdentityModel extends Model {
    constructor(id) {
        super();
        this.id = id || IdentityModel.identity;
    }
    static get identity() {
        if(!this._id) {
            this._id = 1;
            return this._id;
        } else return ++this._id;
    }
}
export default IdentityModel;
