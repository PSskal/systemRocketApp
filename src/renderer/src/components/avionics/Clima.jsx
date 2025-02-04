import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaWind } from 'react-icons/fa'
import { LuCloudRainWind, LuDroplet } from 'react-icons/lu'

const Clima = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('lima')
  const [error, setError] = useState(null)
  const API_KEY = '11be342aeab04377a1c195444253001' // Reemplaza con tu clave de API

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        )
        setWeather(response.data)
        setError(null)
      } catch (err) {
        setError('Error al obtener los datos del clima')
        setWeather(null)
      }
    }

    fetchWeather()
  }, [city])

  return (
    <div className="flex items-center justify-center pt-10">
      <div className=" bg-opacity-20 backdrop-blur-lg rounded-lg p-8 shadow-lg w-80 text-center text-white">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ingresa una ciudad"
          className="w-full p-2 rounded-md text-black mb-4"
        />
        {error && <p className="text-red-500">{error}</p>}
        {weather ? (
          <div className="pt-8">
            <h2 className="text-lg font-bold">
              {weather.location.name}, {weather.location.country}
            </h2>
            <p className="text-6xl font-light">{weather.current.temp_c}°</p>
            <LuCloudRainWind />
            <p className="text-sm flex items-center justify-center pt-4">
              <FaWind className="mr-2" />
              Viento: {weather.current.wind_kph} km/h
            </p>
            <p className="text-sm flex items-center justify-center">
              <LuDroplet className="mr-2" />
              Humedad: {weather.current.humidity} %
            </p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  )
}

export default Clima
