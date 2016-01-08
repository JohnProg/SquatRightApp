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
		backgroundColor: 'rgba(0,0,0,0.8)',
		padding: 10,
		margin: 8,
		alignSelf: 'center',
		borderRadius: 4
	},
	text: {
		color: '#FFFFFF',
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'verdana',
	},
});