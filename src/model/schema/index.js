import {SchemaTypes, SchemaAttributes, SchemaPatterns} from './constants';
import ValidationModel from './model';
export class FieldModel extends ValidationModel {
	constructor(type, minimum, maximum, ...patterns) {
        super(type, false, {minimum, maximum});
    }
    static Required(type, minimum, maximum) {
        return new this(type, true, minimum, maximum);
    }
    static Optional(type, minimum, maximum) {
        return new this(type, false, minimum, maximum);
    }
}

export class DateField extends FieldModel {
    constructor(required, minimum, maximum) {
        super(SchemaTypes.DATE, required, minimum, maximum);
    }
}
export class TimeField extends FieldModel {
    constructor(required, minimum, maximum) {
        super(SchemaTypes.TIME, required, minimum, maximum);
    }
}
export class TextField extends FieldModel {
    constructor(required, minimum, maximum) {
        super(SchemaTypes.TEXT, required, minimum, maximum);
    }
}
export class NumberField extends FieldModel {
    constructor(required, minimum, maximum) {
        super(SchemaTypes.NUMBER, required, minimum, maximum);
    }
}
export class IntegerField extends FieldModel {
    constructor(required, minimum, maximum) {
        super(SchemaTypes.INTEGER, required, minimum, maximum);
    }
}
