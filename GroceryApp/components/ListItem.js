'use strict';
var React = require('react-native');
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = React;

class ListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onpress="{this.props.onPress}">
        <View style="{styles.li}">
          <Text style="{styles.liText}">{this.props.item.title}</Text>
        </View>
      </View></TouchableHighlight>
    );
  }
}

module.exports = ListItem;