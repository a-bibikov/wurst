const express = require('express')
const path = require('path')
const config = require('config')
const proxy = require('express-http-proxy')
const cors = require('cors')
const keys = require('./keys')
const appRoutes = require('./routes/app.routes')

const app = express()

app.use(keys.BASE_URL, proxy(keys.BASE_URL));

app.use(express.json({extended: true}))
app.use(cors({
	origin: keys.BASE_URL,
	credentials: true
}))

app.use('/api/app', appRoutes)

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