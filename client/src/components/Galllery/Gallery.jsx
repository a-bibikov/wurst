import React from 'react'
import s from './Gallery.module.sass'
import img1 from '../../assets/images/sert/img1.jpg'

const Gallery = (props) => {
	console.log(props)
	const onCloseHandler = () => {
		props.gallery_hide()
	}

	const active = props.gallery ? s.active : ''

	return (
		<div className={`${s.wrap} ${active}`}>
			<div className={s.body}>
				<img src={img1} alt="" className={s.image}/>
			</div>
			<div className={s.close} onClick={onCloseHandler}>Закрыть</div>
			<div className={s.overlay} onClick={onCloseHandler}></div>
		</div>
	)
}

export default Gallery