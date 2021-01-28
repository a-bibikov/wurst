import React from 'react'
import s from './About.module.sass'
import icon from '../../assets/images/sert/icon.jpg'
import icon2 from '../../assets/images/sert/icon2.jpg'
import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpg'
import trigger1 from '../../assets/icons/trigger1.svg'
import trigger2 from '../../assets/icons/trigger2.svg'

const About = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.triggers}>
				<div className={s.triggers_list}>
					<div className={s.triggers_item}>
						<div className={s.icon}>
							<img src={trigger1} alt="" className={s.icon_image}/>
						</div>
						<div className={s.triggers_title}>Минимальный оптовый заказ от 45 кг</div>
						<div className={s.triggers_text}>Оптовые цены мы предоставляем при заказе от 25 кг. При заказе от 150 кг действует скидка на крупный опт. Для приобретения в розницу, обращайтесь по адресам розничных торговых точек.</div>
					</div>
					<div className={s.triggers_item}>
						<div className={s.icon}>
							<img src={trigger2} alt="" className={s.icon_image}/>
						</div>
						<div className={s.triggers_title}>Полное соответствие стандартам Халяль, ГОСТ и ТР ТС</div>
						<div className={s.triggers_text}>Предоставим все необходимые сертификаты и документы.</div>
						<div className={s.images}>
							<div className={s.images_item} onClick={props.galleryShow}>
								<img src={icon} className={s.image} alt="" />
							</div>
							<div className={s.images_item} onClick={props.galleryShow}>
								<img src={icon2} className={s.image} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={s.clients}>
				<div className={s.clients_list}>
					<div className={s.clients_item}>
						<div className={s.clients_title}>Сетевым и розничным магазинам</div>
						<div className={s.clients_image}>
							<img src={client1} alt="" className={s.image}/>
						</div>
					</div>
					<div className={s.clients_item}>
						<div className={s.clients_title}>Гипермакетам и оптовым базам</div>
						<div className={s.clients_image}>
							<img src={client2} alt="" className={s.image}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About