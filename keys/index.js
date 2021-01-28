let baseURL = 'http://http://194.67.116.213/'

if(process.env.NODE_ENV === 'production') {
	console.log(process.env.NODE_ENV)
	baseURL = 'http://http://194.67.116.213/'
} else if(process.env.NODE_ENV === 'development') {
	console.log(process.env.NODE_ENV)
	baseURL = 'http://192.168.1.4:3000'
}

module.exports = {
	COOKIE_SECRET_KEY: 'my secret value',
	COOKIE_MAX_AGE: 7200000,
	BASE_URL: baseURL,
}