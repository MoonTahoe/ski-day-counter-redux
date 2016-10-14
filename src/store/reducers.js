import C from '../constants'

export const goal = (state=10, action) => {

    switch(action.type) {

        case C.SET_GOAL :
            return action.payload

        default :
            return state
    }

}