import {Model} from '..';
class Identity extends Model {
    constructor(id) {
        super();
        this.id = id || Identity.nextId;
    }
    static get nextId() {
        if(!this.lastId) {
            this.lastId = 1;
            return this.lastId;
        } return ++this.lastId;
    }
}
export default Identity;
