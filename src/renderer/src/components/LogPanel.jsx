import { useEffect, useRef, useState } from 'react'

const LogPanel = () => {
  const [logs, setLogs] = useState([])
  const logEndRef = useRef(null)

  useEffect(() => {
    // Simulate receiving logs
    const interval = setInterval(() => {
      setLogs((prevLogs) => [...prevLogs, `Log entry at ${new Date().toLocaleTimeString()}`])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  return (
    <div className="bg-blue-900 text-white p-6 rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Launch Logs</h2>
      <div className="h-64 overflow-y-scroll scrollbar-hide">
        {logs.map((log, index) => (
          <div key={index} className="mb-1">
            {log}
          </div>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  )
}

export default LogPanel
