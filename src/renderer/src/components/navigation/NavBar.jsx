import { BsFillRocketFill, BsPersonArmsUp } from 'react-icons/bs'
import { CgCircleci } from 'react-icons/cg'
import { FaThermometerThreeQuarters } from 'react-icons/fa'
import { FaHouseSignal, FaMicrochip } from 'react-icons/fa6'
import { IoIosStats } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import SVGWrapper from './SVGWrapper'

const NavBar = () => {
  const bars = [
    { title: 'Overview', href: '/', icon: BsFillRocketFill },
    { title: 'Launch', href: '/launch', icon: CgCircleci },
    { title: 'Avionics', href: '/avionics', icon: FaMicrochip },
    // { title: 'Power', href: '/power', icon: MdBatteryChargingFull },
    { title: 'Thermal', href: '/', icon: FaThermometerThreeQuarters },
    { title: 'Stats', href: '/stats', icon: IoIosStats },
    { title: 'Comms', href: '/comms', icon: FaHouseSignal },
    { title: 'Safety', href: '/safety', icon: BsPersonArmsUp }
  ]

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <div className="relative flex px-2 pt-5 pb-4 bg-blue-900 rounded-t-3xl">
        {/* Left SVG */}
        <SVGWrapper position="left" />

        {/* Map through bars */}
        {bars.map((bar, index) => (
          <NavLink
            key={index}
            className="flex flex-col items-center px-4 group text-gray-400 hover:text-white"
            to={bar.href}
          >
            <bar.icon className="text-white fill-current h-7 w-7 group-hover:text-red" />
            <span className="text-gray-600 text-xxxs mt-1.5 group-hover:text-red">{bar.title}</span>
          </NavLink>
        ))}

        <SVGWrapper position="right" />
      </div>
    </div>
  )
}

export default NavBar
