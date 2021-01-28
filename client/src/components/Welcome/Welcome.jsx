import React from 'react'
import s from './Welcome.module.sass'
import warranty from '../../assets/icons/warranty.svg'
import Header from "../Header/Header"

const Welcome = (props) => {
	console.log(props)

	return (
		<div className={s.wrap}>
			<Header />
			<div className={s.body}>
				<div className={s.pretitle}>От производителя</div>
				<div className={s.info}>
					<div className={s.title}>Колбасные изделия европейского качества</div>
					<div className={s.subtitle}>крупным и мелким оптом</div>
					<div className={s.action}>
						<div className={s.button} onClick={props.modalShow}>Запросить прайс</div>
					</div>
				</div>
				<div className={s.icons}>
					<div className={s.icon}>
						<img src={warranty} alt="" className="image"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome