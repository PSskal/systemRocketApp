import { createStore } from 'redux'
import rootReducer from '/src/redux/reducers' // Import the root reducer

const store = createStore(rootReducer) // Create the Redux store

export { store }
