import React, {Component} from 'react'
import {connect} from 'react-redux'

class FiltersBox extends Component {
  render () {
    return (
      <ul className=''>
        {this.props.filters.map((filter, i) => (
          <li key={i}>{filter}</li>
        ))}
      </ul>
    )
  }
}
function mapStateToProps (state) {
  return {
    filters: state.filters
  }
}
export default connect(mapStateToProps)(FiltersBox)
