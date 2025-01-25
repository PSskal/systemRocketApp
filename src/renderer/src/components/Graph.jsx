import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'

const Graph = ({ title, data, options }) => {
  return (
    <div className="w-52 h-full py-4">
      <h2 className="text-white text-xs">{title}</h2>
      <Line data={data} options={options} />
    </div>
  )
}

Graph.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired
}

export default Graph
