import reducers from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

    let result

    console.log("")
    console.log(`dispatching action => ${action.type}`)
    result = next(action)
    console.log('next state', store.getState())
    console.log("")

    return result

}

export default initialState => applyMiddleware(thunk,consoleMessages)(createStore)(reducers, initialState)