import React from 'react'
import location from '../../../assets/icons/location.svg'
import s from './Address.module.sass'

const Address = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.icon}>
				<img src={location} alt="" className={s.image}/>
			</div>
			<div className={s.content}>
				<div className={s.city}>г. Новосибирск</div>
				<div className={s.location}>проспект Просвещения 33, корпус 1, оф. 5Б</div>
			</div>
		</div>
	)
}

export default Address