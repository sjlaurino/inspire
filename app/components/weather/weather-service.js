import Weather from "../../models/weather.js";

// @ts-ignore
const weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}
function checkTime(i) {
	if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
	return i;
}




export default class WeatherService {
	get Weather() {
		return _state.weather
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getWeather() {
		weatherApi.get().then(res => {
			_setState('weather', new Weather(res.data))
		})
	}

	startTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		if (h > 12) {
			h -= 12;
		} else if (h === 0) {
			h = 12;
		}
		m = checkTime(m);
		s = checkTime(s);
		document.querySelector('.clock').innerHTML = h + ":" + m + ":" + s;
		document.querySelector('.date').innerHTML = today.toDateString()
	}
}
