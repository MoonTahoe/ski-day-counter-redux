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

export const setQuery = value =>
    ({
        type: C.SET_QUERY,
        payload: value
    })

const filterCache = (cache, query) => {

    const letter = query[0].toLowerCase()

    return cache[letter].filter(
        term => query.toLowerCase() === term.substr(0, query.length).toLowerCase()
    )

}

export const suggestResortName = (value = "") => (dispatch, getState) => {

    const { fetching, cache } = getState().resortNames
    let letter

    dispatch(setQuery(value))

    if (value.length && !fetching) {

        letter = value[0]

        if (Object.keys(cache).some(key=>key === letter)) {
            dispatch(
                changeSuggestions(
                    filterCache(cache, letter)
                )
            )
        } else {
            dispatch({type: C.FETCH_RESORT_NAMES})
            fetch('http://localhost:3333/resorts/' + letter)
                .then(response => response.json())
                .then(results => dispatch({
                    type: C.CACHE_RESORT_NAMES,
                    payload: {letter, results}
                }))
                .then(() => dispatch(
                    changeSuggestions(
                        filterCache(
                            getState().resortNames.cache,
                            getState().resortNames.query
                        )
                    )
                ))
                .catch(({message}) => dispatch(addError(`could not fetch suggestions: ${message}`)))
        }

    } else {
        dispatch(
            clearSuggestions()
        )
    }

}
