import C from './constants'
import storeFactory from './store'
import initialState from './initialState.json'
import { randomGoals } from './actions'

const store = storeFactory(initialState)

window.actionCreators = { randomGoals }

window.store = store
