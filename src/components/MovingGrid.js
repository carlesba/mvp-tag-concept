import React, {Component, Children} from 'react'

class MovingGrid extends Component {
  constructor (props) {
    super(props)
    this.updateWrapper = this.updateWrapper.bind(this)
    this.state = {width: 0}
  }
  componentDidMount () {
    this.updateWrapper()
    if (!window) return
    window.addEventListener('resize', this.updateWrapper)
  }
  componentWillUnmount () {
    if (!window) return
    window.removeEventListener('resize', this.updateWrapper)
  }
  updateWrapper () {
    if (!this._wrapper || !this._wrapper.offsetWidth) return
    const width = this._wrapper.offsetWidth
    this.setState({width})
  }
  parseChildren () {
    if (this.state.width === 0) {
      return Children.map(child => this.renderChild(child))
    }
    const {children, width, height, margin} = this.props
    const elementsPerRow = calculateItemsPerRow(width, margin, this.state.width)
    const newMargin = calculateAdaptativeMargin(this.state.width, width, elementsPerRow)
    return Children.map(children, (child, index) => {
      const {row, col} = calculatePosition(index, elementsPerRow)
      const {top, left} = calculateCoordinates(row, col, width, height, newMargin, margin)
      return this.renderChild(child, top, left)
    })
  }
  renderChild (child, top = 0, left = 0) {
    console.log(top, left)
    const styles = {top: `${top}px`, left: `${left}px`}
    return (
      <div
        className='o-moving-grid__item'
        key={child.key}
        style={styles}
      >{child}</div>
    )
  }
  render () {
    const {className} = this.props
    const classes = ['o-moving-grid', className]
    return (
      <div
        ref={node => this._wrapper = node}
        className={classes.join(' ')}
      >{this.parseChildren()}</div>
    )
  }
}
MovingGrid.defaultProps = {
  margin: 30
}

/*
  m == min margin
  W == Wraper width
  w == element's width
  n == number of elements per row
  M == new margin to apply to adapt properly

  |        W          |
   ___________________
  | m | w | m | w | m |

  W = 2 * w + 3 * m = 2( m + w ) + m = n ( m + w ) + m
  n = ( W - m ) / ( m + w )
  M = ( W - w * n ) / ( n + 1 )
  */
const calculateItemsPerRow = (width, margin, wrapper) => {
  return Math.floor((wrapper - margin) / (margin + width))
}
const calculateAdaptativeMargin = (wrapper, width, perRow) => {
  return (wrapper - width * perRow) / (perRow + 1)
}
const calculatePosition = (index, perRow) => {
  const row = Math.floor(index / perRow)
  return { row, col: index - row * perRow }
}
const calculateCoordinates = (row, col, width, height, margin, verticalMargin) => {
  const vMargin = verticalMargin === undefined
    ? margin : verticalMargin
  return {
    left: (width + margin) * col + margin,
    top: (height + vMargin) * row + vMargin
  }
}

export default MovingGrid
