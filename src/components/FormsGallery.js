import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Popover from './Popover'
import MovingGrid from './MovingGrid'
import {addFilter} from '../actions'

class FormsGallery extends Component {
  render () {
    return (
      <MovingGrid width={170} height={200}>
        {this.renderItems()}
      </MovingGrid>
    )
  }
  get filteredItems () {
    const {forms, filteredForms} = this.props
    if (filteredForms.length) {
      return filteredForms.map(formId => {
        return forms.find(({id}) => formId === id)
      })
    } else {
      return forms
    }
  }
  renderItems () {
    const {addFilter} = this.props
    return this.filteredItems.map((form) =>
      <FormsGalleryItem key={form.id} form={form} addFilter={addFilter}/>
    )
  }
}
FormsGallery.propTypes = {
  forms: PropTypes.array,
  filteredForms: PropTypes.array
}

class FormsGalleryItem extends Component {
  render () {
    const {addFilter, form} = this.props
    const {title, tags, people} = form
    return (
      <div className='o-gallery__item c-thumbnail'>
        <div className='o-aligner o-aligner--center o-aligner--vertical'>
          <div className='o-floated-tl'>
            <FormItemTags tags={tags} people={people} addFilter={addFilter}/>
          </div>
          <div className=''>
            {title}
          </div>
        </div>
      </div>
    )
  }
}
const FormItemTags = ({tags, people, addFilter}) => {
  return (
    <div className='o-wrapper'>
      <div className='o-overlapped-list'>
        {tags.map(tag =>
          <FormItemTag key={tag} name={'#' + tag} className='c-thumbnail__tag--label' addFilter={addFilter} />
        )}
      </div>
      <div className='o-overlapped-list'>
        {people.map(person =>
          <FormItemTag key={person} name={'@' + person} className='c-thumbnail__tag--people' addFilter={addFilter} />
        )}
      </div>
    </div>
  )
}
class FormItemTag extends Component {
  constructor (props) {
    super(props)
    this.state = {hover: false}
  }
  render () {
    const {name, className, addFilter} = this.props
    const classes = ['o-overlapped-list__item', 'c-thumbnail__tag', className]
    return (
      <div
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onClick={() => addFilter(name)}
        className={classes.join(' ')}
      >
        <Popover isVisible={this.state.hover}>
          <div>{name}</div>
        </Popover>
      </div>
    )
  }
}
function mapStateToProps ({forms, filteredForms}) {
  return {forms, filteredForms}
}

export default connect(mapStateToProps, {addFilter})(FormsGallery)
