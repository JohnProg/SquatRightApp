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
			<Button press={this.onPressStart}>Start</Button>
			<Button press={this.onPressInstructions}>Instructions</Button>
			</View>
		)
}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.0)',
	}
});

