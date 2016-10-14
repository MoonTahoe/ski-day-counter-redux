import C from './constants'
import { skiDay, errors } from './store/reducers'

const action_addError = {
    type: C.ADD_ERROR,
    payload: "Cannot connect to server"
}

const action_clearError = {
    type: C.CLEAR_ERROR,
    payload: 1
}

const state = [
    "user not authorized",
    "server feed not found"
]

let nextState = errors(state, action_addError)

console.log(`

    Initially there are ${state.length} errors
    action: ${JSON.stringify(action_addError)}
    now there are ${nextState.length} errors:
        ${nextState.join('\n        ')}
`)

nextState = errors(nextState, action_clearError)

console.log(`
    action: ${JSON.stringify(action_clearError)}
    now there are ${nextState.length} errors:
        ${nextState.join('\n        ')}

`)

/*
const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    }
}

const state = null

const nextState = skiDay(state, action)

console.log(`

    initial ski day is empty: ${state}

    action: ${JSON.stringify(action)}

    new ski day: ${JSON.stringify(nextState)}

`)
*/
