import C from '../constants'
import { suggestions } from '../store/reducers'
import expect from 'expect'

const action = {
    type: C.CLEAR_SUGGESTIONS
}

const state = ['Heavenly Ski Resort', 'Heavens Sonohara']

const expectedState = []

const actualState = suggestions(state, action)

expect(actualState).toEqual(expectedState)

console.log(`

    Challenge A: CLEAR_SUGGESTIONS PASSED!!!


`)