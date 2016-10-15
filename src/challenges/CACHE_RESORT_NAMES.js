import C from '../constants'
import expect from 'expect'
import { fetching, cache } from '../store/reducers'

const action = {
    type: C.CACHE_RESORT_NAMES,
    payload: {
        letter: 'g',
        results: [
            'Grouse Mountain',
            'Gray Rocks',
            'Grand Targhee Ski Resort'
        ]

    }
}

const state_fetching = true
const state_cache = {
    'h': ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const expectedFetching = false
const actualFetching = fetching(state_fetching, action)

const expectedCache = {
    'h': ['Heavenly Ski Resort', 'Heavens Sonohara'],
    'g': ['Grouse Mountain', 'Gray Rocks', 'Grand Targhee Ski Resort']
}
const actualCache = cache(state_cache, action)

expect(actualFetching).toEqual(expectedFetching)
expect(actualCache).toEqual(expectedCache)

console.log(`

    Challenge E: CACHE_RESORT_NAMES PASSED!!!


`)