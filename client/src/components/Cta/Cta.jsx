import React from 'react'
import s from './Cta.module.sass'
import {name, phone} from "../../utils/validators"
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux"
import {sendOrder} from "../../redux/actions/appActions"
import CtaInput from "../redux-form/CtaInput"

const Cta = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.section}>
				<form className={s.form_wrap} onSubmit={props.handleSubmit}>
					<div className={s.title_block}>
						<div className={s.pre}>Консультация</div>
						<div className={s.title}>Приглашаем к сотрудничеству</div>
						<div className={s.description}>Заполните заявку, мы отправим вам прайс-лист и коммерческое предложение</div>
					</div>
					<div className={s.form}>
						<div className={s.form_col}>
							<Field name="name" id="name" component={CtaInput} type="text" placeholder="Например, Елена" validate={[name]} label={"Ваше имя:"} />
						</div>
						<div className={s.form_col}>
							<Field name="phone" id="phone" component={CtaInput} type="tel" placeholder="+7 *** *** ** **" validate={[phone]} label={"Контактный телефон:"} />
						</div>
						<div className={s.form_action}>
							<button className={s.button}>Запросить прайс</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

const onSubmit = (values, dispatch) => {
	dispatch(sendOrder(values));
}

export default connect()(reduxForm({
	form: 'ctaForm', // a unique identifier for this form
	onSubmit
})(Cta))