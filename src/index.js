import C from './constants'
import { allSkiDays } from './store/reducers'

const action_addDay = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Boreal Mountain",
        "date": "2016-10-28",
        "powder": true,
        "backcountry": true
    }
}

const action_removeDay = {
    type: C.REMOVE_DAY,
    payload: "2016-12-16"
}

const state = [
    {
        "resort": "Kirkwood",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    },
    {
        "resort": "Castle Peak",
        "date": "2016-02-14",
        "powder": true,
        "backcountry": true
    },
    {
        "resort": "Squaw Valley",
        "date": "2016-03-12",
        "powder": false,
        "backcountry": false
    }
]

let nextState = allSkiDays(state, action_addDay)

console.log(`

    Initially there are ${state.length} days
    action: ${JSON.stringify(action_addDay)}
    now there are ${nextState.length} days:
        ${nextState.map(day => `${day.resort} - ${day.date}`).join('\n        ')}

`)

nextState = allSkiDays(nextState, action_removeDay)

console.log(`
    action: ${JSON.stringify(action_removeDay)}
    now there are ${nextState.length} days:
        ${nextState.map(day => `${day.resort} - ${day.date}`).join('\n        ')}

`)

const action_skipAdd = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Northstar",
        "date": "2016-02-14",
        "powder": true,
        "backcountry": false
    }
}

nextState = allSkiDays(nextState, action_skipAdd)

console.log(`
    action: ${JSON.stringify(action_skipAdd)} skipped
    now there still ${nextState.length} days:
        ${nextState.map(day => `${day.resort} - ${day.date}`).join('\n        ')}

    because you can only add one day at a time!
`)