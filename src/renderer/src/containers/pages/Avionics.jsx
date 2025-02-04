import Clima from '/src/components/avionics/Clima'
import CoordinatesDisplay from '/src/components/avionics/CoordinateDisplay'
import Maps from '/src/components/avionics/maps'
import Background from '/src/components/Background'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'

const Avionics = () => {
  const position = { lat: -13.358797, lng: -71.672446 }
  return (
    <FullWidthLayout>
      <Background>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="row-span-5">
            <Clima />
          </div>
          <div className="col-span-3 row-span-4">
            <Maps position={position} />
          </div>
          <div className="row-span-5 col-start-5">
            <CoordinatesDisplay position={position} />
          </div>
        </div>
      </Background>
    </FullWidthLayout>
  )
}

export default Avionics
