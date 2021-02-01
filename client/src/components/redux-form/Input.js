import React from 'react'
import s from './FormControls.module.sass'

const Input = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={hasError ? s.error : null}>
			<label htmlFor="name" className={s.label}>{props.label}</label>
			<input className={s.input} {...input} {...props} value={props.value} />
			{ hasError && <span className={s.comment}>{meta.error}</span> }
		</div>
	)
}

export default Input