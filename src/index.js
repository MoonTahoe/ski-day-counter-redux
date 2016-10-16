import C from './constants'
import storeFactory from './store'
import initialState from './initialState.json'
import { randomGoals } from './actions'

const store = storeFactory(initialState)

window.store = store

store.dispatch(
    randomGoals(2000)
)