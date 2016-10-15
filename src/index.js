import C from './constants'
import reducers from './store/reducers'
import { createStore } from 'redux'
import initialState from './initialState.json'

const store = createStore(reducers, initialState)

console.log(`


    Initial State
    =============
    goal: ${store.getState().goal}
    resorts: ${store.getState().allSkiDays.map(({resort})=>resort).join(', ')}
    cache: ${JSON.stringify(store.getState().resortNames.cache)}



`)

store.dispatch({
    type: C.SET_GOAL,
    payload: 2
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": true,
        "backcountry": true
    }
})

store.dispatch({
    type: C.CACHE_RESORT_NAMES,
    payload: {
        letter: 'h',
        results: ['Heavenly', 'Hill Valley']
    }
})

console.log(`


    Current State
    =============
    goal: ${store.getState().goal}
    resorts: ${store.getState().allSkiDays.map(({resort})=>resort).join(', ')}
    cache: ${JSON.stringify(store.getState().resortNames.cache)}



`)