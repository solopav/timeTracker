import * as types  from '../untils/Actions'

let initialState = {
    signedIn: false,
    loading: false
};

export const Autherisation = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN_SEND_QUERY:
            state = {
                ...state,
                loading: true
            };
            break;
        case types.SIGN_IN_OK:
            state = {
                ...state,
                signedIn: true,
                loading: false
            };
            break;
        case types.SIGN_IN_ERROR:
            state = {
                ...state,
                signedIn: false,
                loading: false
            };
            break;
        case types.SIGN_OUT:
            state = {
                ...state,
                signedIn: false
            };
            break;
    }
    return state;
};
