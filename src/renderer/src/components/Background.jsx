import PropTypes from 'prop-types'
import backgroundImage from '/src/img/background.png'

const Background = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen px-10 pt-10 font-sans bg-cover border-blue-900 border-b-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 to-transparent" />
      {children}
    </div>
  )
}

Background.propTypes = {
  children: PropTypes.node.isRequired
}

export default Background
