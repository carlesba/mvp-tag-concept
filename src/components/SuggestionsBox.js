import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {addFilter} from '../actions'

class SuggestionsBox extends Component {
  render () {
    const {addFilter, suggestions} = this.props
    const {tags, people} = suggestions
    const isEmpty = tags.length === 0 && people.length === 0
      ? ' is-empty'
      : ''
    return (
      <div className={'c-suggestion-box o-floating-panel' + isEmpty}>
        <SuggestionList
          key={'tags'}
          prefix='#'
          list={tags}
          classes={'c-filter-label--tag'}
          actionClick={addFilter}
        />
        <SuggestionList
          key={'people'}
          prefix='@'
          list={people}
          classes={'c-filter-label--people'}
          actionClick={addFilter}
        />
      </div>
    )
  }
}
SuggestionsBox.defaultProps = {
  suggestions: {}
}
SuggestionsBox.propTypes = {
  suggestions: PropTypes.object,
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

function mapStateToProps (state) {
  return {
    suggestions: state.suggestions
  }
}
export default connect(mapStateToProps, {addFilter})(SuggestionsBox)
