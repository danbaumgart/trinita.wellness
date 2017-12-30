import StepContent from './content';
import StepIcons from './icons';
import StepLabels from './labels';
import StepSchema from './schema';
import Steps from '../constants/types';
const StepHandler = {};
Object.defineProperties(StepHandler, {
	'steps': {get: () => Steps.values},
	'lastIndex': {get: () => StepHandler.steps.length - 1},
	'icons': {get: () => StepHandler.steps.map(step => StepIcons[step])},
	'schema': {get: () => StepHandler.steps.map(step => StepSchema[step])},
	'labels': {get: () => StepHandler.steps.map(step => StepLabels[step])},
	'content': {get: () => StepHandler.steps.map(step => StepContent[step])}
});

export default Object.assign(Object.freeze(StepHandler));
