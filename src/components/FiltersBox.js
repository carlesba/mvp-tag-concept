import React, {Component, PropTypes} from 'react'
import classname from 'classname'
// import {getColorFactory} from '../utils/colors'

class FiltersBox extends Component {
  render () {
    const {filters, tags, people, colors, removeFilter} = this.props
    // const getColor = getColorFactory(colors, people, tags)
    return (
      <ul className='o-hlist c-filter-group'>
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
  // const styles = color
  //   ? {borderColor: color, color}
  //   : {}
  return (
    <li
      // style={styles}
      key={filter}
      className={classes}
      onClick={() => action(filter)} >
      {title}
    </li>
  )
}

export default FiltersBox
