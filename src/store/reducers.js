import C from '../constants'

export const goal = (state = 10, action) => {

    switch (action.type) {

        case C.SET_GOAL :
            return action.payload

        default :
            return state
    }

}

export const skiDay = (state = {}, action) => {

    switch (action.type) {

        case C.ADD_DAY :
            return action.payload

        default:
            return state

    }

}

export const allSkiDays = (state = [], action) => {

    switch (action.type) {

        case C.ADD_DAY :

            return (state.some((day) => day.date === action.payload.date)) ?
                state :
                [
                    ...state,
                    skiDay(null, action)
                ].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                )

        case C.REMOVE_DAY:
            return state.filter(({date}) => date !== action.payload)

        default:
            return state

    }
}

export const errors = (state = [], action) => {

    switch (action.type) {

        case C.ADD_ERROR :
            return [
                ...state,
                action.payload
            ]

        case C.CLEAR_ERROR :
            return state.filter((error, i) => i !== action.payload)

        default:
            return state

    }

}

export const suggestions = (state = [], action) => {

    switch (action.type) {

        case C.CLEAR_SUGGESTIONS :
            return []

        case C.CHANGE_SUGGESTIONS :
            return action.payload

        default :
            return state
    }

}

export const fetching = (state, action) => {

    switch (action.type) {

        case C.FETCH_RESORT_NAMES :
            return true

        default :
            return false
    }

}

export const cache = (state = {}, action) => {

    switch (action.type) {

        case C.CACHE_RESORT_NAMES :
            return {
                ...state,
                [action.payload.letter]: action.payload.results
            }

        default :
            return state
    }

}
