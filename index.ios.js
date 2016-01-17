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
	StatusBarIOS,
} = React;

var ROUTES = {
	start: Start,
	main: Main,
	instructions: Instructions
}

var SquatRight = React.createClass({
	componentWillMount: function () {
		StatusBarIOS.setHidden(true);
	},
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
		backgroundColor: 'black',
  }
});

AppRegistry.registerComponent('SquatRight', () => SquatRight);
