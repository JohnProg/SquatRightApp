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
      if (data.attitude.pitch >= 0) {
				VibrationIOS.vibrate()
			}
    });
  },
  render: function() {
		var motionData = this.state.motionData;
    return (

     <View style={styles.container}>
     	<Text>hello</Text>
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