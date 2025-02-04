const rightPaneData = [
  { title: 'Inertial Velocity', value: 7.68, unit: ' km/s', percentage: 80 },
  { title: 'Altitude', value: 390.0, unit: ' km', percentage: 30 },
  { title: 'Apogee', value: 404.4, unit: ' km', percentage: 40 },
  { title: 'Perigee', value: 389.4, unit: ' km', percentage: 70 }
]

const RightPane = () => {
  return (
    <div className="space-y-8">
      {rightPaneData.map((pane, index) => (
        <div key={index} className={`flex justify-between items-end ${index === 4 ? 'pt-14' : ''}`}>
          <div className="flex flex-col space-y-2">
            <span className="text-xs text-white"> {pane.title} </span>
            <div className="relative w-36 h-1.5">
              <div className="w-36 absolute left-0 top-0 rounded-full h-1.5 bg-gray-600/20"></div>
              <div
                className="absolute left-0 top-0 bg-blue rounded-full h-1.5"
                style={{ width: `${pane.percentage}%` }}
              />
            </div>
          </div>
          <div className="pl-4 text-lg font-medium text-white whitespace-nowrap">
            {pane.value} {pane.unit}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RightPane
