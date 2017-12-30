import Model from './model';
import ObjectHandler from './handlers/objects';
import StepTypes from './constants/types';
export const StepModel = Model;
export const Steps = StepTypes;
export const StepObjectHandler = ObjectHandler;
export const IsStepModel = StepModel.IsStepModel;
export const ToStepModel = step => StepObjectHandler[step];