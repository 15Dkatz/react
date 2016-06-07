import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles.js');
const constants = styles.constants;

class ActionButton extends Component {
	render() {
		return (
			<View style={styles.action}>
				<TouchableHighlight underlaycolor={constants.actionColor} onpress={this.props.onPress}>
					<text style={styles.actionText}>{this.props.title}</text>
				</TouchableHighlight>
			</View>
		)
  }
}

module.exports = ActionButton;
