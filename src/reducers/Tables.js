import * as types  from '../constants/ActionsTypes'

let initialState = {
	currentTable: '',
	loading: true
};

export const Tables = (state = initialState, action) => {
	switch (action.type) {
		case types.CHECK_LOCALSTORAGE:
			state = {
				...state,
				currentTable: action.payload,
				loading: false
			};
			break;
		case types.SET_CURRENT_TABLE:
			state = {
				...state,
				currentTable: action.payload,
				loading: false
			};
			break;
		case types.CHECK_LOCALSTORAGE_END:
			state = {
				...state,
				loading: false
			};
			break;
	}
	return state;
};