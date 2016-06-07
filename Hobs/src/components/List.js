var React = require('react');

var {
	View,
	Text,
	StyleSheet,
	ListView
} = require('react-native')


var Api = require('../api');


module.exports = React.createClass({
	getInitialState: function() {
		//grabbing San Francisco Region
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
		}
	},

	fetchData: function() {
		Api(37.783333,-122.416667)
		.then((data)=> {
			console.log("data from promise", data);
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(data)
			})
		})
		.catch((err) => {
  		console.log('err', err);
	  })
	},

	componentDidMount: function() {
		this.fetchData();
	},

	render: function() {
		console.log("userData in LIST", this.props.userData);
	  return (
	    <ListView
	    	style={styles.container}
	      dataSource={this.state.dataSource}
	      renderRow={this.renderJob}
	    />
	  );
	},


	renderJob: function(job) {
		var jobSalMax = job.maximum > 200 ? job.maximum : job.maximum * 40*48;
		var jobSalMin = job.minimum > 200 ? job.minimum : job.minimum * 40*48;

		if (this.props.userData) {
			var newMax = parseInt(this.props.userData.salMax);
			var newMin = parseInt(this.props.userData.salMin);
			console.log("jobSalMax", jobSalMax, "jobSalMin", jobSalMin, "userSalMax", newMax, "userSalMin", newMin);
			if ((jobSalMax < newMin) || (jobSalMin > newMax)) {
				// console.count('fail');
				return null;
			}
		}
		// console.count('pass');
		return (
			<View style={styles.job}>
				<Text style={styles.jobTitle}>	
					{/(.+)\s+(\(.+\)|\(.+\)\(.+\))/.exec(job.position_title)[1]}
				</Text>
				<Text style={styles.salary}>
					{
						Math.round((job.minimum)/2) > 200 ? Math.round((job.minimum)/2) : Math.round((job.minimum)/2)*40*48
					}
					-{
						Math.round((job.maximum)/2) > 200 ? Math.round((job.maximum)/2) : Math.round((job.maximum)/2)*40*48
					}$
				</Text>
				<Text style={styles.organization}>
					{job.organization_name}
				</Text>
				<Text onPress={()=>this.openUrl(job.url)} style={styles.url}>
					{job.url}
				</Text>
			</View>
		)
	},
	openUrl: function(url) {
		// console.log("attempting to open", url);
		this.props.navigator.push({
			name: "url",
			url: url
		})
	}

})

var styles = StyleSheet.create({
	container: {
		flex: 6,
		backgroundColor: '#faf5ec'
	},
	job:{
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10
	},
	jobTitle: {
		fontSize: 16,
		alignSelf: 'flex-start',
		marginLeft: 12
	},
	organization: {
		fontSize: 14,
		alignSelf: 'flex-start',
		marginLeft: 12
	},
	salary: {
		fontSize: 12,
		alignSelf: 'flex-start',
		marginLeft: 12,
		color: 'green'
	},
	url: {
		fontSize: 12,
		alignSelf: 'flex-start',
		marginLeft: 12,
		color: '#00abef',
		textDecorationLine: 'underline' 
	},
})
