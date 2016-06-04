/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
const Firebase = require('firebase');
const styles = require('./styles.js');
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  ListView, 
  AlertIOS 
} = React;


class GroceryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Almond Milk' }])
    })
  }

  _renderItem(item) {
    return (
      <ListItem item="{item}" onpress="{()" ==""> {}} />
    );
  }

  render() {
    return (
      <View style="{styles.container}">

        <StatusBar title="Grocery List">

        <ListView datasource="{this.state.dataSource}" renderrow="{this._renderItem.bind(this)}" style="{styles.listview}/">

        <ActionButton title="Add" onpress="{()" ==""> {}} />

      </View>
    );
  }
} 

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
