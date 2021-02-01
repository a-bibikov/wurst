let baseURL = 'http://xn--80ab0aeodhol1g.xn--p1ai/'

if(process.env.NODE_ENV === 'production') {
	console.log(process.env.NODE_ENV)
	baseURL = 'http://xn--80ab0aeodhol1g.xn--p1ai/'
} else if(process.env.NODE_ENV === 'development') {
	console.log(process.env.NODE_ENV)
	baseURL = 'http://localhost:3000'
}

module.exports = {
	COOKIE_SECRET_KEY: 'my secret value',
	SENDGRID_API_KEY: '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',
	COOKIE_MAX_AGE: 7200000,
	BASE_URL: baseURL,
}