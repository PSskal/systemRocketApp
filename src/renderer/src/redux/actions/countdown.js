export const RESET_COUNTDOWN = 'RESET_COUNTDOWN'
export const START_COUNTDOWN = 'START_COUNTDOWN'
export const STOP_COUNTDOWN = 'STOP_COUNTDOWN'
export const TICK_COUNTDOWN = 'TICK_COUNTDOWN'

// Acciones
export const resetCountdown = () => ({
  type: RESET_COUNTDOWN
})

export const startCountdown = () => ({
  type: START_COUNTDOWN
})

export const stopCountdown = () => ({
  type: STOP_COUNTDOWN
})

export const tickCountdown = () => ({
  type: TICK_COUNTDOWN
})
