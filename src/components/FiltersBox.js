import React, {Component, PropTypes} from 'react'
import {removeFilter} from '../actions'
import {connect} from 'react-redux'

class FiltersBox extends Component {
  render () {
    const {filters, removeFilter} = this.props
    return (
      <ul className='o-hlist'>
        {filters.map((f, i) => <FilterLabel key={f} filter={f} action={removeFilter}/>)}
      </ul>
    )
  }
}
FiltersBox.propTypes = {
  filters: PropTypes.array,
  removeFilter: PropTypes.func
}
const FilterLabel = ({filter, action}) => {
  return (
    <li
      key={filter}
      className='c-filter-label'
      onClick={() => action(filter)} >
      {filter}
    </li>
  )
}
function mapStateToProps (state) {
  return {
    filters: state.filters
  }
}
export default connect(mapStateToProps, {removeFilter})(FiltersBox)
