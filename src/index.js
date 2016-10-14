import C from './constants'
import { skiDays, goal } from './initialState'

console.log(`

    Ski Day Counter
    ===============
    The goal is ${goal} days
    Initially there are ${skiDays.length} ski days in state

    Constants (actions)
    -------------------
    ${Object.keys(C).join('\n    ')}

`)
