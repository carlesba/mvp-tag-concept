import React, {Component, PropTypes} from 'react'
import classname from 'classname'

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
  const firstChar = filter.charAt(0)
  const classes = classname('c-filter-label', {
    'c-filter-label--people': firstChar === '@',
    'c-filter-label--tag': firstChar === '#'
  })
  const title = firstChar === '@' || firstChar === '#'
    ? filter.substring(1)
    : filter
  return (
    <li
      key={filter}
      className={classes}
      onClick={() => action(filter)} >
      {title}
    </li>
  )
}

export default FiltersBox
