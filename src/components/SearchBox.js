import React, {Component} from 'react'
import InputSearch from './InputSearch'
import SuggestionsBox from './SuggestionsBox'
import FiltersBox from './FiltersBox'

class SearchBox extends Component {
  render () {
    return (
      <div className='c-search-box'>
        <InputSearch />
        <SuggestionsBox />
        <FiltersBox />
      </div>
    )
  }
}

export default SearchBox
