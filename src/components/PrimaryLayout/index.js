import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import NavigationBar from '../NavigationBar';
import FullScreenLoader from '../FullScreenLoader';

import styles from './styles';

const BodyWrapper = ({ needScroll, children }) => {
	const { container } = styles;
	if (needScroll) {
		return (<ScrollView style={container}>{ children }</ScrollView>);
	}
	return (<View style={container}>{ children }</View>);
};


class PrimaryLayout extends PureComponent {
	constructor (props) {
		super(props);
	}

	handlePressBack = () => {
		Actions.pop();
	};

	render () {
		const { appContainer } = styles;
		const { needScroll, titleScreen, back, isLoading, onRightButtonPress, rightNavButton } = this.props;
		const leftNav = back ? { leftNavButton: true, onPressLeftButton: this.handlePressBack } : null;
		let rightNav = rightNavButton ? { rightNavButton, onPressRightButton: onRightButtonPress } : null;
		return (
			<View style={appContainer}>
				<NavigationBar title={titleScreen} {...leftNav} {...rightNav}/>
				<BodyWrapper needScroll={needScroll}>
					{ this.props.children }
				</BodyWrapper>
				{isLoading && <FullScreenLoader/>}
			</View>
		)
	}
}


PrimaryLayout.defaultProps = {
	needScroll: false,
	onRightButtonPress: () => {
	}
};

BodyWrapper.propTypes = {
	children: PropTypes.any.isRequired,
	needScroll: PropTypes.bool.isRequired
};

export default PrimaryLayout;
