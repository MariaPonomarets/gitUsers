import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT }from '../../styles';

class FullScreenLoader extends PureComponent {
	render () {
		const { container } = styles;
		return (
			<View style={container}>
				<ActivityIndicator color={'#fff'} size={'large'}/>
			</View>
		);
	}
}

const styles = {
	container: {
		position: 'absolute',
		width: DEVICE_WIDTH,
		height: DEVICE_HEIGHT,
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'center',
		alignItems:'center'
	}
};
export default FullScreenLoader;
