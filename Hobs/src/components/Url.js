var React = require('react');
var {
	WebView,
	View,
	Text
} = require ('react-native');

module.exports = React.createClass({
	propType: {
		url: React.PropTypes.string.isRequired
	},

	render: function() {
		console.log('the url', this.props.url);
		return (
			<View style={{flex: 1}}>
				<View 
				style={{
					flex: 1,
					justifyContent: 'flex-end',
					backgroundColor: '#faf5ec'
				}}>
					<Text 
						onPress={() => this.props.navigator.pop()}
						style={{
							color: '#8c8c8c',
							fontWeight: '600',
							marginBottom: 4,
							marginLeft: 6
						}}
					>
						Back
					</Text>
				</View>
				<View style={{flex: 15}}>
					<WebView 
						style={{flex: 1}}
						source={{uri: this.props.url}}
					/>
				</View>
			</View>
		);
	}
})
