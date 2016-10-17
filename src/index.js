import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Whoops404 } from './components'
import { CountDays, AddDay, AllDays} from './components/containers'
import storeFactory from './store'
import initialState from './initialState.json'

const store = storeFactory(initialState)

window.React = React
window.store = store

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={CountDays} />
                <Route path="add-day" component={AddDay} />
                <Route path="list-days" component={AllDays}>
                    <Route path=":filter" component={AllDays} />
                </Route>
                <Route path="*" component={Whoops404} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react-container')
)
