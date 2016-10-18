import { Link } from 'react-router'
import { connect } from 'react-redux'
import { GoalProgress, SkiDayCount, SkiDayList, ShowErrors, AddDayForm } from './ui'
import { setGoal, addError, clearError, addDay, removeDay, suggestResortName, clearSuggestions } from '../actions'

export const CountDays = connect(
    ({ allSkiDays }) =>
        ({
            total: allSkiDays.length,
            powder: allSkiDays.filter(d=>d.powder).length,
            backcountry: allSkiDays.filter(d=>d.backcountry).length
        })
)(SkiDayCount)

export const AddDay = connect(
    state => ({
        suggestions: state.resortNames.suggestions,
        fetching: state.resortNames.fetching
    }),
    dispatch => ({
        onNewDay({resort, date, powder, backcountry}) {
            dispatch(
                addDay(resort, date, powder, backcountry)
            )
        },
        onChange(value) {
            if (value) {
                dispatch(
                    suggestResortName(value)
                )
            } else {
                dispatch(
                    clearSuggestions()
                )
            }
        },
        onClear() {
            dispatch(
                clearSuggestions()
            )
        }
    })
)(AddDayForm)

export const AllDays = connect(
    ({allSkiDays}, { params }) => ({
        days: allSkiDays,
        filter: params.filter
    }),
    dispatch =>
        ({
            onRemoveDay(date) {
                dispatch(removeDay(date))
            }
        })
)(SkiDayList)

export const Goal = connect(
    state =>
        ({
            current: state.allSkiDays.length,
            goal: state.goal
        }),
    dispatch =>
        ({
            onNewGoal(goal) {
                dispatch(setGoal(goal))
            }
        })
)(GoalProgress)

export const Errors = connect(
    ({errors}) => ({errors}),
    dispatch => ({
        onClearError(index) {
            dispatch(clearError(index))
        }
    })
)(ShowErrors)
