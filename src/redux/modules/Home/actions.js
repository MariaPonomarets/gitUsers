import { createAction } from 'redux-actions';

export const getUsersList = createAction('GET_USERS_LIST');

export const setUsersList = createAction('SET_USERS_LIST');

export const getFollowersList = createAction('GET_FOLLOWERS_LIST');

export const setFollowersList = createAction('SET_FOLLOWERS_LIST');

export const showLoading = createAction('SHOW_LOADING');

export const hideLoading = createAction('HIDE_LOADING');

export const setSelectedUser = createAction('SET_SELECTED_USER');

export const getAboutInfo = createAction('GET_ABOUT_INFO');

export const setAboutInfo = createAction('SET_ABOUT_INFO');
