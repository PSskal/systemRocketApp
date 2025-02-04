import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps'
import PropTypes from 'prop-types'

const Maps = ({ position }) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={{ width: '100%', height: '70vh' }}>
        <Map zoom={15} center={position} mapId="646f72b6bfe62c9f">
          <AdvancedMarker position={position}>
            <Pin background={'grey'} borderColor={'green'} glyphColor={'purple'}></Pin>
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  )
}

Maps.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
}

export default Maps
