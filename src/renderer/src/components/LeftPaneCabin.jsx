import 'chart.js/auto'
import Graph from './Graph'

const LeftPaneCabin = () => {
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
    <div>
      <Graph title="Graph of Altitude" data={data} options={options} />
      <Graph title="Graph of Velocidty" data={data} options={options} />
      <Graph title="Graph of Pressure" data={data} options={options} />
    </div>
  )
}

export default LeftPaneCabin
