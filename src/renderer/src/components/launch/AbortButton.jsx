import PropTypes from 'prop-types'

const AbortButton = ({ onClick }) => (
  <button
    className="relative z-10 px-8 text-sm font-bold uppercase rounded bg-red-500 text-white py-6"
    onClick={onClick}
  >
    Abort
  </button>
)

AbortButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AbortButton
