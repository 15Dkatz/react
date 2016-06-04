'use strict';
const React = require('react-native');
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Text, View, TouchableHighlight } = React;

class ActionButton extends React.Component {
  render() {
    return (
      <View style="{styles.action}">
        <TouchableHighlight underlaycolor="{constants.actionColor}" onpress="{this.props.onPress}">
          <text style="{styles.actionText}">{this.props.title}</text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;