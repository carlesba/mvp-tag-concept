import React, {Component} from 'react'
import FiltersBox from './FiltersBox'
import {connect} from 'react-redux'
import {updateSearcher, addFilter, removeFilter} from '../actions'

const BACKSPACE_KEY = 8
const TAB_KEY = 9

class InputSearch extends Component {
  render () {
    const {updateSearcher, searcher, addFilter, removeFilter, filters, colors, people, tags} = this.props
    return (
      <form className='o-hlist c-search-box' onSubmit={(evt) => {
        evt.preventDefault()
        addFilter(searcher)
      }}>
        <div className='o-hlist__fixed'>
          <FiltersBox filters={filters} colors={colors} people={people} tags={tags} removeFilter={removeFilter} />
        </div>
        <input
          className='o-hlist__fluid c-input-search__input' type='text'
          ref={(node) => this.input = node}
          onKeyDown={(evt) => this.keyDownHandler(evt)}
          onChange={(evt) => updateSearcher(evt.target.value)}
          value={searcher}
        />
      </form>
    )
  }
  get shouldRemoveTag () {
    // get caret position: http://www.codeproject.com/Questions/434562/How-To-Get-Position-Cursor-in-TextBox-Or-TextArea
    return typeof this.input.selectionStart === 'number'
      ? this.input.selectionStart === 0
      : this.props.searcher.length === 0
  }
  keyDownHandler (evt) {
    const key = evt.keyCode || evt.which
    const {
      filters,
      suggestedTags,
      suggestedPeople,
      addFilter,
      removeFilter
    } = this.props
    if (key === BACKSPACE_KEY && filters.length && this.shouldRemoveTag) {
      return removeFilter(filters[filters.length - 1])
    }
    const suggestionsLength = suggestedTags.length + suggestedPeople.length
    if (key === TAB_KEY && suggestionsLength === 1) {
      evt.preventDefault()
      if (suggestedTags.length) return addFilter(`#${suggestedTags[0]}`)
      if (suggestedPeople.length) return addFilter(`@${suggestedPeople[0]}`)
    }
  }
}
function mapStateToProps ({searcher, filters, suggestedTags, suggestedPeople, colors, people, tags}) {
  return { searcher, filters, suggestedTags, suggestedPeople, colors, people, tags }
}
export default connect(mapStateToProps, {
  updateSearcher,
  addFilter,
  removeFilter
})(InputSearch)
