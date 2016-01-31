import React from 'react'
import SearchBox from './SearchBox'
import FormsGallery from './FormsGallery'

const App = React.createClass({
  render () {
    return (
      <div className='o-vgrid'>
        <div className='o-vgrid__fixed'>
          <div className='o-centerer-wrapper'>
            <SearchBox />
          </div>
        </div>
        <div className='o-vgrid__fluid u-scrollable'>
          <div className='o-centerer-wrapper'>
            <FormsGallery />
          </div>
        </div>
      </div>
    )
  }
})

export default App
