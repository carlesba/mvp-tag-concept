import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import fakeData from './data-generator'

require('./styles/main.sass')

console.log('fakeData', fakeData)
ReactDOM.render(
  <App data={fakeData}/>,
  document.getElementById('root')
)
