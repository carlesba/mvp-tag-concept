import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {addFilter} from '../actions'
import classname from 'classname'

class SuggestionsBox extends Component {
  render () {
    const {addFilter, suggestedTags, suggestedPeople} = this.props
    const isEmpty = suggestedTags.length === 0 && suggestedPeople.length === 0
    const classes = classname('c-suggestion-box', 'o-floated', {
      'is-empty': isEmpty
    })
    return (
      <div className={classes}>
        {this.renderSuggestionList('tags', '#', suggestedTags, 'c-filter-label--tag', addFilter)}
        {this.renderSuggestionList('people', '@', suggestedPeople, 'c-filter-label--people', addFilter)}
      </div>
    )
  }
  renderSuggestionList (key, prefix, list, classes, actionClick) {
    if (list.length === 0) return ''
    const title = key === 'people'
      ? 'Suggested People'
      : 'Suggested Tags'
    return (
      <div>
        <h1 className='c-suggestion-box__title'>{title}</h1>
        <SuggestionList
          key={key}
          prefix={prefix}
          list={list}
          classes={classes}
          actionClick={actionClick}
        />
      </div>
    )
  }
}

SuggestionsBox.propTypes = {
  suggestedTags: PropTypes.array,
  suggestedPeople: PropTypes.array,
  addFilter: PropTypes.func
}

const SuggestionList = ({list, classes, actionClick, prefix}) => {
  if (list && list.length > 0) {
    return (
      <div className='o-hlist c-suggestion-box__group'>
        {list.map(t =>
          <Suggestion key={t} classes={classes} term={t} prefix={prefix} actionClick={actionClick}/>
        )}
      </div>
    )
  }
  return <span />
}

const Suggestion = ({term, classes, prefix = '', actionClick}) => {
  const c = ['c-filter-label'].concat([classes])
  return (
    <div
    className={c.join(' ')}
    onClick={() => actionClick(prefix + term)}
    >{term}</div>
  )
}

function mapStateToProps ({suggestedTags, suggestedPeople}) {
  return { suggestedTags, suggestedPeople }
}
export default connect(mapStateToProps, {addFilter})(SuggestionsBox)
