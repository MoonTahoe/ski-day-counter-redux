import C from './constants'
import storeFactory from './store'
import initialState from './initialState.json'

const store = storeFactory(initialState)

console.log('initial state', store.getState())

window.store = store
