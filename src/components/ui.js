import { PropTypes, Component } from 'react'
import { Link, withRouter } from 'react-router'
import { equals } from 'ramda'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import CloseButton from 'react-icons/lib/fa/close'
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
    const progress = Math.floor(current / goal * 100)

    return (
        <div className="goal-progress">
            <progress value={current} max={goal}/>
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

const SkiDayRow = ({ resort, date, powder, backcountry }) =>
    <tr>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <SnowFlake /> : null }
        </td>
        <td>
            {(backcountry) ? <Terrain /> : null }
        </td>
    </tr>

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}

export const SkiDayList = ({ days, filter }) => {

    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
        days :
        days.filter(day => day[filter])

    const activeFilterStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className="ski-day-list">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th><SnowFlake /></th>
                    <th><Terrain /></th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days" style={(!filter) ? activeFilterStyle : null}>All Days</Link>
                        <Link to="/list-days/powder" activeStyle={activeFilterStyle}>Powder Days</Link>
                        <Link to="/list-days/backcountry" activeStyle={activeFilterStyle}>Backcountry Days</Link>
                    </td>
                </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) =>
                    <SkiDayRow key={i} {...day} />
                )}
                </tbody>
            </table>
        </div>
    )
}

SkiDayList.propTypes = {
    filter: PropTypes.oneOf(['powder', 'backcountry']),
    days: (props) => (!Array.isArray(props.days)) ?
        new Error("SkiDayList days property must be an array") :
        (!props.days.length) ?
            new Error("SkiDayList days array must contain at least one record") :
            null
}

export const ShowErrors = ({ errors=[], onClearError=f=>f }) =>
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

class Autocomplete extends Component {

    set value(newValue) {
        this.refs.searchTerm.value = newValue
    }

    get value() {
        return this.refs.searchTerm.value
    }

    render() {

        const { suggestions=[], onChange=f=>f, onClear=f=>f } = this.props

        return (
            <div className="autocomplete">

                <input ref="searchTerm"
                       type="text"
                       placeholder="mountain or resort..."
                       onChange={onChange}
                       onFocus={onChange}
                       onBlur={() => setTimeout(onClear, 250)}
                />

                <div className="suggestions">
                    {suggestions.map((item, i) =>
                        <p key={i} onClick={() => {
                            this.refs.searchTerm.value = item
                            onClear()
                        }}>{item}</p>
                    )}
                </div>

            </div>
        )
    }

}

export const AddDayForm = withRouter(({ suggestions=[], onNewDay=f=>f, onChange=f=>f, onClear=f=>f, router}) => {

    let _resort, _date, _powder, _backcountry

    const submit = e => {
        e.preventDefault()
        onNewDay({
            resort: _resort.value,
            date: _date.value.toString(),
            powder: _powder.checked,
            backcountry: _backcountry.checked
        })


        const addAnother = confirm(`${_resort.value} on ${_date.value.toString()} added. Add another?`)

        if (!addAnother) {
            router.push('/')
        }

        _resort.value = ''
        _date.value = ''
        _powder.checked = false
        _backcountry.checked = false

    }

    return (
        <form onSubmit={submit} className="add-day">

            <label htmlFor="date">Resort Name</label>

            <Autocomplete ref={input => _resort = input}
                          suggestions={suggestions}
                          onChange={() => onChange(_resort.value)}
                          onClear={onClear}
            />

            <label htmlFor="date">Date</label>
            <input id="date"
                   type="date"
                   ref={input => _date = input}
                   required/>

            <div>
                <input id="powder-day"
                       ref={input => _powder = input}
                       type="checkbox"/>
                <label htmlFor="powder-day">Powder</label>
            </div>

            <div>
                <input id="backcountry-day"
                       ref={input => _backcountry = input}
                       type="checkbox"/>
                <label htmlFor="backcountry-day">Backcountry</label>
            </div>

            <button>Add Day</button>

        </form>
    )
})

AddDayForm.propTypes = {
    suggestions: PropTypes.array,
    onNewDay: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    router: PropTypes.object
}
