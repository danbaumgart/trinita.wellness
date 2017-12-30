import Service from './service';
import Resources from './constants/resources';
import {Institutions, Countries} from '../store/constants';
class Locations extends Service {
	constructor() {
		super(Resources.LOCATIONS);
	}
	static ToViewModel(data) {
		return {
			name: data && data.name || '',
			street: data && data.street || '',
			city: data && data.city || '',
			state: data && data.state || '',
			zip: data && data.zip || ''
		};
	}
	static ToDomainModel(viewModel) {
		return {
			name: viewModel.name,
			street: viewModel.street,
			city: viewModel.city,
			state: viewModel.state,
			zip: viewModel.zip,
			country: Countries.UNITED_STATES_OF_AMERICA,
			type: Institutions.UNIVERSITY
		}
	}
	Post(institution) {
		return super.Post(Locations.ToDomainModel(institution))
			.then(Service.ResponseMapper);
	}
}
export default new Locations();
