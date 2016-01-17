/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DeviceMotion = require('./../DeviceMotion.ios.js');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  VibrationIOS,
} = React;



var Start = React.createClass({
	getInitialState: function () {
    return {
      motionData: null
    };
  },
	componentDidMount: function () {
    DeviceMotion.startDeviceMotionUpdates(1000/60, (data) => {
			console.log(data);
      if (data.attitude.pitch <= 0) {
				VibrationIOS.vibrate()
			}
    });
  },
  render: function() {
    return (
     <View style={styles.container}>
     	<Text>1 - Place phone in pocket with charging port pointing to the floor.</Text>
     	<Text>2 - Squat and go deep enough to feel your phone vibrate.</Text>
     	<Text>Pull down from top of screen to exit.</Text>
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