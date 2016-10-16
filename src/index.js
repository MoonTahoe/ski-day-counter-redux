import C from './constants'
import reducers from './store/reducers'
import { createStore } from 'redux'
import initialState from './initialState.json'

const store = createStore(reducers, initialState)

const unsubscribe = store.subscribe(() =>
    console.log(`   Goal: ${store.getState().goal}`)
)

setInterval(() => {

    store.dispatch({
        type: C.SET_GOAL,
        payload: Math.floor(Math.random() * 100)
    })


}, 250)

setTimeout(() => {
    unsubscribe()
    process.exit()
}, 3000)
