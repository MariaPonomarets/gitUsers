import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import PrimaryLayout from '../../containers/PrimaryLayoutContainer';
import List from '../../components/List';

export default class Home extends Component<{}> {
	componentDidMount () {
		this.props.getUsersList();
		this.props.getAboutInfo();
	}

	handlePressItem = (item) => {
		this.props.getFollowersList(item);
	};

	handlePressRightNavButton = () => {
		Actions.about();
	};

	render () {
		const { usersList } = this.props;
		return (
			<PrimaryLayout
				titleScreen='Git users list' rightNavButton='logo'
				onRightButtonPress={this.handlePressRightNavButton}>
				<List list={usersList} onPress={this.handlePressItem}/>
			</PrimaryLayout>
		);
	}
}

