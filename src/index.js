import C from './constants'
import storeFactory from './store'
import initialState from './initialState.json'
import { addDay, removeDay, setGoal, addError, clearError } from './actions'

const store = storeFactory(initialState)

window.actionCreators = { addDay, removeDay, setGoal, addError, clearError }

window.store = store
