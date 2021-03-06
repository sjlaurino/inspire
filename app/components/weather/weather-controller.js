import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	let template = _weatherService.Weather.grabTemplate()
	document.querySelector('#weather').innerHTML = template

}
function drawClock() {
	_weatherService.startTime()
}
setInterval(drawClock, 500)

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
