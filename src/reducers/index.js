import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import { Auth } from './auth'
import { TasksList }     from './tasksList'
import { Tables }        from './tables'
import { Detail }        from './detail'

export const rootReducer = combineReducers({
		Auth,
		TasksList,
		Tables,
		Detail,
		routing: routerReducer
});