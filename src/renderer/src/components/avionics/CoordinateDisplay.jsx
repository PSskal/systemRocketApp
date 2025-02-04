import PropTypes from 'prop-types'

const CoordinatesDisplay = ({ position }) => {
  return (
    <div className="bg-opacity-20 backdrop-blur-lg rounded-lg pt-8 shadow-lg text-center text-white">
      <p className="text-white text-lg font-bold flex  items-center justify-center">POSICION GPS</p>
      <p className="text-lg flex items-center justify-center text-white">
        Latitude: {position.lat}
      </p>
      <p className="text-lg flex items-center justify-center text-white">
        Longitude: {position.lng}
      </p>
    </div>
  )
}

CoordinatesDisplay.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
}

export default CoordinatesDisplay
