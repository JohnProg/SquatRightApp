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
		backgroundColor: 'D93908',
		paddingTop: 20,
		paddingRight: 30,
		marginBottom: 8,
	},
	text: {
		color: 'white',
		fontSize: 40,
		fontWeight: 'bold',
		fontFamily: 'arial',
	},
});