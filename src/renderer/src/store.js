import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from '/src/redux/reducers' // Import the root reducer

// Enable Redux DevTools if available, otherwise use Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create the Redux store with middleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export { store }
