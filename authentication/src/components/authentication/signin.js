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
	getInitialState: function() {
		return {
			username: '',
			password: ''
		};
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Text>Sign In</Text>

				<Text style={styles.label}>Username:</Text>
				<TextInput 
					style={styles.input}
					value={this.state.username}
					onChangeText={(text) => this.setState({username: text})}
				/>

				<Text style={styles.label}>Password:</Text>
				<TextInput 
					secureTextEntry={true} 
					style={styles.input}
					value={this.state.password}
					onChangeText={(text) => this.setState({password: text})}
				/>
				<Button text={"Sign In"} onPress={this.onPress}/>
			</View>
		);
	},
	onPress: function() {
		//sign the user in.
		console.log("Signing in");
		this.setState({
			password: ''
		})

	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center'
	},
	label: {
		fontSize: 18
	}
})


// http://www.alekseev.ca/blog/using-a-parse-server-with-react-native/
// follow link to create a heroku parse server - step 59 in React-native Docs