const {Router} = require('express')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
const router = Router()
const keys = require('../keys')

sgMail.setApiKey(keys.SENDGRID_API_KEY)

const corsOptions = {
	origin: true,
	credentials: true
}

router.post('/', cors(corsOptions), async (req, res) => {
	try {
		console.log(req.body)

		const email = {
			to: 'leyashapki@yandex.ru', // Change to your recipient
			from: 'leyashapki@yandex.ru', // Change to your verified sender
			subject: 'Колбасы Опт - заявка с сайта колбасыопт.рф',
			text: `Имя клиента: ${req.body.name}\n Телефон клиента: ${req.body.phone}`,
			html: `
				<h1>Заявка с сайта</h1>
				<p>Имя клиента: ${req.body.name}</p>
				<p>Телефон клиента: ${req.body.phone}</p>
				<hr/>
			`
		}

		sgMail
			.send(email)
			.then(() => {
				console.log('Email sent', email)
			})
			.catch((error) => {
				console.error(error)
			})

		await res.json({resultCode: 0})
	} catch(e) {
		console.log(e)
	}
})
module.exports = router