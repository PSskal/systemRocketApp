import { useRef, useState } from 'react' // Update import
import { connect } from 'react-redux'
import Background from '/src/components/Background'
import Countdown from '/src/components/Countdown'
import LeftPane from '/src/components/LeftPane'
import LeftPaneCabin from '/src/components/LeftPaneCabin'
import LogPanel from '/src/components/LogPanel'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'

const Launch = () => {
  const [isLaunched, setIsLaunched] = useState(false)
  const [isAborted, setIsAborted] = useState(false) // Add state for abort status
  const [countdownKey, setCountdownKey] = useState(0) // Add state for countdown key
  const countdownRef = useRef(null) // Add ref for Countdown component

  const handleLaunch = () => {
    setIsLaunched(true)
    setIsAborted(false)
    countdownRef.current.start() // Start countdown
  }

  const handleAbort = () => {
    setIsLaunched(false)
    setIsAborted(true)
    countdownRef.current.stop() // Stop countdown
  }

  const handleReset = () => {
    setIsLaunched(false)
    setIsAborted(false)
    setCountdownKey((prevKey) => prevKey + 1) // Reset countdown by changing key
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
                  {!isLaunched &&
                    !isAborted && ( // Conditionally render Launch button
                      <button
                        className="relative z-10 px-8 text-sm font-bold uppercase rounded bg-green-500 text-white py-6"
                        onClick={handleLaunch} // Update onClick handler
                      >
                        Launch
                      </button>
                    )}
                  {isLaunched && ( // Conditionally render Abort and Reset buttons
                    <>
                      <button
                        className="relative z-10 px-8 text-sm font-bold uppercase rounded bg-red-500 text-white py-6"
                        onClick={handleAbort} // Update onClick handler
                      >
                        Abort
                      </button>
                      <button
                        className="relative z-10 px-8 text-sm font-bold uppercase rounded bg-yellow-500 text-white py-6"
                        onClick={handleReset} // Update onClick handler
                      >
                        Reset
                      </button>
                    </>
                  )}
                  {isAborted && ( // Conditionally render Reset button
                    <button
                      className="relative z-10 px-8 text-sm font-bold uppercase rounded bg-yellow-500 text-white py-6"
                      onClick={handleReset} // Update onClick handler
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
              <div className="col-span-3 row-span-5 col-start-3 p-5">
                <LogPanel /> {/* Add this line to include the LogPanel */}
              </div>
            </div>
          </div>
          <div className="row-span-4 col-start-5">
            <LeftPaneCabin />
          </div>
          <div className="col-start-5 row-start-5">
            <div className="py-5">
              <Countdown key={countdownKey} ref={countdownRef} />
            </div>
          </div>
        </div>
      </Background>
    </FullWidthLayout>
  )
}
const mapStateToProps = (state) => ({
  theme: state.theme
})
export default connect(mapStateToProps, {})(Launch)
