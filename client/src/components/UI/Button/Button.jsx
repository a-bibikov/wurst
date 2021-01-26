import React from 'react'
import s from './Button.module.sass'

const Button = (props) => {
	return (
		<div className={s.element}>
			<div className={s.text}>Запросить прайс</div>
		</div>
	)
}

export default Button