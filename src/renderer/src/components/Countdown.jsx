import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TimeUnit from './TimeUnit'
import {
  resetCountdown,
  startCountdown,
  stopCountdown,
  tickCountdown
} from '/src/redux/actions/countdown' // Ajustado a una ruta relativa

// Hook personalizado para manejar el intervalo
function useCountdown(isRunning, tickCallback) {
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        tickCallback()
      }, 10)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning, tickCallback])

  return intervalRef
}

const Countdown = forwardRef((props, ref) => {
  const dispatch = useDispatch()
  const { time, isRunning, isAscending } = useSelector((state) => state.countdown)

  // Llamada al hook personalizado
  useCountdown(isRunning, () => dispatch(tickCountdown()))

  // Métodos expuestos mediante `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    startCountdown() {
      dispatch(startCountdown())
    },
    stopCountdown() {
      dispatch(stopCountdown())
    },
    resetCountdown() {
      dispatch(resetCountdown())
    }
  }))

  return (
    <div className="fixed bottom-0 right-0 m-10 flex items-center w-60 bg-transparent">
      <div className="flex space-x-2">
        <p className="font-mono text-5xl text-white">T{isAscending ? '+' : '-'}</p>
        <TimeUnit label="min" value={time.minutes || 0} />
        <TimeUnit label="sec" value={time.seconds || 0} />
        <TimeUnit label="ms" value={time.milliseconds || 0} />
      </div>
    </div>
  )
})

Countdown.displayName = 'Countdown'

export default Countdown
