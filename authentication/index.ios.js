var React = require("react");
var ReactNative = require("react-native");
var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = ReactNative;


var Signin = require('./src/components/authentication/signin')

// var Api = require('./src/api');

var Authentication = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Signin />
      </View>
    );
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('authentication', () => Authentication);

