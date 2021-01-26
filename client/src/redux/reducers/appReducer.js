import {APP} from "../actionTypes"

const initialState = {
	app: {
		modal: false
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
		default:
			return state
	}
}

export default accountReducer