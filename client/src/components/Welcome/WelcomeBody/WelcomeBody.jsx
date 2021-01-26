import React from 'react'
import s from './WelcomeBody.module.sass'

const WelcomeBody = (props) => {
	return (
		<div className={s._}>
			<div className={s.pretitle}>От производителя</div>
			<div className={s.info}>
				<div className={s.title}>Колбасные изделия европейского качества</div>
				<div className={s.subtitle}>Крупным и мелким оптом</div>
			</div>
		</div>
	)
}

export default WelcomeBody