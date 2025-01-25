import PropTypes from 'prop-types'

const TimeUnit = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-5xl text-white">{value.toString().padStart(2, '0')}</span>
      <span className="text-white text-xs">{label}</span>
    </div>
  )
}

TimeUnit.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default TimeUnit
