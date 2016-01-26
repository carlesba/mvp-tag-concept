import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateSearcher, addFilter} from '../actions'

class InputSearch extends Component {
  render () {
    const {updateSearcher, searcher, addFilter} = this.props
    return (
      <form className='' onSubmit={(evt) => {
        evt.preventDefault()
        addFilter()
      }}>
        <input
          className='c-input-search__input' type='text'
          onChange={(evt) => updateSearcher(evt.target.value)}
          value={searcher}
        />
      </form>
    )
  }
}
function mapStateToProps (state) {
  return {
    searcher: state.searcher
  }
}
export default connect(mapStateToProps, {
  updateSearcher,
  addFilter
})(InputSearch)
