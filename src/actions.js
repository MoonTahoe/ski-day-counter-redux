import C from './constants'

export const addDay = (resort, date, powder = false, backcountry = false) =>
    ({
        type: C.ADD_DAY,
        payload: {resort, date, powder, backcountry}
    })

export const removeDay = (date) =>
    ({
        type: C.REMOVE_DAY,
        payload: date
    })

export const setGoal = (goal) =>
    ({
        type: C.SET_GOAL,
        payload: goal
    })

export const addError = (message) =>
    ({
        type: C.ADD_ERROR,
        payload: message
    })

export const clearError = (index) =>
    ({
        type: C.CLEAR_ERROR,
        payload: index
    })