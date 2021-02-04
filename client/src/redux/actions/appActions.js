import {APP} from "../actionTypes";
import {appAPI} from "../../api/api";

export function modal_show () {
	return {
		type: APP.MODAL_SHOW,
	}
}
export function modal_hide () {
	return {
		type: APP.MODAL_HIDE,
	}
}
export function gallery_show (img) {
	return {
		type: APP.GALLERY_SHOW,
		payload: {
			img
		}
	}
}
export function gallery_hide (img) {
	return {
		type: APP.GALLERY_HIDE,
		payload: {
			img
		}
	}
}
export function success_show () {
	return {
		type: APP.SUCCESS_SHOW,
	}
}
export function success_hide () {
	return {
		type: APP.SUCCESS_HIDE,
	}
}

export function send_order () {
	console.log('new order')
	return {
		type: APP.MODAL_HIDE
	}
}
export const sendOrder = (message) => (dispatch) => {
	console.log(message)
	appAPI.sendOrder(message)
	.then(response => {
		console.log(response)
		dispatch(send_order())
		dispatch(success_show())
	})
}