import { combineReducers } from 'redux'
import countdownReducer from './countdownReducer'
import launchReducer from './launchReducer'

const rootReducer = combineReducers({
  countdown: countdownReducer,
  launch: launchReducer
  // otros reducers
})

export default rootReducer
