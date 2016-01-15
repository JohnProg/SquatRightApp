'use strict';

var React = require('react-native');
var Button = require('./button');
var {
	Text,
	StyleSheet,
	View,
	Image,
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
      	<Image
      				source={require('./../images/left.png')}
      				style={styles.imageContainer}>
      				
      					<View 
      					style={styles.logo}>
      						<Text style={styles.text}>SquatRight</Text>
      					</View>
      					
      					<View style={styles.menu}>
									<Button 
									press={this.onPressStart}>Start</Button>
									
									<Button 
									press={this.onPressInstructions}>Instructions</Button>
								</View>
      				
      				</Image>
      </View>
		)
}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		flex: 1,
		resizeMode: 'contain',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 3
	},
	logo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.0)',
	},
	text: {
		fontSize: 60,
		fontWeight: 'bold',
		fontFamily: 'arial',
		color: '#D93908'
	},
	menu: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	}
});

