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