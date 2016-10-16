import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import { Autherisation } from './Autherisation'
import { TasksList }     from './TasksList'
import { Tables }        from './Tables'
import { Detail }        from './Detail'

export const rootReducer = combineReducers({
    Autherisation,
    TasksList,
    Tables,
    Detail,
    routing: routerReducer
});
