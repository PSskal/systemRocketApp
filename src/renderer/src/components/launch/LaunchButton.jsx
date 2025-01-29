import PropTypes from 'prop-types'

const LaunchButton = ({ onClick }) => (
  <button
    className="relative z-10 px-8 text-sm font-bold uppercase rounded bg-green-500 text-white py-6"
    onClick={onClick}
  >
    Launch
  </button>
)

LaunchButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default LaunchButton
