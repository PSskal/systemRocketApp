import PropTypes from 'prop-types'

const ConnectButton = ({ handleConnect }) => {
  return (
    <button
      onClick={handleConnect}
      className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
    >
      Conectar
    </button>
  )
}

ConnectButton.propTypes = {
  handleConnect: PropTypes.func.isRequired
}

export default ConnectButton
