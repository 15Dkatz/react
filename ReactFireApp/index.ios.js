/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'; 
var React = require('react-native'); 
var Firebase = require('firebase'); 
var ReactFireMixin = require('reactfire'); 
var { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableHighlight,
} = React;

var ReactFireApp = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactFireApp', () => ReactFireApp);
