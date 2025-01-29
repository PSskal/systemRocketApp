import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Background from '/src/components/Background'
import AbortButton from '/src/components/launch/AbortButton'
import LaunchButton from '/src/components/launch/LaunchButton'
import LogPanel from '/src/components/launch/LogPanel'
import ResetButton from '/src/components/launch/ResetButton'
import LeftPane from '/src/components/LeftPane'
import LeftPaneCabin from '/src/components/LeftPaneCabin'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'
import { resetCountdown, startCountdown, stopCountdown } from '/src/redux/actions/countdown'
import { abort, launch, reset } from '/src/redux/actions/launch'

const Launch = () => {
  const dispatch = useDispatch()
  const countdownRef = useRef(null)
  const { isLaunched, isAborted, logMessages } = useSelector((state) => state.launch)

  const handleLaunch = () => {
    dispatch(startCountdown())
    dispatch(launch())
    countdownRef.current.startCountdown()
    // Additional launch logic
  }

  const handleAbort = () => {
    dispatch(stopCountdown())
    dispatch(abort())
    countdownRef.current.stopCountdown()
    // Additional abort logic
  }

  const handleReset = () => {
    dispatch(resetCountdown())
    dispatch(reset())
    countdownRef.current.resetCountdown()
    // Additional reset logic
  }

  return (
    <FullWidthLayout>
      <Background>
        <h1 className="relative text-2xl text-white font-semibold text-center uppercase">
          Vehicle Launch
        </h1>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="row-span-4">
            <LeftPane />
          </div>
          <div className="col-span-3 row-span-4">
            <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
              <div className="col-span-2 row-span-5">
                <div className="flex flex-col items-center mt-4 space-y-4 py-8">
                  {!isLaunched && !isAborted && <LaunchButton onClick={handleLaunch} />}
                  {isLaunched && (
                    <>
                      <AbortButton onClick={handleAbort} />
                      <ResetButton onClick={handleReset} />
                    </>
                  )}
                  {isAborted && <ResetButton onClick={handleReset} />}
                </div>
              </div>
              <div className="col-span-3 row-span-5 col-start-3 p-5">
                <LogPanel logMessages={logMessages} />
              </div>
            </div>
          </div>
          <div className="row-span-4 col-start-5">
            <LeftPaneCabin />
          </div>
        </div>
      </Background>
    </FullWidthLayout>
  )
}

export default Launch
