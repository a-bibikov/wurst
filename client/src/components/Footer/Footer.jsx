import React from 'react'
import s from './Footer.module.sass'
import logo from "../../assets/images/logo.svg"

const Footer = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.section}>
				<div className={s.logo_wrap}>
					<div className={s.logo}>
						<div className={s.icon}>
							<img src={logo} alt="" className={s.image}/>
						</div>
						<div className={s.content}>
							<div className={s.name}>Колбаса плюс</div>
							<div className={s.description}>Оптовые поставки колбасных изделий</div>
						</div>
					</div>
				</div>
				<div className={s.menu}>
					<div className={s.menu_block}>
						<div className={s.menu_block_title}>О компании</div>
						<div className={s.menu_block_list}>
							<div className={s.menu_block_list}>
								<div className={s.menu_block_item}>
									<div className={s.menu_block_link}>Контакты</div>
								</div>
								<div className={s.menu_block_item}>
									<div className={s.menu_block_link}>Реквизиты</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.info}>
					<div className={s.phones}>
						<div className={s.phone}>+7 (495) 988-08-60</div>
						<div className={s.altphone}>+7 (951) 001-20-29</div>
					</div>
					<div className={s.adr}>
						г. Новосибирск,
						проспект Просвещения 33, корпус 1, оф. 5Б
					</div>
					<div className={s.email}>
						<div className={s.email_link}>info@kolbasa-nsk.ru</div>
					</div>
					<div className={s.action}>
						<div className={s.button} onClick={props.modalShow}>Запросить прайс</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer