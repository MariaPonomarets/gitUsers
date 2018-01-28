import React, { PureComponent } from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	FlatList,
	Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const List = ({ list, onPress }) => {
	const {
		separator,
		listStyle,
		contentList,
		contentInset,
		itemContainer,
		avatarContainer,
		avatar,
		descriptionContainer,
		loginStyle,
		textStyle,
		link
	} = styles;

	const handlePressButton = (item) => {
		onPress(item)
	};

	const handlePressLink = (item) => {
		Actions.web({ source: item.html_url, login: item.login });
	};

	const renderListItem = ({ item }) => {
		return <View onPress={() => handlePressButton(item)}>
			<View style={itemContainer}>
				<TouchableOpacity style={avatarContainer} onPress={() => handlePressButton(item)}>
					<Image source={{ uri: item.avatar_url }} style={avatar} borderRadius={50}/>
				</TouchableOpacity>
				<View style={descriptionContainer}>
					<Text style={loginStyle}>{item.login.charAt(0).toUpperCase() + item.login.slice(1)}</Text>
					<Text style={[textStyle, link]} onPress={() => handlePressLink(item)}>Profile</Text>
				</View>
			</View>
		</View>
	};

	const renderSeparator = () => (
		<View style={separator}/>
	);

	return (
		<FlatList
			style={listStyle }
			contentContainerStyle={contentList}
			data={list}
			removeClippedSubviews
			contentInset={contentInset}
			initialNumToRender={50}
			maxToRenderPerBatch={50}
			ItemSeparatorComponent={renderSeparator}
			windowSize={100}
			shouldItemUpdate
			scrollEventThrottle={16}
			keyExtractor={(item, index) => item.id}
			renderItem={renderListItem}
		/>
	);
};

export default List;

const styles = {
	separator: {
		marginVertical: 10,
		borderBottomColor: 'rgba(0,0,0,.1)',
		borderBottomWidth: 1,
		marginHorizontal: 10
	},
	listStyle: {
		flex: 1,
		paddingHorizontal: 10,
		paddingBottom: 20,
		paddingTop: 10
	},
	contentList: {
		flexGrow: 1
	},
	contentInset: {
		bottom: 20
	},
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	avatarContainer: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'rgba(0,0,0,.1)'
	},
	avatar: {
		width: 100,
		height: 100
	},
	descriptionContainer: {
		flex: 1,
		marginLeft: 10,
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		paddingVertical: 20
	},
	loginStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'orange'
	},
	textStyle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	link: {
		color: '#05A5D1',
		paddingTop: 7
	}
};