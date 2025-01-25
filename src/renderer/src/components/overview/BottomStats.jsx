import Stat from './Stat'

const BottomStats = () => {
  const bottomStats = [
    {
      title: 'Loop A',
      value: '15.00',
      unit: '°C',
      gauge: 135
    },
    {
      title: 'Loop B',
      value: '20.00',
      unit: '°C',
      gauge: 180
    },
    {
      title: 'NET PWR 1',
      value: '0.00',
      unit: 'W',
      gauge: 0
    },
    {
      title: 'NET PWR 2',
      value: '0.00',
      unit: 'W',
      gauge: 0
    }
  ]

  return (
    <div className="flex justify-between pt-3">
      <div className="flex space-x-3">
        {bottomStats.slice(0, 2).map((stats, index) => (
          <Stat key={index} stats={stats} size="sm" />
        ))}
      </div>
      <div className="flex space-x-3">
        {bottomStats.slice(2).map((stats, index) => (
          <Stat key={index} stats={stats} size="sm" />
        ))}
      </div>
    </div>
  )
}

export default BottomStats
