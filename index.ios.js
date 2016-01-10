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
	Navigator,
} = React;

var ROUTES = {
	start: Start,
	main: Main,
	instructions: Instructions
}

var SquatRight = React.createClass({
	renderScene: function(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} />
	},
  render: function() {
    return (
      <Navigator 
			style={styles.container}
			initialRoute={{name: 'main'}}
			renderScene={this.renderScene}
			configureScene={() => {return Navigator.SceneConfigs.FloatFromBottom;}}
			
			/>
    );
  },
	
});

//--------------------------------------styles
var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('SquatRight', () => SquatRight);
