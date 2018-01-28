import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PrimaryLayout from '../../containers/PrimaryLayoutContainer';

class About extends Component<{}> {

	handlePressLink = () => {
		const { aboutMe } = this.props;
		Actions.web({ source: aboutMe.html_url, login: aboutMe.login });
	};

	render () {
		const { aboutMe } = this.props;
		const { avatarContainer, avatar, textContainer, headerText, textStyle, linkStyle } = styles;
		return (
			<PrimaryLayout titleScreen={'About'} back>
				<View style={avatarContainer}>
					<Image
						style={avatar }
						source={{ uri: aboutMe.avatar_url }}/>
				</View>
				<View style={textContainer}>
					<Text style={headerText}>Hi! My name is Mariia.</Text>
					<Text style={textStyle}>I work as React Native developer 1.5 years</Text>
					<TouchableOpacity onPress={this.handlePressLink}>
						<Text style={linkStyle}>Link to my GitHub
							profile</Text>
					</TouchableOpacity>
				</View>
				<View style={textContainer}>
					<Text style={headerText}>About app:</Text>
					<Text style={textStyle}>It takes 8 hours to create this app.</Text>
					<Text style={textStyle}>Thanks for checking my work!</Text>
				</View>
			</PrimaryLayout>
		);
	}
}

const styles = {
	avatarContainer: {
		height: 220,
		width: '100%',
		backgroundColor: 'rgba(0,0,0,.1)'
	},
	avatar: {
		flex: 1
	},
	textContainer: {
		paddingVertical: 10,
		paddingHorizontal: 20
	},
	headerText: {
		fontSize: 18,
		lineHeight: 22,
		color: 'orange'
	},
	textStyle: {
		fontSize: 16,
		lineHeight: 20
	},
	linkStyle: {
		fontSize: 16,
		lineHeight: 20,
		color: '#05A5D1'
	}
};

export default About;



