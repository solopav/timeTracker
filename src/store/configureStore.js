import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { rootReducer } from '../reducers/index'

export function configureStore() {
    const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger()));
    const history = syncHistoryWithStore(browserHistory, store);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        })
    }

    return { store, history }
    //return { store }
}