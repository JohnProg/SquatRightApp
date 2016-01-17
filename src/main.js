'use strict';

var React = require('react-native');
var Button = require('./button');
var {
	Text,
	StyleSheet,
	View,
} = React;

	
module.exports = React.createClass({
	onPressStart: function() {
		this.props.navigator.push({name: 'start'});
	},
	onPressInstructions: function() {
		this.props.navigator.push({name: 'instructions'});
	},
	
	
	render: function () {
		return (
		<View style={styles.container}>
			
		</View>
		);
}
});

var styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	logo: {
		resizeMode: 'contain',
		flexDirection: 'column',
		flex: 1
	},
});

