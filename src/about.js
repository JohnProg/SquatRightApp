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
  Image,
	ScrollView,
	LinkingIOS,
} = React;



var Start = React.createClass({
handleBack: function() {
		this.props.navigator.pop();
	},
handleLink: {
	strongLifts: function () {
		LinkingIOS.openURL('http://stronglifts.com/squat/');
	},
	bodyBuilding: function () {
		LinkingIOS.openURL('https://youtu.be/t2b8UdqmlFs');
	},
	omarIsuf: function () {
		LinkingIOS.openURL('https://youtu.be/cNs8swRZL48');
	},
	pinkIron: function () {
		LinkingIOS.openURL('https://youtu.be/2A-rBIn3Qmg?t=4s');
	},
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
					<Text style={styles.header}>About</Text>
				</View>
				<View style={styles.fillerView}>
				
				</View>
     	</View>
{/*Middle view with image*/}
			<View style={styles.illustration}>
				<Image style={styles.image} source={require('./../images/model.png')}></Image>
			</View>
{/****** bottom view with instructions ******/}
			<ScrollView style={styles.bullets}>
				<View style={styles.textBox}>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>Welcome to SquatRight. The purpose of this app is to help you squat safely and effectively by guiding your squat beyond parallel depth.</Text>
					</View>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>What is beyond parallel depth? Think of it as going beyond the point your thighs are parallel to the floor, or your hips going past your knees. See illustration above.</Text>
					</View>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>This is important for knee health and for proportionally developing all of the muscle groups that should be involved in an effective squat.</Text>
					</View>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>By performing a partial/half squat, you are neglecting the development of your glutes(butt) and hamstrings, as well as other muscle groups. The downward momentum is stopped by your knees and your quadriceps do most of, if not all of the work.</Text>
					</View>
					<View style={styles.leftBorder}>
						<Text style={styles.text}>There are several components to performing a safe and effective squat. Depth is one of the main ones. If you'd like to learn more about form and technique there are plenty of good resources online.</Text>
					</View>
					<View style={styles.leftBorder}>
							{/****** resource links {1} ******/}
						<Text style={[styles.text, {marginBottom: 10}]}>Here are some of my favorite:</Text>
							<TouchableOpacity onPress={this.handleLink.strongLifts}>
								<Text style={styles.link}>StrongLifts.com - Squat Guide</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.handleLink.bodyBuilding}>
								<Text style={styles.link}>BodyBuilding.com YouTube - Layne Norton's Squat Tutorial</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.handleLink.omarIsuf}>
								<Text style={styles.link}>Omar Isuf YouTube - Fixing A Broken Squat</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.handleLink.pinkIron}>
								<Text style={styles.link}>Pink Iron YouTube - Air Squat Tutorial (for women)</Text>
							</TouchableOpacity>
						<Text style={styles.notice}>Please note! None of these links are associated with the SquatRight app. All rights belong to their respective owners. They are being provided here as a convenience to help you further your knowledge on squat form and technique.</Text>
					</View>
				</View>
			</ScrollView>
						
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
	},
	textBox: {
		flex: 1,
		justifyContent: 'space-around',
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
	link: {
		marginLeft: 7,
		fontSize: 16,
		color: '#0096e5',
		padding: 4,
		marginBottom: 5,
		fontFamily: 'AvenirNext-Regular',
		backgroundColor: 'rgba(70, 0, 0, 0.1)'
	},
	notice: {
		marginTop: 10,
		marginLeft: 7,
		fontSize: 16,
		color: '#D93908',
		fontFamily: 'AvenirNext-Regular'
	}
});

module.exports = Start;