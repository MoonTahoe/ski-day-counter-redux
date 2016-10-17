import { Link } from 'react-router'
import { connect } from 'react-redux'
import { GoalProgress, SkiDayCount } from './ui'
import { setGoal } from '../actions'

export const CountDays = connect(
    ({ allSkiDays }) =>
        ({
            total: allSkiDays.length,
            powder: allSkiDays.filter(d=>d.powder).length,
            backcountry: allSkiDays.filter(d=>d.backcountry).length
        })
)(SkiDayCount)

export const AddDay = () =>
    <div className="add-days">
        <h1>Add Days</h1>
    </div>

export const AllDays = ({ params }) =>
    <div className="all-days">
        <h1>All Days : {params.filter}</h1>
        <Link to="/list-days">All</Link>
        <Link to="/list-days/powder">Powder</Link>
        <Link to="/list-days/backcountry">Backcountry</Link>
    </div>

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

