import C from './constants'
import storeFactory from './store'
import initialState from './initialState.json'
import { clearSuggestions, changeSuggestions } from './actions'

const store = storeFactory(initialState)

window.store = store

store.dispatch(
    changeSuggestions(['One', 'Two', 'Three'])
)

setTimeout(
    () => store.dispatch(clearSuggestions()),
    2000
)
