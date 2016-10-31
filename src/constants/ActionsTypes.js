function createRequestTypes(base) {
    return {
        REQUEST : `${base}_REQUEST`,
        SUCCESS : `${base}_SUCCESS`,
        ERROR   : `${base}_ERROR`
    }
}

// Authorisation
export const SIGN_IN = createRequestTypes('SIGN_IN');

export const SIGN_IN_SEND_QUERY           = 'SIGN_IN_SEND_QUERY';
export const SIGN_IN_OK                   = 'SIGN_IN_OK';
export const SIGN_IN_ERROR                = 'SIGN_IN_ERROR';

export const LOAD_SHEETS_API              = 'LOAD_SHEETS_API';
export const CHANGE_LOCATION_AFTER_SIGNIN = 'CHANGE_LOCATION_AFTER_SIGNIN';

export const SIGN_OUT                     = 'SIGN_OUT';

// Tasks list
export const GET_TASKS = createRequestTypes('GET_TASKS');

export const SET_CURRENT = 'SET_CURRENT';

// Tables
export const CHECK_LOCALSTORAGE     = 'CHECK_LOCALSTORAGE';
export const CHECK_LOCALSTORAGE_END = 'CHECK_LOCALSTORAGE_END';
export const SET_CURRENT_TABLE      = 'SET_CURRENT_TABLE';
export const SET_LIST_TABLES        = 'SET_LIST_TABLES';
export const SET_LAST_TABLE         = 'SET_LAST_TABLE';
export const CREATE_TABLE = createRequestTypes('CREATE_TABLE');


export const CREATE_NEW_TABLE_QUERY = 'CREATE_NEW_TABLE_QUERY';
export const CREATE_NEW_TABLE_OK    = 'CREATE_NEW_TABLE_OK';
export const CREATE_NEW_TABLE_ERROR = 'CREATE_NEW_TABLE_ERROR';

// Detail
export const SAVE_TASK = createRequestTypes('SAVE_TASK');