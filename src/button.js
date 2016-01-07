'use strict';

var React = require('react-native');
var {
	TouchableOpacity,
	Text,
} = React;
	
module.exports = React.createClass({
	render: function () {
		return (
			<TouchableOpacity onPress={this.props.press}>
				<Text>{this.props.children}</Text>
			</TouchableOpacity>
	);
}
});