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
				<Text>{this.state.page}</Text>
				<Main 
				handleStart={this.handleStart} 
				handleInstructions={this.handleInstructions} />
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
