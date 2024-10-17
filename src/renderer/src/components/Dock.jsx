import { BsFillRocketFill, BsPersonArmsUp } from 'react-icons/bs'
import { CgCircleci } from 'react-icons/cg'
import { FaThermometerThreeQuarters } from 'react-icons/fa'
import { FaHouseSignal, FaMicrochip } from 'react-icons/fa6'
import { MdBatteryChargingFull } from 'react-icons/md'
import { VscSymbolProperty } from 'react-icons/vsc'

const Dock = () => {
  const bars = [
    { title: 'Overview', icon: BsFillRocketFill },
    { title: 'Life', icon: BsPersonArmsUp },
    { title: 'Comms', icon: FaHouseSignal },
    { title: 'Prop', icon: VscSymbolProperty },
    { title: 'Mech', icon: CgCircleci },
    { title: 'Power', icon: MdBatteryChargingFull },
    { title: 'Avionics', icon: FaMicrochip },
    { title: 'Thermal', icon: FaThermometerThreeQuarters }
  ]

  return (
    <div className="flex items-center justify-center pt-10 space-x-8">
      <div className="relative flex px-2 pt-5 pb-4 bg-blue-900 rounded-t-3xl">
        {/* Left SVG */}
        <svg
          className="fill-current text-blue-900 absolute top-0 bottom-0 left-0 -translate-x-3/4"
          width="83"
          height="86"
          viewBox="0 0 83 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64.3029 8.65669C68.8626 3.17225 75.6254 0 82.7578 0H83V86H0L64.3029 8.65669Z" />
        </svg>

        {/* Map through bars */}
        {bars.map((bar, index) => (
          <a key={index} href="#" className="flex flex-col items-center px-4 group">
            <bar.icon className="text-white fill-current h-7 w-7 group-hover:text-red" />
            <span className="text-gray-600 text-xxxs mt-1.5 group-hover:text-red">{bar.title}</span>
          </a>
        ))}

        {/* Right SVG */}
        <svg
          className="fill-current text-blue-900 absolute top-0 bottom-0 right-0 translate-x-3/4"
          width="83"
          height="86"
          viewBox="0 0 83 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.6971 8.65669C14.1374 3.17225 7.37457 0 0.242245 0H0V86H83L18.6971 8.65669Z" />
        </svg>
      </div>
    </div>
  )
}

export default Dock
