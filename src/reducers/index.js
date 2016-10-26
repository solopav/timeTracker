import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import { Authorisation } from './Authorisation'
import { TasksList }     from './TasksList'
import { Tables }        from './Tables'
import { Detail }        from './Detail'

export const rootReducer = combineReducers({
    Authorisation,
    TasksList,
    Tables,
    Detail,
    routing: routerReducer
});
