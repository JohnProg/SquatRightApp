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
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;



var SquatRight = React.createClass({
	getInitialState: function () {
		return {
			page: ''
		}
	},
		
  render: function() {
    return (
      <View style={styles.container}>
				<Text>Squat Right App!!!</Text>
				{this.handlePage()}
			</View>
    );
  },
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});

AppRegistry.registerComponent('SquatRight', () => SquatRight);
