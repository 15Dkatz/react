var React = require('react');
var {
  Navigator,
  View,
  StyleSheet
} = require('react-native');

var Map = require('./components/Map.js');
var Settings = require('./components/Settings.js');
var Url = require('./components/Url.js')

var routes = {
  map: Map,
  settings: Settings,
  url: Url
};

module.exports = React.createClass({
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'map'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
      />
    );
  },
  renderScene: function(route, navigator) {
    console.log("route in renderScene", route);
    console.log("userData in renderScene", route.userData);
    if (route.url) {
      return (
        <Url 
          url={route.url}
          navigator={navigator}
        />
      );
    };


    var Component = routes[route.name];

    return (
      <Component
        route={route}
        navigator={navigator}
        data={route.data}
        userData={route.userData}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
