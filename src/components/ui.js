import { PropTypes } from 'react'
import { Link } from 'react-router'
import { equals } from 'ramda'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import '../stylesheets/ui.scss'

export const Menu = () =>
    <nav className="menu">
        <Link to="/" activeClassName="selected">
            <HomeIcon />
        </Link>
        <Link to="/add-day" activeClassName="selected">
            <AddDayIcon />
        </Link>
        <Link to="/list-days" activeClassName="selected">
            <ListDaysIcon />
        </Link>
    </nav>

export const GoalProgress = ({current, goal=10, onNewGoal=f=>f}) => {

    let _input
    const progress = Math.floor(current/goal*100)

    return (
        <div className="goal-progress">
            <progress value={current} max={goal} />
            <span>{progress}%</span>
            <input type="number"
                   ref={input=>_input=input}
                   defaultValue={goal}
                   onChange={() => onNewGoal(_input.value)}/>
            <span>days</span>
        </div>
    )

}

GoalProgress.propTypes = {
    current: PropTypes.number.isRequired,
    goal: PropTypes.number,
    onNewGoal: PropTypes.func
}

export const SkiDayCount = ({ total=0, powder=0, backcountry=0 }) =>
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
