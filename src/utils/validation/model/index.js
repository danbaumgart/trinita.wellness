import _ComprehensiveValidator from './comprehensiveValidator';
import _OptimizedValidator from './optimizedValidator';
const MODELS = {
	OptimizedValidator: _OptimizedValidator,
	ComprehensiveValidator: _ComprehensiveValidator
};
export const {OptimizedValidator, ComprehensiveValidator} = MODELS;
