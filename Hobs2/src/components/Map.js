var React = require('react');
var {
  View,
  StyleSheet,
  MapView,
  TouchableOpacity,
  Image,
  Dimensions
} = require('react-native');


var Api = require('../api');
var propertyPins = require('../json/affordableHomes.json').homes;
var propertyPinsArr = [];
for (var i=0; i<propertyPins.length; i++) {
  var nextPin = propertyPins[i];
  nextPin.title = propertyPins[i].address;
  nextPin.subtitle = "$"+ propertyPins[i].rent+"/mo";
  nextPin.animateDrop = true;
  nextPin.image = require("../img/location.png");
  propertyPinsArr.push(nextPin);
}

module.exports = React.createClass({
  getInitialState() {
    return {
      mapRegion: {
        //san Francisco
        longitude: -122.444,
        latitude: 37.75,
        longitudeDelta: .14,
        latitudeDelta: .14
      },
      propertyPins: propertyPins
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View
          style={styles.header}
        >
        </View>
        <MapView
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
          region={this.state.mapRegion}
          annotations={ propertyPinsArr }
          />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'settings'})}>
            <Image
              style={styles.setting}
              source={require('../img/settings.png')}
            />
          </TouchableOpacity>
        <View
          style={styles.bottom}
        >
        </View>
      </View>
    );
  },
  onRegionChangeComplete: function(region) {
    Api(region.latitude, region.longitude)
    this.setState({
      mapRegion: region
    })

    console.log(region.latitudeDelta, "latD", region.longitudeDelta, "longD");
    console.log(propertyPins);
  }



});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 7
  },
  setting: {
    marginTop: -40,
    width: 30,
    height: 30,
    marginLeft: Dimensions.get('window').width - 40
  },
  header: {
    flex: 1
  },
  bottom: {
    flex: 5
  }
});
