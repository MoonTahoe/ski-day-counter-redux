import reducers from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    result = next(action)

    let { allSkiDays, goal, errors, resortNames } = store.getState()

    console.log(`
        ski days: ${allSkiDays.length}
        goal: ${goal}
        fetching: ${resortNames.fetching}
        suggestions: ${resortNames.suggestions}
        errors: ${errors.length}
    `)

    console.groupEnd()

    return result

}

export default initialState => applyMiddleware(thunk,consoleMessages)(createStore)(reducers, initialState)