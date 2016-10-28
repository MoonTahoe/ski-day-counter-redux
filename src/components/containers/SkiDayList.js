import SkiDayList from '../ui/SkiDayList'
import { connect } from 'react-redux'
import { removeDay } from '../../actions'

export default connect(
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