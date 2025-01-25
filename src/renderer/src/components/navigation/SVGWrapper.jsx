import PropTypes from 'prop-types'

const SVGWrapper = ({ position }) => (
  <svg
    className={`fill-current text-blue-900 absolute top-0 bottom-0 ${position === 'left' ? 'left-0 -translate-x-3/4' : 'right-0 translate-x-3/4'}`}
    width="83"
    height="87"
    viewBox="0 0 83 86"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M${position === 'left' ? '64.3029 8.65669C68.8626 3.17225 75.6254 0 82.7578 0H83V86H0L64.3029 8.65669Z' : '18.6971 8.65669C14.1374 3.17225 7.37457 0 0.242245 0H0V86H83L18.6971 8.65669Z'}`}
    />
  </svg>
)

SVGWrapper.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired
}

export default SVGWrapper
