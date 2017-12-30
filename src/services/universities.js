import Service from './service';
import Resources from './constants/resources';
import StringUtils from '../utils/string';
class Universities extends Service {
    constructor() {
        super(Resources.UNIVERSITIES);
    }
    static ToViewModel(university) {
        return Object.assign({}, university,
            university.name && {name: StringUtils.toProperCase(university.name)},
            university.city && {city: StringUtils.toProperCase(university.city)});
    }
    static ResponseMapper(response) {
        const result = Service.ResponseMapper(response);
        const universities = Array.isArray(result) && result.length > 0 ? result : [];
	    return Promise.all(universities.map(Universities.ToViewModel));
    }
    SearchByName(name, pageSize = 10) {
        return super.Get(Service.ToQueryParameters({name: name.trim(), pageSize}))
            .then(Universities.ResponseMapper)
            .catch(err => []);
    }
}
export default new Universities();
