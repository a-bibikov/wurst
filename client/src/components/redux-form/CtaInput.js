import React from 'react'
import s from './FormControls.module.sass'

const CtaInput = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={hasError ? s.error : null}>
			<label htmlFor="name" className={s.cta_label}>{props.label}</label>
			<input className={s.cta_input} {...input} {...props} value={props.value} />
			{ hasError && <span className={s.cta_comment}>{meta.error}</span> }
		</div>
	)
}

export default CtaInput