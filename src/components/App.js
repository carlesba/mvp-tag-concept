import React from 'react'
import SearchBox from './SearchBox'
import FormsGallery from './FormsGallery'

const App = React.createClass({
  render () {
    console.table(this.props.forms)
    return (
      <div className='o-centerer-wrapper'>
        <SearchBox />
        <FormsGallery forms={this.props.forms} />
      </div>
    )
  }
})

export default App
