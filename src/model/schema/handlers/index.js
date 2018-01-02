import {SchemaTypes, SchemaPatterns, SchemaAttributes, SchemaLimits} from '../constants';
import Limit from '../limit';
const sample = {
    type: SchemaTypes.PASSWORD,
    required: false,
    pattern: [
        SchemaPatterns.ALPHANUMERIC,
        Limit.Pattern(SchemaPatterns.ALPHA, 1),
        Limit.Pattern(SchemaPatterns.NUMERIC, 1, 2),
        Limit.Pattern(SchemaPatterns.SPECIAL, 1)
    ]
};
