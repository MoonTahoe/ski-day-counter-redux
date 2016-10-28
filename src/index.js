import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Whoops404 } from './components'
import SkiDayCount from './components/SkiDayCount'
import AddDayForm from './components/AddDayForm'
import SkiDayList from './components/SkiDayList'
import actions from './actions'
import { addError } from './actions'
import storeFactory from './store'

const store = storeFactory(
    (localStorage["redux-store"]) ?
        JSON.parse(localStorage["redux-store"]) :
    {}
)

store.subscribe(() => {
    localStorage["redux-store"] = JSON.stringify(store.getState())
})

window.addEventListener(
    "error",
    ({message}) => store.dispatch(addError(message))
)

window.React = React
window.store = store
window.addError = addError

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={SkiDayCount}/>
                <Route path="add-day" component={AddDayForm}/>
                <Route path="list-days" component={SkiDayList}>
                    <Route path=":filter" component={SkiDayList}/>
                </Route>
                <Route path="*" component={Whoops404}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react-container')
)
