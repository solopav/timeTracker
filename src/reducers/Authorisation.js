import * as types  from '../utils/Actions'

let initialState = {
    signedIn: false,
    loading: false
};

export const Authorisation = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN.REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case types.SIGN_IN.SUCCESS:
            state = {
                ...state,
                signedIn: true,
                loading: false
            };
            break;
        case types.SIGN_IN.ERROR:
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
