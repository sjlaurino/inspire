
import Image from "../../models/image.js";


// @ts-ignore
const _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	imgFromApi: {}
}
let _subscribers = {
	imgFromApi: []
}

function setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	grabImage() {
		_imgApi.get()
			.then(res => {
				let data = res.data.large_url
				setState('imgFromApi', data)
			})
	}

	get bgImg() {
		return _state.imgFromApi
	}
}
