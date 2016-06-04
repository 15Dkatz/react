var React = require("react");
var ReactNative = require("react-native");
var {
  AppRegistry,
  StyleSheet,
  Navigator
} = ReactNative;


var Signin = require('./src/components/authentication/signin');
var Signup = require('./src/components/authentication/signup');

var ROUTES = {
  signin: Signin,
  signup: Signup
}

// var Api = require('./src/api');

var Authentication = React.createClass({

  //componentWillMount Parse or whatever backend
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('authentication', () => Authentication);

