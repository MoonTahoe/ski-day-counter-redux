import ShowErrors from '../ui/ShowErrors'
import { connect } from 'react-redux'
import { clearError } from '../../actions'

export default connect(
    ({errors}) => ({errors}),
    dispatch => ({
        onClearError(index) {
            dispatch(clearError(index))
        }
    })
)(ShowErrors)