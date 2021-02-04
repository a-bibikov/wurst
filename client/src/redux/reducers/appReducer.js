import {APP} from "../actionTypes"

const initialState = {
	app: {
		modal: false,
		order_send: false,
		gallery: false,
		gallery_link: null
	}
}

const accountReducer = (state = initialState, action) => {
	switch (action.type) {
		case APP.MODAL_SHOW:
			return {
				...state,
				app: {
					...state.app,
					modal: true
				}
			}
		case APP.MODAL_HIDE:
			return {
				...state,
				app: {
					...state.app,
					modal: false
				}
			}
		case APP.GALLERY_SHOW:
			return {
				...state,
				app: {
					...state.app,
					gallery: true
				}
			}
		case APP.GALLERY_HIDE:
			return {
				...state,
				app: {
					...state.app,
					gallery: false
				}
			}
		case APP.SUCCESS_SHOW:
			return {
				...state,
				app: {
					...state.app,
					order_send: true
				}
			}
		case APP.SUCCESS_HIDE:
			return {
				...state,
				app: {
					...state.app,
					order_send: false
				}
			}
		default:
			return state
	}
}

export default accountReducer