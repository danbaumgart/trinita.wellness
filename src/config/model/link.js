import {RouteConstants, RouteLabels, RoutePaths} from '../handlers/routes';
const InvalidParametersMessage = "INVALID ROUTE PROPERTY PASSED TO ROUTE LINK MODEL CONSTRUCTOR";
export const Routes = RouteConstants;
export class LinkModel {
	constructor(route) {
		if(!RouteConstants.values.includes(route)) throw new Error(InvalidParametersMessage);
		else if(!RoutePaths[route]) new Error(`ROUTE ${route} HAS NO VALID PATH ASSIGNED`);
		else if(!RouteLabels[route]) new Error(`ROUTE ${route} HAS NO VALID LABEL ASSIGNED`);
		this.route = route;
		this.path = RoutePaths[route];
		this.label = RouteLabels[route];
	}
	static IsLinkModel(model) {
		return model instanceof LinkModel;
	}
	handleClick(callback) {
		if(typeof callback === "function") return () => callback(this);
	}
}
export const IsLinkModel = LinkModel.IsLinkModel;
export const ToLinkModel = route => new LinkModel(route);