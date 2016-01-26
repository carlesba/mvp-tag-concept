import React from 'react'
import SearchBox from './SearchBox'
import FormsGallery from './FormsGallery'

const App = React.createClass({
  render () {
    return (
      <div className='o-centerer-wrapper'>
        <SearchBox />
        <FormsGallery />
      </div>
    )
  }
})

export default App
