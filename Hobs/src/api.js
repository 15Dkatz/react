var _ = require('lodash');



// trulia 5aph9xfywzjangnkassgkpet
// zillow ziwd X1-ZWz1fb3ua1k64r_8l13j

// https://api.usa.gov/jobs/search.json?query=jobs&lat_lon=37.783333,-122.416667


module.exports = function(latitude, longitude) {
	// console.log("You're here: latitude: ", latitude, " longitude: ", longitude);
	var url="https://api.usa.gov/jobs/search.json?query=jobs&lat_lon="+latitude+"," +longitude;

	return fetch(url)
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			return json
		})
		.catch((err)=> {
			console.log("in api", err);
		})
}