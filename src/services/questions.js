import Service from './service';
import Resources from './constants/resources';
class Questions extends Service {
    constructor() {
        super(Resources.QUESTIONS);
    }
}
export default new Questions();
