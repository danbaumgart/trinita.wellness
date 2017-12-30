import ACTIONS from '../types/app';
import {Routes, ToLinkModel} from '../../config/model/link';
import {ToStepModel, Steps} from '../../config/model/step';

function _closeDrawer() {
	return {type: ACTIONS.CLOSE_DRAWER};
}
function _toggleDrawer() {
	return {type: ACTIONS.TOGGLE_DRAWER};
}
function _loadLinks(links) {
	return {type: ACTIONS.LOAD_LINKS, payload: links};
}
function _loadSteps(steps) {
	return {type: ACTIONS.LOAD_STEPS, payload: steps};
}
function _updateSelectedLink(step) {
	return {type: ACTIONS.UPDATE_CURRENT_STEP, payload: step};
}
export const closeDrawer = () => function (dispatch) {
	return dispatch(_closeDrawer());
};
export const toggleDrawer = () => function (dispatch) {
	return dispatch(_toggleDrawer());
};
export const updateCurrentStep = step => function (dispatch) {
	return dispatch(_updateSelectedLink(step));
};
export const loadLinks = () => function (dispatch) {
	return dispatch(_loadLinks(Routes.values.map(ToLinkModel)));
};
export const loadSteps = () => function (dispatch) {
	return dispatch(_loadSteps(Steps.values.map(ToStepModel)));
};
