import React from 'react'
import s from "./Header.module.sass"
import Logo from "../UI/Logo/Logo"
import Burger from "../UI/Burger/Burger"
import Address from "../UI/Address/Address";

const Header = (props) => {
	return (
		<div className={s.section}>
			<div className={s.wrap}>
				<div className={s.logo}>
					<Logo/>
				</div>
				<div className={s.address}>
					<Address/>
				</div>
				<div className={s.phone}>
					<div className={s.phone_link}>+7 (495) 988-08-60</div>
					<div className={s.phone_action}>Закзать звонок</div>
				</div>
				<div className={s.menu}>
					<Burger/>
				</div>
			</div>
		</div>
	)
}

export default Header