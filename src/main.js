'use strict';

var React = require('react-native');
var Button = require('./button');
var {
	Text,
	StyleSheet,
	View,
} = React;

	
module.exports = React.createClass({
	render: function () {
		return (
			<View style={styles.container}>
			<Button press={this.props.handleStart}>Start</Button>
			<Button press={this.props.handleInstructions}>Instructions</Button>
			</View>
		)
}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

