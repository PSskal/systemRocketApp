import { ABORT, LAUNCH, RESET } from '/src/redux/actions/launch'

const initialState = {
  isLaunched: false,
  isAborted: false,
  logMessages: []
}

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAUNCH:
      return { ...state, isLaunched: true, isAborted: false }
    case ABORT:
      return { ...state, isLaunched: false, isAborted: true }
    case RESET:
      return { ...state, isLaunched: false, isAborted: false }
    default:
      return state
  }
}

export default launchReducer
