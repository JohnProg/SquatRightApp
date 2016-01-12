/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  TouchableOpacity,
  VibrationIOS,
} = React;
var {
    Gyroscope
} = require('NativeModules');	
Gyroscope.setGyroUpdateInterval(0.1);


var Start = React.createClass({
	getInitialState: function() {
	return {
	x: 0,
	y: 0,
	z: 0,
	gyro: false
}
},
	componentDidMount: function () {
		DeviceEventEmitter.addListener('GyroData', function (data) {
if(((data.rotationRate.x + 1) * 100) > 100){
			VibrationIOS.vibrate();
		}
//			this.setState({
//				x: (data.rotationRate.x.toFixed(2) * 100),
//				//y: data.rotationRate.y,
//				//z: data.rotationRate.z
//			});
		}.bind(this));
	},
	componentWillUnmount: function () {
		Gyroscope.stopGyroUpdates();
	},
	handleStart: function () {
		Gyroscope.startGyroUpdates();
		this.setState({gyro: true});
		
	},
	handleStop: function () {
		Gyroscope.stopGyroUpdates();
//		this.setState({
//			x: 0,
//			//y: 0,
//			//z: 0,
//			gyro: false
//		});
	},
		
  render: function() {
    return (
      <View style={styles.container}>
				<Text>Start</Text>
				
				{/*<Text>x: {this.state.x}</Text>*/}
        {/*<Text>y: {this.state.y}</Text>*/}
        {/*<Text>z: {this.state.z}</Text>*/}
				
				<TouchableOpacity onPress={this.handleStart}>
					<Text>Start</Text>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={this.handleStop}>
					<Text>Stop</Text>
				</TouchableOpacity>
			
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