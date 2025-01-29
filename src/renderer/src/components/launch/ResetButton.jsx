import PropTypes from 'prop-types'

const ResetButton = ({ onClick }) => (
  <button
    className="relative z-10 px-8 text-sm font-bold uppercase rounded bg-yellow-500 text-white py-6"
    onClick={onClick}
  >
    Reset
  </button>
)

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ResetButton
