var Moment = require('moment');
var React = require('react');
var ReactNative = require('react-native');
var AppRegistry = ReactNative.AppRegistry;
var Text = ReactNative.Text;
var View = ReactNative.View;
var StyleSheet = ReactNative.StyleSheet;
var DayItem = require('./src/day-item');


// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },

  //listbuilding helper function
  // careful about large loading arrays, you need to explicitly set scrolling so large arrays make problems
  days: function() {
  	var days = [];

  	for (var d=0; d<7; d++) {
  		var day = Moment().add(d, 'days').format('dddd');
  		days.push(
  			<DayItem day={day} daysUntil={d} />
  		)
  	}

  	return days;
  }
});
//need to put a loop around the day component to account for the whole DAYS array


//Style the React component
var styles = StyleSheet.create({
	container: {
		flex: 1, //height 100%, width 100%
		flexDirection: 'column', //default: column
		justifyContent: 'center', //y direction (in column flexDirection), moves height-wise
		//center, flex-end, flex-start
		alignItems: 'center' //x direction (in column), moves-width-wise can be used to push items to various parts of the page, such as the end of the page
	},
	textStyle: {
		color: "#40C1FD",
		fontSize: 36
	}
});


// Show the react component on the screen
// one call
// in registering 'weekdays', you return the Weekdays component
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
})

//every child contains within this parent component