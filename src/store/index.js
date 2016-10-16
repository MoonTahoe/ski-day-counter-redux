import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import fs from 'fs'

const consoleMessages = store => next => action => {

    let result

    console.log("")
    console.log(`dispatching action => ${action.type}`)
    console.log('prev ski day count', store.getState().allSkiDays.length)

    result = next(action)

    console.log('next ski day count', store.getState().allSkiDays.length)
    console.log("")

    return result

}

const serverLogActions = store => next => action => {
    fs.appendFile('./action-log.json', JSON.stringify(action) + '\n')
    return next(action)
}

export default initialState => applyMiddleware(consoleMessages, serverLogActions)(createStore)(reducers, initialState)