import React, { Component } from 'react'
import { render }           from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Provider }       from 'react-redux'
import { configureStore } from './store/configureStore'

const { store, history } = configureStore();

import AppContainer           from './containers/AppContainer'
import AutherisationContainer from './containers/AutherisationContainer'
import TablesContainer        from './containers/TablesContainer'
import TasksListContainer     from './containers/TasksListContainer'
import DetailContainer        from './containers/DetailContainer'
import styles                 from '../scss/styles.scss'

render(
    (<Provider store={ store }>
        <Router history={history}>
            <Route path="/" component={ AppContainer }>
                <IndexRoute component={ AutherisationContainer } />
                <Route path="tables" component={ TablesContainer } />
                <Route path="list" component={ TasksListContainer } />
                <Route path="list/:id" component={ DetailContainer } />
                <Route path="new" component={ DetailContainer } />
            </Route>
        </Router>
    </Provider>),
    document.getElementById('root')
);