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
		backgroundColor: '#7A0001',
		paddingTop: 20,
		paddingRight: 30,
		paddingLeft: 3,
		marginBottom: 10,
	},
	text: {
		color: '#D93908',
		fontSize: 40,
		fontWeight: 'bold',
		fontFamily: 'AvenirNext-Bold',
	},
});