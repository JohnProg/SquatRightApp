/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  VibrationIOS,
} = React;



var Start = React.createClass({
	getInitialState: function() {
	return {
	
}
},
	
  render: function() {
    return (
      <View style={styles.container}>
				<Text>Start</Text>
				
				
			
			</View>
    );
  },
	
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = Start;