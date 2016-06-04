var _ = require('lodash');
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=8ed066dab74f94bcc931774f0e5fab2c';

var kelvinToF = function(kelvin) {
	return Math.round(((kelvin-273.15)*1.8) +32) + " ˚F";
}
// key: 8ed066dab74f94bcc931774f0e5fab2c


module.exports = function(latitude, longitude) {
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
	// rootUrl + '&lat=' + latitude + '&lon=' + longitude...
	return fetch(url)
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			return {
				city: json.name,
				temperature: kelvinToF(json.main.temp),
				description: _.capitalize(json.weather[0].description)
			}
		})
}