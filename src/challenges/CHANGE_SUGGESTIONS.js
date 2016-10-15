import C from '../constants'
import expect from 'expect'
import { suggestions } from '../store/reducers'

const action = {
    type: C.CHANGE_SUGGESTIONS,
    payload: ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const state = []

const expectedState = ['Heavenly Ski Resort', 'Heavens Sonohara']

const actualState = suggestions(state, action)

expect(actualState).toEqual(expectedState)

console.log(`

    Challenge B: CHANGE_SUGGESTIONS PASSED!!!


`)