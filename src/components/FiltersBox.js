import React, {Component, PropTypes} from 'react'

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

export default FiltersBox
