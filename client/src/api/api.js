import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	//baseURL: 'http://localhost:5000/api/',
	baseURL: 'http://xn--80ab0aeodhol1g.xn--p1ai/',
})

export const appAPI = {
	sendOrder(message) {
		return instance.post(`app/`, message)
	}
}
