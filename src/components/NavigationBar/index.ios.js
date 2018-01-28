import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	NAVIGATION_BAR_BUTTON,
	rowCenter,
	NAVIGATION_BAR_TITLE,
	NAVIGATION_BAR_BG,
	NAVIGATION_BAR_BORDER,
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
	const { container, buttonContainer, navBarTitle, buttonBackTitle, titleContainer } = styles;
	const { leftNavButton, onPressLeftButton, rightNavButton, onPressRightButton, title } = props;
	return (
		<View style={container}>
			<View style={buttonContainer}>
				{leftNavButton &&
				<TouchableOpacity activeOpacity={0.8} onPress={onPressLeftButton}>
					<View style={rowCenter}>
						<Icon name={'ios-arrow-back'} size={36} color={NAVIGATION_BAR_BUTTON}/>
						<Text style={buttonBackTitle}>Back</Text>
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
		height: 64,
		flexDirection: 'row',
		paddingHorizontal: 8,
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		backgroundColor: NAVIGATION_BAR_BG,
		borderBottomWidth: 1,
		borderBottomColor: NAVIGATION_BAR_BORDER
	},
	buttonContainer: {
		minWidth: 44,
		minHeight: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleContainer: {
		flex: 1,
		height: 40
	},
	navBarTitle: {
		color: NAVIGATION_BAR_TITLE,
		fontSize: 17
	},
	buttonBackTitle: {
		color: NAVIGATION_BAR_BUTTON,
		fontSize: 17,
		paddingLeft: 5
	},
	saveButton: {
		color: NAVIGATION_BAR_BUTTON,
		fontSize: 18,
	}
};

export default NavigationBar;
