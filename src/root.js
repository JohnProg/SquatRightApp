/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Start = require('./src/start');
var Main = require('./src/main');
var Instructions = require('./src/instructions');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
	NavigatorIOS,
} = React;



module.exports = React.createClass({
	getInitialState: function () {
		return {
			page: ''
		}
	},
	//----------------------------Render	
  render: function() {
    return (
      <View style={styles.container}>
      	<Image
      				source={require('./images/barbell.jpg')}
      				style={styles.backgroundImage}>
      				
      					<View 
      					style={styles.logo}>
      						<Text style={styles.text}>SquatRight</Text>
      					</View>
      					
      					{this.handlePage()}
      				
      				</Image>
      </View>
    );
  },
	//------------------------------End Render
	handleStart: function () {
		this.setState({
			page: 'start'
		});
	},
	handleInstructions: function () {
		this.setState({
			page: 'instructions'
		});
	},
	handlePage: function () {
		switch(this.state.page) {
			case 'start':
				return <Start />;
				break;
			case 'instructions':
				return <Instructions />;
				break;
			default:
				return <Main 
								handleStart={this.handleStart} 
								handleInstructions={this.handleInstructions} />;
		}
	}
	
});

//--------------------------------------styles
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.0)',
	},
	text: {
		fontSize: 60,
		fontWeight: 'bold',
		fontFamily: 'verdana',
	},
	backgroundImage: {
		flex: 1
	}
});

