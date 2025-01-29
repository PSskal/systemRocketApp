import {
  RESET_COUNTDOWN,
  START_COUNTDOWN,
  STOP_COUNTDOWN,
  TICK_COUNTDOWN
} from '/src/redux/actions/countdown'

const initialState = {
  time: { minutes: 0, seconds: 10, milliseconds: 0 },
  isRunning: false,
  isAscending: false // Nuevo estado para controlar la dirección del contador
}

const countdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COUNTDOWN:
      return { ...state, isRunning: true }
    case STOP_COUNTDOWN:
      return { ...state, isRunning: false }
    case RESET_COUNTDOWN:
      return { ...state, time: { minutes: 0, seconds: 10, milliseconds: 0 }, isAscending: false }
    case TICK_COUNTDOWN: {
      let { minutes, seconds, milliseconds } = state.time
      const { isAscending } = state

      if (isAscending) {
        if (milliseconds === 99) {
          milliseconds = 0
          if (seconds === 59) {
            seconds = 0
            minutes += 1
          } else {
            seconds += 1
          }
        } else {
          milliseconds += 1
        }
      } else {
        if (milliseconds === 0) {
          if (seconds === 0) {
            if (minutes === 0) {
              return {
                ...state,
                isAscending: true,
                time: { minutes: 0, seconds: 0, milliseconds: 0 }
              }
            } else {
              minutes -= 1
              seconds = 59
              milliseconds = 99
            }
          } else {
            seconds -= 1
            milliseconds = 99
          }
        } else {
          milliseconds -= 1
        }
      }

      return { ...state, time: { minutes, seconds, milliseconds } }
    }
    default:
      return state
  }
}

export default countdownReducer
