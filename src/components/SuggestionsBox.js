import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'

class SuggestionsBox extends Component {
  render () {
    const {tags, people} = this.props.suggestions
    const isEmpty = tags.length === 0 && people.length === 0
      ? ' is-empty'
      : ''
    return (
      <div className={'c-suggestion-box o-floating-panel' + isEmpty}>
        <SuggestionList list={tags} classes={'c-filter-label--tag'}/>
        <SuggestionList list={people} classes={'c-filter-label--people'} />
      </div>
    )
  }
}
SuggestionsBox.defaultProps = {
  suggestions: {}
}
SuggestionsBox.propTypes = {
  suggestions: PropTypes.object
}

const SuggestionList = ({list, classes}) => {
  if (list && list.length > 0) {
    return (
      <div className='o-hlist c-suggestion-box__group'>
        {list.map(t => <Suggestion classes={classes} term={t}/>)}
      </div>
    )
  }
  return <span />
}

const Suggestion = ({term, classes}) => {
  const c = ['c-filter-label'].concat([classes])
  return (
    <div className={c.join(' ')}>{term}</div>
  )
}

function mapStateToProps (state) {
  return {
    suggestions: state.suggestions
  }
}
export default connect(mapStateToProps)(SuggestionsBox)
