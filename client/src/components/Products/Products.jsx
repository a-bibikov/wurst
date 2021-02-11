import React from 'react'
import s from './Products.module.sass'
import product1 from '../../assets/images/products/1.jpg'
import product2 from '../../assets/images/products/2.jpg'
import product3 from '../../assets/images/products/3.jpg'

const Products = (props) => {
	return (
		<div className={s.wrap}>
			<div className={s.title_block}>
				<div className={s.title}>Безупречный вкус и качество продукции, оправдают все ваши ожидания!</div>
				<div className={s.description}>Мы заинтересованы в долгосрочном сотрудничестве с вами.</div>
			</div>
			<div className={s.section}>
				<div className={s.list}>
					<div className={s.item}>
						<div className={s.item_image}>
							<img src={product1} alt="" className={s.image}/>
						</div>
						<div className={s.item_name}>Колбасы п/к ХАЛЯЛЬ</div>
						<div className={s.item_price}>от 391 руб. / кг</div>
					</div>
					<div className={s.item}>
						<div className={s.item_image}>
							<img src={product2} alt="" className={s.image}/>
						</div>
						<div className={s.item_name}>Вареная колбаса</div>
						<div className={s.item_price}>от 425 руб. / кг</div>
					</div>
					<div className={s.item}>
						<div className={s.item_image}>
							<img src={product3} alt="" className={s.image}/>
						</div>
						<div className={s.item_name}>Колбасы п/к</div>
						<div className={s.item_price}>от 425 руб. / кг</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products