import React from 'react'
import s from './Bottom.module.sass'

const Bottom = (props) => {
	return (
		<div className={s.section}>
			<div className={s.wrap}>
				<div className={s.copyright}>ИП Толстикова С. А. © 2017 – 2020</div>
				<div className={s.privacy}>
					<div className={s.privacy_link}>Политика конфиденциальности</div>
				</div>
				<div className={s.customers}>
					<div className={s.customers_link}>Розничным покупателям</div>
				</div>
			</div>
		</div>
	)
}

export default Bottom