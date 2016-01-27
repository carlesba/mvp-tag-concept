import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'

class SuggestionsBox extends Component {
  render () {
    const {tags, people} = this.props.suggestions
    return (
      <div className=''>
      <div className=''>tags: {tags}</div>
      <div className=''>people: {people}</div>
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
function mapStateToProps (state) {
  return {
    suggestions: state.suggestions
  }
}
export default connect(mapStateToProps)(SuggestionsBox)
