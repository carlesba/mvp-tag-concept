import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import App from './components/app'

require('./styles/main.sass')

const store = createStore(reducers)

const root = document.createElement('div')
root.id = 'root'
root.classList.add('o-full-screen')
document.body.appendChild(root)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
