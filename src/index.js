import C from './constants'
import reducers from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`


    Initial State
    =============
    goal: ${state.goal}
    resorts: ${state.allSkiDays.map(({resort})=>resort).join(', ')}
    cache: ${JSON.stringify(state.resortNames.cache)}



`)

state = reducers(state, {
    type: C.SET_GOAL,
    payload: 2
})

state = reducers(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": true,
        "backcountry": true
    }
})

state = reducers(state, {
    type: C.CACHE_RESORT_NAMES,
    payload: {
        letter: 'h',
        results: ['Heavenly', 'Hill Valley']
    }
})

console.log(`


    Current State
    =============
    goal: ${state.goal}
    resorts: ${state.allSkiDays.map(({resort})=>resort).join(', ')}
    cache: ${JSON.stringify(state.resortNames.cache)}



`)