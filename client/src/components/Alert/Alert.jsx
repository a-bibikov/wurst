import React from 'react'
import s from './Alert.module.sass'
import success from '../../assets/icons/success.svg'

const Alert = (props) => {
	console.log(props)

	const onCloseHandler = () => {
		props.success_hide()
	}

	const active = props.app.order_send ? s.active : ''

	return (
		<div className={`${s.wrap} ${active}`}>
			<div className={s.body}>
				<div className={s.block}>
					<div className={s.image}>
						<img src={success} alt="" className={s.icon}/>
					</div>
					<div className={s.title}>Ваша заявка отправлена</div>
					<div className={s.text}>
						Мы свяжемся с вами в ближайшее время
					</div>
					<div className={s.action}>
						<div className={s.button} onClick={onCloseHandler}>Продолжить</div>
					</div>
				</div>
			</div>
			<div className={s.overlay} onClick={onCloseHandler}></div>
		</div>
	)
}

export default Alert