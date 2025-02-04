import { useState } from 'react'
import Background from '/src/components/Background'
import ConnectButton from '/src/components/comms/ConnectButton'
import ProgressBar from '/src/components/comms/ProgressBar'
import Graph from '/src/components/Graph'
import FullWidthLayout from '/src/hocs/layouts/FullWidthLayout'

const Comms = () => {
  const [port, setPort] = useState('COM3')
  const [baudRate, setBaudRate] = useState(9600)
  const [isConnected, setIsConnected] = useState(false)

  const baudRates = [9600, 14400, 19200, 38400, 57600, 115200]

  const dataSignal = { title: 'Signal Cuality', value: 7.68, unit: ' %', percentage: 80 }

  const handleConnect = () => {
    if (port && baudRate) {
      setIsConnected(true)
      alert('Conectado')
    } else {
      alert('Por favor selecciona un puerto y un baud rate')
    }
  }
  const data = {
    labels: Array.from({ length: 20 }, (_, i) => i), // Tiempo en segundos (eje X)
    datasets: [
      {
        label: 'Altitude',
        data: [
          // Alturas en metros
          0, 50, 150, 300, 500, 750, 1000, 1000, 1000, 950, 900, 850, 800, 750, 700, 600, 400, 200,
          100, 0
        ],
        fill: true, // Activa el sombreado
        backgroundColor: 'rgba(14, 165, 233, 0.3)', // Color del sombreado
        borderColor: '#0ea5e9', // Color del borde
        borderWidth: 2,
        tension: 0.4, // Interpolación cúbica
        pointRadius: 0 // Sin puntos visibles
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Desactiva la leyenda
      tooltip: {
        enabled: true, // Activa los tooltips
        callbacks: {
          label: function (context) {
            return `Altura: ${context.raw} m` // Muestra la altura en metros
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Tiempo (s)',
          color: '#fff',
          font: { size: 8 }
        },
        ticks: {
          color: '#fff',
          font: { size: 8 },
          maxRotation: 0, // Evita la rotación de los números
          minRotation: 0 // Evita la rotación de los números
        },
        grid: { display: false }
      },
      y: {
        position: 'right',
        title: {
          display: true,
          text: 'Altura (m)',
          color: '#fff',
          font: { size: 8 }
        },
        ticks: {
          color: '#fff',
          font: { size: 8 }
        },
        grid: { display: false }
      }
    }
  }

  return (
    <FullWidthLayout>
      <Background>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-3 row-span-3 col-start-1 row-start-2">
            <div className="flex items-center justify-center  h-full ">
              <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Configuración del Puerto Serial
                  </h3>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Puerto:</label>
                    <input
                      type="text"
                      value={port}
                      onChange={(e) => setPort(e.target.value)}
                      placeholder="Ingrese el puerto (ej. COM3)"
                      className="mt-1 w-full border rounded p-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Baud Rate:</label>
                    <select
                      value={baudRate}
                      onChange={(e) => setBaudRate(e.target.value)}
                      className="mt-1 w-full border rounded p-2"
                    >
                      {baudRates.map((rate) => (
                        <option key={rate} value={rate}>
                          {rate}
                        </option>
                      ))}
                    </select>
                  </div>

                  <ConnectButton handleConnect={handleConnect} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-5 col-start-4">
            <div className="text-white font-serif text-3xl">
              {isConnected ? 'Conectado' : 'Desconectado'}
            </div>
            <ProgressBar pane={dataSignal} />
            <div className=" pt-10">
              <Graph title="Graph of Signal" data={data} options={options} />
            </div>
          </div>
        </div>
      </Background>
    </FullWidthLayout>
  )
}

export default Comms
