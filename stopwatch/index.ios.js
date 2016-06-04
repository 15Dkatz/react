var formatTime = require("minutes-seconds-milliseconds");
var React = require("react");
var ReactNative = require("react-native");
var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = ReactNative;


var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border("yellow")]}>
        <View style={[styles.timerWrapper, this.border("red")]}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border("green")]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border("blue")]}>
        {this.laps()}
      </View>
  </View>
  },
  laps: function() {
    return this.state.laps.map(function(time, index) {
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    });
  },
  //beautiful use of the ternary expression!
  startStopButton: function() {

    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight 
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, style]}
    >
      <Text>
        {this.state.running? "Stop" : "Start"}
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <TouchableHighlight
      style={styles.button}
      underlayColor="gray"
      onPress={this.handleLapPress}
    >
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },
  handleLapPress: function() {
    var lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  },
  handleStartPress:function() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running:false});
      return //breaks the code to ensure nothing happens afterward
    }
    // console.log("Start pressed");
    this.setState({startTime: new Date()})
    //always update states with new values, never explicitly set variables
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);

  },
  //great trick to check the flex elements
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 2
    }
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1, //Fills the entire screen
    alignItems: "stretch"
  },
  header: { // Yellow Area, TopView
    flex: 1
  },
  footer: { // Blue Area, BottomView
    flex: 1
  },
  timerWrapper: { //Red Area, TimerView
    flex: 5, //5/8ths of available space, because 5+3 in header area
    justifyContent: "center",
    alignItems: "center"
  },
  buttonWrapper: { //Green Area, ButonView
    flex: 3, //3/8ths of available space, because 3+5 in header area
    flexDirection: "row", //flipped Direction
    justifyContent: "space-around",
    alignItems: "center",
    // background: "green"
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  startButton: {
    borderColor: "#00CC00"
  },
  stopButton: {
    borderColor: "#CC0000"
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'

  }, 
  lapText: {
    fontSize: 30
  }


});

//=> === function() return
AppRegistry.registerComponent("stopwatch", () => StopWatch);