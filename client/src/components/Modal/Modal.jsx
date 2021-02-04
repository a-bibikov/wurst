import React from 'react'
import s from './Modal.module.sass'
import {name, phone} from "../../utils/validators"
import { Field, reduxForm } from 'redux-form'
import Input from "../redux-form/Input"
import {connect} from "react-redux"
import {sendOrder} from "../../redux/actions/appActions"

const Modal = (props) => {
	console.log(props)

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
				<form className={s.form} onSubmit={props.handleSubmit}>
					<div className={s.row}>
						<Field name="name" id="name" component={Input} type="text" placeholder="Например, Елена" validate={[name]} label={"Ваше имя:"} />
					</div>
					<div className={s.row}>
						<Field name="phone" id="phone" component={Input} type="text" placeholder="* (***) *** ** **" validate={[phone]} label={"Контактный телефон:"} />
					</div>
					<div className={s.action}>
						<button type="submit" className={s.button}>Отправить</button>
					</div>
				</form>
				<div className={s.close} onClick={onCloseHandler}>Закрыть</div>
			</div>
			<div className={s.overlay} onClick={onCloseHandler}></div>
		</div>
	)
}

const onSubmit = (values, dispatch) => {
	dispatch(sendOrder(values));
}

export default connect()(reduxForm({
	form: 'modalForm', // a unique identifier for this form
	onSubmit
})(Modal))