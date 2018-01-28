import { handleActions } from 'redux-actions';
import { setUsersList, setFollowersList, showLoading, hideLoading, setSelectedUser, setAboutInfo } from './actions';

const defaultState = {
	usersList: null,
	followersList: null,
	isLoading: false,
	selectedUser: null,
	aboutMe: null
};

export default handleActions({
		[setUsersList]: (state, { payload }) => {
			return { ...state, usersList: payload }
		},
		[setFollowersList]: (state, { payload }) => {
			return { ...state, followersList: payload }
		},
		[showLoading]: (state) => {
			return { ...state, isLoading: true }
		},
		[hideLoading]: (state) => {
			return { ...state, isLoading: false }
		},
		[setSelectedUser]: (state, { payload }) => {
			return { ...state, selectedUser: payload }
		},
		[setAboutInfo]: (state, { payload }) => {
			return { ...state, aboutMe: payload }
		}
	},
	defaultState
);