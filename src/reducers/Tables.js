import * as types  from '../constants/ActionsTypes'

let initialState = {
	currentTable: '',
	list: [],
	loading: false
};

export const Tables = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_TABLE.REQUEST:
			state = {
				...state,
				loading: true
			};
			break;
		case types.CREATE_TABLE.SUCCESS:
			state = {
				...state,
				loading: false
			};
			break;
		case types.SET_LAST_TABLE:
			state = {
				...state,
				currentTable: action.payload
			}
			break;
		case types.SET_LIST_TABLES:
			state = {
				...state,
				list: action.payload
			}
			break;
	}
	return state;
};