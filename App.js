import React, { Component } from 'react';
import { View } from 'react-native';
import  { Provider } from 'react-redux';
import configureStore from './src/redux/configStore';
import Router from './src/Router';
const store = configureStore();

export default class App extends Component<{}> {
	render () {
		const { container } = styles;
		return (
            <Provider store={store}>
              <View style={container}>
                <Router/>
              </View>
            </Provider>
		);
	}
}

const styles = {
	container: {
		flex: 1
	}
};