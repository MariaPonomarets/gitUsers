import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
	NAVIGATION_BAR_BUTTON_ANDROID,
	rowCenter,
	NAVIGATION_BAR_BG,
	NAVIGATION_BAR_BORDER,
	NAVIGATION_BAR_BUTTON
} from '../../styles';

const renderRightButtonMenu = (name) => {
	switch (name) {
		case 'logo':
			return <Icon name={'logo-github'} size={30} color={'#000'}/>;
		default:
			return <Text/>;
	}
};

const NavigationBar = (props) => {
	const { container, buttonContainer, navBarTitle, titleContainer } = styles;
	const { leftNavButton, onPressLeftButton, rightNavButton, onPressRightButton, title } = props;
	return (
		<View style={container}>
			<StatusBar translucent backgroundColor={'rgba(0,0,0,.2)'} barStyle={'light-content'}/>
			<View style={buttonContainer}>
				{leftNavButton &&
				<TouchableOpacity activeOpacity={0.8} onPress={onPressLeftButton}>
					<View style={rowCenter}>
						<Icon name={'md-arrow-back'} size={30} color={NAVIGATION_BAR_BUTTON_ANDROID}/>
					</View>
				</TouchableOpacity>}
			</View>
			<View style={[rowCenter, titleContainer]}>
				<Text style={navBarTitle}>{title}</Text>
			</View>
			<View style={buttonContainer}>
				{rightNavButton && <TouchableOpacity activeOpacity={0.8} onPress={onPressRightButton}>
					<View style={rowCenter}>
						{renderRightButtonMenu(rightNavButton)}
					</View>
				</TouchableOpacity>}
			</View>
		</View>
	)
};

NavigationBar.defaultProps = {
	leftNavButton: null,
	onPressLeftButton: () => {
	},
	rightNavButton: null,
	onPressRightButton: () => {
	}
};

const styles = {
	container: {
		height: 80,
		flexDirection: 'row',
		paddingHorizontal: 16,
		paddingTop: 24,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: NAVIGATION_BAR_BG,
		borderBottomWidth: 1,
		borderBottomColor: NAVIGATION_BAR_BORDER
	},
	buttonContainer: {
		minWidth: 44,
		minHeight: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleContainer: {
		flex: 1,
		height: 40
	},
	navBarTitle: {
		color: NAVIGATION_BAR_BUTTON_ANDROID,
		fontSize: 17
	},
	saveButton: {
		color: NAVIGATION_BAR_BUTTON,
		fontSize: 18,
	}
};

export default NavigationBar;

