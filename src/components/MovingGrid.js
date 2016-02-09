import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class MovingGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {width: 0}
  }
  componentDidMount () {
    const width = this._wrapper.offsetWidth
    this.setState({width})
  }
  parseChildren () {
    const {children, width, height, margin} = this.props
    const elementsPerRow = Math.floor(this.state.width / width)
    return React.Children.map(children, (child, i) => {
      const position = elementsPerRow
        ? i / elementsPerRow
        : 0
      const column = Math.floor(position)
      const offsetColumn = column * margin
      const row = (position - column) * elementsPerRow
      const offsetRow = row * margin
      const styles = {
        left: `${row * width + offsetRow}px`,
        top: `${column * height + offsetColumn}px`
      }
      return (<div className='o-moving-grid__item' key={child.key} style={styles}>{child}</div>)
    })
  }
  render () {
    const {className} = this.props
    const classes = ['o-moving-grid', className]
    const children = this.parseChildren()
    return (
      <div
        ref={node => this._wrapper = node}
        className={classes.join(' ')}
        >
        {/*<ReactCSSTransitionGroup
          component='div'
          transitionName='a-fade'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >*/}
        {children}
        {/*</ReactCSSTransitionGroup>*/}
      </div>
    )
  }
}
MovingGrid.defaultProps = {
  margin: 10
}

export default MovingGrid
