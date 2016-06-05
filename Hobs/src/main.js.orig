var React = require('react');
var {
  Navigator,
  View,
  StyleSheet
} = require('react-native');

var Map = require('./components/Map.js');
var Settings = require('./components/Settings.js');

var routes = {
  map: Map,
  settings: Settings
};

module.exports = React.createClass({
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'map'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.HorizontalSwipeJump}}
      />
    );
  },
  renderScene: function(route, navigator) {
    var Component = routes[route.name];
    return (
      <Component
        route={route}
        navigator={navigator}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
