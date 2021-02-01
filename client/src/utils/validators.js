export const required = (value) => {
	if(value) return undefined
	return "Это обязательное поле"
}
export const name = (value) => {
	if(!value) {
		return 'Напишите ваше имя'
	}
}
export const email = (value) => {
	if(!value) {
		return "Введите электронную почту"
	} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		return 'Введите корректный e-mail'
	}
}
export const phone = (value) => {
	if(!value) {
		return "По какому номеру с вами связаться?"
	}
}