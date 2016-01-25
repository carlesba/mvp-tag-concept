import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import dataGenerator from './data-generator'

require('./styles/main.sass')

const fakeData = dataGenerator(100)
console.log('fakeData', fakeData)
ReactDOM.render(
  <App data={fakeData}/>,
  document.getElementById('root')
)
