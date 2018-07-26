import React from 'react'
import ReactDOM from 'react-dom'
import multi from 'redux-multi'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './App'

const createStoreWithMiddleware = applyMiddleware(multi)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
