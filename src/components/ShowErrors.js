import { PropTypes } from 'react'
import { connect } from 'react-redux'
import CloseButton from 'react-icons/lib/fa/close'
import '../stylesheets/ShowErrors.scss'
import { clearError } from '../actions'

const ShowErrors = ({ errors=[], onClearError=f=>f }) =>
    <div className="show-errors">
        {(errors.length) ?
            errors.map((message, i) =>
                <div key={i} className="error">
                    <p>{message}</p>
                    <CloseButton onClick={() => onClearError(i)}/>
                </div>
            ) : null
        }
    </div>


ShowErrors.propTypes = {
    errors: PropTypes.array,
    onClearError: PropTypes.func
}

export default connect(
    ({errors}) => ({errors}),
    dispatch => ({
        onClearError(index) {
            dispatch(clearError(index))
        }
    })
)(ShowErrors)