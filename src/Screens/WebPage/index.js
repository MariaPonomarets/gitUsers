import React, { PureComponent } from 'react';
import { WebView } from 'react-native';
import PrimaryLayout from '../../containers/PrimaryLayoutContainer';

export default class WebPage extends PureComponent<{}> {
	constructor (props) {
		super(props);
		this.state = {
			title: `${this.props.login.charAt(0).toUpperCase() + this.props.login.slice(1)}`,
			url: { uri: this.props.source }
		}
	}

	render () {
		const { title, url } = this.state;
		return (
			<PrimaryLayout
				titleScreen={title}
				back>
				<WebView
					source={url}
					style={styles.container}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					startInLoadingState={true}
				/>
			</PrimaryLayout>
		);
	}
}
const styles = {
	container: {
		flex: 1
	}
};



