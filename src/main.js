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
				<View style={styles.statusBar}>
				
				</View>
				<View 
					style={styles.logo}>
						<Image style={styles.logoShape} source={require('./../images/logoShape.png')}></Image>
						<Text style={styles.text}>quatRight</Text>
				</View>

				<View style={styles.menu}>
					<Button 
					press={this.onPressStart}>Start</Button>

					<Button 
					press={this.onPressInstructions}>Instructions</Button>
				</View>
      </View>
		)
}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	statusBar: {
		height: 22,
		backgroundColor: '#ffffff',
//		borderBottomColor: 'black',
//		borderBottomWidth: 2,
	},
	logo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7A0001',
		height: 100,
		
	},
	logoShape: {
		height: 100,
		width: 65,
		marginRight: 3,
	},
	text: {
		fontSize: 60,
		fontWeight: 'bold',
		fontFamily: 'AvenirNext-Heavy',
		color: '#D93908'
	},
	menu: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	}
});

