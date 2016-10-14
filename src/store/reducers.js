import C from '../constants'

export const goal = (state=10, action) => {

    switch(action.type) {

        case C.SET_GOAL :
            return action.payload

        default :
            return state
    }

}

export const skiDay = (state={}, action) => {

    switch (action.type) {

        case C.ADD_DAY :
            return action.payload

        default:
            return state

    }

}

export const errors = (state=[], action) => {

    switch(action.type) {

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
