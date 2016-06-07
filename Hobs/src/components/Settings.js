React = require('react');
var {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} = require('react-native');

var Button = require('./Button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      rentMin: this.props.data.userRentMin.toString(),
      rentMax: this.props.data.userRentMax.toString(),
      salMin: this.props.data.userSalMin.toString(),
      salMax: this.props.data.userSalMax.toString()
    };
  },


  render: function() {
    console.log(this.props.data, "data");
    return (
      <View style={styles.container}>
        <Text style={styles.category}>Rent Range</Text>
        <View style={styles.range}>
          <TextInput
            style={styles.input}
            defaultValue={this.state.rentMin}
            keyboardType={'number-pad'}
            onChangeText={(val) => this.setState({rentMin: val.toString()})}
          />
          <TextInput
            style={styles.input}
            defaultValue={this.state.rentMax}
            keyboardType={'number-pad'}
            onChangeText={(val) => this.setState({rentMax: val.toString()})}
          />
        </View>
        <Text style={styles.category}>Salary Range</Text>
        <View style={styles.range}>
          <TextInput
            style={styles.input}
            defaultValue={this.state.salMin}
            keyboardType={'number-pad'}
            onChangeText={(val) => this.setState({salMin: val.toString()})}
          />
          <TextInput
            style={styles.input}
            defaultValue={this.state.salMax}
            keyboardType={'number-pad'}
            onChangeText={(val) => this.setState({salMax: val.toString()})}
          />
        </View>
        <Button
          text={'Save'}
          onPress={this.saveFilter}
        />
      </View>
    );
  },

  saveFilter: function() {
    this.props.navigator.resetTo({
      name: 'map',
      userData: this.state
    })
    console.log("this.state", this.state);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#faf5ec'
  },
  category: {
    fontSize: 24,
  },
  range: {
    flexDirection: 'row'
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 120,
    margin: 10,
    textAlign: 'center',
    marginBottom: 15,
    color: '#8c8c8c',
    borderColor: '#ecd794',
    backgroundColor: '#fcfbd9'
  }
});
