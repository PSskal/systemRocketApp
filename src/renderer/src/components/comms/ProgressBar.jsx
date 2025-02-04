import PropTypes from 'prop-types'

const ProgressBar = ({ pane }) => {
  return (
    <div className={`flex justify-between items-end pt-7 w-8/12`}>
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
  )
}

ProgressBar.propTypes = {
  pane: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired
}

export default ProgressBar
