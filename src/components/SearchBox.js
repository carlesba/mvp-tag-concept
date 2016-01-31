import React, {Component} from 'react'
import InputSearch from './InputSearch'
import SuggestionsBox from './SuggestionsBox'

class SearchBox extends Component {
  render () {
    return (
      <div>
        <InputSearch />
        <SuggestionsBox />
      </div>
    )
  }
}

export default SearchBox
