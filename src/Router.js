import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import HomeContainer from './containers/HomeContainer';
import FollowersContainer from './containers/FollowersContainer';
import AboutContainer from './containers/AboutContainer';
import WebPage from './Screens/WebPage';

const onBackPress = () => {
	if (Actions.state.index === 0) {
		return false
	}
	Actions.pop({ type: 'replace' });
	return true
};

export default () => (
	<Router backAndroidHandler={onBackPress}>
		<Scene key="root">
			<Scene key="home" component={HomeContainer} hideNavBar panHandlers={null}/>
			<Scene key="followers" component={FollowersContainer} hideNavBar panHandlers={null}/>
			<Scene key="about" component={AboutContainer} hideNavBar panHandlers={null}/>
			<Scene key="web" component={WebPage} hideNavBar panHandlers={null}/>
		</Scene>
	</Router>
)