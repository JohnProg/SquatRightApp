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
  Image,
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
	handleBack: function() {
		this.props.navigator.pop();
	},
  render: function() {
    return (
     <View style={styles.container}>
     	<View style={styles.back}>
     		<TouchableOpacity onPress={this.handleBack}>
     			<Text style={styles.boldText}>Back</Text>
     			<Image source={require('./../images/downArrow.png')}></Image>
     		</TouchableOpacity>
     	</View>
			<View style={styles.illustration}>
				<Image source={require('./../images/startIllustration.png')}></Image>
			</View>
			<View style={styles.bullets}>
				<View style={styles.textBox}>
					<Text style={styles.text}>• Put phone in front pocket in upright position, as see in illustration above.</Text>
					<Text style={styles.text}>• Begin your squat set.</Text>
					<Text style={styles.text}>• Your phone will vibrate each time you have reached parallel depth and beyond.</Text>
				</View>
			</View>
     </View>
    );
  },
	
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#7A0001',
  },
	back: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	boldText: {
		fontFamily: 'AvenirNext-Bold',
		color: '#D93908',
		fontSize: 30,
	},
	illustration: {
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#330001'
	},
	image: {
		height: 300,
		width: 200,
	},
	bullets: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
	textBox: {
		backgroundColor: 'white',
		padding: 10
	},
	text: {
		color: '#D93908',
		fontFamily: 'AvenirNext-Regular',
		fontSize: 16,
	}
});

module.exports = Start;