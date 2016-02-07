import React, {PropTypes, Component} from 'react'
import classname from 'classname'

class Popover extends Component {
  render () {
    const {isVisible, children} = this.props
    const popoverClasses = classname(
      'c-popover', this.pointerClass, {
        'is-hidden': !isVisible
      })
    return (
      <div className={this.besideClasses}>
        <div className='o-beside__wrapper'>
          <div className='o-beside__content'>
            <div className={popoverClasses}>
            {children}
            </div>
          </div>
        </div>
      </div>
      )
  }
  get besideClasses () {
    return `o-beside ${this.positionClass} ${this.alignmentClass}`
  }
  get positionClass () {
    return `o-beside--${this.props.position}`
  }
  get alignmentClass () {
    return `o-beside--${this.props.alignment}`
  }
  get reversedPosition () {
    const position = this.props.position.split('-').length > 1
      ? this.props.position.split('-')[0]
      : this.props.position
    switch (position) {
      case 'bottom':
        return 'top'
      case 'right':
        return 'left'
      case 'left':
        return 'right'
      default:
        return 'bottom'
    }
  }
  get pointerClass () {
    switch (this.props.alignment) {
      case 'start':
        if (this.reversedPosition === 'top' || this.reversedPosition === 'bottom') {
          return `c-popover--${this.reversedPosition}-left`
        } else {
          return `c-popover--${this.reversedPosition}-right`
        }
        break
      case 'center':
        if (this.reversedPosition === 'top' || this.reversedPosition === 'bottom') {
          return `c-popover--${this.reversedPosition}`
        } else {
          return `c-popover--${this.reversedPosition}`
        }
        break
      case 'end':
        if (this.reversedPosition === 'top' || this.reversedPosition === 'bottom') {
          return `c-popover--${this.reversedPosition}-right`
        } else {
          return `c-popover--${this.reversedPosition}-end`
        }
        break
      default:
        throw new Error('Bad aligment')
    }
  }
}
/*
  position values:
  [ bottom, bottom-right, bottom-left]
  alignment values:
  [ start, center, end ]
 */
Popover.propTypes = {
  show: PropTypes.bool,
  position: PropTypes.string,
  alignment: PropTypes.string,
  isVisible: PropTypes.bool,
  children: PropTypes.element
}
Popover.defaultProps = {
  isVisible: false,
  position: 'bottom',
  alignment: 'center'
}

export default Popover
