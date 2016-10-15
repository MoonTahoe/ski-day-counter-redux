import C from './constants'
import reducers from './store/reducers'
import { createStore } from 'redux'
import initialState from './initialState.json'

const store = createStore(reducers, initialState)

const printGoal = () =>
    console.log(`   Goal: ${store.getState().goal}`)

const countResorts = () =>
    console.log(`   Resort Count: ${store.getState().allSkiDays.length}`)

const stringifyCache = () =>
    console.log(`   ${JSON.stringify(store.getState().resortNames.cache)}`)

const printMargins = () =>
    console.log('\n')

store.subscribe(printMargins)
store.subscribe(printGoal)
store.subscribe(countResorts)
store.subscribe(stringifyCache)
store.subscribe(printMargins)

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
    type: C.FETCH_RESORT_NAMES
})

store.dispatch({
    type: C.CACHE_RESORT_NAMES,
    payload: {
        letter: 'h',
        results: ['Heavenly', 'Hill Valley']
    }
})

store.dispatch({
    type: C.REMOVE_DAY,
    payload: "2016-10-28"
})