import { all } from 'redux-saga/effects';
import homeSaga from './home';


const rootSaga = function* root () {
	yield all([
		homeSaga()
	]);
};

export default rootSaga;