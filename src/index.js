import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import storeFactory from './store'
import initialState from './initialState.json'
import { suggestResortName } from './actions'

window.React = React

let input
const store = storeFactory(initialState)

const suggest = value => {
    store.dispatch(
        suggestResortName(value)
    )
}

render(
    <input ref={i=>input=i}
           type="text"
           onChange={() => suggest(input.value)} />,
    document.getElementById("react-container")
)

