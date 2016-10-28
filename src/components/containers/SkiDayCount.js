import SkiDayCount from '../ui/SkiDayCount'
import { connect } from 'react-redux'

export default connect(
    ({ allSkiDays }) =>
        ({
            total: allSkiDays.length,
            powder: allSkiDays.filter(d=>d.powder).length,
            backcountry: allSkiDays.filter(d=>d.backcountry).length
        })
)(SkiDayCount)