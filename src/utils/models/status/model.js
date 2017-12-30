import Types from './constants/types';
export const StatusTypes = Types;
class StatusModel {
    constructor(status, color, icon) {
        if (!StatusTypes.values.includes(status))
            throw new Error(`INVALID STATUS TYPE: ${status} PROVIDED TO STATUS MODEL`);
        this.value = status;
        this.color = color;
        this.icon = icon;
    }
    static IsStatusModel(model) {
        return model instanceof StatusModel;
    }
}
export default StatusModel;