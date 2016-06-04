var React = require("react");
var ReactNative = require("react-native");
var {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} = ReactNative;


var Button = require('../common/button');


module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text>You can sign up here!</Text>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}
})


// http://www.alekseev.ca/blog/using-a-parse-server-with-react-native/
// follow link to create a heroku parse server - step 59 in React-native Docs