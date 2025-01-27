const Connections = () => {
  const connections = [
    { name: 'Manual Rigs', status: 'connected' },
    { name: 'Changelog', status: 'connected' },
    { name: 'Airlock', status: 'connected' },
    { name: 'Wing', status: 'connected' }
  ]

  return (
    <div className="w-40 mt-2 ml-2">
      <div className="py-2 text-gray-600 uppercase border-b border-gray-600 text-xs">
        Connections
      </div>
      <div className="pt-1 space-y-3">
        {connections.map((connection, index) => (
          <div key={index} className="flex justify-between text-xxxs">
            <span className="text-gray-600">{connection.name}</span>
            <span className="font-bold text-white capitalize">{connection.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Connections
