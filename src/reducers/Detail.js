import * as types  from '../constants/ActionsTypes'

let initialState = {
    loading: false
};

export const Detail = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_TASK.REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case types.SAVE_TASK.SUCCESS:
            state = {
                ...state,
                loading: false
            };
            break;
        case types.SAVE_TASK.ERROR:
            state = {
                ...state,
                loading: false
            };
            break;
    }
    return state;
};
