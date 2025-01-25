import { useState } from 'react'
import { connect } from 'react-redux'
import Background from '/src/components/Background'
import LeftPane from '/src/components/LeftPane'
import LeftPaneCabin from '/src/components/LeftPaneCabin'
import BottomStats from '/src/components/overview/BottomStats'
import Connections from '/src/components/overview/Connections'
import RightPane from '/src/components/overview/RightPane'
import TopStats from '/src/components/overview/TopStats'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'

const Overview = () => {
  const [activeButton, setActiveButton] = useState('system')

  const handleButtonClick = (button) => setActiveButton(button)
  return (
    <FullWidthLayout>
      <Background>
        <h1 className="relative text-2xl text-white font-semibold text-center uppercase">
          Vehicle overview
        </h1>

        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="row-span-4">
            {activeButton === 'system' ? <LeftPane /> : <LeftPaneCabin />}
          </div>
          <div className="col-span-3 row-span-4 flex w-full flex-col px-10 pt-3 relative">
            <TopStats />
            <BottomStats />
            <Connections />
          </div>
          <div className="row-span-4 col-start-5">
            <RightPane />
          </div>
          <div className="row-start-5">
            <div className="flex items-center w-80">
              {['system', 'cabin'].map((button) => (
                <button
                  key={button}
                  aria-pressed={activeButton === button}
                  className={`relative z-10 px-8 text-sm font-bold uppercase rounded ${
                    activeButton === button
                      ? 'bg-white text-black py-6'
                      : 'bg-opacity-[0.1] text-white border border-gray-600/50 py-4'
                  }`}
                  onClick={() => handleButtonClick(button)}
                >
                  {button.charAt(0).toUpperCase() + button.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="col-start-5 row-start-5">{/* <Countdown />{' '} */}</div>
        </div>
      </Background>
    </FullWidthLayout>
  )
}
const mapStateToProps = (state) => ({
  theme: state.theme
})
export default connect(mapStateToProps, {})(Overview)
