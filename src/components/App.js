import React from 'react'
import SearchBox from './SearchBox'
import FormsGallery from './FormsGallery'

const App = React.createClass({
  render () {
    return (
      <div className='o-vgrid'>
        <div className='o-floated-tl'>
          <div className='o-wrapper o-wrapper--big'><img className='c-logo' src='/assets/logo.svg'/></div>
        </div>
        <div className='o-floated-tr'>
          <div className='o-wrapper o-wrapper--big'><img src='/assets/user.svg'/></div>
        </div>
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
