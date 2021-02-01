import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:5000/api/',
})

export const appAPI = {
	sendOrder(message) {
		return instance.post(`app/`, message)
	}
}
