
import axios from 'axios'

const API_BASE_URL = process.env.API_BASE_URL

export default {
	get(request) {
		return axios
			.get(API_BASE_URL + request)
			.then((response) => Promise.resolve(response.data))
			.catch((error) => Promise.reject(error));
	},
	post(request, data) {
		return axios
			.post(API_BASE_URL + request, data)
			.then((response) => Promise.resolve(response))
			.catch((error) => Promise.reject(error));
	},
}
