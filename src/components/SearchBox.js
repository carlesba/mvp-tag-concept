import React, {Component} from 'react'
import InputSearch from './InputSearch'
import SuggestionsBox from './SuggestionsBox'

class SearchBox extends Component {
  render () {
    return (
      <div className='c-search-box'>
        <InputSearch />
        <SuggestionsBox />
      </div>
    )
  }
}

export default SearchBox
