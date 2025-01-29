import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

const LogPanel = ({ logMessages }) => {
  const logEndRef = useRef(null)

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logMessages])

  return (
    <div className="bg-blue-900 text-white p-6 rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Launch Logs</h2>
      <div className="h-64 overflow-y-scroll scrollbar-hide">
        {logMessages.map((message, index) => (
          <div key={index} className="mb-1">
            {message}
          </div>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  )
}

LogPanel.propTypes = {
  logMessages: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default LogPanel
