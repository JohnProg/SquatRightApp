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
  TouchableOpacity,
 	Image, 
} = React;



var Instructions = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
				<View style={styles.instructions}>
					
				<Text style={styles.header}>Instructions</Text>
					
				<View style={styles.postHeader}>
					<Text style={styles.summary}>The purpose of this app is to help you reach parallel on your squat. Expert bodybuilders and powerlifters recommend at least parallel depth, if not full depth, for your squats. Some argue it is safer and more effective than squats that don't reach at least parallel.</Text>
							
					<View style={styles.list}>
						<Text style={styles.item}>1 - From home screen press Start button.</Text>
						<Text style={styles.item}>2 - Put your phone in your front pocket and wait for 2 vibrations.</Text>
						<Text style={styles.item}>3 - Start squatting.</Text>
						<Text style={styles.lastPoint}>The phone will vibrate each time you reach parallel on your squat.</Text>
				</View>
				
				</View>
						
				</View>
						
				<View>
					
				</View>
			</View>
    );
  },
	
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
		padding: 20,
  },
	header: {
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0.8)',
		fontSize: 60,
		textAlign: 'center',
	},
	postHeader: {
		padding: 20,
		backgroundColor: 'rgba(255,255,255,0.8)',
	},
});

module.exports = Instructions;