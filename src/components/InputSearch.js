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
        <div className='o-hlist__fixed'>
          <FiltersBox filters={filters} removeFilter={removeFilter} />
        </div>
        <input
          className='o-hlist__fluid c-input-search__input' type='text'
          ref={(node) => this.input = node}
          onKeyDown={(evt) => {
            // get caret position: http://www.codeproject.com/Questions/434562/How-To-Get-Position-Cursor-in-TextBox-Or-TextArea
            const shouldRemoveTag = typeof this.input.selectionStart === 'number'
              ? this.input.selectionStart === 0
              : searcher.length === 0
            const key = evt.keyCode || evt.which
            if (key === 8 && filters.length && shouldRemoveTag) {
              removeFilter(filters[filters.length - 1])
            }
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
