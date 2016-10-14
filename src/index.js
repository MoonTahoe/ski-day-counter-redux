import C from './constants'
import { goal } from './store/reducers'

const action = {
    type: C.SET_GOAL,
    payload: 25
}

const state = 5

const nextState = goal(state, action)

console.log(`

    initial goal: ${state}

    action: ${JSON.stringify(action)}

    new goal: ${nextState}

`)