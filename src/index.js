import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import { Provider } from 'react-redux'
import { addError } from './actions'
import storeFactory from './store'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

window.addEventListener(
    "error",
    ({message}) => store.dispatch(addError(message))
)

window.React = React
window.store = store

render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('react-container')
)
