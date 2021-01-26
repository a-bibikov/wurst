import React from 'react'
import s from './Burger.module.sass'
import burger from '../../../assets/icons/burger.svg'

const Burger = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.title}>Меню</div>
			<figure className={s.icon}>
				<img src={burger} alt="" className={s.image}/>
			</figure>
		</div>
	)
}

export default Burger