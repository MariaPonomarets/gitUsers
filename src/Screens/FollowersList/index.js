import React, { Component } from 'react';
import { Alert } from 'react-native';
import PrimaryLayout from '../../containers/PrimaryLayoutContainer';
import List from '../../components/List';

export default class FollowersScreen extends Component<{}> {
	handlePressItem = () => {
		Alert.alert('To get more features in the app - hire me :)');
	};

	render () {
		const { followersList, selectedUser } = this.props;
		return (
			<PrimaryLayout
				titleScreen={`${selectedUser.login.charAt(0).toUpperCase() + selectedUser.login.slice(1)}'s followers`}
				back>
				<List list={followersList} onPress={this.handlePressItem}/>
			</PrimaryLayout>
		);
	}
}


