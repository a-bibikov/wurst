import React from 'react'
import s from './Logo.module.sass'
import logo from '../../../assets/images/logo.svg'

const Logo = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.icon}>
				<img src={logo} alt="" className={s.image}/>
			</div>
			<div className={s.content}>
				<div className={s.name}>Кавказские продукты</div>
				<div className={s.description}>Оптовые поставки колбасных изделий</div>
			</div>
		</div>
	)
}

export default Logo