import React from 'react'
import s from './Modal.module.sass'

const Modal = (props) => {
	const onCloseHandler = () => {
		props.modal_hide()
	}

	const active = props.app.modal ? s.active : ''

	return (
		<div className={`${s.wrap} ${active}`}>
			<div className={s.block}>
				<div className={s.info}>
					<div className={s.title}>Запрос коммерческого предложения</div>
					<div className={s.text}>Заполните заявку, мы отправим вам прайс-лист и коммерческое предложение</div>
				</div>
				<div className={s.form}>
					<div className={s.row}>
						<label htmlFor="" className={s.label}>Ваше имя:</label>
						<input type="text" className={s.input}/>
						<div className={s.comment}>Как к вам обращаться</div>
					</div>
					<div className={s.row}>
						<label htmlFor="" className={s.label}>Контактный телефон:</label>
						<input type="text" className={s.input}/>
						<div className={s.comment}>Для связи с вами</div>
					</div>
					<div className={s.action}>
						<button className={s.button}>Отправить</button>
					</div>
				</div>
				<div className={s.close} onClick={onCloseHandler}>Закрыть</div>
			</div>
			<div className={s.overlay} onClick={onCloseHandler}></div>
		</div>
	)
}

export default Modal