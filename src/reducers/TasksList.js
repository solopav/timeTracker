import * as types  from '../untils/Actions'

let initialState = {
    tasks: [],
    loading: false,
    current: []
};

export const TasksList = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case types.GET_TASKS_ERROR:
            state = {
                ...state,
                loading: false
            };
            break;
        case types.GET_TASKS_OK:
            state = {
                ...state,
                loading: false,
                tasks: action.payload
            };
            break;
        case types.SET_CURRENT:
            state = {
                ...state,
                current: action.payload
            }
    }
    return state;
};