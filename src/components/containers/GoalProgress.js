import GoalProgress from '../ui/GoalProgress'
import { connect } from 'react-redux'
import { setGoal } from '../../actions'

export default connect(
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