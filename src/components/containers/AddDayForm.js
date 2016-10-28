import AddDayForm from '../ui/AddDayForm'
import { connect } from 'react-redux'
import { addDay, suggestResortName, clearSuggestions } from '../../actions'
import { withRouter } from 'react-router'

export default withRouter(
    connect(
        (state, {router}) => ({
            suggestions: state.resortNames.suggestions,
            fetching: state.resortNames.fetching,
            router
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
)