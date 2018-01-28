import { takeEvery, put, call, select } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import {
	getUsersList,
	setUsersList,
	setFollowersList,
	showLoading,
	hideLoading,
	getFollowersList,
	setSelectedUser,
	setAboutInfo,
	getAboutInfo
} from '../redux/modules/Home/actions';
import { API_HOST } from '../config';

const onFail = (message) => {
	Alert.alert('Houston we have a problem:', `Error: ${message}`)
};

const reguest = (url) => {
	return fetch(url).then(res => res.json()).catch(e => onFail(e.message));
};

export function* getGitUsers ({ days = 100 }) {
	yield put(showLoading());
	const list = yield reguest(`${API_HOST}/users?per_page=${days}`);
	if (list) {
		yield put(setUsersList(list));
		yield put(hideLoading());
	}
}

export function* getFollowersGitUsers ({ payload }) {
	yield put(showLoading());
	const { followers_url } = payload;
	yield put(setSelectedUser(payload));
	const list = yield reguest(followers_url);
	if (list) {
		yield put(setFollowersList(list));
		yield put(hideLoading());
		Actions.followers();
	}
}

export function*  getAboutMe () {
	const about = yield reguest(`${API_HOST}/users/MariaPonomarets`);
	if (about) {
		yield put(setAboutInfo(about));
	}
}

export function* routerWatcher () {
	yield takeEvery(getUsersList, getGitUsers);
	yield takeEvery(getFollowersList, getFollowersGitUsers);
	yield takeEvery(getAboutInfo, getAboutMe);
}

export default routerWatcher;
