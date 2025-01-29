import PropTypes from 'prop-types'
import { useRef } from 'react'
import { connect } from 'react-redux'
import Countdown from '/src/components/Countdown'
import NavBar from '/src/components/navigation/NavBar'

const FullWidhtLayout = ({ children }) => {
  const countdownRef = useRef(null)
  return (
    <>
      <NavBar />
      {children}
      <Countdown ref={countdownRef} />
    </>
  )
}

FullWidhtLayout.propTypes = {
  children: PropTypes.node.isRequired
}

const mapStateToProps = (state) => ({
  theme: state.theme
})

export default connect(mapStateToProps, {})(FullWidhtLayout)
