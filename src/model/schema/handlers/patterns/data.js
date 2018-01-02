import {SchemaTypes} from '../../constants';
import DataPatterns from '../../../pattern/constants/dataFormat';
const DataPatternHandler = {
	[SchemaTypes.DATE]: DataPatterns.Date,
	[SchemaTypes.EMAIL]: DataPatterns.EmailAddress,
	[SchemaTypes.TIME]: DataPatterns.Time,
    [SchemaTypes.PHONE]: DataPatterns.PhoneNumber,
	[SchemaTypes.INTEGER]: DataPatterns.Integer
};
Object.defineProperties(DataPatternHandler, {
    'keys': {get: () => Object.keys(DataPatternHandler)},
    'values': {get: () => Object.values(DataPatternHandler)}
});
Object.freeze(DataPatternHandler);
export default DataPatternHandler;
