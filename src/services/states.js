import Service from './service';
import Resources from './constants/resources';
import {Institutions, Countries} from '../store/constants';
class States extends Service {
    constructor() {
        super(Resources.STATES);
    }
	static ToViewModel(stateProvince) {
		return Object.assign({}, {id: stateProvince.id, name: stateProvince.name});
	}
	static ResponseMapper(response) {
		return Service.ResponseMapper(response)
            .filter(stateProvince => stateProvince.country === Countries.UNITED_STATES_OF_AMERICA)
            .map(States.ToViewModel);
	}
    Get(){
        return super.Get().then(States.ResponseMapper)
    }
}
export default new States();
