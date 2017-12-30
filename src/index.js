/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import muiCustom from './config/theme/muiCustom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {loadLinks, loadSteps} from './actions/creators/app';
import {loadUniversities} from './actions/creators/universities';
import {loadStates} from './actions/creators/states';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/styles.css';
injectTapEventPlugin();
const store = configureStore();

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadCourses() action is invoked, which makes an API call, and dispatches the loadCoursesSuccess action
// 3. that action: store -> root reducer -> courses reducer
// 4. courses reducer handles that action, recieves course payload and return new state that has courses: courses payload
// 5. the CoursesPage component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
// const promiseAlert = (status = AlertTypes.DEFAULT) => store.dispatch(createAlertAsync(new AlertModel(`${status} PROMISE`, status)));
// const syncAlert = (status = AlertTypes.DEFAULT) => new AlertModel(`${status} PROMISE`, status);
// const dispatchAsync = (id = "ASYNC") => Promise.all([
//     syncAlert(AlertTypes.SUCCESS),
//     syncAlert(AlertTypes.FAILURE),
//     syncAlert()
// ]).then(results => store.dispatch(updateAlertNotifications(results)));
// setTimeout(dispatchAsync, 3000);
Promise.all([
	store.dispatch(loadLinks()),
	store.dispatch(loadSteps()),
	store.dispatch(loadUniversities('')),
	store.dispatch(loadStates())
]);
render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={getMuiTheme(muiCustom)}>
			<Router history={browserHistory} routes={routes}/>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app')
);