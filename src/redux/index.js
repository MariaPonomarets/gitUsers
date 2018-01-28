import { combineReducers } from 'redux';
import configureStore from './configStore';
import reducers from './reducers';

export default () => {
	const rootReducer = combineReducers(reducers);

	return configureStore(rootReducer, rootSaga)
}
