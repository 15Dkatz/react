var _ = require('lodash');



// trulia 5aph9xfywzjangnkassgkpet
// zillow ziwd X1-ZWz1fb3ua1k64r_8l13j


module.exports = function(latitude, longitude) {
	console.log("You're here: latitude: ", latitude, " longitude: ", longitude);
	return {
		lat: latitude,
		lon: longitude
	}
}