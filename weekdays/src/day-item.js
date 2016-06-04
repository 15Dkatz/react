// import necessary code
var React = require('react');
var ReactNative = require('react-native');
var Text = ReactNative.Text;
var StyleSheet = ReactNative.StyleSheet;

// create component
var DayItem = React.createClass({
	render: function() {
		return <Text style={this.style()}>
			{this.props.day} 
		</Text>
	},
	style: function() {
		return {
			//fontSize - daysUntil
			color: this.color(),
			fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},
	color: function() {
		var opacity = 1 / this.props.daysUntil;
		//ok to divide by zero?
		return 'rgba(0, 0, 0, ' + opacity + ')';
	},
	fontWeight: function() {
		var weight = 7 - this.props.daysUntil;
	// 	// return weight * 100;
		return (weight*100).toString();

	},
	fontSize: function() {
		return 60 - 6 * this.props.daysUntil;
	},
	lineHeight: function() {
		return 70 - (4 * this.propsldaysUntil);
	}
})

//props refers to the parent variables passed into it...

// style component
// var styles = StyleSheet.create({
// 	day: {
// 		fontSize: 18,
// 		color: '#40C1FD'
// 	}
// });


// export component to make it available
module.exports = DayItem;