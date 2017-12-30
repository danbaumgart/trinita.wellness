import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
export default function(initialState) {
	const enhancer = composeWithDevTools(
		applyMiddleware(thunk, reduxImmutableStateInvariant()),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
	return createStore(reducers, initialState, enhancer);
}