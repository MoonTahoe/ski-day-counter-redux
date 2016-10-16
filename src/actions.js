import C from './constants'
import { compose } from 'redux'

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

export const clearSuggestions = () =>
    ({
        type: C.CLEAR_SUGGESTIONS
    })

export const changeSuggestions = (suggestions) =>
    ({
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    })

export const randomGoals = (time = 3000) => dispatch => {

    dispatch({
        type: C.FETCH_RESORT_NAMES
    })

    let i = setInterval(() => dispatch(
        setGoal(
            Math.floor(Math.random() * 100)
        )
    ), 500)

    setTimeout(() => {
        clearInterval(i)
        dispatch({
            type: C.CANCEL_FETCHING
        })
    }, time)

}
