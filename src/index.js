import C from './constants'
import storeFactory from './store'

const store = storeFactory({
    allSkiDays: [
        {
            "resort": "Homewood",
            "date": "2016-2-21",
            "powder": false,
            "backcountry": false
        }
    ]
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
    type: C.ADD_DAY,
    payload: {
        "resort": "Squaw Valley",
        "date": "2016-3-28",
        "powder": true,
        "backcountry": false
    }
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "The Canyons",
        "date": "2016-1-2",
        "powder": false,
        "backcountry": false
    }
})

store.dispatch({
    type: C.REMOVE_DAY,
    payload: "2016-1-2"
})
