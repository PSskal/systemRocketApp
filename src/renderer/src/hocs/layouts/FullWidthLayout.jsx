import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from '/src/components/navigation/NavBar'

const FullWidhtLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
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
