import {APP} from "../actionTypes";

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