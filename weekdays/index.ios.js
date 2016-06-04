// Imports
// import React, { Component } from 'react';

var React = require('react');
var ReactNative = require('react-native');
var AppRegistry = ReactNative.AppRegistry;
var Text = ReactNative.Text;
var View = ReactNative.View;
var StyleSheet = ReactNative.StyleSheet;

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View>
        <Text>
          Days of the week: 
        </Text>
      </View>
  }
});


// Show the react component on the screen
// one call
// in registering 'weekdays', you return the Weekdays component
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
})

//every child contains within this parent component