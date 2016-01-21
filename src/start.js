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
		///////////////////Function for gyroscope to read squat depth
    DeviceMotion.startDeviceMotionUpdates(1000/60, (data) => {
      if (data.attitude.pitch <= 0) {
				VibrationIOS.vibrate()
			}
    });
  },
	componentWillUnmount: function () {
		DeviceMotion.stopDeviceMotionUpdates();
	},
	handleBack: function() {
		this.props.navigator.pop();
	},
  render: function() {
    return (
     <View style={styles.container}>
{/****** top view with x button and heading ******/}
			<View style={styles.back}>
				<View style={styles.xView}>
					<TouchableOpacity onPress={this.handleBack}>
						<Image style={styles.backBtn} source={require('./../images/x.jpg')}></Image>
					</TouchableOpacity>
				</View>
				<View style={styles.headerView}>
					<Text style={styles.header}>Start</Text>
				</View>
				<View style={styles.fillerView}>
				
				</View>
     	</View>
{/*Middle view with image*/}
			<View style={styles.illustration}>
				<Image style={styles.image} source={require('./../images/model.png')}></Image>
			</View>
{/****** bottom view with instructions ******/}
			<View style={styles.bullets}>
				<View style={styles.textBox}>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>Put phone in front pocket in upright position. See photo above.</Text>
					</View>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>Start your squat set.</Text>
					</View>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>Phone will vibrate each time you have gone beyond parallel.</Text>
					</View>
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
    backgroundColor: '#530000',
  },
	back: {
		height: 60,
		flexDirection: 'row',

	},
	backBtn: {
		width: 40,
		height: 40,
	},
	xView: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 10,
	},
	headerView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	fillerView: {
		flex: 1,
	},
	header: {
		fontFamily: 'AvenirNext-Bold',
		fontSize: 40,
		color: 'D93908',
		textAlign: 'center',
	},
	illustration: {
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3b0000'
	},
	image: {
		height: 300,
		width: 230,
	},
	bullets: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
	textBox: {
//		flex: 1,
//		justifyContent: 'space-around',
		backgroundColor: 'white',
		padding: 20,
	},
	text: {
		color: '#D93908',
		fontFamily: 'AvenirNext-Regular',
		fontSize: 20,
		marginLeft: 7,
	},
	leftBorder: {
		borderLeftWidth: 5,
		borderLeftColor: '#3b0000',
		backgroundColor: 'rgba(70, 0, 0, 0.08)',
		padding: 3,
		margin: 3,
	},
});

module.exports = Start;