var React = require('react');
var {
  View,
  StyleSheet,
  MapView,
  TouchableOpacity,
  Image,
  Dimensions,
  Text
} = require('react-native');



// var allPins = [];
var propertyPins = require('../json/affordableHomes.json').homes;

// for (var i=0; i<propertyPins.length; i++) {
//   var nextPin = propertyPins[i];
//   nextPin.title = propertyPins[i].address;
//   nextPin.subtitle = "$"+ propertyPins[i].rent+"/mo";
//   nextPin.animateDrop = true;
//   nextPin.image = require("../img/Marker_104.png");
//   allPins.push(nextPin);
// }

var jobPins = require('../json/jobs.json').jobs;
// // var jobPinsArr = [];
// for (var i=0; i<jobPins.length; i++) {
//   var nextPin = jobPins[i];
//   nextPin.title = jobPins[i].address;
//   nextPin.animateDrop = true;
//   nextPin.image = require("../img/location.png");
//   allPins.push(nextPin);
// }

var List = require('./List');
// filter function
//  resets allPins to whatever parameter i.e. rent

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
      propertyPins: propertyPins,
      jobPins: jobPins,
      userRentMin: 500,
      userRentMax: 3000,
      userSalMin: 20000,
      userSalMax: 150000
    };
  },

  pins: [],

  componentWillMount() {
    // this.pins = [];
    var allPins = [];
    

    for (var i=0; i<propertyPins.length; i++) {
      var nextPin = propertyPins[i];
      nextPin.title = propertyPins[i].address;
      nextPin.subtitle = "$"+ propertyPins[i].rent+"/mo";
      nextPin.animateDrop = true;
      nextPin.image = require("../img/Marker_104.png");
    // // }
    //   if (this.props.userData)
    //     var newMax = parseInt(this.props.userData.rentMax);
    //     var newMin = parseInt(this.props.userData.rentMin);
    //     if ((jobSalMax < newMin) || (jobSalMin > newMax)) {
    //       // console.count('fail');
    //       // return null;
    //       console.log("pass");
    //     } else {
      allPins.push(nextPin);
    //     }
    }

    for (var i=0; i<jobPins.length; i++) {
      var nextPin = jobPins[i];
      nextPin.title = jobPins[i].address;
      nextPin.animateDrop = true;
      nextPin.image = require("../img/location.png");
      allPins.push(nextPin);
    }
    this.pins = allPins;
  },

  render: function() {
    console.log("userData in MAP", this.props.userData);
    return (
      <View style={styles.container}>
        <View
          style={styles.header}
        >
          <Text style={styles.title}>
            Hobs
          </Text>
        </View>
        <MapView
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
          region={this.state.mapRegion}
          annotations={ this.pins }
          />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'settings', data: this.state})}>
            <Image
              style={styles.setting}
              source={require('../img/settings.png')}
            />
          </TouchableOpacity>
        <List
          navigator={this.props.navigator}
          userData={this.props.userData}
        >
        </List>
      </View>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      mapRegion: region
    })
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 9
  },
  setting: {
    marginTop: -40,
    width: 30,
    height: 30,
    marginLeft: Dimensions.get('window').width - 40
  },
  header: {
    flex: 1,
    backgroundColor: '#faf5ec',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 4,
    fontWeight: '600',
    fontSize: 18

  }
});
