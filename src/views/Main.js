import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Button } from 'react-native-elements';

/**
 *
 */
class Main extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{ padding: 10 }}>
					<Text style={styles.welcome}>
						Welcome to WLTx!
					</Text>
				</View>
				<View style={{ padding: 10 }}>
					<Button raised
							backgroundColor="#0000FF"
							icon={{name: 'cached'}}
							title='BUTTON WITH ICON' />
				</View>
				<View style={{ padding: 10 }}>
				<Button
					raised
					large
					icon={{name: 'squirrel', type: 'octicon' }}
					backgroundColor="#FF0000"
					title='OCTICON' />
				</View>
			</View>
		);
	}
}

/**
 *
 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('Main', () => Main);

export default Main;