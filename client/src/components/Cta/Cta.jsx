import React from 'react'
import s from './Cta.module.sass'

const Cta = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.section}>
				<div className={s.form_wrap}>
					<div className={s.title_block}>
						<div className={s.pre}>Консультация</div>
						<div className={s.title}>Приглашаем к сотрудничеству</div>
						<div className={s.description}>Заполните заявку, мы отправим вам прайс-лист и коммерческое предложение</div>
					</div>
					<div className={s.form}>
						<div className={s.form_col}>
							<label htmlFor="" className={s.label}>Ваше имя:</label>
							<input type="text" className={s.input}/>
						</div>
						<div className={s.form_col}>
							<label htmlFor="" className={s.label}>Контактный телефон:</label>
							<input type="text" className={s.input}/>
						</div>
						<div className={s.form_action}>
							<button className={s.button}>Запросить прайс</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cta