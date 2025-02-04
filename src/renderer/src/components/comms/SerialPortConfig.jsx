import PropTypes from 'prop-types'

const SerialPortConfig = ({ port, setPort }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuración del Puerto Serial</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Puerto:</label>
        <input
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  )
}

SerialPortConfig.propTypes = {
  port: PropTypes.string.isRequired,
  setPort: PropTypes.func.isRequired
}

export default SerialPortConfig
