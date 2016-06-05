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
      rentMin: '1000',
      rentMax: '2000',
      salMin: '30000',
      salMax: '70000',
      weeklySpending: '100',
      weeklySavings: '50'
    };
  },
  render: function() {
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
        <Text style={styles.category}>Weekly Spending</Text>
        <View>
          <TextInput
            style={styles.input}
            defaultValue={this.state.weeklySpending}
            keyboardType={'number-pad'}
            onChangeText={(val) => this.setState({weeklySpending: val.toString()})}
          />
        </View>
        <Text style={styles.category}>Weekly Savings</Text>
        <View>
          <TextInput
            style={styles.input}
            defaultValue={this.state.weeklySavings}
            keyboardType={'number-pad'}
            onChangeText={(val) => this.setState({weeklySavings: val.toString()})}
          />
        </View>
        <Button
          text={'Save'}
          onPress={() => this.props.navigator.pop()}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf5ec'
  },
  category: {
    fontSize: 30,
    color: '#8c8c8c'
  },
  range: {
    flexDirection: 'row'
  },
  input: {
    fontSize: 23,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 120,
    margin: 10,
    textAlign: 'center',
    marginBottom: 30,
    color: '#8c8c8c',
    borderColor: '#ecd794',
    backgroundColor: '#fcfbd9'
  }
});
