import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Avionics from './containers/pages/Avionics'
import Error404 from './containers/pages/error404'
import Launch from './containers/pages/Launch'
import Overview from './containers/pages/overview'
import { store } from './store' // Import the store

const App = () => {
  return (
    <Provider store={store}>
      {' '}
      {/* Pass the store to the Provider */}
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Overview />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/avionics" element={<Avionics />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
