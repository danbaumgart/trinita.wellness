import ErrorHandler from '../error/handlers';
import BaseModel from './model';
import LogModel from './log';
import IdentityModel from './identity';
export const Model = BaseModel;
export const Error = ErrorHandler;
export const Identity = IdentityModel;
export const Log = LogModel;
export default Model;