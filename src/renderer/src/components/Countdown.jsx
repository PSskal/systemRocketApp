import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import TimeUnit from './TimeUnit'

const Countdown = forwardRef((props, ref) => {
  const [time, setTime] = useState({ minutes: 0, seconds: 10, milliseconds: 0 })
  const [isRunning, setIsRunning] = useState(false)
  const [isCountingUp, setIsCountingUp] = useState(false)
  const intervalRef = useRef(null)

  useImperativeHandle(ref, () => ({
    start() {
      setIsRunning(true)
    },
    stop() {
      setIsRunning(false)
    },
    reset() {
      setIsRunning(false)
      setTime({ minutes: 0, seconds: 10, milliseconds: 0 })
      setIsCountingUp(false)
    }
  }))

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          let { minutes, seconds, milliseconds } = prevTime

          if (isCountingUp) {
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
                  setIsCountingUp(true)
                  return { minutes: 0, seconds: 0, milliseconds: 0 }
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

          return { minutes, seconds, milliseconds }
        })
      }, 10)
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning, isCountingUp])

  return (
    <div className="flex items-center w-60 bg-transparent">
      {' '}
      {/* Ensure background is transparent */}
      <div className="flex space-x-2">
        <p className="font-mono text-5xl text-white">T{isCountingUp ? '+' : '-'}</p>
        <TimeUnit label="min" value={time.minutes} />
        <TimeUnit label="sec" value={time.seconds} />
        <TimeUnit label="ms" value={time.milliseconds} />
      </div>
    </div>
  )
})

Countdown.displayName = 'Countdown'

export default Countdown
