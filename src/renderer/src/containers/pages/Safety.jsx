import Background from '/src/components/Background'
import LeftPane from '/src/components/LeftPane'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'

const Safety = () => {
  return (
    <FullWidthLayout>
      <Background>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="row-span-5">
            <LeftPane />
          </div>
          <div className="col-span-4 row-span-5 text-white">
            <h2 className="text-xl font-bold mb-4">
              Seguridad en los Lanzamientos de Cohetes Experimentales
            </h2>
            <p className="mb-2">
              La seguridad es una prioridad absoluta en los lanzamientos de cohetes experimentales.
              Aquí hay algunas pautas importantes a seguir:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Realizar inspecciones exhaustivas del cohete y sus componentes antes del
                lanzamiento.
              </li>
              <li>
                Asegurarse de que todos los participantes estén capacitados y familiarizados con los
                procedimientos de seguridad.
              </li>
              <li>
                Establecer una zona de seguridad alrededor del área de lanzamiento para evitar el
                acceso no autorizado.
              </li>
              <li>
                Utilizar equipos de protección personal adecuados, como cascos y gafas de seguridad.
              </li>
              <li>
                Monitorear las condiciones meteorológicas y posponer el lanzamiento si las
                condiciones no son favorables.
              </li>
              <li>
                Tener un plan de emergencia en caso de fallos o accidentes durante el lanzamiento.
              </li>
            </ul>
            <p>
              Siguiendo estas pautas, se puede minimizar el riesgo de accidentes y garantizar un
              lanzamiento seguro y exitoso.
            </p>
          </div>
        </div>
      </Background>
    </FullWidthLayout>
  )
}

export default Safety
