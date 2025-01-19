import React, { useState } from 'react'
import BottomStats from './components/BottomStats'
import Connections from './components/Connections'
import Dock from './components/Dock'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'
import TopStats from './components/TopStats'

const App = () => {
  const [activeButton, setActiveButton] = useState('system')

  const handleButtonClick = (button) => {
    setActiveButton(button)
  }

  return (
    <div
      className="w-full min-h-screen px-12 pt-10 font-sans bg-cover border-blue-900 border-b-16"
      style={{ backgroundImage: "url('src/img/background.png')" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 to-transparent" />
      <h1 className="relative text-2xl text-white font-semibold text-center uppercase">
        Vehicle overview
      </h1>
      <div className="flex items-start mt-4">
        {/* LeftPane component */}
        <LeftPane />

        <div className="flex w-full flex-col px-10 pt-3 relative">
          {/* TopStats component */}
          <TopStats />

          {/* BottomStats component */}
          <BottomStats />

          {/* Connections component */}
          <Connections />

          <div className="absolute flex flex-col justify-center -translate-x-1/2 left-1/2 top-52">
            <img className="w-[320px] h-auto" src="src/img/Space-X-Dragon.png" alt="" />
          </div>
        </div>

        {/* RightPane component */}
        <RightPane />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center w-80">
          <button
            className={`relative -translate-x-1 z-10 px-8  text-sm font-bold uppercase rounded ${
              activeButton === 'system'
                ? 'bg-white text-black py-6'
                : 'bg-opacity-[0.1] text-white border rounded border-gray-600/50 py-4'
            }`}
            onClick={() => handleButtonClick('system')}
          >
            System
          </button>
          <button
            className={`relative -translate-x-1 z-10 px-8  text-sm font-bold uppercase rounded ${
              activeButton === 'cabin'
                ? 'bg-white text-black py-6'
                : 'bg-opacity-[0.1] text-white border rounded border-gray-600/50 py-4'
            }`}
            onClick={() => handleButtonClick('cabin')}
          >
            Cabin
          </button>
        </div>

        {/* Dock component */}
        <Dock />

        <div className="flex items-center justify-end space-x-5 w-80">
          <span className="tracking-wider text-gray-600 text-xxs whitespace-nowrap">
            Power, Engine, Comms
          </span>
          <button className="px-8 py-4 border rounded text-white text-sm font-bold border-gray-600/50 bg-gray-900 bg-opacity-[0.1] uppercase">
            More
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
