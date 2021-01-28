const express = require('express')
const path = require('path')
const config = require('config')

const app = express()

if(process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))

	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
			if (err) {
				res.status(500).send(err)
			}
		})
	})
} else if(process.env.NODE_ENV === 'development') {
	console.log(process.env.NODE_ENV)
}

const PORT = config.get('port') || 5000
async function start() {
	try {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`)
		})
	} catch (e) {
		console.log('server catch',e)
	}
}
start()