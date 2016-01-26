import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import dataGenerator from './data-generator'

require('./styles/main.sass')

const fakeForms = dataGenerator(100)
console.log('fakeForms', fakeForms)
ReactDOM.render(
  <App forms={fakeForms}/>,
  document.getElementById('root')
)
