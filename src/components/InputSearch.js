import React, {Component} from 'react'
import FiltersBox from './FiltersBox'
import {connect} from 'react-redux'
import {updateSearcher, addFilter, removeFilter} from '../actions'

class InputSearch extends Component {
  render () {
    const {updateSearcher, searcher, addFilter, removeFilter, filters} = this.props
    return (
      <form className='o-hlist' onSubmit={(evt) => {
        evt.preventDefault()
        addFilter(searcher)
      }}>
        <FiltersBox filters={filters} removeFilter={removeFilter} />
        <input
          className='o-hlist__fluid c-input-search__input' type='text'
          onKeyUp={(evt) => {
            const key = evt.keyCode || evt.which
            if (key === 8 && filters.length) { removeFilter(filters[filters.length - 1]) }
          }}
          onChange={(evt) => updateSearcher(evt.target.value)}
          value={searcher}
        />
      </form>
    )
  }
}
function mapStateToProps ({searcher, filters}) {
  return { searcher, filters }
}
export default connect(mapStateToProps, {
  updateSearcher,
  addFilter,
  removeFilter
})(InputSearch)
