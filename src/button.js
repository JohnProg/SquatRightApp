'use strict';

var React = require('react-native');
var {
	TouchableOpacity,
	Text,
	StyleSheet,
} = React;
	
module.exports = React.createClass({
	render: function () {
		return (
			<TouchableOpacity 
			onPress={this.props.press}
			style={styles.button}>
				<Text style={styles.text}>{this.props.children}</Text>
			</TouchableOpacity>
	);
}
});


var styles = StyleSheet.create({
	button: {
		backgroundColor: 'rgba(83, 0, 0, 0.85)',
		padding: 10,
		marginBottom: 10,
		borderColor: '#D93908',
		borderWidth: 3 
	},
	text: {
		color: '#D93908',
		fontSize: 40,
		fontFamily: 'AvenirNext-Medium',
		textAlign: 'center',
	},
});