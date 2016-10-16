import * as types  from '../untils/Actions'

let initialState = {
    loading: false
};

export const Detail = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_TASK_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case types.SAVE_TASK_OK:
            state = {
                ...state,
                loading: false
            };
            break;
        case types.SAVE_TASK_ERROR:
            state = {
                ...state,
                loading: false
            };
            break;
    }
    return state;
};
