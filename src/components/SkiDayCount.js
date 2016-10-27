import { PropTypes } from 'react'
import { connect } from 'react-redux'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import '../stylesheets/SkiDayCount.scss'

const SkiDayCount = ({ total=0, powder=0, backcountry=0 }) =>
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <Calendar />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <SnowFlake />
            <span>powder</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <Terrain />
            <span>hiking</span>
        </div>
    </div>

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number
}

export default connect(
    ({ allSkiDays }) =>
        ({
            total: allSkiDays.length,
            powder: allSkiDays.filter(d=>d.powder).length,
            backcountry: allSkiDays.filter(d=>d.backcountry).length
        })
)(SkiDayCount)