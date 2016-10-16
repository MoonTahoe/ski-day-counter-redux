import C from './constants'
import { compose } from 'redux'
import fetch from 'isomorphic-fetch'

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

export const suggestResortName = value => dispatch => {

    dispatch({
        type: C.FETCH_RESORT_NAMES
    })

    fetch('http://localhost:3333/resorts/' + value)
        .then(response => response.json())
        .then(suggestions =>
            dispatch({
                type: C.CHANGE_SUGGESTIONS,
                payload: suggestions
            })
        )
        .catch(({message}) =>
            dispatch(
                addError(`could not fetch suggestions: ${message}`)
            )
        )

}
