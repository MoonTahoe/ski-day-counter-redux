import C from './constants'
import storeFactory from './store'
import initialState from './initialState.json'
import { suggestResortName } from './actions'

const store = storeFactory(initialState)

window.actions = { suggestResortName }
window.store = store
