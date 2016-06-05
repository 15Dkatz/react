var React = require('react');
var {
  TouchableOpacity,
  Text,
  StyleSheet
} = require('react-native');

module.exports = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    // buttonStyle: React.PropTypes.object.isRequired,
    // textStyle: React.PropTypes.object.isRequired,
    onPress: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={this.props.onPress}
        >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    width: 150,
    backgroundColor: '#a9e5a8',
    borderRadius: 5,
    overflow: 'hidden'
  },
  text: {
    padding: 5,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
    color: '#8c8c8c',
    fontSize: 27
  }
});
